import { z } from 'zod'
import { setMaxListeners } from 'events'
import pkg from '../package.json' with { type: 'json' }
import pico from 'picocolors'
const { blue, bgBlue, green } = pico
import { fetch } from 'undici'
import './sentry.js'
import { input, select, password } from '@inquirer/prompts'

import { bundle, StyleToken, createExampleComponentCode } from './exporter.js'
import { generateStackblitzFiles } from './stackblitz.js'

import { goke, wrapJsonSchema } from 'goke'
import { exec } from 'child_process'
import { promisify } from 'util'

import fs from 'fs'
import path, { basename } from 'path'
import { BreakpointSizes, defaultBreakpointSizes } from './css-core.js'
import {
    componentNameToPath,
    dedent,
    isTruthy,
    kebabCase,
    logger,
    sleep,
    spinner,
} from './utils.js'
import { getPackageManager } from './package-manager.js'
import { notifyError } from './sentry.js'
import { dispatcher } from './undici-dispatcher.js'
import {
    loadConfig,
    saveConfig,
    getConfigPath,
    type McpMode,
} from './config.js'
import { addMcpCommands } from '@goke/mcp'

const configNames = ['unframer.config.json', 'unframer.json']

export const cli = goke('unframer')

let defaultOutDir = 'framer'

cli.command('[...projectIds]', 'Run unframer with one or more project IDs')
    .option('--outDir <dir>', 'Output directory')
    .option(
        '--external [package]',
        'Make some package external, do not pass a package name to make all packages external',
    )
    .option('--watch', 'Watch for changes and rebuild')
    .option('--jsx', 'Output jsx code instead of minified .js code')
    .option('--debug', 'Enable debug logging')
    .option('--metafile', 'Generate meta.json file with build metadata')
    .action(async function main(projectIds, options) {
        const outDir = options.outDir || defaultOutDir
        const jsx = options.jsx ?? true
        const external_ = options.external
        // --external without value gives "" (optional value); treat same as undefined (all external)
        const allExternal = !external_ || external_ === ''
        const externalPackages: string[] = external_ && external_ !== ''
            ? [external_]
            : []
        try {
            if (options.debug) {
                logger.debug = true
            }
            const controller = new AbortController()
            const signal = controller.signal
            const watch = options.watch
            if (projectIds.length > 0) {
                if (watch && projectIds.length > 1) {
                    console.error('--watch is only supported with a single project ID')
                    process.exit(1)
                }

                // Fetch configs for all project IDs
                const fetchResults = await Promise.all(
                    projectIds.map((projectId) => {
                        return configFromFetch({
                            allExternal,
                            externalPackages,
                            outDir,
                            projectId,
                        })
                    }),
                )

                // Merge configs when multiple projects are provided, otherwise use single config directly
                const mergedConfig = fetchResults.length === 1
                    ? fetchResults[0].config
                    : mergeConfigs(fetchResults.map((r) => r.config))
                const cwd = fetchResults[0].cwd
                const websiteUrl = fetchResults[0].websiteUrl

                const { rebuild, buildContext } = await bundle({
                    config: {
                        jsx,
                        ...mergedConfig,
                    },
                    watch,
                    cwd,
                    signal,
                    metafile: options.metafile,
                })
                // console.log('buildContext', buildContext)
                if (!websiteUrl || !options.watch) {
                    await buildContext?.dispose?.()
                    return
                }
                spinner.start(
                    `Waiting for changes, try editing a component in Framer and click publish...`,
                )
                let lastEtag: string | null = null
                const startTime = Date.now()
                while (Date.now() - startTime < 30 * 60 * 1000) {
                    const etag = await fetch(websiteUrl, {
                        method: 'HEAD',
                        dispatcher,
                    })
                        .then((response) => response.headers.get('etag'))
                        .catch((error) => {
                            logger.error('Error fetching etag:', error)
                            return null
                        })
                    logger.log('etag', etag)
                    if (etag && lastEtag && etag !== lastEtag) {
                        spinner.start(
                            `Detected Framer website change, rebuilding...`,
                        )
                        lastEtag = etag
                        await rebuild()
                    }
                    if (etag) {
                        lastEtag = etag
                    }

                    await sleep(1000 * 2)
                }
            }

            // legacy behavior without Framer plugin
            fixOldUnframerPath()
            const cwd = process.cwd()
            logger.log(`Looking for ${configNames.join(', ')} in ${cwd}`)

            const configPath = findUp(configNames, { cwd })
            if (!configPath) {
                logger.log(`No ${configNames.join(', ')} found`)
                return
            }
            const configBasename = basename(configPath!)
            const configContent = fs.readFileSync(configPath, 'utf8')
            if (!configContent) {
                logger.log(`No ${configBasename} contents found`)
                return
            }
            const configContentWithoutComments = configContent.replace(
                /^\s*\/\/.*$/gm,
                '',
            )

            const config = JSON.parse(configContentWithoutComments)
            if (outDir !== defaultOutDir) {
                config.outDir = outDir
            }

            setMaxListeners(0, controller.signal)
            const { buildContext } = await bundle({
                config: { ...config, externalPackages, allExternal },
                watch,
                signal: controller.signal,
                cwd: path.resolve(process.cwd(), config.outDir || 'framer'),
                metafile: options.metafile,
            })
            await buildContext.dispose?.()
        } catch (error) {
            notifyError(error)

            throw error
        }
    })

function fixOldUnframerPath() {
    // if unframer.json exists, rename it to unframer.config.json

    const oldConfigPath = fs.existsSync('unframer.json')
    if (oldConfigPath) {
        fs.renameSync('unframer.json', 'unframer.config.json')
        logger.green(
            'legacy unframer.json config renamed to unframer.config.json',
        )
        return true
    }
    return false
}

const version = pkg.version

cli.version(version).help()

cli.command(
    'example-app <projectId>',
    'Create an example app with Framer components',
)
    .option('--outDir <dir>', 'Output directory')
    .action(async (projectId, options) => {
        if (!projectId?.trim()) {
            console.log(
                `unframer example-app requires a project id positional param`,
            )
            process.exit(1)
        }
        try {
            const outDir = options.outDir || 'example-unframer-app'
            console.log(`Creating example app in ${outDir}`)

            // Create the output directory
            const absoluteOutDir = path.resolve(process.cwd(), outDir)
            if (!fs.existsSync(absoluteOutDir)) {
                fs.mkdirSync(absoluteOutDir, { recursive: true })
            }

            // Fetch the project configuration
            spinner.start('Fetching project configuration...')
            const { config, websiteUrl } = await configFromFetch({
                projectId,
                allExternal: true,
                externalPackages: [],
                outDir: 'src/framer',
            })
            spinner.stop('Project configuration fetched')

            // Generate example component code
            spinner.start('Generating example component code...')
            const { exampleCode } = await createExampleComponentCode({
                outDir: './framer',
                config,
            })

            // Generate all the files needed for the example app
            const files = generateStackblitzFiles({
                projectId,
                appComponentCode: exampleCode,
                title: config.projectName || 'Unframer Example App',
            })

            // Write all files to the output directory
            for (const file of files) {
                const filePath = path.join(absoluteOutDir, file.relativePath)
                const fileDir = path.dirname(filePath)

                // Ensure directory exists
                if (!fs.existsSync(fileDir)) {
                    fs.mkdirSync(fileDir, { recursive: true })
                }

                fs.writeFileSync(filePath, file.contents)
                console.log(`Created ${file.relativePath}`)
            }
            spinner.stop('Example files created')

            // Bundle the Framer components
            spinner.start('Downloading Framer components...')
            const componentsOutDir = path.join(absoluteOutDir, 'src/framer')
            const { buildContext } = await bundle({
                config: {
                    ...config,
                    jsx: true,
                    outDir: componentsOutDir,
                    allExternal: true,
                    externalPackages: [],
                },
                watch: false,
                cwd: componentsOutDir,
                signal: new AbortController().signal,
                metafile: false,
            })
            await buildContext?.dispose?.()
            spinner.stop('Framer components downloaded')

            // Install dependencies using detected package manager
            spinner.stop('Framer components downloaded')

            const packageManager = await getPackageManager()
            const installCommand =
                packageManager === 'yarn' ? 'yarn' : `${packageManager} install`

            console.log(`Installing dependencies with ${packageManager}...`)
            spinner.start(`Running ${installCommand}...`)

            const execAsync = promisify(exec)
            try {
                await execAsync(installCommand, {
                    cwd: absoluteOutDir,
                    // Can't use 'inherit' with async exec, so we'll capture output
                    encoding: 'utf8',
                })
                spinner.stop('Dependencies installed successfully')
            } catch (error) {
                spinner.stop('Failed to install dependencies')
                console.error(
                    `${packageManager} install failed:`,
                    error?.message || error,
                )
                console.log(
                    `You can manually run "${installCommand}" in the created directory`,
                )
            }

            console.info(dedent`

            Example app created successfully in ${outDir}!

            Next steps:
              cd ${outDir}
              ${packageManager} run dev

            Quick guide:
            ▪︎ Read and edit src/App.tsx to add or customize your rendered Framer components
            ▪︎ Your components are in src/framer/ directory. Run npm run framer to sync changes from Framer
            ▪︎ The app uses Vite + React + TypeScript + Tailwind CSS

            `)
        } catch (error) {
            notifyError(error)
            spinner.error('Failed to create example app')
            throw error
        }
    })

cli.command(
    'mcp login [url]',
    'Login to Framer MCP. Choose between plugin mode (requires Framer open) or server API mode (works headlessly with API key).',
).action(async (url?: string) => {
    try {
        // If URL is passed directly, use plugin mode
        if (url) {
            saveConfig({ mode: 'plugin', mcpUrl: url })
            console.log(`MCP URL saved to ${getConfigPath()}`)
            console.log(
                `Run \`unframer --help\` to see all available MCP commands`,
            )
            return
        }

        // Show mode selection dropdown
        const mode = await select<McpMode>({
            message: 'Select authentication mode:',
            choices: [
                {
                    value: 'plugin' as McpMode,
                    name: 'MCP Plugin (Recommended)',
                    description:
                        'Requires Framer to be open with MCP plugin running. Paste URL from plugin.',
                },
                {
                    value: 'server-api' as McpMode,
                    name: 'Server API',
                    description:
                        'Works without Framer open. Requires API key from project settings.',
                },
            ],
        })

        if (mode === 'plugin') {
            const shortcut = process.platform === 'darwin' ? 'Cmd+K' : 'Ctrl+K'
            console.log('\nTo get your MCP URL:')
            console.log('  1. Go to https://framer.com and open your project')
            console.log(`  2. Press ${shortcut} and search for "MCP" plugin`)
            console.log('  3. Copy the URL shown in the plugin\n')

            const mcpUrl = await input({ message: 'Paste MCP URL:' })
            if (!mcpUrl) {
                console.error('MCP URL is required')
                process.exit(1)
            }
            saveConfig({ mode: 'plugin', mcpUrl })
            console.log(`\nMCP URL saved to ${getConfigPath()}`)
            console.log(
                `Run \`unframer --help\` to see all available MCP commands`,
            )
        } else {
            // Server API mode
            console.log('\nTo get your API key:')
            console.log('  1. Open your Framer project at https://framer.com/projects')
            console.log('  2. Go to Project Settings > API')
            console.log('  3. Generate or copy your API key\n')

            const apiKey = await password({ message: 'Enter Framer API key:', mask: '*' })
            if (!apiKey) {
                console.error('API key is required')
                process.exit(1)
            }

            console.log('\nTo get your project URL:')
            console.log(
                '  Copy the URL from your browser when viewing the project',
            )
            console.log(
                '  Example: https://framer.com/projects/MyProject--abc123\n',
            )

            const projectUrl = await input({
                message:
                    'Enter Framer project URL (optional, can use --project later):',
            })

            saveConfig({
                mode: 'server-api',
                framerApiKey: apiKey,
                framerProjectUrl: projectUrl || undefined,
            })
            console.log(`\nServer API credentials saved to ${getConfigPath()}`)
            console.log(`\nUsage:`)
            if (projectUrl) {
                console.log(`  unframer mcp getProjectXml`)
            } else {
                console.log(
                    `  unframer mcp getProjectXml --project "https://framer.com/projects/..."`,
                )
            }
            console.log(`\nOr set FRAMER_PROJECT_URL environment variable`)
        }
    } catch (error) {
        if (error instanceof Error && error.name === 'ExitPromptError') {
            process.exit(0)
        }
        throw error
    }
})

// Add MCP tool commands
const config = loadConfig()
const cliArgs = process.argv.slice(2)
const hasMcpCommand = cliArgs.includes('mcp')
const hasProjectOption = cliArgs.some((arg) => {
    return arg === '--project' || arg.startsWith('--project=')
})
const shouldUseServerApiForProjectOption = hasMcpCommand && hasProjectOption
const mcpMode = shouldUseServerApiForProjectOption
    ? 'server-api'
    : config.mode || (config.mcpUrl ? 'plugin' : undefined)

if (mcpMode === 'server-api') {
    // Server API mode - use framer-api directly
    // Commands are registered via registerServerApiCommands below
    await registerServerApiCommands()
} else {
    // Plugin mode - use MCP transport
    await addMcpCommands({
        cli,
        commandPrefix: 'mcp',
        getMcpTransport: async (sessionId?: string) => {
            const { StreamableHTTPClientTransport } = await import(
                '@modelcontextprotocol/sdk/client/streamableHttp.js'
            )
            // UNFRAMER_MCP_URL env var overrides config file (contains full URL with auth)
            const mcpUrl = process.env.UNFRAMER_MCP_URL || loadConfig().mcpUrl
            if (!mcpUrl) {
                return null
            }
            const url = new URL(mcpUrl)
            // Use /mcp endpoint for StreamableHTTP
            if (url.pathname.endsWith('/sse')) {
                url.pathname = url.pathname.replace(/\/sse$/, '/mcp')
            }
            return new StreamableHTTPClientTransport(url, { sessionId })
        },
        loadCache: () => {
            return loadConfig().cachedMcpTools
        },
        saveCache: (cache) => {
            const configNow = loadConfig()
            saveConfig({ ...configNow, cachedMcpTools: cache })
        },
    }).catch((e) => console.error(e))
}

/**
 * Register MCP commands for server-api mode using framer-api directly.
 * This bypasses the MCP transport and calls handlers directly.
 */
async function registerServerApiCommands() {
    // Dynamic import to avoid loading framer-api in plugin mode
    const { connect } = await import('framer-api')

    // Import tool definitions and handler from plugin-mcp
    // Note: Run `pnpm --filter plugin-mcp build && pnpm --filter plugin-mcp gen-unframer` first
    const { mcpTools, mcpToolHandler } = await import('./plugin-mcp-dist/lib/mcp-handlers.js')
    if (!mcpTools || !mcpToolHandler) {
        return
    }

    type JsonSchemaProperty = {
        type?: string | string[]
        description?: string
        default?: unknown
        [key: string]: unknown
    }
    type JsonSchemaObject = {
        properties?: Record<string, JsonSchemaProperty>
        required?: string[]
    }

    // Register a command for each MCP tool
    for (const [toolName, toolDef] of Object.entries(mcpTools) as [
        keyof typeof mcpTools,
        (typeof mcpTools)[keyof typeof mcpTools],
    ][]) {
        const cmd = cli.command(
            `mcp ${String(toolName)}`,
            toolDef.description.split('\n')[0], // First line as short description
        )

        cmd.option(
            '--project <url>',
            'Framer project URL. Uses server-api mode (framer-api headless). Works alongside plugin mode login, pass --project to switch to server-api for a single command. Also reads FRAMER_PROJECT_URL env var.',
        )

        // Add options based on tool input schema, using zod v4 native JSON Schema conversion
        const inputSchema = toolDef.input
        if (inputSchema) {
            const jsonSchema = z.toJSONSchema(inputSchema) as JsonSchemaObject
            const properties = jsonSchema.properties || {}
            const required = new Set(jsonSchema.required || [])
            for (const [key, prop] of Object.entries(properties)) {
                const isRequired = required.has(key)
                const isBooleanType = prop.type === 'boolean'
                const optionName = isBooleanType
                    ? `--${key}`
                    : `--${key} <value>`
                const optionDescription = [
                    prop.description || key,
                    isRequired ? '(required)' : '',
                ]
                    .filter(Boolean)
                    .join(' ')
                if (isBooleanType && prop.default === undefined) {
                    cmd.option(optionName, optionDescription)
                    continue
                }
                cmd.option(
                    optionName,
                    wrapJsonSchema({
                        ...prop,
                        description: optionDescription,
                    }),
                )
            }
        }

        cmd.action(async (options: Record<string, unknown>) => {
            const projectOption =
                typeof options.project === 'string'
                    ? options.project
                    : undefined
            const projectUrl =
                projectOption ||
                process.env.FRAMER_PROJECT_URL ||
                loadConfig().framerProjectUrl
            const apiKey =
                process.env.FRAMER_API_KEY || loadConfig().framerApiKey

            if (!projectUrl) {
                console.error(
                    'Project URL required. Use --project option, FRAMER_PROJECT_URL env var, or set during login.',
                )
                process.exit(1)
            }
            if (!apiKey) {
                console.error(
                    'API key required. Set FRAMER_API_KEY env var or run `unframer mcp login` first.',
                )
                process.exit(1)
            }

            // Remove CLI-specific options from input
            const toolInput = Object.fromEntries(
                Object.entries(options).filter(([key]) => {
                    return key !== 'project'
                }),
            )

            const globalWithFramer = globalThis as typeof globalThis & {
                framer?: unknown
            }
            let framerClient: Awaited<ReturnType<typeof connect>> | undefined =
                undefined
            let actionError: unknown = undefined

            try {
                spinner.start(`Connecting to Framer...`)
                framerClient = await connect(projectUrl, apiKey)

                // Set global framer for utility functions that use it
                globalWithFramer.framer = framerClient

                spinner.start(`Running ${String(toolName)}...`)
                const result = await mcpToolHandler({
                    type: toolName,
                    input: toolInput,
                })
                spinner.stop('')

                // Output result
                if (typeof result === 'string') {
                    console.log(result)
                } else {
                    console.log(JSON.stringify(result, null, 2))
                }

            } catch (error) {
                actionError = error
            } finally {
                if (framerClient) {
                    try {
                        await framerClient.disconnect()
                    } catch (disconnectError) {
                        logger.error('Failed disconnecting from Framer:', disconnectError)
                    }
                }
                delete globalWithFramer.framer
            }

            if (actionError) {
                spinner.error(
                    `Failed: ${actionError instanceof Error ? actionError.message : String(actionError)}`,
                )
                process.exit(1)
            }
        })
    }
}

export type Config = {
    jsx?: boolean
    components: {
        [name: string]: string
    }
    componentBreakpoints?: {
        variantId: string
        componentId: string
        componentName: string
        breakpointName: string
        width: number
    }[]
    externalPackages?: string[]
    allExternal?: boolean
    projectId?: string
    fullFramerProjectId?: string
    projectName?: string
    framerWebPages?: {
        webPageId: string
        components?: string[]
        path: string
    }[]

    locales?: {
        code: string
        id: string
        name: string
        slug: string
    }[]
    breakpoints?: BreakpointSizes
    tokens?: StyleToken[]
    outDir?: string
    componentInstancesInIndexPage: ComponentInstanceInPage[]
    pageBackgroundColor?: string
    // [key: string]: any
}

type ComponentInstanceInPage = {
    pageOrdering: number
    componentId: string
    componentPathSlug: string
    controls: Record<string, any>
    nodeDepth: number
    // pagePath: string
    webPageId: string
}

/**
 * Merge multiple project configs into a single Config so esbuild bundles all
 * components together and deduplicates shared chunks automatically.
 *
 * - Components maps are merged; on name collision the second project's component
 *   is prefixed with the project name to disambiguate.
 * - First project's projectId/projectName/fullFramerProjectId are used as the
 *   primary identifiers (framerSiteId in ContextProviders).
 * - Arrays (componentBreakpoints, tokens, locales, framerWebPages, etc.) are concatenated.
 */
function mergeConfigs(configs: Config[]): Config {
    if (configs.length === 0) {
        throw new Error('mergeConfigs called with empty array')
    }
    if (configs.length === 1) {
        return configs[0]
    }

    const first = configs[0]

    // Merge components maps, disambiguating name collisions.
    // Track rename maps per config so we can update breakpoints and instances.
    const mergedComponents: Record<string, string> = {}
    const renameMaps: Map<string, string>[] = []

    for (const config of configs) {
        const projectSlug = kebabCase(config.projectName || config.projectId || '')
        const renameMap = new Map<string, string>()
        renameMaps.push(renameMap)

        for (const [name, url] of Object.entries(config.components)) {
            if (mergedComponents[name]) {
                // Name collision: prefix with project slug, ensure uniqueness with numeric suffix
                const base = projectSlug ? `${projectSlug}/${name}` : `${config.projectId}/${name}`
                const disambiguated = uniqueComponentName(base, mergedComponents)
                logger.log(`Component name collision for "${name}", renaming to "${disambiguated}"`)
                renameMap.set(name, disambiguated)
                mergedComponents[disambiguated] = url
            } else {
                mergedComponents[name] = url
            }
        }
    }

    // Merge componentBreakpoints, updating componentName for any renamed components
    const mergedBreakpoints = configs.flatMap((config, i) => {
        const renameMap = renameMaps[i]
        return (config.componentBreakpoints || []).map((bp) => {
            const renamed = renameMap.get(bp.componentName)
            if (renamed) {
                return { ...bp, componentName: renamed }
            }
            return bp
        })
    })

    // Merge tokens, deduplicate by id (keep first occurrence)
    const seenTokenIds = new Set<string>()
    const mergedTokens = configs.flatMap((config) => {
        return (config.tokens || []).filter((token) => {
            if (seenTokenIds.has(token.id)) {
                return false
            }
            seenTokenIds.add(token.id)
            return true
        })
    })

    // Merge locales, deduplicate by code
    const seenLocaleCodes = new Set<string>()
    const mergedLocales = configs.flatMap((config) => {
        return (config.locales || []).filter((locale) => {
            if (seenLocaleCodes.has(locale.code)) {
                return false
            }
            seenLocaleCodes.add(locale.code)
            return true
        })
    })

    // Merge framerWebPages
    const mergedWebPages = configs.flatMap((config) => {
        return config.framerWebPages || []
    })

    // Merge componentInstancesInIndexPage, updating componentPathSlug for renamed components
    const mergedInstances = configs.flatMap((config, i) => {
        const renameMap = renameMaps[i]
        return (config.componentInstancesInIndexPage || []).map((instance) => {
            const renamed = renameMap.get(instance.componentPathSlug)
            if (renamed) {
                return { ...instance, componentPathSlug: renamed }
            }
            return instance
        })
    }).sort((a, b) => {
        return a.pageOrdering - b.pageOrdering
    })

    const projectNames = configs
        .map((c) => c.projectName)
        .filter(isTruthy)
    spinner.info(`Merging ${configs.length} projects: ${projectNames.join(', ')}`)

    return {
        ...first,
        components: mergedComponents,
        componentBreakpoints: mergedBreakpoints,
        tokens: mergedTokens,
        locales: mergedLocales,
        framerWebPages: mergedWebPages,
        componentInstancesInIndexPage: mergedInstances,
    }
}

/** Generate a unique component name by appending a numeric suffix if the base already exists */
function uniqueComponentName(base: string, existing: Record<string, string>): string {
    if (!existing[base]) {
        return base
    }
    let index = 2
    while (existing[`${base}-${index}`]) {
        index++
    }
    return `${base}-${index}`
}

export async function configFromFetch({
    projectId,
    externalPackages = [] as string[],
    allExternal = false,
    agent = '',
    outDir = undefined as undefined | string,
}) {
    logger.log(`Fetching config for project ${projectId}`)

    const baseUrl = (
        process.env.UNFRAMER_SERVER_URL || 'https://unframer.co'
    ).replace(/\/$/, '')
    if (process.env.UNFRAMER_SERVER_URL) {
        console.log(`using server url ${baseUrl}`)
    }

    spinner.start(`Fetching config for project ${projectId}`)
    const agentHeader =
        agent ||
        (process.env.GITHUB_ACTIONS === 'true' ? 'github-actions' : 'cli')
    const response = await fetch(
        `${baseUrl}/api/plugins/reactExportPlugin/project/${encodeURIComponent(projectId)}`,
        { headers: { 'X-Agent': agentHeader } },
    )
    const text = await response.text()
    const parsed = (() => {
        try {
            return JSON.parse(text)
        } catch {
            return text
        }
    })()

    if (!response.ok) {
        if (response.status === 402) {
            const buyUrl = parsed?.buyUrl

            const message = (() => {
                if (typeof parsed === 'object' && parsed?.message) {
                    return String(parsed.message)
                }
                return 'A React Export subscription is required to download components.'
            })()

            spinner.error(message)
            console.info('')
            console.info(
                'Go to this url to buy the Framer React Export subscription:\n',
            )
            console.info(green(buyUrl))
            console.info()
            process.exit(1)
        }
        spinner.error('Error fetching project data:')
        console.error(parsed)
        throw new Error(`HTTP ${response.status}`, { cause: parsed })
    }
    const data = parsed
    spinner.info(`Got Framer project data`)
    const websiteUrl = data?.project?.websiteUrl

    const projectName = data?.project?.projectName || ''
    if (projectName) {
        spinner.info(`Using project: ${projectName}`)
    }
    let cwd = path.resolve(process.cwd(), outDir || 'framer')

    const indexPage = data?.framerWebPages?.find((x) => x.path === '/')
    const componentInstancesInIndexPage =
        data.componentInstances
            ?.filter((x) => x.webPageId === indexPage?.webPageId)
            .map((x) => {
                const component = data.components.find((c) => {
                    return x.componentId === c.id
                })
                if (!component) {
                    console.error(
                        new Error(
                            `cannot find component for instance ${x.componentId}`,
                        ),
                    )
                }
                const componentPathSlug = componentNameToPath(
                    component?.name || '',
                )
                const res: ComponentInstanceInPage = {
                    ...x,
                    controls: x.controls as any,
                    componentPathSlug,
                }
                return res
            })
            .sort((a, b) => {
                return a.pageOrdering - b.pageOrdering
            }) || []
    const config: Config = {
        ...data,
        pageBackgroundColor: data.project?.pageBackgroundColor || '',
        breakpoints: defaultBreakpointSizes,
        outDir,
        externalPackages,
        allExternal,
        projectId: data?.project?.projectId,
        projectName,
        fullFramerProjectId: data?.project?.fullFramerProjectId!,
        locales: data?.locales,

        components: Object.fromEntries(
            data.components.map((c) => [componentNameToPath(c.name), c.url]),
        ),
        componentBreakpoints:
            data.breakpoints
                ?.map((b) => {
                    const c = data.components.find(
                        (c) => c.id === b.componentId,
                    )
                    if (!c) {
                        return
                    }
                    return {
                        ...b,
                        componentName: componentNameToPath(c.name),
                    }
                })
                .filter(isTruthy) || [],
        tokens: data.colorStyles,
        componentInstancesInIndexPage,
        framerWebPages: data.framerWebPages || [],
    }
    return { websiteUrl, cwd, config }
}

function findUp(
    configNames: string[],
    { cwd }: { cwd: string },
): string | null {
    let currentDir = cwd

    while (true) {
        for (const configName of configNames) {
            const configPath = path.join(currentDir, configName)
            if (fs.existsSync(configPath)) {
                return configPath
            }
        }

        const parentDir = path.dirname(currentDir)
        if (parentDir === currentDir) {
            // Reached the root directory
            break
        }
        currentDir = parentDir
    }

    return null
}
