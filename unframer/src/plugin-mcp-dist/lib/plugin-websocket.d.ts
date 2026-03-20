import { McpToolWebsocketPayload } from './schema.js';
export declare function websocketClientHandling({ handle, websocketId, }: {
    websocketId: string;
    handle: <T extends McpToolWebsocketPayload>(payload: T) => Promise<T['output']>;
}): Promise<(() => void) | undefined>;
//# sourceMappingURL=plugin-websocket.d.ts.map