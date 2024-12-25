import { setMaxListeners } from 'events'
import JSON from 'json5'
import { bundle, StyleToken } from './exporter.js'

import { cac } from 'cac'
import findUp from 'find-up'
import fs from 'fs-extra'
import path, { basename } from 'path'
import { BreakpointSizes } from './css.js'
import { componentNameToPath, logger, spinner } from './utils.js'
const configNames = ['unframer.config.json', 'unframer.json']
import kebabCase from 'just-kebab-case'

export const cli = cac('unframer')

let defaultOutDir = 'framer'

cli.command('[projectId]', 'Run unframer with optional project ID')
    .option('--outDir <dir>', 'Output directory', { default: defaultOutDir })
    .action(async function main(projectId, options) {
        const outDir = options.outDir
        if (projectId) {
            logger.log(`Fetching config for project ${projectId}`)
            const response = await fetch(
                new URL(
                    `/api/plugins/reactExportPlugin/project/${projectId}`,
                    process.env.UNFRAMER_SERVER_URL || 'https://unframer.co',
                ).toString(),
            )
            if (!response.ok) {
                console.error(`Failed to fetch Framer config`)
                logger.error('Response: ' + (await response.text()))
                return
            }
            const data = await response.json()
            logger.log('unframer data', data)
            const projectName = data?.project?.projectName || ''
            if (projectName) {
                spinner.info(`Using project: ${projectName}`)
            }
            let cwd = path.resolve(process.cwd(), outDir || 'framer')
            return await bundle({
                config: {
                    outDir,
                    projectId: data?.project?.id,
                    projectName,
                    components: Object.fromEntries(
                        data.components.map((c) => [
                            componentNameToPath(c.name),
                            c.url,
                        ]),
                    ),
                    tokens: data.colorStyles,
                    framerWebPages: data.framerWebPages || [],
                },
                watch: false,

                cwd,
                signal: new AbortController().signal,
            })
        }

        fixOldUnframerPath()
        const cwd = process.cwd()
        logger.log(`Looking for ${configNames.join(', ')} in ${cwd}`)
        const configPath = await findUp(configNames, { cwd })
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
        const config = JSON.parse(configContent)
        if (outDir !== defaultOutDir) {
            config.outDir = outDir
        }

        let controller = new AbortController()
        setMaxListeners(0, controller.signal)
        await bundle({
            config,
            watch: false,
            signal: controller.signal,
            cwd: path.resolve(process.cwd(), config.outDir || 'framer'),
        })
    })

const defaultConfig = `{
    "schema": "https://unframer-schema.vercel.app/schema.json",
    "outDir": "./framer",
    "components": {
        // add here your Framer components urls, the code will be written to outDir/{componentName}.js
        "example-hero": "https://framer.com/m/Header-WtSW.js",
    }
}
`

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
const version = require('../package.json').version

cli.version(version).help()

cli.command('init', 'Init the unframer.config.json config').action(
    async (options) => {
        let fixed = fixOldUnframerPath()
        if (fixed) {
            return
        }
        fs.writeFileSync(`unframer.config.json`, defaultConfig)
        const p = path.resolve(process.cwd(), 'unframer.config.json')
        console.log(`${p} file created`)
    },
)

function safeJsonParse(json: string) {
    try {
        return JSON.parse(json)
    } catch (e) {
        return null
    }
}

function pluck<T, K extends keyof T>(o: T, names: K[]): { [k: string]: T[K] } {
    return Object.fromEntries(names.map((n) => [n, o[n]]))
}

function getNewNames(oldConfig: Config, newConfig: Config) {
    // get the new names, also check if the previous url (object value) has changed
    const oldKeys = Object.keys(oldConfig.components)
    const newKeys = Object.keys(newConfig.components)
    const newNames = newKeys.filter((key) => {
        if (!oldKeys.includes(key)) {
            return true
        }
        if (oldConfig.components[key] !== newConfig.components[key]) {
            return true
        }
        return false
    })
    return newNames
}

export type Config = {
    components: {
        [name: string]: string
    }
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
}
