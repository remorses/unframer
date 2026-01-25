#!/usr/bin/env node
/**
 * Notion MCP CLI with OAuth support.
 *
 * Usage:
 *   notion-mcp-cli login              # Save MCP URL and authenticate
 *   notion-mcp-cli mcp notion-search  # Search Notion
 *   notion-mcp-cli mcp notion-fetch   # Fetch a page
 *   notion-mcp-cli status             # Show current config
 *   notion-mcp-cli logout             # Clear OAuth tokens
 */

import { cac } from "@xmorse/cac";
import { addMcpCommands } from "mcpcac";
import type { McpOAuthState, CachedMcpTools } from "mcpcac";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";

const CONFIG_DIR = path.join(os.homedir(), ".notion-mcp-cli");
const CONFIG_FILE = path.join(CONFIG_DIR, "config.json");

interface NotionCliConfig {
  mcpUrl: string;
  oauthState?: McpOAuthState;
  cache?: CachedMcpTools;
}

function loadConfig(): NotionCliConfig {
  if (!fs.existsSync(CONFIG_FILE)) {
    return { mcpUrl: "https://mcp.notion.com/mcp" };
  }
  try {
    return JSON.parse(fs.readFileSync(CONFIG_FILE, "utf-8"));
  } catch {
    return { mcpUrl: "https://mcp.notion.com/mcp" };
  }
}

function saveConfig(config: Partial<NotionCliConfig>): void {
  const existing = loadConfig();
  const merged = { ...existing, ...config };
  if (!fs.existsSync(CONFIG_DIR)) {
    fs.mkdirSync(CONFIG_DIR, { recursive: true });
  }
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(merged, null, 2));
}

const cli = cac("notion-mcp-cli");

// Add MCP commands with OAuth support
await addMcpCommands({
  cli,
  commandPrefix: "mcp",
  clientName: "notion-mcp-cli",
  getMcpUrl: () => loadConfig().mcpUrl,
  oauth: {
    clientName: "Notion CLI",
    load: () => loadConfig().oauthState,
    save: (state) => {
      saveConfig({ oauthState: state });
    },
  },
  loadCache: () => loadConfig().cache,
  saveCache: (cache) => {
    saveConfig({ cache });
  },
});

// Login command - just saves URL, auth happens on first tool call
cli
  .command("login", "Save MCP URL and prepare for authentication")
  .option("--url <url>", "MCP server URL", { default: "https://mcp.notion.com/mcp" })
  .action((options: { url: string }) => {
    saveConfig({ mcpUrl: options.url });
    console.log(`Saved MCP URL: ${options.url}`);
    console.log(`Config file: ${CONFIG_FILE}`);
    console.log("\nRun any mcp command to authenticate (e.g., notion-mcp-cli mcp notion-get-users)");
  });

// Logout command
cli.command("logout", "Clear OAuth tokens and cache").action(() => {
  saveConfig({ oauthState: undefined, cache: undefined });
  console.log("Cleared OAuth state and cache");
});

// Status command
cli.command("status", "Show current config").action(() => {
  const config = loadConfig();
  const hasTokens = !!config.oauthState?.tokens;
  const toolCount = config.cache?.tools?.length || 0;

  console.log("Notion CLI Status");
  console.log("─".repeat(40));
  console.log(`MCP URL:     ${config.mcpUrl}`);
  console.log(`Logged in:   ${hasTokens ? "Yes" : "No"}`);
  console.log(`Tools cached: ${toolCount}`);
  console.log(`Config file: ${CONFIG_FILE}`);
});

cli.help();
cli.version("0.0.1");
cli.parse();
