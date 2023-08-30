import { bundle, logger } from './exporter.js'
import fs from 'fs-extra'
import { findUp } from 'find-up'
import tmp from 'tmp'
import path from 'path'
const configName = 'installable-framer.json'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

export async function postinstall() {
    const cwd = process.cwd()
    logger.log(`Looking for ${configName} in ${cwd}`)
    const configPath = await findUp([configName], {cwd})
    if (!configPath) {
        logger.log(`No ${configName} found`)
        return
    }
    const configContent = fs.readFileSync(configPath, 'utf8')
    if (!configContent) {
        logger.log(`No ${configName} contents found`)
        return
    }
    const config = JSON.parse(configContent)
    const installDir = __dirname
    const { components } = config || {}
    if (!components) {
        logger.log(`No components found in ${configName}`)
        return
    }
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
