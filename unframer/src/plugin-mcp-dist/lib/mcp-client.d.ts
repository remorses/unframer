import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import type { Transport } from '@modelcontextprotocol/sdk/shared/transport.js';
import type { McpCallParam } from './schema.js';
export interface CreateTransportOptions {
    clientName?: string;
    mcpUrl: string;
    transport?: 'sse' | 'streamable-http';
}
export declare function createTransport(options: CreateTransportOptions): Promise<{
    transport: Transport;
}>;
export declare function createMCPClient(options: CreateTransportOptions): Promise<{
    client: Client<{
        method: string;
        params?: {
            [x: string]: unknown;
            _meta?: {
                [x: string]: unknown;
                progressToken?: string | number | undefined;
                "io.modelcontextprotocol/related-task"?: {
                    taskId: string;
                } | undefined;
            } | undefined;
        } | undefined;
    }, {
        method: string;
        params?: {
            [x: string]: unknown;
            _meta?: {
                [x: string]: unknown;
                progressToken?: string | number | undefined;
                "io.modelcontextprotocol/related-task"?: {
                    taskId: string;
                } | undefined;
            } | undefined;
        } | undefined;
    }, {
        [x: string]: unknown;
        _meta?: {
            [x: string]: unknown;
            progressToken?: string | number | undefined;
            "io.modelcontextprotocol/related-task"?: {
                taskId: string;
            } | undefined;
        } | undefined;
    }>;
    callTool: ({ args, name }: McpCallParam) => any;
    cleanup: () => Promise<void>;
}>;
//# sourceMappingURL=mcp-client.d.ts.map