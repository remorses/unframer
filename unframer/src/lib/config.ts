import fs from 'fs'
import path from 'path'
import os from 'os'

const CONFIG_DIR = path.join(os.homedir(), '.unframer')
const CONFIG_FILE = path.join(CONFIG_DIR, 'config.json')

export interface CachedMcpTools {
    tools: Array<{
        name: string
        description?: string
        inputSchema?: unknown
    }>
    timestamp: number
    sessionId?: string
}

export interface UnframerConfig {
    mcpUrl?: string
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
