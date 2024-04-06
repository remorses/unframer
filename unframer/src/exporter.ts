import { Plugin, build, transform, context, BuildResult } from 'esbuild'
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
    try {
        fs.mkdirSync(out, { recursive: true })
    } catch (e) {}

    const buildContext = await context({
        // entryPoints: {
        //     index: url,
        // },
        absWorkingDir: out,
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
            const lines = findRelativeLinks(codeNew)
            if (lines.length) {
                logger.error(
                    `found broken links for ${path.relative(out, file.path)}, don't use relative links in Framer components`,
                )
                lines.forEach((line) => {
                    logger.error(`${path.resolve(out, file.path)}:${line + 1}`)
                })
            }

            if (existing === codeNew) {
                continue
            }
            logger.log(`writing`, path.relative(out, file.path))
            fs.writeFileSync(resultPathAbs, codeNew, 'utf-8')
        }
        for (let file of result.outputFiles!) {
            const name = path.basename(file.path).replace(/\.js$/, '')
            const resultPathAbs = path.resolve(out, file.path)
            if (!components[name]) {
                continue
            }
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

        const outFiles = result.outputFiles
            .map((x) => path.resolve(out, x.path))
            .concat([
                path.resolve(out, 'meta.json'),
                path.resolve(out, 'tokens.css'),
            ])
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

        const tokensCss = getTokensCss({ out, result })
        fs.writeFileSync(path.resolve(out, 'tokens.css'), tokensCss, 'utf-8')
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
            new Promise((res) => setTimeout(res, 5000)),
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

export function findRelativeLinks(text: string) {
    // regex to match these objects, could be in different lines or formatted, webPageId is the key element
    // href: { webPageId: 'someId' }
    const regex = /webPageId:\s+/g
    const matches = text.matchAll(regex)
    // get line number for each match
    const lines = text.split('\n')
    const lineNumbers = Array.from(matches, (match) => {
        const index = lines.findIndex((line) => line.includes(match[0]))
        return index
    })
    return lineNumbers
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

function getTokensCss({
    out,
    result,
}: {
    out: string
    result: BuildResult<{ metafile: true }>
}) {
    const allTokens = [] as {
        tokenName: string
        defaultValues: Set<string>
        nameAnnotation?: string
        usedBy: Set<string>
    }[]
    for (let file of result.outputFiles!) {
        const code = fs.readFileSync(path.resolve(out, file.path), 'utf-8')
        const tokens = extractTokenInfo(code)
        // console.log('tokens', tokens)
        for (let token of tokens) {
            const already = allTokens.find(
                (x) => x.tokenName === token.tokenName,
            )
            const filePath = path.relative(out, file.path)

            const filePaths = (() => {
                if (!filePath.startsWith('chunk-')) {
                    return [filePath]
                }
                const files = Object.entries(result.metafile.outputs).filter(
                    ([k, v]) => {
                        const filename = path.basename(k)
                        if (filename.startsWith('chunk-')) {
                            return false
                        }
                        const doesItImport = v.imports.find(
                            (x) => x.path === filePath,
                        )
                        return doesItImport
                    },
                )
                return files.map(([k, v]) => k)
            })()
            if (!token?.tokenName?.startsWith('--token')) {
                continue
            }
            if (!already) {
                allTokens.push({
                    tokenName: token.tokenName,
                    defaultValues: new Set([token.defaultValue]),
                    nameAnnotation: token.metadata?.name,
                    usedBy: new Set([...filePaths]),
                })
            } else {
                already.defaultValues.add(token.defaultValue)
                if (!already.nameAnnotation && token.metadata?.name) {
                    already.nameAnnotation = token.metadata.name
                }
                filePaths.map((x) => already.usedBy.add(x))
            }
        }
    }
    const groupedByUsers = groupBy(allTokens, (x) => {
        const str = `/* Used by ${[...x.usedBy].sort().join(', ')} */`
        return str
    })

    const cssStrings = [...groupedByUsers.entries()]
        .map(([usedBy, x]) => {
            return (
                `    /* Used by ${[...x[0].usedBy].sort().join(', ')} */\n` +
                [...x]
                    .map((x) => {
                        const possibleValues = [...x.defaultValues].sort()
                        let comment = ''
                        comment += x.nameAnnotation
                            ? ` Named as ${JSON.stringify(
                                  x.nameAnnotation,
                              )} in Framer.`
                            : ''
                        comment +=
                            possibleValues.length > 1
                                ? ` Also seen as ${possibleValues
                                      .slice(1)
                                      .join(', ')}.`
                                : ''

                        return `    ${x.tokenName}: ${possibleValues[0]}; ${
                            comment ? `/*${comment} */` : ''
                        }`
                    })
                    .join('\n')
            )
        })
        .join('\n')
    const tokensCss = `:root {\n${cssStrings}\n}`
    return tokensCss
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
            const namespace = 'https '
            build.onResolve({ filter: /^https?:\/\// }, (args) => {
                const url = new URL(args.path)
                return {
                    path: args.path,
                    external: false,
                    // sideEffects: false,
                    namespace,
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
                        namespace,
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
                        namespace,
                    }
                }

                const url = `https://esm.sh/${args.path}`

                return {
                    path: url,
                    namespace,
                    external: false,
                }
            }
            // build.onResolve({ filter: /^\w/ }, resolveDep)
            build.onResolve({ filter: /.*/, namespace }, resolveDep)
            build.onLoad({ filter: /.*/, namespace }, async (args) => {
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

                if (loader === 'jsx') {
                    codeCache.set(url, promise)
                }
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

export function deduplicateByKey<T>(key: keyof T, arr: (T | undefined)[]) {
    const map = new Map()
    for (let item of arr) {
        if (!item) {
            continue
        }
        map.set(item?.[key], item)
    }
    return Array.from(map.values())
}

type TokenInfo = {
    tokenName: string
    metadata?: Record<string, any>

    defaultValue: string
}

export function extractTokenInfo(code: string): TokenInfo[] {
    const lines = code.split('\n')
    const tokenLines = lines.filter((line) => line.includes('var(--token'))
    const tokens: TokenInfo[] = []

    for (const line of tokenLines) {
        let startIndex = 0
        while (startIndex < line.length) {
            startIndex = line.indexOf('var(--', startIndex)
            if (startIndex === -1) {
                break
            }

            let parCount = 0
            let varStatement = ''
            for (let i = startIndex + 3; i < line.length; i++) {
                if (line[i] === '(') {
                    parCount++
                } else if (line[i] === ')') {
                    parCount--
                }

                varStatement += line[i]
                if (parCount === 0) {
                    break
                }
            }
            varStatement = varStatement.trim().slice(1).slice(0, -1) // Remove starting and closing parenthesis
            const [tokenName, defaultValue] = splitOnce(varStatement, ',')

            let metadata: Record<string, any> | undefined
            const jsonStartIndex = line.indexOf('/*', startIndex)
            if (jsonStartIndex !== -1) {
                const jsonEndIndex = line.indexOf('*/', jsonStartIndex)
                if (jsonEndIndex !== -1) {
                    const jsonString = line
                        .slice(jsonStartIndex + 2, jsonEndIndex)
                        .trim()
                    try {
                        metadata = JSON.parse(jsonString)
                    } catch (error) {
                        // console.warn('Failed to parse JSON metadata:', error)
                    }
                }
            }

            if (tokenName && defaultValue) {
                tokens.push({
                    tokenName,
                    defaultValue: defaultValue.trim(),
                    metadata,
                })
            }

            startIndex += varStatement.length + 'var(--'.length // Move the startIndex to the end of the current var(--token)
        }
    }

    return tokens
}
function splitOnce(str: string, separator: string) {
    const index = str.indexOf(separator)
    if (index === -1) {
        return [str]
    }
    return [str.slice(0, index), str.slice(index + 1)]
}

function groupBy<T>(arr: T[], key: (x: T) => string) {
    const map = new Map<string, T[]>()
    for (let item of arr) {
        const k = key(item)
        if (!map.has(k)) {
            map.set(k, [])
        }
        map.get(k)?.push(item)
    }
    return map
}
