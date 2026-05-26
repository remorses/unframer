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