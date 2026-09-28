// CLI config persistence for MCP auth mode, credentials, and cached tool metadata.
import fs from 'fs'
import path from 'path'
import os from 'os'
import type { CachedMcpTools } from '@goke/mcp'

const CONFIG_DIR = path.join(os.homedir(), '.unframer')
const CONFIG_FILE = path.join(CONFIG_DIR, 'config.json')

export type McpMode = 'plugin' | 'server-api'

export interface UnframerConfig {
    /** MCP mode: 'plugin' uses WebSocket tunnel, 'server-api' uses framer-api directly */
    mode?: McpMode
    /** MCP URL for plugin mode (from Framer MCP plugin) */
    mcpUrl?: string
    /** Framer API keys for server-api mode, keyed by Framer project id. Keys are project scoped. */
    framerProjects?: Record<string, { apiKey: string; userId?: string }>
    /** Default Framer project URL for server-api mode */
    framerProjectUrl?: string
    /** Cached MCP tools schema */
    cachedMcpTools?: CachedMcpTools
}

export function loadConfig(): UnframerConfig {
    if (!fs.existsSync(CONFIG_FILE)) {
        return {}
    }
    try {
        return JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf-8'))
    } catch {
        return {}
    }
}

export function saveConfig(config: UnframerConfig): void {
    if (!fs.existsSync(CONFIG_DIR)) {
        fs.mkdirSync(CONFIG_DIR, { recursive: true })
    }
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2))
}

export function getConfigPath(): string {
    return CONFIG_FILE
}
