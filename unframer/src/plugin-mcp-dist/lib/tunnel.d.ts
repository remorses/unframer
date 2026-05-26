/**
 * Vendored upstream-only tunnel DO for Cloudflare Workers with WebSocket hibernation.
 *
 * Extracted from cloudflare-tunnel library — keeps only what McpTunnel uses:
 * - Upstream WebSocket acceptance with hibernation tags
 * - Upstream replacement (close old with 4009)
 * - Ping auto-response (avoids waking DO)
 * - handleTunnelFetch router
 * - addCors helper
 *
 * Dropped: downstream relay, multiplexer, wildcard subscribers, standalone worker export.
 */
export type Attachment = {
    role: 'up' | 'sse';
    ids: string[];
    connectionId?: string;
    connectionOrdinal?: number;
    connectedAt?: number;
    readyAcked?: boolean;
    sessionId?: string;
};
/**
 * Route /_tunnel/* requests to a Tunnel Durable Object.
 * Use in the worker's fetch handler to add tunnel support.
 */
export declare function handleTunnelFetch({ req, doNamespace, }: {
    req: Request;
    doNamespace: DurableObjectNamespace;
}): Promise<Response> | null;
/**
 * Upstream-only Tunnel Durable Object.
 *
 * Accepts upstream WebSocket connections with hibernation. Each upstream is
 * tagged as `up:${id}` so it can be looked up by id. Only one upstream per id
 * is allowed — connecting a second closes the first with code 4009.
 *
 * Ping messages are auto-responded without waking the DO:
 * - 'ping' → 'pong'
 * - '{"type":"ping"}' → '{"type":"pong"}'
 */
export declare class Tunnel<E = unknown> {
    ctx: DurableObjectState;
    env: E;
    constructor(state: DurableObjectState, env: E);
    fetch(req: Request): Promise<Response>;
    webSocketMessage(_ws: WebSocket, _message: string | ArrayBuffer): Promise<void>;
    webSocketClose(_ws: WebSocket, _code: number, _reason: string, _wasClean: boolean): Promise<void>;
    webSocketError(_ws: WebSocket, _error: unknown): Promise<void>;
    protected closeUpstreamsForId(id: string, { code, reason }: {
        code: number;
        reason: string;
    }): void;
}
export declare const addCors: (r: Response) => Response;
//# sourceMappingURL=tunnel.d.ts.map