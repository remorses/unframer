import { bundle, logger } from './exporter.js'
import JSON from 'json5'
import events, { EventEmitter, setMaxListeners } from 'events'

import chokidar from 'chokidar'
import fs from 'fs-extra'
import { findUp } from 'find-up'
import tmp from 'tmp'
import path from 'path'
const configName = 'unframer.json'
import { cac } from 'cac'

export const cli = cac()

const __dirname = path.dirname(new URL(import.meta.url).pathname)

cli.command('', 'Run unframer')
    .option('--watch', 'Watch for Framer and unframer.json changes')
    .action(async function main(options) {
        const cwd = process.cwd()
        const watch = process.argv.includes('--watch')
        logger.log(`Looking for ${configName} in ${cwd}`)
        const configPath = await findUp([configName], { cwd })
        if (!configPath) {
            logger.log(`No ${configName} found`)
            return
        }
        const configContent = fs.readFileSync(configPath, 'utf8')
        if (!configContent) {
            logger.log(`No ${configName} contents found`)
            return
        }
        let config = JSON.parse(configContent)

        let controller = new AbortController()
        setMaxListeners(0, controller.signal)
        processConfig({ config, watch, signal: controller.signal })
        if (!watch) {
            return
        }

        const watcher = chokidar.watch(configPath!, {
            persistent: true,
        })

        watcher.on('change', async (path) => {
            logger.log(`${configName} changed`)
            console.log()
            controller.abort()

            controller = new AbortController()
            setMaxListeners(0, controller.signal)

            const newConfig = safeJsonParse(
                fs.readFileSync(configPath!, 'utf8'),
            )
            if (!newConfig) {
                logger.log(`Invalid ${configName} file`)
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

cli.command('init', 'Init the unframer.json config').action(async (options) => {
    fs.writeFileSync(`unframer.json`, defaultConfig)
    const p = path.resolve(process.cwd(), 'unframer.json')
    console.log(`${p} file created`)
})

cli.help()

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
    outDir?: string
}
async function processConfig({
    config,
    watch,
    signal,
}: {
    config: Config
    watch: boolean
    signal?: AbortSignal
}) {
    try {
        const { components, outDir } = config || {}
        const installDir = path.resolve(process.cwd(), outDir || 'framer')
        if (!components) {
            logger.log(`No components found in ${configName}`)
            return
        }

        await bundle({
            components,
            cwd: installDir,
            watch,
            signal,
        })
    } catch (e: any) {
        if (signal) {
            logger.log('Error processing config', e.message)
            return
        }
        throw e
    }
}
