import * as esbuild from 'esbuild'
import posthtml from 'posthtml'

import fs from 'fs'
import fsExtra from 'fs-extra'

import path from 'path'



export async function downloadSourcemapsIife({
    outputPath,
    htmlUrl,

    baseUrl,
}: {
    outputPath: string
    htmlUrl: string
    baseUrl: string
}) {
    fs.mkdirSync(outputPath, { recursive: true })
    let html = ''
    if (htmlUrl.startsWith('/')) {
        html = fs.readFileSync(htmlUrl, 'utf-8')
    } else {
        const r = await fetch(htmlUrl)
        if (!r.ok) {
            let message = `GET ${htmlUrl} failed: status ${r.status}`
            throw new Error(message)
        }
        html = await r.text()
    }

    const scripts = await getHtmlScripts({ html })
    for (let src of scripts) {
        console.log(`processing ${src}`)
        const srcUrl = new URL(src, baseUrl)
        const r = await fetch(srcUrl.toString())
        const contents = await r.text()
        if (!r.ok) {
            let message = `GET ${srcUrl} failed: status ${
                r.status
            } ${contents.slice(0, 100)}`
            // throw new Error(message)
        }

        const sourceMaps = await extractSourceMap({
            baseUrl: srcUrl.toString(),
            contents,
        })
        if (!sourceMaps?.length) {
            console.warn(`XXX ${srcUrl} does not have source maps`)
            continue
        }
        for (let map of sourceMaps) {
            const { srcPath, srcContents } = map!
            const spRelPath = path.resolve(
                outputPath,
                // TODO paths that start with .. can end up making a mess
                srcPath.replace(/\.\.\//g, ''),
            )

            if (!path.relative(process.cwd(), spRelPath).startsWith('..')) {
                console.info(`Writing source map to "${spRelPath}"`)
                await fsExtra.createFile(spRelPath)
                if (srcContents) {
                    await fsExtra.writeFile(spRelPath, srcContents)
                }
            } else {
                console.warn(`Sourcemap file would be out of cwd: ${spRelPath}`)
            }
        }
    }
}

export async function downloadSourcemapsEsm({
    outputPath,
    entryUrl,
}: {
    outputPath: string
    entryUrl: string
    findExport?: { regex; srcPath }
}) {
    fs.mkdirSync(outputPath, { recursive: true })
    esbuild.build({
        entryPoints: [entryUrl],
        minify: false,
        plugins: [
            httpPlugin({
                onFile: async ({ srcPath, srcContents }) => {
                    const spRelPath = path.resolve(
                        outputPath,
                        // TODO paths that start with .. can end up making a mess
                        srcPath.replace(/\.\.\//g, ''),
                    )

                    if (
                        !path
                            .relative(process.cwd(), spRelPath)
                            .startsWith('..')
                    ) {
                        console.info(`Writing source map to "${spRelPath}"`)
                        await fsExtra.createFile(spRelPath)
                        if (srcContents) {
                            await fsExtra.writeFile(spRelPath, srcContents)
                        }
                    } else {
                        console.warn(
                            `Sourcemap file would be out of cwd: ${spRelPath}`,
                        )
                    }
                },
            }),
        ],
        bundle: true,
        logLevel: 'warning',
        write: false,
        // outfile: './dist/gitbook.js',
    })
}

export async function getMainBundle() {
    const res = await fetch('https://docs.gitbook.com')
    const html = await res.text()
    // console.log(html)
    let src = ''
    const transformer = posthtml([
        (tree) => {
            tree.walk((node) => {
                if (
                    node &&
                    node.tag === 'script' &&
                    node.attrs &&
                    node.attrs?.['src'] &&
                    node.attrs.src.includes('/app/public')
                ) {
                    src = node.attrs.src
                }
                return node
            })
        },
    ])
    await transformer.process(html)
    return src
}
export async function getHtmlScripts({ html }) {
    // console.log(html)
    let srcs: string[] = []
    const transformer = posthtml([
        (tree) => {
            tree.walk((node) => {
                if (
                    node &&
                    node.tag === 'script' &&
                    node.attrs &&
                    node.attrs?.['src']
                ) {
                    srcs.push(node.attrs.src)
                }
                return node
            })
        },
    ])
    await transformer.process(html)
    return srcs
}

export function httpPlugin({
    onFile: onSourceMap,
}: {
    onFile?: (map: {
        srcPath: string
        sourceMap: any
        srcContents: string
        originalContents: string
        originalPath: string
    }) => void
}) {
    return {
        name: 'http-fetch',
        setup: ({ onResolve, onLoad }) => {
            onResolve({ filter: /^https:\/\// }, resolveFile)
            onResolve({ filter: /.*/, namespace: 'http-fetch' }, resolveUrl)
            onLoad(
                { filter: /.*/, namespace: 'http-fetch' },
                async ({ path: filePath }) => {
                    let source = await fetch(filePath)
                    // console.log(filePath)
                    if (!source.ok) {
                        let message = `GET ${filePath} failed: status ${source.status}`
                        throw new Error(message)
                    }

                    let contents = await source.text()
                    const sourceMaps = await extractSourceMap({
                        baseUrl: source.url,
                        contents,
                    })
                    if (sourceMaps?.length && onSourceMap) {
                        for (let s of sourceMaps) {
                            await onSourceMap({
                                ...s!,
                                originalPath: filePath,
                            })
                        }
                    } else {
                        console.warn(
                            `XXX ${filePath} does not have source maps`,
                        )
                    }

                    let { pathname } = new URL(source.url)
                    let loader = pathname!.match(/[^.]+$/)![0]
                    if (loader === 'mjs') {
                        loader = 'js'
                    }

                    return { contents, loader }
                },
            )
        },
    }
}

export async function extractSourceMap({ contents, baseUrl }) {
    let pattern = /\/\/# sourceMappingURL=(\S+)/
    let match = contents.match(pattern)
    if (match) {
        try {
            console.log(match[1])
            const spJSON = await (async () => {
                if (match[1].startsWith('data:')) {
                    return JSON.parse(
                        atob(match[1].slice(match[1].indexOf(',') + 1)),
                    )
                }

                let url = new URL(match[1], baseUrl)
                url.searchParams.set('xxx', '1')
                const spContent = await fetch(url.toString(), {
                    headers: {
                        accept: 'application/json',
                    },
                })
                if (!spContent.ok) {
                    let message = `GET ${url.toString()} failed: status ${
                        spContent.status
                    } ${spContent.statusText}`
                    throw new Error(message)
                }
                const spJSON: any = await spContent.json()
                return spJSON
            })()
            // console.log(JSON.stringify(spJSON.sourcesContent, null, 2))
            if (!spJSON.sourcesContent) {
                console.log(`XXX no sourcesContent`)
                return
            }
            let maps: {
                srcPath: string
                sourceMap: string
                srcContents: string
                originalContents: string
            }[] = []
            for (let i = 0; i < spJSON.sources.length; i++) {
                const spSrc = spJSON.sourcesContent[i]
                const spSource = spJSON.sources[i]
                if (!spSrc) {
                    console.log(`XXX no sourcesContent for ${spSource}`)
                    continue
                }

                maps.push({
                    srcPath: spSource,
                    sourceMap: spJSON,
                    srcContents: spSrc,

                    originalContents: contents,
                })
            }
            return maps
        } catch (e) {
            console.log(`Could not write source map`, e)
            return
        }
    }
}

let resolveFile = ({ path }) => ({
    path: path,
    namespace: 'http-fetch',
})

let resolveUrl = ({ path, importer }) => ({
    path: new URL(path, importer).href,
    namespace: 'http-fetch',
})
