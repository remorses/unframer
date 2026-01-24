import { fetch } from 'undici'
import { RateLimit, Sema } from 'async-sema'
import { logger, spinner } from './utils.js'

import { Plugin, transform, type OnResolveArgs } from 'esbuild'
import { resolvePackage } from './exporter.js'
import { notifyError } from './sentry.js'
import { dispatcher } from './undici-dispatcher.js'
import { framerPackageVersions } from './framer-package-versions.js'

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
    onCollectMissingPackage = (pkg: string) => {},
    onFetch = (info: { url: string; resolvedUrl: string }) => {},
}) {
    externalPackages = [...defaultExternalPackages, ...externalPackages]
    // console.log(externalPackages)
    const codeCache = new Map()
    const reportedMissingPackages = new Set<string>()

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
                    const installed = await resolvePackage({
                        cwd: outDir,
                        pkg,
                    }).catch(() => '')
                    if (!installed) {
                        if (!reportedMissingPackages.has(pkg)) {
                            const hasFramerVersion =
                                Object.prototype.hasOwnProperty.call(
                                    framerPackageVersions,
                                    pkg,
                                )
                            if (hasFramerVersion) {
                                const version =
                                    framerPackageVersions[
                                        pkg as keyof typeof framerPackageVersions
                                    ]
                                spinner.info(
                                    `Missing package detected: ${pkg} (using Framer version ^${version})`,
                                )
                            } else {
                                spinner.info(`Missing package detected: ${pkg}`)
                            }
                            reportedMissingPackages.add(pkg)
                        }
                        // Check if we have a specific version from framerPackageVersions
                        const packageWithVersion =
                            Object.prototype.hasOwnProperty.call(
                                framerPackageVersions,
                                pkg,
                            )
                                ? `${pkg}@^${framerPackageVersions[pkg as keyof typeof framerPackageVersions]}`
                                : pkg
                        onCollectMissingPackage?.(packageWithVersion)
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
                    const installed = await resolvePackage({
                        cwd: outDir,
                        pkg,
                    }).catch(() => '')
                    if (!installed) {
                        if (!reportedMissingPackages.has(pkg)) {
                            const hasFramerVersion =
                                Object.prototype.hasOwnProperty.call(
                                    framerPackageVersions,
                                    pkg,
                                )
                            if (hasFramerVersion) {
                                const version =
                                    framerPackageVersions[
                                        pkg as keyof typeof framerPackageVersions
                                    ]
                                spinner.info(
                                    `Missing package detected: ${pkg} (using Framer version ^${version})`,
                                )
                            } else {
                                spinner.info(`Missing package detected: ${pkg}`)
                            }
                            reportedMissingPackages.add(pkg)
                        }
                        // Check if we have a specific version from framerPackageVersions
                        const packageWithVersion =
                            Object.prototype.hasOwnProperty.call(
                                framerPackageVersions,
                                pkg,
                            )
                                ? `${pkg}@^${framerPackageVersions[pkg as keyof typeof framerPackageVersions]}`
                                : pkg
                        onCollectMissingPackage?.(packageWithVersion)
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
                try {
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
                        onFetch({ url, resolvedUrl: resolved })
                        logger.log('fetching', url, 'because of', args.path)
                        spinner.update(
                            `Fetching ${url.replace(/https?:\/\//, '')}`,
                        )

                        const res = await fetchWithRetry(resolved, {
                            signal,
                            dispatcher,
                        })
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
                                window: '__unframerWindow',
                            },
                            // Fix lottie (navigator): https://github.com/airbnb/lottie-web/issues/3047
                            // Fix window is undefined errors in SSR/Node environments
                            banner: `var __unframerWindow = typeof window !== 'undefined' ? window : undefined; var __unframerNavigator = typeof __unframerWindow !== 'undefined' ? navigator : undefined;`,
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
                } catch (e) {
                    logger.error(e.message)
                    notifyError(e)
                    process.exit(1)
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
        dispatcher,
        signal,
    })
    const loc = res.headers.get('location')
    if (res.status < 400 && res.status >= 300 && loc) {
        logger.log('following redirect', loc)
        return recursiveResolveRedirect(res.headers.get('location') || '')
    }

    return url
}
let semaphore = new Sema(3)
let rateLimiter = RateLimit(20, { timeUnit: 1000 })

export const fetchWithRetry = retryTwice(
    async (url: string, options?: RequestInit) => {
        await semaphore.acquire()

        const timeout = setTimeout(() => {
            logger.error('fetch taking more than 10s', url)
        }, 10000)
        return await fetch(url, options as any).finally(() => {
            clearTimeout(timeout)
            semaphore.release()
        })
    },
) as typeof fetch

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
