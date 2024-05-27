import { bundle } from './exporter.js'
import JSON from 'json5'
import events, { EventEmitter, setMaxListeners } from 'events'

import chokidar from 'chokidar'
import fs from 'fs-extra'
import findUp from 'find-up'
import tmp from 'tmp'
import path, { basename } from 'path'
const configNames = ['unframer.config.json', 'unframer.json']
import { cac } from 'cac'
import { logger } from './utils.js'
import { BreakpointSizes } from './css.js'

export const cli = cac('unframer')

cli.command('', 'Run unframer')
    .option('--watch', 'Watch for Framer and unframer.config.json changes')
    .action(async function main(options) {
        fixOldUnframerPath()
        const cwd = process.cwd()
        const watch = process.argv.includes('--watch')
        logger.log(`Looking for ${configNames.join(', ')} in ${cwd}`)
        const configPath = await findUp(configNames, { cwd })
        if (!configPath) {
            logger.log(`No ${configNames.join(', ')} found`)
            return
        }
        let configBasename = basename(configPath!)
        const configContent = fs.readFileSync(configPath, 'utf8')
        if (!configContent) {
            logger.log(`No ${configBasename} contents found`)
            return
        }
        let config = JSON.parse(configContent)

        let controller = new AbortController()
        setMaxListeners(0, controller.signal)
        processConfig({
            config,
            watch,
            signal: controller.signal,
            configBasename,
        })
        if (!watch) {
            return
        }

        const watcher = chokidar.watch(configPath!, {
            persistent: true,
        })

        watcher.on('change', async (path) => {
            logger.log(`${configBasename} changed`)
            console.log()
            controller.abort()

            controller = new AbortController()
            setMaxListeners(0, controller.signal)

            const newConfig = safeJsonParse(
                fs.readFileSync(configPath!, 'utf8'),
            )
            if (!newConfig) {
                logger.log(`Invalid ${configBasename} file`)
                return
            }
            const newNames = getNewNames(config, newConfig)
            if (newNames.length) {
                logger.log(`New components found: ${newNames.join(', ')}`)
                await processConfig({
                    config: {
                        ...newConfig,
                        components: pluck(newConfig.components, newNames),
                    },
                    watch,
                    configBasename,
                    // signal: controller.signal,
                })
            }
            config = newConfig
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

const version = require('../package.json').version

cli.version(version).help()

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

type Config = {
    components: {
        [name: string]: string
    }
    breakpoints?: BreakpointSizes
    outDir?: string
}
async function processConfig({
    config,
    watch,
    signal,
    configBasename,
}: {
    config: Config
    watch: boolean
    configBasename: string
    signal?: AbortSignal
}) {
    try {
        const { components, breakpoints, outDir } = config || {}
        const installDir = path.resolve(process.cwd(), outDir || 'framer')
        if (!components) {
            logger.log(`No components found in ${configBasename}`)
            return
        }

        await bundle({
            components,
            breakpoints,
            cwd: installDir,
            watch,
            signal,
        })
    } catch (e: any) {
        if (signal) {
            logger.log('Error processing config', e.stack)
            return
        }
        throw e
    }
}
