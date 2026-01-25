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
 * - **OAuth support**: Automatic OAuth authentication on 401 errors (lazy auth)
 *
 * ## Example Usage
 *
 * ```ts
 * import { cac } from '@xmorse/cac'
 * import { addMcpCommands } from 'mcpcac'
 *
 * const cli = cac('mycli')
 *
 * await addMcpCommands({
 *   cli,
 *   commandPrefix: 'mcp',
 *   clientName: 'my-mcp-client',
 *   getMcpUrl: () => loadConfig().mcpUrl,
 *   oauth: {
 *     clientName: 'My CLI',
 *     load: () => loadConfig().mcpOauth,
 *     save: (state) => saveConfig({ mcpOauth: state }),
 *   },
 *   loadCache: () => loadConfig().cachedMcpTools,
 *   saveCache: (cache) => saveConfig({ cachedMcpTools: cache }),
 * })
 *
 * // Login command just saves URL - no auth check, fast!
 * cli.command('login [url]').action((url) => {
 *   saveConfig({ mcpUrl: url })
 *   console.log('URL saved.')
 * })
 *
 * cli.parse()
 * ```
 *
 * @module mcpcac
 */

import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import type { Transport } from "@modelcontextprotocol/sdk/shared/transport.js";
import type { CAC } from "@xmorse/cac";
import { FileOAuthProvider } from "./oauth-provider.js";
import { startOAuthFlow, isAuthRequiredError } from "./auth.js";
import type { McpOAuthConfig, McpOAuthState } from "./types.js";

// Public exports - only types that consumers need
export type { Transport };
export type { McpOAuthConfig, McpOAuthState } from "./types.js";

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
  /**
   * Prefix for all MCP tool commands.
   * Set to empty string '' for no prefix (e.g., 'notion-search' instead of 'mcp notion-search').
   * @default 'mcp'
   */
  commandPrefix?: string;
  /**
   * Name used when connecting to the MCP server.
   * @default 'mcp-cli-client'
   */
  clientName?: string;

  /**
   * Returns the MCP server URL, or undefined if not configured.
   * Required when using the oauth option.
   */
  getMcpUrl?: () => string | undefined;

  /**
   * Returns a transport to connect to the MCP server, or null if not configured.
   * If null is returned, no MCP tool commands will be registered.
   * @param sessionId - Optional session ID from cache to reuse existing session
   *
   * @deprecated Use getMcpUrl + oauth instead for simpler setup
   */
  getMcpTransport?: (sessionId?: string) => Transport | null | Promise<Transport | null>;

  /**
   * OAuth configuration. When provided, enables automatic OAuth authentication.
   * 
   * OAuth is lazy - no auth check happens on startup. Authentication is only
   * triggered when a tool call returns 401. After successful auth, the tool
   * call is automatically retried.
   * 
   * The library handles everything internally:
   * - Detecting 401 errors
   * - Starting local callback server on random port
   * - Opening browser for authorization
   * - Exchanging code for tokens
   * - Persisting tokens via save()
   * - Retrying the failed tool call
   */
  oauth?: McpOAuthConfig;

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
  const compact = { ...schema };
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
      console.log("[Image content omitted]");
    } else {
      console.log(JSON.stringify(block, null, 2));
    }
  }
}

/**
 * Create a transport with optional OAuth authentication
 */
function createTransportWithAuth(
  url: URL,
  sessionId: string | undefined,
  oauthState: McpOAuthState | undefined,
  oauth: McpOAuthConfig | undefined,
): StreamableHTTPClientTransport {
  let authProvider: FileOAuthProvider | undefined;

  if (oauth && oauthState?.tokens) {
    authProvider = new FileOAuthProvider({
      serverUrl: url.toString(),
      redirectUri: "http://localhost/callback", // Placeholder, real one set during auth flow
      clientName: oauth.clientName,
      tokens: oauthState.tokens,
      clientInformation: oauthState.clientInformation,
      codeVerifier: oauthState.codeVerifier,
      onStateUpdated: (newState) => {
        oauth.save(newState);
      },
    });
  }

  return new StreamableHTTPClientTransport(url, {
    sessionId,
    authProvider,
  });
}

/**
 * Normalize MCP URL for StreamableHTTP transport
 */
function normalizeUrl(mcpUrl: string): URL {
  const url = new URL(mcpUrl);
  if (url.pathname.endsWith("/sse")) {
    url.pathname = url.pathname.replace(/\/sse$/, "/mcp");
  }
  return url;
}

/**
 * Adds MCP tool commands to a cac CLI instance.
 * 
 * Tools are cached for 1 hour to avoid connecting on every CLI invocation.
 * Session ID is also cached to skip MCP initialization handshake.
 * 
 * OAuth is lazy - authentication only happens when a 401 error occurs.
 * After successful auth, the operation is automatically retried.
 */
export async function addMcpCommands(options: AddMcpCommandsOptions): Promise<void> {
  const {
    cli,
    commandPrefix = "mcp",
    clientName = "mcp-cli-client",
    getMcpUrl,
    getMcpTransport,
    oauth,
    loadCache,
    saveCache,
  } = options;

  // Helper to get transport - supports both old and new API
  const getTransport = async (sessionId?: string): Promise<Transport | null> => {
    // New API: getMcpUrl + oauth
    if (getMcpUrl) {
      const mcpUrl = getMcpUrl();
      if (!mcpUrl) {
        return null;
      }

      const url = normalizeUrl(mcpUrl);
      const oauthState = oauth?.load();

      return createTransportWithAuth(url, sessionId, oauthState, oauth);
    }

    // Legacy API: getMcpTransport
    if (getMcpTransport) {
      return getMcpTransport(sessionId);
    }

    return null;
  };

  // Handle auth required - triggers OAuth flow internally
  const handleAuthRequired = async (serverUrl: string): Promise<boolean> => {
    if (!oauth) {
      console.error("Authentication required but OAuth not configured.");
      console.error("Add oauth config to addMcpCommands() to enable automatic authentication.");
      return false;
    }

    console.log("\n🔐 Authentication required. Opening browser...\n");

    const result = await startOAuthFlow({
      serverUrl,
      clientName: oauth.clientName,
      existingState: oauth.load(),
      onAuthUrl: oauth.onAuthUrl,
    });

    if (result.success && result.state) {
      oauth.save(result.state);
      oauth.onAuthSuccess?.();
      console.log("✓ Authentication successful! Retrying...\n");
      return true;
    }

    oauth.onAuthError?.(result.error || "Unknown error");
    console.error(`✗ Authentication failed: ${result.error}\n`);
    return false;
  };

  // Try to use cached tools first (fast path - no network)
  const cachedTools = loadCache();
  const isCacheValid = cachedTools && (Date.now() - cachedTools.timestamp) < CACHE_TTL_MS;

  let tools: CachedMcpTools["tools"];
  let cachedSessionId: string | undefined;

  if (isCacheValid) {
    tools = cachedTools.tools;
    cachedSessionId = cachedTools.sessionId;
  } else {
    // Cache invalid/missing - connect to fetch tools
    const transport = await getTransport();
    if (!transport) {
      return;
    }

    const client = new Client({ name: clientName, version: "1.0.0" }, { capabilities: {} });
    try {
      await client.connect(transport);
      const result = await client.listTools();
      tools = result.tools;

      const sessionId = (transport as { sessionId?: string }).sessionId;

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
      // Check if auth is required during tool discovery
      if (isAuthRequiredError(err) && oauth && getMcpUrl) {
        const mcpUrl = getMcpUrl();
        if (mcpUrl) {
          const authSuccess = await handleAuthRequired(normalizeUrl(mcpUrl).toString());
          if (authSuccess) {
            // Retry after auth
            return addMcpCommands(options);
          }
        }
      }
      console.error(`Failed to connect to MCP server: ${err instanceof Error ? err.message : err}`);
      return;
    } finally {
      await client.close();
    }
  }

  // Register CLI commands for each tool
  for (const tool of tools) {
    const inputSchema = tool.inputSchema as InputSchema | undefined;
    const cmdName = commandPrefix ? `${commandPrefix} ${tool.name}` : tool.name;
    const description = tool.description || `Run MCP tool ${tool.name}`;

    const cmd = cli.command(cmdName, description);

    if (inputSchema?.properties) {
      for (const [propName, propSchema] of Object.entries(inputSchema.properties)) {
        const isRequired = inputSchema.required?.includes(propName) ?? false;
        const schemaType = propSchema.type || "string";

        const optionStr =
          schemaType === "boolean" ? `--${propName}` : `--${propName} <${propName}>`;

        let optionDesc = propSchema.description || propName;
        if (isRequired) {
          optionDesc += " (required)";
        }
        if (schemaType === "object" || schemaType === "array") {
          optionDesc += ` (JSON: ${schemaToString(propSchema)})`;
        }

        const optionConfig: { default?: unknown; type?: unknown[] } = {};
        if (propSchema.default !== undefined) {
          optionConfig.default = propSchema.default;
        }
        if (schemaType === "number" || schemaType === "integer") {
          optionConfig.type = [Number];
        } else if (schemaType !== "boolean") {
          optionConfig.type = [String];
        }

        cmd.option(optionStr, optionDesc, optionConfig);
      }
    }

    cmd.action(async (cliOptions: Record<string, unknown>) => {
      const parsedArgs = parseToolArguments(cliOptions, inputSchema);

      const executeWithRetry = async (isRetry = false): Promise<void> => {
        const transport = await getTransport(isRetry ? undefined : cachedSessionId);
        if (!transport) {
          console.error("MCP transport not available. Run login command first.");
          process.exit(1);
        }
        
        const actionClient = new Client({ name: clientName, version: "1.0.0" }, { capabilities: {} });

        try {
          await actionClient.connect(transport);
          const result = await actionClient.callTool({ name: tool.name, arguments: parsedArgs });
          outputResult(result as { content: Array<{ type: string; text?: string }> });
        } catch (err) {
          // On 401, trigger OAuth and retry (only once)
          if (!isRetry && isAuthRequiredError(err) && oauth && getMcpUrl) {
            const mcpUrl = getMcpUrl();
            if (mcpUrl) {
              const authSuccess = await handleAuthRequired(normalizeUrl(mcpUrl).toString());
              if (authSuccess) {
                await actionClient.close();
                return executeWithRetry(true);
              }
            }
          }

          // Clear cache on error (might be stale)
          saveCache(undefined);
          console.error(`Error calling ${tool.name}:`, err instanceof Error ? err.message : err);
          process.exit(1);
        } finally {
          await actionClient.close();
        }
      };

      await executeWithRetry();
    });
  }
}
