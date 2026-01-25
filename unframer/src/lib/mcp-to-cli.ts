/**
 * # MCP to CLI
 *
 * Dynamically generates CLI commands from MCP (Model Context Protocol) server tools.
 * This module connects to any MCP server, discovers available tools, and creates
 * corresponding CLI commands with proper argument parsing and validation.
 *
 * ## Features
 *
 * - **Auto-discovery**: Fetches all tools from the MCP server and creates CLI commands
 * - **Caching**: Tools are cached for 1 hour to avoid reconnecting on every invocation
 * - **Session reuse**: MCP session IDs are cached to skip initialization handshake
 * - **Type-aware parsing**: Handles string, number, boolean, object, and array arguments
 * - **JSON schema support**: Generates CLI options from tool input schemas
 *
 * ## Example Usage
 *
 * ```ts
 * import { cac } from '@xmorse/cac'
 * import { addMcpCommands, CachedMcpTools } from './mcp-to-cli.js'
 * import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js'
 *
 * const cli = cac('mycli')
 *
 * // Your config storage (could be file, env vars, etc.)
 * let cachedTools: CachedMcpTools | undefined
 * let mcpUrl: string | undefined
 *
 * // Add basic commands
 * cli.command('login [url]', 'Store MCP server URL')
 *   .action((url) => { mcpUrl = url })
 *
 * // Add MCP tool commands dynamically
 * await addMcpCommands({
 *   cli,
 *   commandPrefix: 'mcp',
 *   clientName: 'my-mcp-client',
 *   getMcpTransport: (sessionId) => {
 *     if (!mcpUrl) return null
 *     return new StreamableHTTPClientTransport(new URL(mcpUrl), { sessionId })
 *   },
 *   loadCache: () => cachedTools,
 *   saveCache: (cache) => { cachedTools = cache },
 * })
 *
 * cli.parse()
 * ```
 *
 * ## Generated Commands
 *
 * If the MCP server exposes tools like `getNodeXml` and `updateNode`, you'll get:
 *
 * ```bash
 * $ mycli mcp getNodeXml --nodeId "abc123"
 * $ mycli mcp updateNode --nodeId "abc123" --xml "<Frame>...</Frame>"
 * $ mycli mcp --help  # Shows all available MCP tools
 * ```
 *
 * ## How It Works
 *
 * 1. On first run, connects to MCP server and fetches tool definitions via `listTools()`
 * 2. Caches tools and session ID via the provided `saveCache` callback
 * 3. Creates CLI commands for each tool with options derived from JSON schema
 * 4. When a command runs, reconnects with cached session ID and calls `callTool()`
 * 5. Outputs tool results (text content, skips images in CLI)
 *
 * ## Argument Handling
 *
 * - **string/number/boolean**: Passed directly as CLI options
 * - **object/array**: Passed as JSON strings, e.g., `--data '{"key": "value"}'`
 * - **required fields**: Marked with "(required)" in help text
 *
 * @module mcp-to-cli
 */

import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import type { Transport } from "@modelcontextprotocol/sdk/shared/transport.js";
import type { CAC } from "@xmorse/cac";

export type { Transport };

export interface CachedMcpTools {
  tools: Array<{
    name: string;
    description?: string;
    inputSchema?: unknown;
  }>;
  timestamp: number;
  sessionId?: string;
}

const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

export interface AddMcpCommandsOptions {
  cli: CAC;
  commandPrefix: string;
  /**
   * Name used when connecting to the MCP server.
   * @default 'mcp-cli-client'
   */
  clientName?: string;
  /**
   * Returns a transport to connect to the MCP server, or null if not configured.
   * If null is returned, no MCP tool commands will be registered.
   * @param sessionId - Optional session ID from cache to reuse existing session
   */
  getMcpTransport: (sessionId?: string) => Transport | null | Promise<Transport | null>;
  /**
   * Load cached MCP tools. Return undefined if no cache exists.
   */
  loadCache: () => CachedMcpTools | undefined;
  /**
   * Save cached MCP tools. Pass undefined to clear the cache.
   */
  saveCache: (cache: CachedMcpTools | undefined) => void;
}

interface JsonSchemaProperty {
  type?: string;
  description?: string;
  enum?: string[];
  default?: unknown;
  properties?: Record<string, JsonSchemaProperty>;
  items?: JsonSchemaProperty;
  required?: string[];
}

interface InputSchema {
  type: "object";
  properties?: Record<string, JsonSchemaProperty>;
  required?: string[];
}

/**
 * Convert JSON schema to compact JSON string for display
 */
function schemaToString(schema: JsonSchemaProperty): string {
  // Show compact JSON schema
  const compact = { ...schema };
  // Remove verbose fields for display
  delete compact.description;
  return JSON.stringify(compact);
}

function parseToolArguments(
  options: Record<string, unknown>,
  inputSchema: InputSchema | undefined,
): Record<string, unknown> {
  const args: Record<string, unknown> = {};
  if (!inputSchema?.properties) {
    return args;
  }
  for (const [name, schema] of Object.entries(inputSchema.properties)) {
    let value = options[name];
    if (value === undefined) {
      continue;
    }
    // cac wraps values in arrays when using type: [String] or type: [Number]
    // Always unwrap single-element arrays - for object/array schema types,
    // the inner value is a JSON string that we'll parse below
    if (Array.isArray(value) && value.length === 1) {
      value = value[0];
    }
    const type = schema.type || "string";
    if ((type === "object" || type === "array") && typeof value === "string") {
      try {
        args[name] = JSON.parse(value);
      } catch {
        console.error(`Invalid JSON for --${name}: ${value}`);
        process.exit(1);
      }
    } else {
      args[name] = value;
    }
  }
  return args;
}

function outputResult(result: {
  content: Array<{ type: string; text?: string; data?: string }>;
}): void {
  for (const block of result.content) {
    if (block.type === "text" && block.text) {
      console.log(block.text);
    } else if (block.type === "image") {
      // Skip base64 image data in CLI output
      console.log("[Image content omitted]");
    } else {
      console.log(JSON.stringify(block, null, 2));
    }
  }
}

/**
 * Adds MCP tool commands to a cac CLI instance.
 * Tools are cached for 1 hour to avoid connecting on every CLI invocation.
 * Session ID is also cached to skip MCP initialization handshake.
 */
export async function addMcpCommands(options: AddMcpCommandsOptions): Promise<void> {
  const { cli, commandPrefix, clientName = "mcp-cli-client", getMcpTransport, loadCache, saveCache } = options;

  // Try to use cached tools first
  const cachedTools = loadCache();
  const isCacheValid = cachedTools && (Date.now() - cachedTools.timestamp) < CACHE_TTL_MS;

  let tools: CachedMcpTools["tools"];
  let cachedSessionId: string | undefined;

  if (isCacheValid) {
    // Use cached tools to register commands
    tools = cachedTools.tools;
    cachedSessionId = cachedTools.sessionId;
  } else {
    // Cache invalid/missing - connect to fetch tools
    const transport = await getMcpTransport();
    if (!transport) {
      return;
    }

    const client = new Client({ name: clientName, version: "1.0.0" }, { capabilities: {} });
    try {
      await client.connect(transport);
      const result = await client.listTools();
      tools = result.tools;

      // Get session ID from transport if available
      const sessionId = (transport as { sessionId?: string }).sessionId;

      // Save tools and session ID to cache
      saveCache({
        tools: tools.map((t) => ({
          name: t.name,
          description: t.description,
          inputSchema: t.inputSchema,
        })),
        timestamp: Date.now(),
        sessionId,
      });
      cachedSessionId = sessionId;
    } catch (err) {
      console.error(`Failed to connect to MCP server: ${err instanceof Error ? err.message : err}`);
      return;
    } finally {
      await client.close();
    }
  }

  for (const tool of tools) {
    const inputSchema = tool.inputSchema as InputSchema | undefined;
    const cmdName = `${commandPrefix} ${tool.name}`;
    const description = tool.description || `Run MCP tool ${tool.name}`;

    const cmd = cli.command(cmdName, description);

    // Add options for each property in the input schema
    if (inputSchema?.properties) {
      for (const [propName, propSchema] of Object.entries(inputSchema.properties)) {
        const isRequired = inputSchema.required?.includes(propName) ?? false;
        const schemaType = propSchema.type || "string";

        // Boolean options are flags without <value>
        // Other types use <value> syntax
        const optionStr =
          schemaType === "boolean" ? `--${propName}` : `--${propName} <${propName}>`;

        let optionDesc = propSchema.description || propName;
        if (isRequired) {
          optionDesc += " (required)";
        }
        // Add schema hint for non-scalar types
        if (schemaType === "object" || schemaType === "array") {
          optionDesc += ` (JSON: ${schemaToString(propSchema)})`;
        }

        // Build option config with type transform
        // Use type: [Type] to prevent cac/mri from auto-converting values
        // This wraps values in arrays which we unwrap in parseToolArguments
        const optionConfig: { default?: unknown; type?: unknown[] } = {};
        if (propSchema.default !== undefined) {
          optionConfig.default = propSchema.default;
        }
        if (schemaType === "number" || schemaType === "integer") {
          optionConfig.type = [Number];
        } else if (schemaType !== "boolean") {
          // String for string/object/array types - prevents mri from mangling JSON strings
          optionConfig.type = [String];
        }

        cmd.option(optionStr, optionDesc, optionConfig);
      }
    }

    cmd.action(async (cliOptions: Record<string, unknown>) => {
      const parsedArgs = parseToolArguments(cliOptions, inputSchema);

      // Connect with cached session ID to skip initialization handshake
      const transport = await getMcpTransport(cachedSessionId);
      if (!transport) {
        console.error("MCP transport not available");
        process.exit(1);
      }
      const actionClient = new Client({ name: clientName, version: "1.0.0" }, { capabilities: {} });

      try {
        await actionClient.connect(transport);
        const result = await actionClient.callTool({ name: tool.name, arguments: parsedArgs });
        outputResult(result as { content: Array<{ type: string; text?: string }> });
      } catch (err) {
        // Clear cache on any error so next invocation starts fresh
        saveCache(undefined);
        console.error(`Error calling ${tool.name}:`, err instanceof Error ? err.message : err);
        process.exit(1);
      } finally {
        await actionClient.close();
      }
    });
  }

}
