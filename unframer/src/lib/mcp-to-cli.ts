import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import type { Transport } from "@modelcontextprotocol/sdk/shared/transport.js";
import type { CAC } from "@xmorse/cac";

export type { Transport };

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
   */
  getMcpTransport: () => Transport | null | Promise<Transport | null>;
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
 * Connects at setup time to list available tools and registers a command for each.
 * If getMcpTransport returns null, no commands are registered.
 */
export async function addMcpCommands(options: AddMcpCommandsOptions): Promise<void> {
  const { cli, commandPrefix, clientName = "mcp-cli-client", getMcpTransport } = options;

  const transport = await getMcpTransport();
  if (!transport) {
    return;
  }

  const client = new Client({ name: clientName, version: "1.0.0" }, { capabilities: {} });
  try {
    await client.connect(transport);
  } catch (err) {
    console.error(`Failed to connect to MCP server: ${err instanceof Error ? err.message : err}`);
    return;
  }


  const { tools } = await client.listTools();

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
      const args = parseToolArguments(cliOptions, inputSchema);

      try {
        const result = await client.callTool({ name: tool.name, arguments: args });
        outputResult(result as { content: Array<{ type: string; text?: string }> });
      } catch (err) {
        console.error(`Error calling ${tool.name}:`, err instanceof Error ? err.message : err);
        process.exit(1);
      }
    });
  }

}
