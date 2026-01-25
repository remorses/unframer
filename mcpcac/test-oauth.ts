/**
 * Test script for MCP OAuth flow with Notion MCP server.
 * 
 * Run with: npx tsx test-oauth.ts
 */

import { cac } from '@xmorse/cac'
import { addMcpCommands } from './src/index.js'
import type { McpOAuthState } from './src/types.js'
import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'

const CONFIG_DIR = path.join(os.homedir(), '.notioncli')
const CONFIG_FILE = path.join(CONFIG_DIR, 'config.json')

interface TestConfig {
  mcpUrl: string
  oauthState?: McpOAuthState
  cache?: unknown
}

function loadConfig(): TestConfig {
  if (!fs.existsSync(CONFIG_FILE)) {
    return { mcpUrl: 'https://mcp.notion.com/mcp' }
  }
  try {
    return JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf-8'))
  } catch {
    return { mcpUrl: 'https://mcp.notion.com/mcp' }
  }
}

function saveConfig(config: Partial<TestConfig>): void {
  const existing = loadConfig()
  const merged = { ...existing, ...config }
  if (!fs.existsSync(CONFIG_DIR)) {
    fs.mkdirSync(CONFIG_DIR, { recursive: true })
  }
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(merged, null, 2))
}

const cli = cac('test-oauth')

// Add MCP commands with OAuth support
await addMcpCommands({
  cli,
  commandPrefix: 'mcp',
  clientName: 'mcpcac-test',
  getMcpUrl: () => loadConfig().mcpUrl,
  oauth: {
    clientName: 'mcpcac Test CLI',
    load: () => loadConfig().oauthState,
    save: (state) => {
      console.log('Saving OAuth state...')
      saveConfig({ oauthState: state })
    },
    onAuthUrl: (url) => {
      console.log('\n🔗 Auth URL:', url, '\n')
    },
    onAuthSuccess: () => {
      console.log('✅ OAuth flow completed successfully!')
    },
    onAuthError: (error) => {
      console.error('❌ OAuth error:', error)
    },
  },
  loadCache: () => loadConfig().cache as any,
  saveCache: (cache) => saveConfig({ cache }),
})

// Simple login command that just saves URL
cli.command('login [url]', 'Save MCP URL').action((url?: string) => {
  const mcpUrl = url || 'https://mcp.notion.com/mcp'
  saveConfig({ mcpUrl })
  console.log(`Saved MCP URL: ${mcpUrl}`)
  console.log(`Config file: ${CONFIG_FILE}`)
})

// Logout command
cli.command('logout', 'Clear OAuth tokens').action(() => {
  saveConfig({ oauthState: undefined, cache: undefined })
  console.log('Cleared OAuth state and cache')
})

// Show current config
cli.command('status', 'Show current config').action(() => {
  const config = loadConfig()
  console.log('Current config:')
  console.log(JSON.stringify(config, null, 2))
})

cli.help()
cli.parse()
