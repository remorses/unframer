import tmp from 'tmp'
import * as tt from 'tar-transform'

import { NextApiRequest, NextApiResponse } from 'next/types'
import * as stream from 'stream'
import { promisify } from 'util'
import { bundle } from '@/exporter'
const pipeline = promisify(stream.pipeline)

// nextjs api handler
export default async function handler(
    req: NextApiRequest,
    response: NextApiResponse,
) {
    const { moduleName } = req.query
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
    } catch (e: any) {
        console.error(e)
        response.status(500).json({ error: e.message })
    }
}
