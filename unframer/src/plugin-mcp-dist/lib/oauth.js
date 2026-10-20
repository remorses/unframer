/**
 * OAuth for secret-free /mcp. The worker is the OAuth server and shows consent;
 * the website is the upstream Google sign-in (provider docs/upstream-sign-in.md).
 *
 *   GET  /oauth/authorize ─► consent page (beginConsent, cookie-bound handle)
 *   POST /oauth/authorize ─► approveConsent + beginUpstream ─► website /mcp/oauth?state
 *   GET  /oauth/callback?state&code ─► finishUpstream (state cookie)
 *        ─► website /api/plugins/mcp/oauthSession (bridge secret) ─► completeAuthorization
 */
import OAuthProvider, { AuthorizationError, authorizationErrorRedirect, CimdFetchError, OAuthError, } from '@cloudflare/workers-oauth-provider';
import { captureException } from '@strada.sh/sdk';
import { createSpiceflowFetch, SpiceflowFetchError } from 'spiceflow/client';
import dedent from 'string-dedent';
import { z } from 'zod';
export const oauthPropsSchema = z.object({
    framerUserId: z.string().min(1),
    sessionToken: z.string().min(1),
});
function websiteApi(env) {
    return createSpiceflowFetch(env.WEBSITE_URL);
}
function escape(value) {
    return value.replace(/[&<>"']/g, (char) => { return `&#${char.charCodeAt(0)};`; });
}
function page({ content, status = 200, headers = new Headers() }) {
    headers.set('Content-Type', 'text/html; charset=utf-8');
    headers.set('Cache-Control', 'no-store');
    headers.set('Referrer-Policy', 'no-referrer');
    headers.set('X-Frame-Options', 'DENY');
    headers.set('Content-Security-Policy', "default-src 'none'; frame-ancestors 'none'; base-uri 'none'");
    return new Response(dedent `
        <!doctype html>
        <html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Connect Framer MCP</title></head>
        <body><main><h1>Connect Framer MCP</h1>${content}</main></body></html>
    `, { status, headers });
}
// Client name, domain and redirect host come from the client: always escape them.
function consentContent({ details, handle }) {
    const publisher = details.clientDomain
        ? `Published by <strong>${escape(details.clientDomain)}</strong>.`
        : 'This app registered itself. Its name is not verified.';
    const loopback = details.redirectIsLoopback
        ? '<p><strong>This sends access to an app on your computer. Continue only if you started this connection there.</strong></p>'
        : '';
    return dedent `
        <h2>Allow ${escape(details.clientName)} to control Framer?</h2>
        <p>${publisher} Access will be sent to <strong>${escape(details.redirectHost)}</strong>.</p>
        ${loopback}
        <p>This grants full read and edit access to the Framer project where your MCP plugin is open. If you open the plugin in another project, the connection follows it.</p>
        <p>Next you sign in with Google. Use the same account as the Framer MCP plugin.</p>
        <form method="post">
            <input type="hidden" name="handle" value="${escape(handle)}">
            <button name="decision" value="approve">Allow</button>
            <button name="decision" value="deny">Deny</button>
        </form>
    `;
}
async function handleOAuthRoute({ request, env }) {
    const url = new URL(request.url);
    const oauth = env.OAUTH_PROVIDER;
    if (url.pathname === '/oauth/authorize' && request.method === 'GET') {
        const authRequest = await oauth.parseAuthRequest(request);
        // The provider makes PKCE optional (and only allows S256); MCP requires it.
        if (!authRequest.codeChallenge) {
            return Response.redirect(authorizationErrorRedirect(authRequest, 'invalid_request', 'PKCE is required'), 302);
        }
        if (authRequest.scope.some((scope) => { return scope !== 'mcp'; })) {
            return Response.redirect(authorizationErrorRedirect(authRequest, 'invalid_scope', 'Only mcp scope is supported'), 302);
        }
        const grantRequest = { ...authRequest, scope: ['mcp'] };
        const details = await oauth.describeConsent(grantRequest);
        const consent = await oauth.beginConsent(grantRequest);
        return page({ headers: consent.headers, content: consentContent({ details, handle: consent.handle }) });
    }
    if (url.pathname === '/oauth/authorize' && request.method === 'POST') {
        const form = await request.formData();
        const handle = String(form.get('handle') || '');
        if (form.get('decision') !== 'approve') {
            const denied = await oauth.denyConsent(request, handle);
            return new Response(null, { status: 302, headers: denied.headers });
        }
        const approved = await oauth.approveConsent(request, handle, { scope: ['mcp'] });
        const { state, headers } = await oauth.beginUpstream(approved.request, { headers: approved.headers });
        const login = new URL('/mcp/oauth', env.WEBSITE_URL);
        login.searchParams.set('state', state);
        headers.set('Location', login.toString());
        return new Response(null, { status: 302, headers });
    }
    if (url.pathname === '/oauth/callback' && request.method === 'GET') {
        const { request: authRequest, headers } = await oauth.finishUpstream(request);
        const session = await websiteApi(env)('/api/plugins/mcp/oauthSession', {
            method: 'POST',
            headers: { 'X-Mcp-OAuth-Bridge': env.MCP_OAUTH_BRIDGE_SECRET },
            body: { state: url.searchParams.get('state') || '', code: url.searchParams.get('code') || '' },
        });
        if (session instanceof Error)
            throw session;
        const props = { framerUserId: session.framerUserId, sessionToken: session.sessionToken };
        const { redirectTo } = await oauth.completeAuthorization({
            request: authRequest,
            userId: props.framerUserId,
            metadata: {},
            scope: ['mcp'],
            props,
        });
        headers.set('Location', redirectTo);
        return new Response(null, { status: 302, headers });
    }
    return page({ content: '<p>Not found.</p>', status: 404 });
}
export function createMcpOAuthProvider({ env, apiHandler, }) {
    const origin = new URL(env.MCP_URL).origin;
    return new OAuthProvider({
        apiRoute: '/mcp',
        apiHandler,
        authorizeEndpoint: new URL('/oauth/authorize', origin).toString(),
        tokenEndpoint: new URL('/oauth/token', origin).toString(),
        clientRegistrationEndpoint: new URL('/oauth/register', origin).toString(),
        clientIdMetadataDocumentEnabled: true,
        scopesSupported: ['mcp'],
        requiredScopes: ['mcp'],
        resourceMetadata: { resource: env.MCP_URL, authorization_servers: [origin] },
        // Uncached session check, so a revoked Framer session stops code exchanges and refreshes.
        // invalid_grant revokes the grant; other errors surface as 500 and keep it.
        async tokenExchangeCallback({ props, env: exchangeEnv }) {
            const { sessionToken } = oauthPropsSchema.parse(props);
            const result = await websiteApi(exchangeEnv)('/api/plugins/mcp/validateSession', {
                method: 'POST',
                body: { sessionToken },
            });
            if (result instanceof SpiceflowFetchError && result.status === 401) {
                throw new OAuthError('invalid_grant', { description: 'Framer session was revoked or expired' });
            }
            if (result instanceof Error)
                throw result;
        },
        defaultHandler: {
            async fetch(request, injectedEnv) {
                try {
                    return await handleOAuthRoute({ request, env: injectedEnv });
                }
                catch (error) {
                    if (error instanceof AuthorizationError && error.redirectTo)
                        return Response.redirect(error.redirectTo, 302);
                    if (error instanceof AuthorizationError)
                        return page({ content: `<p>${escape(error.description)}</p>`, status: 400 });
                    if (error instanceof CimdFetchError)
                        return page({ content: '<p>The requesting app could not be verified. Try again.</p>', status: 400 });
                    captureException(error);
                    return page({ content: '<p>Connection failed. Start again from your MCP client.</p>', status: 500 });
                }
            },
        },
    });
}
//# sourceMappingURL=oauth.js.map