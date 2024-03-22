import { Plugin, build, transform, context } from 'esbuild'
import dprint from 'dprint-node'
import tmp from 'tmp'

import pico from 'picocolors'

import { polyfillNode } from 'esbuild-plugin-polyfill-node'

import {
    ControlDescription,
    ControlType,
    PropertyControls,
} from '../framer-fixed/dist/framer.js'
import { fetch as _fetch } from 'native-fetch'
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const __dirname = path.dirname(new URL(import.meta.url).pathname)
const prefix = '[unframer]'
export const logger = {
    log(...args) {
        console.log(prefix, ...args)
    },
    error(...args) {
        console.error([prefix, ...args].map((x) => pico.red(x)).join(' '))
    },
}

const fetchWithRetry = retryTwice(_fetch) as typeof fetch

function validateUrl(url: string) {
    try {
        const u = new URL(url)
    } catch (e) {
        throw new Error(`Invalid URL: ${url}`)
    }
}

export async function bundle({
    cwd: out = '',
    watch = false,
    components = {} as Record<string, string>,
    signal = undefined as AbortSignal | undefined,
}) {
    out ||= path.resolve(process.cwd(), 'example')
    out = path.resolve(out)

    const buildContext = await context({
        // entryPoints: {
        //     index: url,
        // },

        entryPoints: Object.keys(components).map((name) => {
            const url = components[name]
            validateUrl(url)

            return {
                in: `virtual:${name}`,
                out: name,
            }
        }),
        jsx: 'automatic',

        bundle: true,
        platform: 'browser',
        metafile: true,
        format: 'esm',
        minify: false,
        treeShaking: true,
        splitting: true,
        // splitting: true,
        logLevel: 'error',

        pure: ['addPropertyControls'],
        external: whitelist,
        plugins: [
            esbuildPluginBundleDependencies({
                signal,
            }),
            polyfillNode({}),
            {
                name: 'virtual loader',
                setup(build) {
                    build.onResolve({ filter: /^virtual:.*/ }, (args) => {
                        return {
                            path: args.path.replace(/^virtual:/, ''),
                            namespace: 'virtual',
                        }
                    })
                    build.onLoad(
                        { filter: /.*/, namespace: 'virtual' },
                        async (args) => {
                            const name = args.path
                            const url = components[name]

                            return {
                                contents: /** js */ `'use client'
                                import Component from '${await resolveRedirect({
                                    url,
                                    signal,
                                })}'
                                import { WithFramerBreakpoints } from 'unframer/dist/react'
                                Component.Responsive = (props) => {
                                    return <WithFramerBreakpoints Component={Component} {...props} />
                                }
                                export default Component
                                `,
                                loader: 'jsx',
                            }
                        },
                    )
                },
            },
        ],
        write: false,

        // outfile: 'dist/example.js',
        outdir: out,
        // outfile: path.resolve(cwd, sourcefile),
    })

    async function rebuild() {
        const prevFiles = fs.readdirSync(out).map((x) => path.resolve(out, x))
        const result = await buildContext.rebuild()

        for (let file of result.outputFiles!) {
            const resultPathAbs = path.resolve(out, file.path)
            const existing = await fs.promises
                .readFile(file.path, 'utf-8')
                .catch(() => null)

            const codeNew = dprint.format(resultPathAbs, file.text, {
                lineWidth: 140,
                quoteStyle: 'alwaysSingle',
                trailingCommas: 'always',
                semiColons: 'always',
            })

            if (existing === codeNew) {
                continue
            }
            logger.log(`writing`, path.relative(out, file.path))
            fs.writeFileSync(resultPathAbs, codeNew, 'utf-8')
            const name = path.basename(file.path).replace(/\.js$/, '')
            if (components[name]) {
                logger.log(`extracting types for ${name}`)
                const propControls = await extractPropControlsUnsafe(
                    resultPathAbs,
                    name,
                )
                if (!propControls) {
                    logger.log(`no property controls found for ${name}`)
                }
                const types = propControlsToType(propControls)
                // name = 'framer-' + name
                // logger.log('name', name)

                fs.writeFileSync(path.resolve(out, `${name}.d.ts`), types)
            }
        }

        const outFiles = result.outputFiles
            .map((x) => path.resolve(out, x.path))
            .concat([path.resolve(out, 'meta.json')])
            .concat(
                result.outputFiles.map((x) =>
                    path.resolve(out, x.path.replace('.js', '.d.ts')),
                ),
            )
        const filesToDelete = prevFiles.filter((x) => !outFiles.includes(x))
        for (let file of filesToDelete) {
            logger.log('deleting', path.relative(out, file))
            fs.rmSync(file)
        }

        fs.writeFileSync(
            path.resolve(out, 'meta.json'),
            JSON.stringify(result.metafile, null, 2),
            'utf-8',
        )

        if (signal?.aborted) {
            throw new Error('aborted')
        }
        // logger.log('result', result)

        if (watch) {
            logger.log('waiting for components or config changes')
        }
    }

    if (!watch) {
        await rebuild()
        await buildContext.dispose()
        return
    }

    // when user press ctrl+c dispose
    process.on('SIGINT', async () => {
        await buildContext.cancel()
        buildContext.dispose()
    })
    process.on('SIGABRT', async () => {
        await buildContext.cancel()
        buildContext.dispose()
    })
    signal?.addEventListener('abort', async () => {
        await buildContext.cancel()
        buildContext.dispose()
    })

    await rebuild()

    /**
     * Get resolved URLs for all components and also wait for 1 second if it took less time than that
     */
    const getResolvedUrls = () =>
        Promise.all([
            ...Object.values(components).map((u) => {
                const url = new URL(u)
                url.searchParams.set('ts', Date.now().toString())
                return resolveRedirect({ url: url.toString(), signal })
            }),
            new Promise((res) => setTimeout(res, 3000)),
        ])
    let prevUrls = await getResolvedUrls()
    while (!signal?.aborted) {
        const urls = await getResolvedUrls()
        const changed = urls
            .map((x, i) => (x !== prevUrls[i] ? i : null))
            .filter(Boolean)
        if (!changed?.length) {
            continue
        }
        const changedNames = Object.keys(components).filter((_, i) =>
            changed.includes(i),
        )
        logger.log(`found new component URLs for ${changedNames.join(', ')}`)
        prevUrls = urls
        await rebuild()
    }
}

function decapitalize(str: string) {
    return str.charAt(0).toLowerCase() + str.slice(1)
}

export async function extractPropControlsSafe(text, name) {
    try {
        const propControlsCode = await parsePropertyControls(text)
        // console.log('propControlsCode', propControlsCode)
        const propControls: PropertyControls | undefined =
            await Promise.resolve().then(async () => {
                if (!propControlsCode) return
                const ivm = require('isolated-vm')
                const vm = new ivm.Isolate({ memoryLimit: 128 })

                const context = vm.createContextSync()

                const jail = context.global

                let result = undefined
                context.global.setSync('__return', (x) => {
                    result = x
                })

                const mod = vm.compileModuleSync(`${text}`)
                await mod.instantiateSync(context, (spec, mod) => {
                    // TODO instantiate framer, react, framer-motion etc
                    return
                })
                await mod.evaluate({})
                return result
            })
        if (!propControls) {
            logger.error(`no property controls found for component ${name}`)
            return
        }
        return propControls
    } catch (e: any) {
        logger.error(`Cannot get property controls for ${name}`, e.stack)
    }
}

export async function extractPropControlsUnsafe(filename, name) {
    const packageJson = path.resolve(path.dirname(filename), 'package.json')
    try {
        fs.writeFileSync(
            packageJson,
            JSON.stringify({ type: 'module' }),
            'utf-8',
        )
        const delimiter = '__delimiter__'
        let propCode = `JSON.stringify(x.default?.propertyControls || null, null, 2)`
        // propCode = `x.default`
        const code = `import(${JSON.stringify(
            filename,
        )}).then(x => { console.log(${JSON.stringify(
            delimiter,
        )}); console.log(${propCode})
        })`
        const res = execSync(`node --input-type=module -e '${code}'`)
        let stdout = res.toString()
        stdout = stdout.split(delimiter)[1]
        // console.log(stdout)
        return safeJsonParse(stdout)
    } catch (e: any) {
        logger.error(`Cannot get property controls for ${name}`, e.stack)
    } finally {
        fs.rmSync(packageJson)
    }
}

function safeJsonParse(text) {
    try {
        return JSON.parse(text)
    } catch (e) {
        logger.error('cannot parse json', text.slice(0, 100))
        return null
    }
}

export function propControlsToType(controls?: PropertyControls) {
    try {
        const types = Object.entries(controls || ({} as PropertyControls))
            .map(([key, value]) => {
                if (!value) {
                    return
                }

                const typescriptType = (value: ControlDescription<any>) => {
                    value.type
                    switch (value.type) {
                        case ControlType.Color:
                            return 'string'
                        case ControlType.Boolean:
                            return 'boolean'
                        case ControlType.Number:
                            return 'number'
                        case ControlType.String:
                            return 'string'
                        case ControlType.Enum: {
                            // @ts-expect-error
                            const options = value.optionTitles || value.options
                            return options.map((x) => `'${x}'`).join(' | ')
                        }
                        case ControlType.File:
                            return 'string'
                        case ControlType.Image:
                            return 'string'
                        case ControlType.ComponentInstance:
                            return 'React.ReactNode'
                        case ControlType.Array:
                            // @ts-expect-error
                            return `${typescriptType(value.control)}[]`
                        case ControlType.Object:
                            // @ts-expect-error
                            return `{${Object.entries(value.controls)
                                .map(([k, v]) => {
                                    // @ts-expect-error
                                    return `${k}: ${typescriptType(v)}`
                                })
                                .join(', ')}`
                        case ControlType.Date:
                            return 'string | Date'
                        case ControlType.Link:
                            return 'string'
                        case ControlType.ResponsiveImage:
                            return `{src: string, srcSet?: string, alt?: string}`
                        case ControlType.FusedNumber:
                            return 'number'
                        case ControlType.Transition:
                            return 'any'
                        case ControlType.EventHandler:
                            return 'Function'
                    }
                }
                let name = decapitalize(value.title || key || '')
                if (!name) {
                    return ''
                }
                return `    ${JSON.stringify(name)}?: ${typescriptType(value)}`
            })
            .filter(Boolean)
            .join('\n')

        const defaultPropsTypes =
            [
                'children?: React.ReactNode',
                'style?: React.CSSProperties',
                'className?: string',
                'id?: string',
                'width?: any',
                'height?: any',
                'layoutId?: string',
            ]
                .map((line) => `    ${line}`)
                .join('\n') + '\n'
        let t = ''
        t += 'import * as React from "react"\n\n'
        t += 'import { UnframerBreakpoint } from "unframer"\n\n'
        t += `export interface Props {\n${defaultPropsTypes}${types}\n}\n\n`
        t += `const Component = (props: Props) => any\n\n`
        t += `type VariantsMap = Partial<Record<UnframerBreakpoint, Props['variant']>> & { base: Props['variant'] }\n\n`
        t += `Component.Responsive = (props: Omit<Props, 'variant'> & {variants: VariantsMap}) => any\n\n`
        t += `export default Component\n\n`

        return t
    } catch (e: any) {
        logger.error('cannot generate types', e.stack)
        return ''
    }
}

export function parsePropertyControls(code: string) {
    const start = code.indexOf('addPropertyControls(')
    if (start === -1) {
        logger.error('no addPropertyControls call found')
        return null
    }
    // count all parentheses to find when the addPropertyControls ends
    let openParentheses = 0
    let closedParentheses = 0
    let current = start
    // parses using parentheses
    while (current < code.length) {
        const newP = code.indexOf('(', current)
        const newC = code.indexOf(')', current)
        if (newP === -1 && newC === -1) {
            break
        }
        if (newP !== -1 && newP < newC) {
            openParentheses++
            current = newP + 1
        }
        if (newC !== -1 && newC < newP) {
            closedParentheses++
            current = newC + 1
        }
        if (openParentheses === closedParentheses) {
            break
        }
    }

    const end = current
    const propControls = code.substring(start, end)
    const realStart = propControls.indexOf(',')
    if (realStart === -1) {
        return ''
    }
    return propControls.slice(realStart + 1, -1)
}

const whitelist = [
    'react',
    'react-dom',
    'framer',
    'unframer',
    'framer-motion', //
]

let redirectCache = new Map<string, Promise<string>>()
export function esbuildPluginBundleDependencies({
    signal = undefined as AbortSignal | undefined,
}) {
    const codeCache = new Map()

    const plugin: Plugin = {
        name: 'esbuild-plugin',
        setup(build) {
            build.onResolve({ filter: /^https?:\/\// }, (args) => {
                const url = new URL(args.path)
                return {
                    path: args.path,
                    external: false,
                    // sideEffects: false,
                    namespace: 'https',
                }
            })
            const resolveDep = (args) => {
                if (signal?.aborted) {
                    throw new Error('aborted')
                }
                if (args.path.startsWith('https://')) {
                    return {
                        path: args.path,
                        external: false,
                        // sideEffects: false,
                        namespace: 'https',
                    }
                }
                if (args.path === 'framer') {
                    return {
                        path: 'unframer/dist/framer',
                        external: true,
                    }
                }
                if ('framer-motion' === args.path) {
                    return {
                        path: 'unframer',
                        external: true,
                    }
                }
                if (
                    whitelist.some(
                        (x) => x === args.path || args.path.startsWith(x + '/'),
                    )
                ) {
                    return {
                        path: args.path,
                        external: true,
                    }
                }

                // console.log('resolve', args.path)
                if (args.path.startsWith('.') || args.path.startsWith('/')) {
                    const u = new URL(args.path, args.importer).toString()
                    // logger.log('resolve', u)
                    return {
                        path: u,
                        namespace: 'https',
                    }
                }

                const url = `https://esm.sh/${args.path}`

                return {
                    path: url,
                    namespace: 'https',
                    external: false,
                }
            }
            // build.onResolve({ filter: /^\w/ }, resolveDep)
            build.onResolve({ filter: /.*/, namespace: 'https' }, resolveDep)
            build.onLoad({ filter: /.*/, namespace: 'https' }, async (args) => {
                if (signal?.aborted) {
                    throw new Error('aborted')
                }
                const url = args.path
                const u = new URL(url)
                const resolved = await resolveRedirect({
                    url,
                    redirectCache,
                    signal,
                })
                if (codeCache.has(url)) {
                    const code = await codeCache.get(url)
                    return {
                        contents: code,
                        loader: 'js',
                    }
                }
                let loader = 'jsx' as any
                const promise = Promise.resolve().then(async () => {
                    logger.log('fetching', url.replace(/https?:\/\//, ''))
                    const res = await fetchWithRetry(resolved, { signal })
                    if (!res.ok) {
                        throw new Error(
                            `Cannot fetch ${resolved}: ${res.status} ${res.statusText}`,
                        )
                    }
                    // console.log('type', res.headers.get('content-type'))
                    if (
                        res.headers
                            .get('content-type')
                            ?.startsWith('application/json')
                    ) {
                        loader = 'json'
                        return await res.text()
                    }
                    const text = await res.text()

                    const transformed = await transform(text, {
                        define: {
                            'import.meta.url': JSON.stringify(resolved),
                        },
                        minify: false,
                        format: 'esm',
                        jsx: 'transform',
                        logLevel: 'error',
                        loader,
                        platform: 'browser',
                    })
                    // console.log('transformed', resolved)
                    return transformed.code
                })

                codeCache.set(url, promise)
                const code = await promise

                return {
                    contents: code,

                    loader,
                }
            })
        },
    }
    return plugin
}

export async function resolveRedirect({
    redirectCache,
    signal,
    url,
}: {
    url?: string
    redirectCache?: any
    signal?: AbortSignal
}) {
    if (!url) {
        return ''
    }
    url = url.toString()

    if (redirectCache && redirectCache.has(url)) {
        return await redirectCache.get(url)
    }

    // console.time(`resolveRedirect ${url}`)
    const p = recursiveResolveRedirect(url, signal)
    // console.timeEnd(`resolveRedirect ${url}`)

    if (redirectCache) {
        redirectCache.set(url, p)
    }
    return await p
}

export async function recursiveResolveRedirect(
    url?: string,
    signal?: AbortSignal,
) {
    if (!url) {
        return
    }

    let res = await fetchWithRetry(url, {
        redirect: 'manual',
        method: 'HEAD',
        signal: signal,
    })
    const loc = res.headers.get('location')
    if (res.status < 400 && res.status >= 300 && loc) {
        // logger.log('redirect', loc)
        return recursiveResolveRedirect(res.headers.get('location') || '')
    }

    return url
}

function addExtension(p) {
    const ext = path.extname(p)
    logger.log('addExtension', ext)
    if (!ext) {
        return p + '.js'
    }
    if (ext.includes('@')) {
        return p + '.js'
    }
    // if (!p.endsWith('.js')) {
    //     return p + '.js'
    // }
    return p
}

function retryTwice<F extends Function>(fn: Function): Function {
    return async (...args) => {
        try {
            return await fn(...args)
        } catch (e: any) {
            // ignore abort errors
            if (e.name === 'AbortError') {
                return
            }
            logger.error('retrying', e.message)
            return await fn(...args)
        }
    }
}
