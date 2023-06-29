import express from 'express'

import fs from 'fs'
import tmp, { file } from 'tmp'

import { promisify } from 'util'
import * as stream from 'stream'
const pipeline = promisify(stream.pipeline)

const app = express()
const port = 8080

import * as tt from 'tar-transform'
import { bundle } from './exporter'

app.get('/m/:moduleName', async (req, response, next) => {
    const { moduleName } = req.params
    if (!moduleName) {
        throw new Error('No module name provided')
    }
    try {
        // https://framer.com/m/Mega-Menu-2wT3.js@W0zNsrcZ2WAwVuzt0BCl
        let url = `https://framer.com/m/${moduleName}`
        const tempFolder = tmp.dirSync({ unsafeCleanup: true }).name
        console.log('tempFolder', tempFolder)
        const { files, packageJson } = await bundle({ url, cwd: tempFolder })
        response.setHeader(
            'Content-Disposition',
            `attachment; filename="${[packageJson.name]
                .filter(Boolean)
                .join('-')}.tgz"`,
        )
        response.setHeader('Content-Type', 'application/gzip')
        // cache in CDN for 10 seconds
        response.setHeader('Cache-Control', 'public, max-age=10')
        // response.setHeader('Content-Type', 'application/gzip')
        await pipeline([
            // read all files in tempFolder and zip them
            stream.Readable.from([
                // { headers: { name: "README.md" }, content: "# tar-transform" },
                ...files.map((x) => ({
                    headers: { name: x.name },
                    content: x.content,
                })),
            ]),
            tt.pack({ gzip: true }),
            response,
        ])
    } catch (e) {
        next(e)
    }
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})
