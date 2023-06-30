import { Plugin, build, transform } from 'esbuild'
import { VM } from 'vm2'

import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import { ControlDescription, ControlType, PropertyControls } from 'framer'
import { fetch } from 'native-fetch'
import fs from 'fs'
import path from 'path'

const logger = {
    log(...args) {
        console.log(...args)
    },
    error(...args) {
        console.error(...args)
    },
}

function validateUrl(url: string) {
    try {
        const u = new URL(url)
    } catch (e) {
        throw new Error(`Invalid URL: ${url}`)
    }
}

export async function bundle({ cwd = '', url }) {
    validateUrl(url)
    const deps = new Set<string>()
    cwd ||= path.resolve(process.cwd(), 'example')
    cwd = path.resolve(cwd)
    fs.mkdirSync(path.resolve(cwd, './dist'), { recursive: true })
    const peerDependencies = {
        react: '*',
        'react-dom': '*',
        // 'framer-motion': '*',
    }
    const dependencies = {
        framer: 'github:remorses/framer-fixed',
        'framer-motion': '^10.12.17',
    }
    const u = new URL(url)

    const result = await build({
        entryPoints: {
            main: url,
        },

        bundle: true,
        platform: 'browser',
        format: 'esm',
        minify: false,
        treeShaking: true,
        // splitting: true,

        plugins: [
            esbuildPlugin({
                onDependency: (x) => {
                    logger.log('dep', x)
                    deps.add(x)
                },
            }),
            NodeModulesPolyfillPlugin({}),
        ],
        write: true,
        // outfile: 'dist/example.js',
        outdir: path.resolve(cwd, 'dist'),
    })
    // logger.log('result', result)
    const resultFile = path.resolve(cwd, './dist/main.js')
    // TODO this is a vulnerability, i need to sandbox this somehow
    const propControls = await extractPropControls(url)
    const types = propControlsToType(propControls)
    // https://framer.com/m/Mega-Menu-2wT3.js@W0zNsrcZ2WAwVuzt0BCl
    let name = u.pathname
        .split('/')
        .slice(-1)[0]
        // https://regex101.com/r/8prywY/1
        // .replace(/-[\w\d]{4}\.js/i, '')
        .replace(/\.js/i, '')
        .replace(/@.*/, '')
        .toLowerCase()
    name = 'framer-' + name
    logger.log('name', name)
    const packageJson = {
        name: name,
        version: '0.0.0',
        main: 'dist/main.js',
        types: types ? 'dist/main.d.ts' : undefined,
        module: 'dist/main.js',
        // files: ['dist', 'package.json'],
        exports: {
            '.': 'dist/main.js',
            './package.json': './package.json',
        },
        type: 'module',
        dependencies: {
            ...[...deps.values()]
                .filter(
                    (x) =>
                        !peerDependencies[x] &&
                        !Object.keys(peerDependencies).some((y) =>
                            x.startsWith(y + '/'),
                        ),
                )
                .reduce((acc, x) => {
                    acc[x] = '*'
                    return acc
                }, {}),
            ...dependencies,
        },
        peerDependencies,
    }
    fs.writeFileSync(
        path.resolve(cwd, 'package.json'),
        JSON.stringify(packageJson, null, 2),
    )
    fs.writeFileSync(path.resolve(cwd, 'dist/main.d.ts'), types)
    return {
        resultFile,
        packageJson,
        // propControls,
        types,

        files: [
            {
                name: 'package.json',
                content: JSON.stringify(packageJson, null, 2),
            },
            {
                name: './dist/main.d.ts',
                content: types,
            },
            {
                name: './dist/main.js',
                content: fs.readFileSync(resultFile, 'utf-8'),
            },
        ],
    }
}

function decapitalize(str: string) {
    return str.charAt(0).toLowerCase() + str.slice(1)
}
export async function extractPropControls(url) {
    try {
        const text = await fetch(url).then((x) => x.text())
        const propControlsCode = await parsePropertyControls(text)
        // console.log('propControlsCode', propControlsCode)
        const propControls: PropertyControls | undefined = (() => {
            if (!propControlsCode) return
            const vm = new VM({})
            let result = undefined
            vm.setGlobals({
                ControlType,
                __return: (x) => {
                    result = x
                },
            })

            vm.run(`__return(${propControlsCode})`)
            return result
        })()
        return propControls
    } catch (e: any) {
        console.error(`Cannot get proprty controls for ${url}`, e.stack)
    }
}

export function propControlsToType(controls?: PropertyControls) {
    if (!controls) {
        return ''
    }
    try {
        const types = Object.entries(controls)
            .map(([key, value]) => {
                if (!value) {
                    return
                }

                const typescriptType = (
                    value: ControlDescription<Partial<any>>,
                ) => {
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
                            return `${typescriptType(value.control)}[]`
                        case ControlType.Object:
                            return `{${Object.entries(value.controls)
                                .map(([k, v]) => {
                                    return `${k}: ${typescriptType(v)}`
                                })
                                .join(', ')}`
                        case ControlType.Date:
                            return 'string | Date'
                        case ControlType.Link:
                            return 'string'
                        case ControlType.ResponsiveImage:
                            return `{src: string, srcSet?: string, alt?: string}`
                        case ControlType.RichText:
                            return 'any'
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
                return `  ${name}?: ${typescriptType(value)}`
            })
            .filter(Boolean)
            .join('\n')

        const defaultPropsTypes = `  children?: React.ReactNode\n  style?: React.CSSProperties\n  className?: string\n  id?: string\n  width?: any\n  height?: any\n  layoutId?: string\n`
        let t = ''
        t += 'import * as React from "react"\n'
        t += `export interface Props {\n${defaultPropsTypes}${types}\n}\n`
        t += `export default function(props: Props): any\n`

        return t
    } catch (e: any) {
        logger.error('cannot generate types', e.stack)
        return ''
    }
}

export function parsePropertyControls(code: string) {
    const start = code.indexOf('addPropertyControls(')
    if (start === -1) {
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

export function esbuildPlugin({ onDependency }) {
    const cache = new Map()
    const plugin: Plugin = {
        name: 'esbuild-plugin',
        setup(build) {
            build.onResolve({ filter: /^https?:\/\// }, (args) => {
                const url = new URL(args.path)
                return {
                    path: args.path,
                    external: false,
                    sideEffects: false,
                    namespace: 'https',
                }
            })
            build.onResolve({ filter: /^\w/ }, (args) => {
                if (args.path.startsWith('https://')) {
                    return
                }
                onDependency && onDependency(args.path)
                return {
                    path: args.path,
                    external: true,
                }
            })
            build.onLoad({ filter: /.*/, namespace: 'https' }, async (args) => {
                const url = args.path
                if (cache.has(url)) {
                    const code = await cache.get(url)
                    return {
                        contents: code,
                        loader: 'js',
                    }
                }
                const u = new URL(url)
                const promise = Promise.resolve().then(async () => {
                    const resolved = await resolveRedirect(u)
                    const res = await fetch(resolved)
                    const text = await res.text()

                    const transformed = await transform(text, {
                        define: {
                            'import.meta.url': JSON.stringify(url),
                        },
                        minify: false,

                        platform: 'browser',
                    })
                    return transformed.code
                })

                cache.set(url, promise)
                const code = await promise
                return {
                    contents: code,
                    loader: 'js',
                }
            })
        },
    }
    return plugin
}

export async function resolveRedirect(url) {
    let res = await fetch(url, { redirect: 'manual', method: 'HEAD' })
    const loc = res.headers.get('location')
    if (res.status < 400 && res.status >= 300 && loc) {
        logger.log('redirect', loc)
        return resolveRedirect(res.headers.get('location'))
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
