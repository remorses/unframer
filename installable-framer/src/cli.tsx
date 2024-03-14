import { bundle, logger } from './exporter.js'
import chokidar from 'chokidar'
import fs from 'fs-extra'
import { findUp } from 'find-up'
import tmp from 'tmp'
import path from 'path'
const configName = 'installable-framer.json'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

export async function cli() {
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

    await processConfig(config)
    if (watch) {
        const watcher = chokidar.watch(configPath, {
            persistent: true,
        })
        let controller = new AbortController()

        watcher.on('change', async (path) => {
            console.log()
            controller.abort()
            controller = new AbortController()

            const newConfig = safeJsonParse(fs.readFileSync(configPath, 'utf8'))
            if (!newConfig) {
                logger.log(`Invalid ${configName} file`)
                return
            }
            const newNames = getNewNames(config, newConfig)
            if (newNames.length) {
                logger.log(`New components found: ${newNames.join(', ')}`)
                await processConfig(
                    {
                        ...newConfig,
                        components: pluck(newConfig.components, newNames),
                    },
                    controller.signal,
                )
            }
            config = newConfig
        })
    }
}
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
async function processConfig(config: Config, signal?: AbortSignal) {
    try {
        const { components, outDir } = config || {}
        const installDir = path.resolve(process.cwd(), outDir || 'framer')
        if (!components) {
            logger.log(`No components found in ${configName}`)
            return
        }

        await Promise.all(
            Object.keys(components).map(async (name) => {
                const url = components[name]
                logger.log(
                    `Installing framer component installable-framer/${name}`,
                )
                const tempFolder = tmp.dirSync({ unsafeCleanup: true }).name
                // logger.log('tempFolder', tempFolder)
                const { files } = await bundle({
                    url,
                    name,
                    cwd: tempFolder,
                    signal,
                })
                if (signal?.aborted) {
                    return
                }
                const out = path.resolve(installDir, name)
                fs.mkdirSync(out, { recursive: true })
                logger.log(`Copying files to ${out}`)
                await fs.copy(tempFolder, out, {
                    overwrite: true,
                    filter(x) {
                        if (x.includes('package.json')) {
                            return false
                        }
                        return true
                    },
                })
            }),
        )
    } catch (e: any) {
        if (signal) {
            logger.log('Error processing config', e.message)
            return
        }
        throw e
    }
}
