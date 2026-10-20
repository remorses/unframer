/**
 * Integration tests for the MCP v2 worker deployed to preview.
 *
 * Run after deploying to preview: pnpm test -t "tunnel integration"
 *
 * The e2e test runs for both transport modes (streamable-http on /mcp and legacy SSE on /sse)
 * in a single test run via a root-level for loop.
 *
 * - Tunnel tests: upstream replacement (4009), HTTP routing
 * - E2e tests: full MCP SDK client pipeline for each transport mode
 */
import { describe, test, expect } from 'vitest';
import WebSocket from 'ws';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { SSEClientTransport } from '@modelcontextprotocol/sdk/client/sse.js';
import { z } from 'zod';
const WS_URL = 'wss://mcp.preview.unframer.co/_tunnel';
const HTTP_URL = 'https://mcp.preview.unframer.co';
// Real session credentials for preview (validated by getValidatedSession → website API → KV cache)
const MCP_ID = '598f176d590e612e9b6bcaebb54abb0a8763c6f54ba5b9c136690ff9ad2400cc';
const MCP_SECRET = 'FpGeQQcnvd9CpFvZwEdONuAjEX7c6AwJ';
const getTunnelId = () => `test-${Date.now()}-${Math.random().toString(36).slice(2)}`;
function connectWs(url) {
    return new Promise((resolve, reject) => {
        const ws = new WebSocket(url);
        ws.on('open', () => {
            resolve(ws);
        });
        ws.on('error', reject);
    });
}
describe('tunnel integration', () => {
    test('connecting upstream twice replaces the first with 4009', async () => {
        const tunnelId = getTunnelId();
        const upstream1 = await connectWs(`${WS_URL}/upstream?id=${tunnelId}`);
        const upstream1ClosePromise = new Promise((resolve) => {
            upstream1.on('close', (code, reason) => {
                resolve({ code, reason: reason.toString() });
            });
        });
        const upstream2 = await connectWs(`${WS_URL}/upstream?id=${tunnelId}`);
        const closeEvent = await upstream1ClosePromise;
        expect(closeEvent.code).toBe(4009);
        expect(closeEvent.reason).toBe('Upstream already connected');
        expect(upstream2.readyState).toBe(WebSocket.OPEN);
        upstream2.close();
    }, 15000);
    test('HTTP endpoints return expected responses', async () => {
        // 404 for unknown paths
        const res404 = await fetch(`${HTTP_URL}/unknown`);
        expect(res404.status).toBe(404);
        // 401 for /mcp without auth
        const resMcp = await fetch(`${HTTP_URL}/mcp`, { method: 'POST' });
        expect(resMcp.status).toBe(401);
        // 401 for /sse without auth
        const resSse = await fetch(`${HTTP_URL}/sse`);
        expect(resSse.status).toBe(401);
        // 428 for htmlForUserWithoutFramerUserId
        const resHtml = await fetch(`${HTTP_URL}/htmlForUserWithoutFramerUserId`);
        expect(resHtml.status).toBe(428);
        const htmlContent = await resHtml.text();
        expect(htmlContent).toContain('Framer MCP Plugin Not Open');
    }, 15000);
});
describe('OAuth integration', () => {
    test('canonical discovery, bearer challenge and legacy fail-closed dispatch', async () => {
        const resource = `${HTTP_URL}/mcp`;
        const metadata = await fetch(`${HTTP_URL}/.well-known/oauth-protected-resource/mcp`);
        expect(metadata.status).toBe(200);
        expect(await metadata.json()).toMatchObject({
            resource, authorization_servers: [HTTP_URL], scopes_supported: ['mcp'],
        });
        const server = await fetch(`${HTTP_URL}/.well-known/oauth-authorization-server`);
        expect(server.status).toBe(200);
        expect(await server.json()).toMatchObject({
            issuer: HTTP_URL,
            authorization_response_iss_parameter_supported: true,
            authorization_endpoint: `${HTTP_URL}/oauth/authorize`,
            token_endpoint: `${HTTP_URL}/oauth/token`,
            registration_endpoint: `${HTTP_URL}/oauth/register`,
            client_id_metadata_document_supported: true,
            code_challenge_methods_supported: ['S256'],
            scopes_supported: ['mcp'],
        });
        await Promise.all(['GET', 'POST'].map(async (method) => {
            const response = await fetch(resource, { method });
            expect(response.status).toBe(401);
            expect(response.headers.get('WWW-Authenticate')).toContain(`${HTTP_URL}/.well-known/oauth-protected-resource/mcp`);
            expect(response.headers.get('WWW-Authenticate')).toContain('scope="mcp"');
        }));
        const badBearer = await fetch(resource, {
            method: 'POST', headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.e30.invalid' },
        });
        expect(badBearer.status).toBe(401);
        expect(badBearer.headers.get('WWW-Authenticate')).toContain('invalid_token');
        await Promise.all(['', 'invalid'].map(async (secret) => {
            const response = await fetch(`${resource}?id=ignored&secret=${secret}`, {
                method: 'POST', headers: { Authorization: 'Bearer ordinary-supabase-token', 'X-Mcp-Auth-Mode': 'oauth' },
            });
            expect(response.status).toBe(401);
            expect(response.headers.get('WWW-Authenticate')).toBeNull();
        }));
        // A callback without the browser state cookie never reaches the website exchange.
        const callback = await fetch(`${HTTP_URL}/oauth/callback?state=${'a'.repeat(43)}&code=x`, { redirect: 'manual' });
        expect(callback.status).toBe(400);
    }, 30000);
    test('DCR validates exact redirect, S256 PKCE, resource, scope and preserves state', async () => {
        const callback = 'http://127.0.0.1:48231/callback';
        const registered = await fetch(`${HTTP_URL}/oauth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                client_name: 'Framer OAuth integration test',
                redirect_uris: [callback], token_endpoint_auth_method: 'none',
                grant_types: ['authorization_code', 'refresh_token'], response_types: ['code'],
            }),
        });
        expect(registered.status).toBe(201);
        const client = z.object({ client_id: z.string() }).parse(await registered.json());
        const authorize = new URL('/oauth/authorize', HTTP_URL);
        authorize.search = new URLSearchParams({
            client_id: client.client_id, redirect_uri: callback, response_type: 'code',
            resource: `${HTTP_URL}/mcp`, scope: 'mcp', state: 'exact state & binding',
            code_challenge: 'a'.repeat(43), code_challenge_method: 'S256',
        }).toString();
        const valid = await fetch(authorize, { redirect: 'manual' });
        expect(valid.status).toBe(200);
        expect(await valid.text()).toContain('Allow Framer OAuth integration test to control Framer?');
        expect(valid.headers.get('Set-Cookie')).toContain('HttpOnly');
        expect(valid.headers.get('Set-Cookie')).toContain('Secure');
        expect(valid.headers.get('Set-Cookie')).toContain('SameSite=Lax');
        await Promise.all([
            { field: 'resource', value: 'https://another.example/mcp', error: 'invalid_target' },
            { field: 'scope', value: 'admin', error: 'invalid_scope' },
            { field: 'code_challenge_method', value: 'plain', error: 'invalid_request' },
        ].map(async ({ field, value, error }) => {
            const changed = new URL(authorize);
            changed.searchParams.set(field, value);
            const denied = await fetch(changed, { redirect: 'manual' });
            expect(denied.status).toBe(302);
            const location = new URL(denied.headers.get('Location'));
            expect(location.origin + location.pathname).toBe(callback);
            expect(location.searchParams.get('error')).toBe(error);
            expect(location.searchParams.get('state')).toBe('exact state & binding');
            expect(location.searchParams.get('iss')).toBe(HTTP_URL);
        }));
        const changedRedirect = new URL(authorize);
        changedRedirect.searchParams.set('redirect_uri', `${callback}/other`);
        const deniedRedirect = await fetch(changedRedirect, { redirect: 'manual' });
        expect(deniedRedirect.status).toBe(400);
        expect(deniedRedirect.headers.get('Location')).toBeNull();
        const invalidCode = await fetch(`${HTTP_URL}/oauth/token`, {
            method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                grant_type: 'authorization_code', client_id: client.client_id,
                redirect_uri: callback, code: 'invalid-code', code_verifier: 'b'.repeat(43),
                resource: `${HTTP_URL}/mcp`,
            }),
        });
        expect(invalidCode.status).toBe(400);
        expect(await invalidCode.json()).toMatchObject({ error: 'invalid_grant' });
    }, 30000);
});
/**
 * E2e tests run for each transport mode. Both exercise the same pipeline:
 * MCP client → Worker → McpTunnel DO → upstream plugin WS → response
 *
 * The only difference is the client transport:
 * - streamable-http: POST /mcp (StreamableHTTPClientTransport)
 * - sse: GET /sse + POST /sse/message (SSEClientTransport, legacy protocol)
 */
const transportModes = ['streamable-http', 'sse'];
for (const mode of transportModes) {
    describe(`e2e [${mode}]`, () => {
        test('MCP SDK client → worker → DO → upstream plugin WS → response', async () => {
            // 1. Connect a fake plugin as upstream WebSocket (mimics plugin-websocket.ts)
            const upstream = await connectWs(`wss://preview.unframer.co/_tunnel/upstream?id=${MCP_ID}`);
            // Send initial ready message (like plugin-websocket.ts does on open)
            upstream.send(JSON.stringify({ type: 'ready' }));
            // Set up the fake plugin handler
            const receivedToolCalls = [];
            upstream.on('message', (data) => {
                const raw = data.toString();
                let msg;
                try {
                    msg = JSON.parse(raw);
                }
                catch {
                    return;
                }
                if (!msg.payload?.type) {
                    return;
                }
                if (msg.payload.type === 'ready' || msg.payload.type === 'close') {
                    if (msg.payload.type === 'ready') {
                        upstream.send(JSON.stringify({ type: 'ready' }));
                    }
                    return;
                }
                receivedToolCalls.push(msg.payload.type);
                const response = {
                    id: msg.id,
                    payload: {
                        ...msg.payload,
                        output: `mock output for ${msg.payload.type}`,
                    },
                };
                upstream.send(JSON.stringify(response));
            });
            // Small delay to ensure upstream WebSocket is fully accepted by the DO
            await new Promise((r) => { setTimeout(r, 1000); });
            // 2. Create MCP SDK client with the appropriate transport
            const transport = (() => {
                if (mode === 'sse') {
                    const sseUrl = new URL(`${HTTP_URL}/sse?id=${MCP_ID}&secret=${MCP_SECRET}`);
                    return new SSEClientTransport(sseUrl);
                }
                const mcpUrl = new URL(`${HTTP_URL}/mcp?id=${MCP_ID}&secret=${MCP_SECRET}`);
                return new StreamableHTTPClientTransport(mcpUrl);
            })();
            const client = new Client({ name: 'integration-test', version: '1.0.0' });
            await client.connect(transport);
            // 3. List tools — handled entirely inside the DO (no upstream roundtrip needed)
            const { tools } = await client.listTools();
            expect(tools.length).toBeGreaterThan(0);
            const toolNames = tools.map((t) => { return t.name; });
            expect(toolNames).toContain('getProjectXml');
            expect(toolNames).toContain('getNodeXml');
            // 4. Call a tool — full pipeline through the DO to upstream plugin WS
            const result = await client.callTool({ name: 'getProjectXml', arguments: {} });
            const textContent = result.content;
            expect(textContent[0].text).toContain('mock output for getProjectXml');
            expect(receivedToolCalls).toContain('getProjectXml');
            // 5. Call another tool to verify the pipeline works repeatedly
            const result2 = await client.callTool({ name: 'getNodeXml', arguments: { nodeId: 'test-node-123' } });
            const textContent2 = result2.content;
            expect(textContent2[0].text).toContain('mock output for getNodeXml');
            expect(receivedToolCalls).toContain('getNodeXml');
            // Cleanup
            await client.close();
            upstream.close();
        }, 30000);
    });
}
//# sourceMappingURL=tunnel-integration.test.js.map