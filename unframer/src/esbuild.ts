import { createSpinner } from 'nanospinner'
import fetch from 'node-fetch-commonjs'
import { logger } from './utils'

import { Plugin, transform, type OnResolveArgs } from 'esbuild'
import { resolvePackage } from './exporter'

export const defaultExternalPackages = [
    'react',
    'react-dom',
    'framer',
    'unframer',
    'framer-motion', //
]

let redirectCache = new Map<string, Promise<string>>()

export const replaceWebPageIds = ({
    elements,
    code,
}: {
    elements: { webPageId: string; path: string }[]
    code: string
}) => {
    // Match webPageId pattern with optional trailing comma
    const pattern =
        /{[\s\n]*webPageId[\s\n]*:[\s\n]*(['"])(.*?)\1[\s\n]*,?[\s\n]*}/g

    return code.replace(pattern, (match, quote, id) => {
        const path = elements.find((e) => e.webPageId === id)?.path
        if (!path) {
            return match
        }

        logger.log(`Replacing relative link to ${id} with fixed path: ${path}`)
        return `'${path}'`
    })
}

export function esbuildPluginBundleDependencies({
    signal = undefined as AbortSignal | undefined,
    externalPackages = [] as string[],
    externalizeNpm = false,
    outDir,
    onMissingPackage = (pkg: string) => {},
}) {
    externalPackages = [...defaultExternalPackages, ...externalPackages]
    // console.log(externalPackages)
    const codeCache = new Map()
    const spinner = createSpinner('Fetching Framer Components Modules')
    spinner.start()

    const plugin: Plugin = {
        name: 'esbuild-plugin',
        setup(build) {
            const namespace = '/'
            build.onResolve({ filter: /^https?:\/\// }, (args) => {
                const url = new URL(args.path)
                return {
                    path: args.path,
                    external: false,
                    // sideEffects: false,
                    namespace,
                }
            })
            const resolveDep = async (args: OnResolveArgs) => {
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
                        path: 'unframer',
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
                    externalPackages.some(
                        (x) => x === args.path || args.path.startsWith(x + '/'),
                    )
                ) {
                    const pkg = getPackageName(args.path)
                    const installedVersion = await resolvePackage({
                        cwd: outDir,
                        pkg,
                    }).catch(() => '')
                    if (!installedVersion) {
                        onMissingPackage?.(pkg)
                        spinner.error(
                            `${pkg} not found: install it with \`npm i ${pkg}\` then run \`unframer\` again to generate the types`,
                        )
                    }
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
                if (externalizeNpm) {
                    const pkg = getPackageName(args.path)
                    const installedVersion = await resolvePackage({
                        cwd: outDir,
                        pkg,
                    }).catch(() => '')
                    if (!installedVersion) {
                        onMissingPackage?.(pkg)
                        spinner.error(
                            `${pkg} not found: install it with \`npm i ${pkg}\` then run \`unframer\` again to generate the types`,
                        )
                    }
                    return {
                        path: args.path,
                        external: true,
                    }
                }

                const url = `https://esm.sh/*${args.path}`

                return {
                    path: url,
                    namespace,
                    external: false,
                }
            }
            // build.onResolve({ filter: /^\w/ }, resolveDep)
            build.onResolve({ filter: /.*/, namespace }, resolveDep)
            build.onEnd(() => {
                spinner.stop()
            })

            build.onLoad({ filter: /.*/, namespace }, async (args) => {
                if (signal?.aborted) {
                    throw new Error('aborted')
                }
                const url = args.path

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
                    logger.log('fetching', url, 'because of', args.path)
                    spinner.update(`Fetching ${url.replace(/https?:\/\//, '')}`)

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
                    let text = await res.text()

                    // when it finds a line with /* webpackIgnore: true */
                    // it also adds /* @vite-ignore */
                    text = text.replace(
                        /(\/\* webpackIgnore: true \*\/)/g,
                        '$1 /* @vite-ignore */',
                    )
                    // if (!text.includes('import.meta.url')) {
                    //     return text
                    // }

                    logger.log('transforming', url)
                    const transformed = await transform(text, {
                        define: {
                            'import.meta.url': JSON.stringify(resolved),
                            navigator: '__unframerNavigator',
                        },
                        // Fix lottie: https://github.com/airbnb/lottie-web/issues/3047
                        banner: `var __unframerNavigator = typeof window !== 'undefined' ? navigator : undefined;`,
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
        logger.log('following redirect', loc)
        return recursiveResolveRedirect(res.headers.get('location') || '')
    }

    return url
}

export const fetchWithRetry = retryTwice(fetch) as typeof fetch

export function retryTwice<F extends Function>(fn: Function): Function {
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

export function getPackageName(importPath: string): string {
    // Handle scoped packages
    if (importPath.startsWith('@')) {
        const [scope, rest] = importPath.split('/')
        if (!rest) return importPath
        return `${scope}/${rest.split('/')[0]}`
    }
    // Handle regular packages
    return importPath.split('/')[0]
}
