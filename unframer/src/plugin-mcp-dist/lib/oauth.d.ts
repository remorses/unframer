/**
 * OAuth for secret-free /mcp. The worker is the OAuth server and shows consent;
 * the website is the upstream Google sign-in (provider docs/upstream-sign-in.md).
 *
 *   GET  /oauth/authorize ─► consent page (beginConsent, cookie-bound handle)
 *   POST /oauth/authorize ─► approveConsent + beginUpstream ─► website /mcp/oauth?state
 *   GET  /oauth/callback?state&code ─► finishUpstream (state cookie)
 *        ─► website /api/plugins/mcp/oauthSession (bridge secret) ─► completeAuthorization
 */
import OAuthProvider from '@cloudflare/workers-oauth-provider';
import { z } from 'zod';
export declare const oauthPropsSchema: z.ZodObject<{
    framerUserId: z.ZodString;
    sessionToken: z.ZodString;
}, z.core.$strip>;
export type McpOAuthProps = z.infer<typeof oauthPropsSchema>;
export declare function createMcpOAuthProvider({ env, apiHandler, }: {
    env: Env;
    apiHandler: NonNullable<ConstructorParameters<typeof OAuthProvider<Env>>[0]['apiHandler']>;
}): OAuthProvider<Env>;
//# sourceMappingURL=oauth.d.ts.map