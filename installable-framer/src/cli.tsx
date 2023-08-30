import { bundle, logger } from './exporter.js'
import fs from 'fs-extra'
import { findUp } from 'find-up'
import tmp from 'tmp'
import path from 'path'
const configName = 'installable-framer.json'



export async function postinstall() {
    const configPath = await findUp([configName])
    if (!configPath) {
        logger.log(`No ${configName} found`)
        return
    }
    const config = require(configPath)
    if (!config) {
        logger.log(`No ${configName} found`)
        return
    }
    const installDir = __dirname
    const { components } = config
    await Promise.all(
        Object.keys(components).map(async (name) => {
            const url = components[name]
            logger.log(`Installing framer component installable-framer/${name}`)
            const tempFolder = tmp.dirSync({ unsafeCleanup: true }).name
            // logger.log('tempFolder', tempFolder)
            const { files, packageJson } = await bundle({
                url,
                cwd: tempFolder,
            })
            const out = path.resolve(installDir, name)
            fs.mkdirSync(out, { recursive: true })
            await fs.copy(tempFolder, out, { overwrite: true })
        }),
    )
}
