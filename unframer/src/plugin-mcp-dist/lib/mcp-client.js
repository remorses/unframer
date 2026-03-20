import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { SSEClientTransport } from '@modelcontextprotocol/sdk/client/sse.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
export async function createTransport(options) {
    const url = new URL(options.mcpUrl);
    const transportType = options.transport ?? 'sse';
    if (transportType === 'streamable-http') {
        const transport = new StreamableHTTPClientTransport(url);
        return { transport };
    }
    const transport = new SSEClientTransport(url);
    return { transport };
}
export async function createMCPClient(options) {
    const client = new Client({
        name: options?.clientName ?? 'test',
        version: '1.0.0',
    });
    const { transport } = await createTransport(options);
    await client.connect(transport);
    await client.ping();
    const cleanup = async () => {
        try {
            await client.close();
        }
        catch (e) {
            console.error('Error during MCP client cleanup:', e);
        }
    };
    function callTool({ args, name }) {
        return client.callTool({ name, arguments: args });
    }
    return {
        client,
        callTool,
        cleanup,
    };
}
//# sourceMappingURL=mcp-client.js.map