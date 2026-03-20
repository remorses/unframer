import { McpToolWebsocketPayload } from './types';
export type WebsocketMessage = {
    id: string;
    payload?: McpToolWebsocketPayload | {
        type: 'ready' | 'close';
        input?: never;
        output?: never;
    };
    error?: string;
};
export interface WebsocketRpc {
    send: (params: {
        idempotenceKey?: string;
        payload: WebsocketMessage['payload'];
    }) => Promise<any>;
}
export declare function createWebsocketHandling({ ws, defaultTimeout, }: {
    ws: WebSocket;
    defaultTimeout?: number;
}): WebsocketRpc;
//# sourceMappingURL=websocket-server.d.ts.map