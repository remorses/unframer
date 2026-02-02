import { setMaxListeners } from 'events'
import pkg from '../package.json' with { type: 'json' }
import pico from 'picocolors'
const { blue, bgBlue, green } = pico
import { fetch } from 'undici'
import './sentry.js'
import { input } from '@inquirer/prompts'

import { bundle, StyleToken, createExampleComponentCode } from './exporter.js'
import { createClient } from './generated/api-client.js'
import { generateStackblitzFiles } from './stackblitz.js'

import { cac } from '@xmorse/cac'
import { exec } from 'child_process'
import { promisify } from 'util'

import fs from 'fs'
import path, { basename } from 'path'
import { BreakpointSizes, defaultBreakpointSizes } from './css.js'
import {
    componentNameToPath,
    dedent,
    isTruthy,
    logger,
    sleep,
    spinner,
} from './utils.js'
import { getPackageManager } from './package-manager.js'
import { notifyError } from './sentry.js'
import { dispatcher } from './undici-dispatcher.js'
import { loadConfig, saveConfig, getConfigPath } from './lib/config.js'
import { addMcpCommands } from 'mcpcac'
import { SSEClientTransport } from '@modelcontextprotocol/sdk/client/sse.js'
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js'

const configNames = ['unframer.config.json', 'unframer.json']

export const cli = cac('unframer')

let defaultOutDir = 'framer'

cli.command('[projectId]', 'Run unframer with optional project ID')
    .option('--outDir <dir>', 'Output directory', { default: defaultOutDir })
    .option(
        '--external [package]',
        'Make some package external, do not pass a package name to make all packages external',
        {
            default: true,
        },
    )
    .option('--watch', 'Watch for changes and rebuild', { default: false })
    .option('--jsx', 'Output jsx code instead of minified .js code', {
        default: true,
    })
    .option('--debug', 'Enable debug logging', { default: false })
    .option('--metafile', 'Generate meta.json file with build metadata', {
        default: false,
    })
  .action(async function main(projectId, options) {
        const external_ = options.external
        const allExternal = external_ === true
        const externalPackages: string[] = Array.isArray(external_)
            ? external_.filter((x) => x.trim())
            : typeof external_ === 'string'
              ? [external_]
              : []
        try {
            if (options.debug) {
                logger.debug = true
            }
            const outDir = options.outDir
            const controller = new AbortController()
            const signal = controller.signal
            const watch = options.watch
            if (projectId) {
                const { config, cwd, websiteUrl } = await configFromFetch({
                    allExternal,
                    externalPackages,
                    outDir,
                    projectId,
                })
                let jsx = options.jsx
                const { rebuild, buildContext } = await bundle({
                    config: {
                        jsx,
                        ...config,
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
    .option('--outDir <dir>', 'Output directory', {
        default: 'example-unframer-app',
    })
    .action(async (projectId, options) => {
        if (!projectId?.trim()) {
            console.log(
                `unframer example-app requires a project id positional param`,
            )
            process.exit(1)
        }
        try {
            const outDir = options.outDir
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
    'Login by pasting your Framer MCP URL. Get the URL from Framer MCP plugin (Cmd/Ctrl+K > "MCP"). After login, run "unframer mcp skill" to see all available commands then. This cli will let you control Framer MCP via cli commands like `unframer mcp getProjectXml`',
).action(async (url?: string) => {
    // Prompt for URL if not provided, avoids shell escaping issues with & in URLs
    if (!url) {
        const shortcut = process.platform === 'darwin' ? 'Cmd+K' : 'Ctrl+K'
        console.log('\nTo get your MCP URL:')
        console.log('  1. Go to https://framer.com and open your project')
        console.log(`  2. Press ${shortcut} and search for "MCP" plugin`)
        console.log('  3. Copy the URL shown in the plugin\n')
    }
    let mcpUrl = url
    if (!mcpUrl) {
        try {
            mcpUrl = await input({ message: 'Paste MCP URL:' })
        } catch (error) {
            // Handle Ctrl+C gracefully
            if (error instanceof Error && error.name === 'ExitPromptError') {
                process.exit(0)
            }
            throw error
        }
    }
    if (!mcpUrl) {
        console.error('MCP URL is required')
        process.exit(1)
    }
    saveConfig({ mcpUrl })
    console.log(`MCP URL saved to ${getConfigPath()}`)
    console.log(`Now you must run \`unframer mcp skill\` to see how to unframer CLI. Every Framer MCP command is exposed as a cli command`)

})

cli.command(
    'mcp skill',
    'Show detailed help for all MCP commands with their options.',
).action(() => {
    const config = loadConfig()
    if (!config.mcpUrl) {
        console.log('No MCP URL configured. Run "unframer mcp login" first to connect to a Framer project.')
        return
    }
    const mcpCommands = cli.commands.filter(
        (cmd) => cmd.name.startsWith('mcp ') && cmd.name !== 'mcp login' && cmd.name !== 'mcp skill',
    )
    if (mcpCommands.length === 0) {
        console.log('No MCP commands available. Run "unframer mcp login" first and paste there the Framer MCP url.')
        return
    }
    for (const cmd of mcpCommands) {
        cmd.outputHelp()
        console.log('')
    }
})

// Add MCP tool commands - only registered if transport is available
await addMcpCommands({
    cli,
    commandPrefix: 'mcp',
    getMcpTransport: (sessionId?: string) => {
        const config = loadConfig()
        if (!config.mcpUrl) {
            return null
        }
        const url = new URL(config.mcpUrl)
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
        const config = loadConfig()
        saveConfig({ ...config, cachedMcpTools: cache })
    },
}).catch(e => console.error(e))


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

export async function configFromFetch({
    projectId,
    externalPackages = [] as string[],
    allExternal = false,
    agent = '',
    outDir = undefined as undefined | string,
}) {
    logger.log(`Fetching config for project ${projectId}`)

    const url = process.env.UNFRAMER_SERVER_URL
    if (url) {
        console.log(`using server url ${url}`)
    }
    const client = await createClient({
        url: url || 'https://unframer.co',
        headers: {
            'X-Agent':
                agent ||
                (process.env.GITHUB_ACTIONS === 'true'
                    ? 'github-actions'
                    : 'cli'),
        },
    })

    spinner.start(`Fetching config for project ${projectId}`)
    const { data, error } = await client.api.plugins.reactExportPlugin
        .project({ projectId })
        .get()
    if (error) {
        if (error.status === 402) {
            const rawValue = error.value
            const buyUrl = rawValue?.buyUrl

            const message = (() => {
                if (typeof rawValue === 'object' && rawValue?.message) {
                    return String(rawValue.message)
                }
                return 'A React Export subscription is required to download components.'
            })()

            // spinner.error(details)
            spinner.error(message)
            console.info('')
            console.info(
                'Go to this url to buy the Framer React Export subscription:\n',
            )
            console.info(green(buyUrl))
            console.info()
            process.exit(1)
            // throw new Error(details, { cause: error })
        }
        spinner.error('Error fetching project data:')
        console.error(error)
        throw error
    }
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
