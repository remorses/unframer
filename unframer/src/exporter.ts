import { Plugin, build, transform } from 'esbuild'
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
    components = {} as Record<string, string>,
    signal = new AbortController().signal,
}) {
    out ||= path.resolve(process.cwd(), 'example')
    out = path.resolve(out)
    try {
        fs.rmSync(out, { recursive: true, force: true })
    } catch (e) {}
    fs.mkdirSync(path.resolve(out), { recursive: true })

    const result = await build({
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
                                import Component from '${await resolveRedirect(
                                    url,
                                    redirectCache,
                                )}'
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
        write: true,

        // outfile: 'dist/example.js',
        outdir: out,
        // outfile: path.resolve(cwd, sourcefile),
    })

    fs.writeFileSync(
        path.resolve(out, 'meta.json'),
        JSON.stringify(result.metafile, null, 2),
        'utf-8',
    )

    if (signal.aborted) {
        throw new Error('aborted')
    }
    // logger.log('result', result)

    const files = fs.readdirSync(out)
    for (let file of files) {
        if (!file.endsWith('.js')) {
            continue
        }
        const resultFile = path.resolve(out, file)
        const output = fs.readFileSync(resultFile, 'utf-8')
        logger.log(`formatting`, file)
        const code = dprint.format(resultFile, output, {
            lineWidth: 140,
            quoteStyle: 'alwaysSingle',
            trailingCommas: 'always',
            semiColons: 'always',
        })
        fs.writeFileSync(resultFile, code, 'utf-8')
        const name = file.replace(/\.js$/, '')
        if (components[name]) {
            logger.log(`extracting types for ${name}`)
            const propControls = await extractPropControlsUnsafe(
                resultFile,
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

    // TODO this is a vulnerability, i need to sandbox this somehow

    // https://framer.com/m/Mega-Menu-2wT3.js@W0zNsrcZ2WAwVuzt0BCl
    // let name = u.pathname
    //     .split('/')
    //     .slice(-1)[0]
    //     // https://regex101.com/r/8prywY/1
    //     // .replace(/-[\w\d]{4}\.js/i, '')
    //     .replace(/\.js/i, '')
    //     .replace(/@.*/, '')
    //     .toLowerCase()
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
        console.error(`Cannot get property controls for ${name}`, e.stack)
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
        console.error(`Cannot get property controls for ${name}`, e.stack)
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
                return `  ${JSON.stringify(name)}?: ${typescriptType(value)}`
            })
            .filter(Boolean)
            .join('\n')

        const defaultPropsTypes = `  children?: React.ReactNode\n  style?: React.CSSProperties\n  className?: string\n  id?: string\n  width?: any\n  height?: any\n  layoutId?: string\n`
        let t = ''
        t += 'import * as React from "react"\n'
        t += `export interface Props {\n${defaultPropsTypes}${types}\n}\n`
        t += `const Component = (props: Props) => any\n`
        t += `export default Component\n`
        t += `type Breakpoint = 'Desktop' | 'Tablet' | 'Mobile'\n`
        t += `Component.Responsive = (props: Omit<Props, 'variant'> & {variants: Record<Breakpoint, Props['variant']>}) => any\n`

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
                const resolved = await resolveRedirect(url, redirectCache)
                if (codeCache.has(url)) {
                    const code = await codeCache.get(url)
                    return {
                        contents: code,
                        loader: 'js',
                    }
                }
                let loader = 'jsx' as any
                const promise = Promise.resolve().then(async () => {
                    logger.log('fetching', url)
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

export async function resolveRedirect(url?: string, redirectCache?: any) {
    if (!url) {
        return ''
    }
    url = url.toString()
    if (redirectCache.has(url)) {
        return await redirectCache.get(url)
    }

    const p = recursiveResolveRedirect(url)
    redirectCache.set(url, p)
    return await p
}

export async function recursiveResolveRedirect(url?: string) {
    if (!url) {
        return
    }

    let res = await fetchWithRetry(url, { redirect: 'manual', method: 'HEAD' })
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
