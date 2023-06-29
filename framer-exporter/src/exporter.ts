import { transform, Plugin, build } from 'esbuild'

import { PropertyControls, ControlType, ControlDescription } from 'framer'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import { fetch } from 'native-fetch'

import fs from 'fs'

import path from 'path'
import { PluginOption, transformWithEsbuild } from 'vite/dist/node'

const logger = {
    log(...args) {
        console.log(...args)
    },
    error(...args) {
        console.error(...args)
    },
}

export async function bundle({ cwd = '', url }) {
    const deps = new Set<string>()
    cwd ||= path.resolve(process.cwd(), 'example')
    cwd = path.resolve(cwd)
    fs.mkdirSync(path.resolve(cwd, './dist'), { recursive: true })
    const peerDependencies = {
        react: '*',
        'react-dom': '*',
        'framer-motion': '*',
    }
    const u = new URL(url)
    const withoutHttps = u.host + u.pathname
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
                    console.log('dep', x)
                    deps.add(x)
                },
            }),
            NodeModulesPolyfillPlugin({}),
        ],
        write: true,
        // outfile: 'dist/example.js',
        outdir: path.resolve(cwd, 'dist'),
    })
    // console.log('result', result)
    const resultFile = path.resolve(cwd, './dist/main.js')
    const module = await import(resultFile).catch((e) => e)
    if (module instanceof Error) {
        throw new Error(`Generated module is invalid: ${module.message}`)
    }
    const propControls: PropertyControls = module.default.propertyControls
    const types = propControlsToType(propControls)
    const packageJson = {
        name: withoutHttps,
        version: '0.0.0',
        main: 'dist/main.js',
        types: 'dist/main.d.ts',
        type: 'module',
        dependencies: [...deps]
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
        peerDependencies,
    }
    fs.writeFileSync(
        path.resolve(cwd, 'package.json'),
        JSON.stringify(packageJson, null, 2),
    )
    fs.writeFileSync(path.resolve(cwd, 'dist/main.d.ts'), types)
    return { resultFile, packageJson, propControls, types }
}

export function propControlsToType(controls: PropertyControls) {
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
                        return `{src: string, srcSet: string, alt?: string}`
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

            return `  ${key}: ${typescriptType(value)}`
        })
        .join('\n')

    const defaultPropsTypes = `  children?: React.ReactNode\n  style?: React.CSSProperties\n  className?: string\n  id?: string\n  width?: any\n  height?: any\n  layoutId?: string\n`
    let t = ''
    t += 'import * as React from "react"\n'
    t += `export interface Props {\n${defaultPropsTypes}${types}\n}\n`
    t += `export default function(props: Props): React.ReactNode\n`

    return t
}

export function esbuildPlugin({ onDependency }) {
    const cache = new Map()
    const plugin: Plugin = {
        name: 'esbuild-plugin',
        setup(build) {
            build.onResolve({ filter: /^https?:\/\// }, (args) => {
                const url = new URL(args.path)
                const withoutHttps = url.host + url.pathname
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

                    // resolveDir: path.resolve(folderPath, u.host),
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
