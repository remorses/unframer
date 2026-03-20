import { McpToolWebsocketPayload } from './types';
export declare function websocketClientHandling({ handle, websocketId, }: {
    websocketId: string;
    handle: <T extends McpToolWebsocketPayload>(payload: T) => Promise<T['output']>;
}): Promise<(() => void) | undefined>;
//# sourceMappingURL=client-websocket.d.ts.map