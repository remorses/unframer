import tmp from 'tmp'
import * as tt from 'tar-transform'

import { NextApiRequest, NextApiResponse } from 'next/types'
import * as stream from 'stream'
import { promisify } from 'util'
import { bundle } from '@/exporter'
import { cookies } from 'next/dist/client/components/headers'
// const pipeline = promisify(stream.pipeline)

// nextjs api handler
export default async function handler(
    req: NextApiRequest,
    response: NextApiResponse,
) {
    console.log('req.method', req.method)
    if (req.method !== 'GET') {
        response.status(405).json({ error: 'Method not allowed' })
        return
    }
    let { moduleName } = req.query
    if (!moduleName) {
        throw new Error('No module name provided')
    }
    if (typeof moduleName !== 'string') {
        throw new Error('Module name must be a string')
    }
    if (moduleName.endsWith('.tgz')) {
        moduleName = moduleName.slice(0, -4)
    }
    // moduleName = 'Avatar-Jptx.js@zytD4VDFUKBkIHh56Z3q'

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
        response.status(200)
        response.setHeader('Content-Type', 'application/gzip')
        // cache in CDN for 10 seconds
        // response.setHeader('Cache-Control', 'public, max-age=10')
        console.log(files.map((x) => x.name))
        const e = stream.Readable.from([
            // { headers: { name: "README.md" }, content: "# tar-transform" },
            ...files.map((x) => ({
                headers: { name: x.name },
                content: x.content,
            })),
        ])
            .pipe(tt.pack({ gzip: true }))
            .pipe(response)

        await new Promise((resolve, reject) => {
            e.on('finish', resolve)
            e.on('error', (e) => {
                console.error(e)
                reject(e)
            })
        })

        console.log('done')
        response.end()
    } catch (e: any) {
        console.error(e)
        response.status(500).json({ error: e.message })
    }
}
