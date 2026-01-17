import { BuildResult, build, context, type BuildOptions } from 'esbuild'

import url from 'url'
import { createRequire } from 'node:module'
import { Config } from './cli.js'

const require = createRequire(import.meta.url)

import { Sema } from 'async-sema'

import { nodeModulesPolyfillPlugin } from 'esbuild-plugins-node-modules-polyfill'

import { transform } from '@babel/core'
import { exec } from 'child_process'
import { error } from 'console'
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'
import { dedent } from './utils.js'
import {
    babelPluginJsxTransform,
    removeJsxExpressionContainer,
} from './babel-jsx.js'
import { babelPluginTypedoc } from './babel-typedoc.js'
import { propCamelCaseJustLikeFramer } from './compat.js'
import {
    ComponentFontBundle,
    breakpointsStyles,
    breakpointsStylesLegacy,
    defaultBreakpointSizes,
    getFontsStyles,
    groupBy,
    logFontsUsage,
} from './css.js'
import {
    propControlsToTypedocComments,
    componentCamelCase,
} from './typescript.js'
import {
    defaultExternalPackages,
    esbuildPluginBundleDependencies,
    resolveRedirect,
} from './esbuild.js'
import {
    ControlDescription,
    ControlType,
    PropertyControls,
    combinedCSSRules,
} from './framer.js'
import { notifyError } from './sentry.js'
import {
    kebabCase,
    logger,
    spinner,
    stackblitzDemoExample,
    terminalMarkdown,
} from './utils.js'
import pico from 'picocolors'
import { installPackagesBatch } from './package-manager.js'
import { version as currentUnframerVersion } from './version.js'

import { Biome, Distribution } from '@biomejs/js-api'

let biome: Biome

export type StyleToken = {
    id: string
    name?: string | null
    lightColor: string
    darkColor: string
}

// Cache for component type extraction results
type ComponentCacheEntry = {
    hash: string
    propertyControls?: PropertyControls
    fonts?: ComponentFontBundle[]
    typedocComments?: any
}

const componentTypeCache = new Map<string, ComponentCacheEntry>()

// Helper to calculate file hash
async function getFileHash(filePath: string): Promise<string> {
    const content = await fs.promises.readFile(filePath, 'utf-8')
    return crypto.createHash('sha256').update(content).digest('hex')
}

export async function bundle({
    config,
    cwd: out = '',
    watch = false,
    signal = undefined as AbortSignal | undefined,
    metafile = false,
}: {
    config: Config
    cwd: string
    watch?: boolean
    signal?: AbortSignal
    metafile?: boolean
}) {
    const { components, breakpoints, tokens, framerWebPages } = config
    out ||= path.resolve(process.cwd(), 'example')
    out = path.resolve(out)
    try {
        await fs.promises.mkdir(out, { recursive: true })
    } catch (e) {}

    // Prefix for temporary .js files to avoid HMR issues
    const tempJsPrefix = 'temp_'

    // Helper function to handle file path transformations with temp prefix
    function getFilePaths(filePath: string, outDir: string) {
        const baseName = path.basename(filePath)
        const dirName = path.dirname(filePath)
        const relativeDirname = path.relative(outDir, dirName)
        // chunks are imported, which means they should not have the temp_ prefix or imports will fail
        if (relativeDirname === 'chunks') {
            return {
                tempJsPath: path.resolve(outDir, filePath),
                finalJsPath: path.resolve(outDir, filePath),
                jsxPath: path.resolve(
                    outDir,
                    filePath.replace(/\.js$/, '.jsx'),
                ),
            }
        }
        const tempFileName = tempJsPrefix + baseName
        const tempFilePath = path.join(dirName, tempFileName)

        return {
            tempJsPath: path.resolve(outDir, tempFilePath),
            finalJsPath: path.resolve(outDir, filePath),
            jsxPath: path.resolve(outDir, filePath.replace(/\.js$/, '.jsx')),
        }
    }

    spinner.start('exporting components...')

    const otherRoutes = Object.fromEntries(
        (config.framerWebPages || []).map((page) => [
            page.webPageId,
            { path: page.path },
        ]),
    )

    const breakpointSizes = Object.entries(
        config.breakpoints || defaultBreakpointSizes,
    ).sort(([, a], [, b]) => a - b)
    function fakeContext(args: BuildOptions) {
        return {
            rebuild() {
                return build(args)
            },
            cancel() {},
            dispose() {},
        }
    }
    const fn = watch ? context : fakeContext
    const missingPackages = new Set<string>()

    const buildContext = await fn({
        absWorkingDir: out,
        entryPoints: Object.keys(components)
            .filter((x) => x)
            .map((name) => {
                return {
                    in: `virtual:${name}`,
                    out: name,
                }
            }),
        jsx: 'automatic',
        // jsxFactory: '_jsx',
        bundle: true,
        platform: 'browser',
        metafile: true,
        format: 'esm',
        minify: false,
        treeShaking: true,
        splitting: true,
        logLevel: 'error',
        pure: ['addPropertyControls'],
        external: defaultExternalPackages,
        chunkNames: 'chunks/[name]-[hash]',
        plugins: [
            esbuildPluginBundleDependencies({
                signal,
                externalPackages: config.externalPackages,
                externalizeNpm: config.allExternal,
                outDir: out,
                onCollectMissingPackage: (pkg) => {
                    missingPackages.add(pkg)
                },
            }),
            nodeModulesPolyfillPlugin({}),
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

                            // Handle virtual routes module
                            if (name === '__routes') {
                                return {
                                    contents: `export const routes = ${JSON.stringify(otherRoutes, null, 2)};`,
                                    loader: 'js',
                                }
                            }

                            const url = components[name]
                            const componentBreakpoints =
                                config.componentBreakpoints?.filter(
                                    (x) => x.componentName === name,
                                ) || []

                            const brk = breakpointSizes
                                .map(([name, width], index) => {
                                    const nextWidth =
                                        breakpointSizes[index + 1]?.[1] ??
                                        Infinity
                                    const matchingBreakpoint =
                                        componentBreakpoints.find(
                                            (x) =>
                                                x.width >= width &&
                                                x.width < nextWidth,
                                        )
                                    if (!matchingBreakpoint) {
                                        return []
                                    }
                                    return [name, matchingBreakpoint.variantId]
                                })
                                .filter((x) => x.length)
                            const firstVariantId = brk.find(
                                (x) => x.length,
                            )?.[1]
                            const responsiveVariants: Record<string, string> =
                                firstVariantId
                                    ? Object.fromEntries([
                                          ['base', firstVariantId],
                                          ...brk.slice(1),
                                      ])
                                    : {}

                            // Use virtual routes module
                            const routesImportPath = 'virtual:__routes'

                            return {
                                contents: /** js **/ `
                                'use client'
                                import { Fragment } from 'react'
                                import { ContextProviders } from 'unframer'
                                import Component from '${await resolveRedirect({
                                    url,
                                    signal,
                                })}'
                                import { WithFramerBreakpoints } from 'unframer'
                                import { routes } from '${routesImportPath}'
                                const locales = ${
                                    JSON.stringify(config.locales) || '[]'
                                }
                                const defaultResponsiveVariants = ${JSON.stringify(
                                    responsiveVariants,
                                    null,
                                    2,
                                )}


                                function ComponentWithRoot({ locale, ...rest }) {
                                    return (
                                        <ContextProviders
                                            routes={routes}
                                            children={<Component {...rest} />}
                                            framerSiteId={${JSON.stringify(
                                                config.fullFramerProjectId,
                                            )}}
                                            locale={locale}
                                            locales={locales}
                                        />
                                    )
                                }
                                ComponentWithRoot.Responsive = ({ locale='', ...rest }) => {
                                    return (
                                        <ContextProviders
                                            routes={routes}
                                            children={<WithFramerBreakpoints
                                                        Component={Component}
                                                        variants={defaultResponsiveVariants}
                                                        {...rest}
                                                    />}
                                            framerSiteId={${JSON.stringify(
                                                config.fullFramerProjectId,
                                            )}}
                                            locale={locale}
                                            locales={locales}
                                        />
                                    )
                                }
                                Object.assign(ComponentWithRoot, Component)
                                export default ComponentWithRoot
                                `,
                                loader: 'jsx',
                            }
                        },
                    )
                },
            },
        ],
        write: false,
        outdir: out,
    })

    const doNotEditComment = `/* This file was generated by Unframer for Framer project ${
        config.projectId || ''
    } "${config.projectName}", do not edit manually */\n`

    async function rebuild() {
        // Clear missing packages for each rebuild (important for watch mode)
        missingPackages.clear()

        try {
            const installedVersion = await resolvePackageVersion({
                cwd: out,
                pkg: 'unframer',
            })
            if (
                isVersionGreater(
                    installedVersion || '0.0.0',
                    currentUnframerVersion || '0.0.0',
                )
            ) {
                // Version mismatch, add with specific version
                missingPackages.add(`unframer@${currentUnframerVersion}`)
                spinner.info(
                    `Different unframer version detected (${installedVersion}), will install unframer@${currentUnframerVersion}`,
                )
            }
        } catch (e) {
            // Unframer not installed, add with specific version
            missingPackages.add(`unframer@${currentUnframerVersion}`)
            spinner.info(
                `Missing package detected: unframer@${currentUnframerVersion}`,
            )
        }
        const prevFiles = await recursiveReaddir(out)
        const buildResult = await buildContext.rebuild().catch((e) => {
            if (e.message.includes('No matching export ')) {
                spinner.error(
                    `esbuild failed to import from an external package, this usually means that the npm package version in Framer is older than the latest.`,
                )
                spinner.error(
                    `Use --external to make all npm packagess external, then install the right version`,
                )
                process.exit(1)
            }
            throw e
        })

        spinner.update('Finished build')

        // Install missing packages if any were collected
        if (missingPackages.size > 0) {
            const packagesToInstall = Array.from(missingPackages)
            logger.log(
                `Installing missing packages: ${packagesToInstall.join(', ')}`,
            )

            const installResult = await installPackagesBatch({
                packageNames: packagesToInstall,
                cwd: out,
                isDev: false,
            })

            if (!installResult.success) {
                spinner.error(
                    `Failed to install packages: ${installResult.error}`,
                )
                // Don't fail the build, just warn
            }
        }

        // First, write raw JS files for type extraction with temp prefix
        for (let file of buildResult.outputFiles!) {
            const paths = getFilePaths(file.path, out)
            const prefix =
                `// @ts-nocheck\n` + `/* eslint-disable */\n` + doNotEditComment
            const codeJs = prefix + file.text

            logger.log(`writing temp JS`, path.relative(out, paths.tempJsPath))
            await fs.promises.mkdir(path.dirname(paths.tempJsPath), {
                recursive: true,
            })
            await fs.promises.writeFile(paths.tempJsPath, codeJs, 'utf-8')
        }

        if (!buildResult?.outputFiles) {
            throw new Error('Failed to generate result')
        }
        const packageJson = path.resolve(out, 'package.json')
        await fs.promises.writeFile(
            packageJson,
            JSON.stringify({ type: 'module' }),
            'utf-8',
        )

        const sema = new Sema(stackblitzDemoExample ? 5 : 6)
        spinner.update('Extracting types')
        logger.log(`using node path`, nodePath)
        let allFonts = [] as ComponentFontBundle[]
        const propControlsData = await Promise.all(
            buildResult?.outputFiles.map(async (file) => {
                try {
                    await sema.acquire()
                    const name = path
                        .relative(out, file.path)
                        .replace(/\.jsx?$/, '')
                    const paths = getFilePaths(file.path, out)
                    const resultPathAbs = paths.tempJsPath
                    if (!components[name]) {
                        return
                    }
                    if (!fs.existsSync(resultPathAbs)) {
                        spinner.error(
                            `cannot extract types for ${name}, missing output file`,
                        )
                        return
                    }

                    // Only use cache in watch mode
                    if (watch) {
                        // Check if we have a cached result for this file
                        const currentHash = await getFileHash(resultPathAbs)
                        const cacheKey = resultPathAbs
                        const cachedEntry = componentTypeCache.get(cacheKey)

                        if (cachedEntry && cachedEntry.hash === currentHash) {
                            // File hasn't changed, use cached results
                            logger.log(`using cached types for ${name}`)

                            // Add cached fonts to allFonts
                            if (cachedEntry.fonts) {
                                allFonts.push(
                                    ...cachedEntry.fonts.map((x) => ({
                                        ...x,
                                        fileName: path.basename(file.path),
                                    })),
                                )
                            }

                            return {
                                propertyControls: cachedEntry.propertyControls,
                                fonts: cachedEntry.fonts,
                                name,
                                typedocComments: cachedEntry.typedocComments,
                            }
                        }
                    }

                    // File has changed or not in cache, extract types
                    logger.log(`extracting types for ${name}`)
                    spinner.info(`Extracting types for component: ${name}`)
                    spinner.update(`Extracting types for ${name}`)
                    const { propertyControls, fonts } =
                        await extractPropControlsUnsafe(resultPathAbs, name)
                    if (!propertyControls) {
                        logger.log(`no property controls found for ${name}`)
                    }

                    allFonts.push(
                        ...(fonts || []).map((x) => ({
                            ...x,
                            fileName: path.basename(file.path),
                        })),
                    )
                    const componentImportedName = componentCamelCase(name)
                    const typedocComments = propControlsToTypedocComments({
                        propertyControls: propertyControls!,
                        logger,
                        componentImportedName,
                        locales: config.locales,
                        includeLocaleTypes: true,
                    })
                    logger.log(
                        `Generated TypeDoc comments for ${name}: ${!!typedocComments.headerComment}`,
                    )

                    // Update cache (only if in watch mode)
                    if (watch) {
                        const currentHash = await getFileHash(resultPathAbs)
                        const cacheKey = resultPathAbs
                        componentTypeCache.set(cacheKey, {
                            hash: currentHash,
                            propertyControls,
                            fonts,
                            typedocComments,
                        })
                    }

                    return {
                        propertyControls,
                        fonts,
                        name,
                        typedocComments,
                    }
                } finally {
                    sema.release()
                }
            }),
        ).finally(async () => {
            try {
                await fs.promises.rm(packageJson)
            } catch (error) {
                // Ignore error if file doesn't exist or can't be deleted
            }
        })

        const cssString =
            doNotEditComment +
            '/* This css file has all the necessary styles to run all your Framer components */\n' +
            '@import "unframer/styles/reset.css";\n' +
            '@import "unframer/styles/framer.css";\n\n' +
            getStyleTokensCss(tokens || []) +
            breakpointsStyles(breakpoints) +
            '\n\n' +
            getFontsStyles(allFonts)
        await fs.promises.writeFile(
            path.resolve(out, 'styles.css'),
            cssString,
            'utf-8',
        )

        logFontsUsage(allFonts)
            ?.split('\n')
            .forEach((x) => logger.log(x))

        const jsxFiles = buildResult.outputFiles
            .filter(
                (x) =>
                    x.path.endsWith('.js') &&
                    fs.existsSync(getFilePaths(x.path, out).jsxPath),
            )
            .map((x) => getFilePaths(x.path, out).jsxPath)
        const outFiles = buildResult.outputFiles
            .map((x) => {
                const paths = getFilePaths(x.path, out)
                if (x.path.endsWith('.js') && fs.existsSync(paths.jsxPath)) {
                    return null // Will be handled by jsx files
                }
                return paths.finalJsPath
            })
            .filter(Boolean)
            .concat([
                ...(metafile ? [path.resolve(out, 'meta.json')] : []),
                path.resolve(out, 'tokens.css'),
                path.resolve(out, '.cursorignore'),
                path.resolve(out, 'styles.css'),
            ])
            .concat(jsxFiles)

        const filesToDelete = prevFiles
            .filter((x) => !outFiles.includes(x))
            .filter((x) => !x.includes(tempJsPrefix)) // Don't delete temp files here, they're handled separately

        for (let file of filesToDelete) {
            logger.log('deleting', path.relative(out, file))
            try {
                await fs.promises.rm(file)
            } catch (error) {
                // Ignore error if file doesn't exist or can't be deleted
            }
        }

        if (metafile) {
            await fs.promises.writeFile(
                path.resolve(out, 'meta.json'),
                JSON.stringify(buildResult.metafile, null, 2),
                'utf-8',
            )
        }

        if (signal?.aborted) {
            throw new Error('aborted')
        }

        if (watch) {
            logger.log('waiting for components or config changes')
        }

        const res: BundleResult = {
            components: Object.entries(components).map(([name, v]) => {
                const propControls = propControlsData.find(
                    (x) => x?.name === name,
                )

                return {
                    componentPathSlug: name,
                    url: v,
                    name,
                    componentName: componentCamelCase(name),
                    propertyControls: propControls?.propertyControls,
                }
            }),
        }

        // Process and write JSX files with TypeDoc comments
        spinner.update('Processing JSX files with TypeDoc comments')
        for (let file of buildResult.outputFiles!) {
            const paths = getFilePaths(file.path, out)

            const componentName = path
                .relative(out, file.path)
                .replace(/\.js$/, '')
            const propData = propControlsData.find(
                (p) => p?.name === componentName,
            )
            const typedocComments = propData?.typedocComments

            logger.log(`Processing component: ${componentName}`)
            spinner.update(`Processing JSX for ${componentName}`)
            if (!propData) {
                logger.log(`  No propData found for ${componentName}`)
            } else {
                logger.log(
                    `  PropData found for ${componentName}, has propertyControls: ${!!propData.propertyControls}`,
                )
                if (!typedocComments) {
                    logger.log(`  No typedocComments for ${componentName}`)
                } else {
                    logger.log(
                        `  TypeDoc comments available for ${componentName}`,
                    )
                }
            }

            const existing = await fs.promises
                .readFile(paths.jsxPath, 'utf-8')
                .catch(() => null)
            const tooBigSize = 0.7 * 1024 * 1024

            let formatted = file.text

            let tooBig = file.text.length >= tooBigSize
            let didFormat = false
            if (
                config.jsx &&
                !tooBig &&
                !paths.tempJsPath.includes('/chunks/') &&
                !paths.tempJsPath.includes('\\chunks\\')
            ) {
                try {
                    const plugins = [
                        // babelPluginDeduplicateImports,
                        babelPluginJsxTransform,
                        removeJsxExpressionContainer,
                    ]

                    // Add TypeDoc plugin if we have comments for this component
                    if (typedocComments) {
                        logger.log(
                            `  Adding TypeDoc plugin for ${componentName}`,
                        )
                        plugins.push(babelPluginTypedoc(typedocComments))
                    } else {
                        logger.log(
                            `  No TypeDoc comments to add for ${componentName}`,
                        )
                    }

                    let res = transform(file.text || '', {
                        babelrc: false,
                        sourceType: 'module',
                        parserOpts: {
                            plugins: ['jsx'],
                        },
                        plugins,
                        // ast: true,
                        // code: false,
                        filename: 'x.jsx',
                        compact: false,
                        sourceMaps: false,
                    })
                    if (res?.code) {
                        if (!biome) {
                            biome = await Biome.create({
                                distribution: Distribution.NODE,
                            })
                        }
                        let result = biome.formatContent(res.code, {
                            filePath: 'example.jsx',
                        })
                        didFormat = true
                        formatted = result.content
                    }
                } catch (e) {
                    notifyError(e, 'babel transform and format')
                }
            }

            const prefix =
                `// @ts-nocheck\n` + `/* eslint-disable */\n` + doNotEditComment
            const codeJsx = prefix + formatted
            const codeJs = prefix + file.text
            logger.log(`writing`, path.relative(out, file.path))
            await fs.promises.mkdir(path.dirname(paths.jsxPath), {
                recursive: true,
            })
            // Always write the temp .js file for type extraction
            await fs.promises.writeFile(paths.tempJsPath, codeJs, 'utf-8')

            // Only write .jsx file if it's different from existing or if formatting was done
            if (didFormat && codeJsx !== existing) {
                await fs.promises.writeFile(paths.jsxPath, codeJsx, 'utf-8')
                logger.log(`Updated JSX file for ${componentName}`)
            } else if (didFormat) {
                logger.log(`JSX file unchanged for ${componentName}`)
            }
        }
        spinner.stop()
        // await fs.promises.writeFile(
        //     path.resolve(out, '.cursorignore'),
        //     `**/*.js\nchunks\n`,
        //     'utf-8',
        // )

        // Clean up temp .js files and handle prefixes
        for (let file of buildResult.outputFiles!) {
            if (file.path.endsWith('.js')) {
                const paths = getFilePaths(file.path, out)

                if (fs.existsSync(paths.jsxPath)) {
                    // Remove temp .js file if .jsx equivalent exists
                    logger.log(
                        'removing temp JS file with JSX equivalent:',
                        path.relative(out, paths.tempJsPath),
                    )
                    try {
                        await fs.promises.rm(paths.tempJsPath)
                        await fs.promises.rm(paths.finalJsPath)
                    } catch (error) {
                        // Ignore error if file doesn't exist
                    }
                } else {
                    // Rename temp .js file to final name if no .jsx equivalent
                    logger.log(
                        'renaming temp JS file to final name:',
                        path.relative(out, paths.tempJsPath),
                        '->',
                        path.relative(out, paths.finalJsPath),
                    )
                    try {
                        await fs.promises.rename(
                            paths.tempJsPath,
                            paths.finalJsPath,
                        )
                    } catch (error) {
                        // Ignore error if file doesn't exist
                    }
                }
            }
        }

        spinner.info(`Build completed`)
        return res
    }

    // when user press ctrl+c dispose
    process.on('SIGINT', async () => {
        spinner.stop()
        console.log()
        await buildContext.cancel()
        buildContext.dispose()
        process.exit(0) // Ensure process exits
    })
    process.on('SIGABRT', async () => {
        spinner.stop()
        console.log()
        await buildContext.cancel()
        buildContext.dispose()
        process.exit(0) // Ensure process exits
    })
    signal?.addEventListener('abort', async () => {
        await buildContext.cancel()
        buildContext.dispose()
    })

    const result = await rebuild()
    console.log()
    console.log()
    const outDirForExample =
        path
            .relative(process.cwd(), out)
            .split(path.sep)
            .join('/')
            .replace(/^src\//, '') || 'framer' // remove src so file works inside src
    const { exampleCode } = await createExampleComponentCode({
        outDir: out,
        // buildResult: result,
        config,
    })
    if (stackblitzDemoExample) {
        logger.log(`Inside Stackblitz demo, writing App.tsx`)
        await fs.promises.mkdir(path.dirname(stackblitzDemoExample), {
            recursive: true,
        })
        await fs.promises.writeFile(stackblitzDemoExample, exampleCode)
    }
    // Build the colorful output message
    console.log()
    console.log(pico.cyan(pico.bold('How to use the Framer components')))
    console.log()

    console.log(
        pico.green('✓') +
            ' Your components are exported to ' +
            pico.yellow(outDirForExample) +
            ' folder',
    )
    console.log()

    console.log(
        pico.dim('Each component has a ') +
            pico.cyan('.Responsive') +
            pico.dim(' variant that allows you to'),
    )
    console.log(
        pico.dim('specify different variants for different breakpoints.'),
    )

    if (exampleCode) {
        console.log()
        console.log(pico.magenta('You can use the components like this:'))
        console.log(
            pico.dim('(try copy pasting the code below into your React app)'),
        )
        console.log()
        console.log(exampleCode)
    }

    console.log()
    console.log(
        pico.yellow('⚠') +
            '  Remember to import the ' +
            pico.cyan('styles.css') +
            ' file to include',
    )
    console.log('   the necessary styles for the components.')
    console.log()
    console.log(
        pico.dim('To style components you can pass a ') +
            pico.cyan('style') +
            pico.dim(' or ') +
            pico.cyan('className') +
            pico.dim(' prop'),
    )
    console.log()
    console.log(
        pico.dim('Read more on GitHub: ') +
            pico.underline(pico.blue('https://github.com/remorses/unframer')),
    )
    console.log()
    return { result, rebuild, buildContext }
}

const packageVersionCache = new Map<string, string>()

export function resolvePackageVersion({ cwd, pkg }) {
    if (packageVersionCache.has(pkg)) {
        return Promise.resolve(packageVersionCache.get(pkg))
    }

    return new Promise<string>((resolve, reject) => {
        const code = `import('${pkg}/package.json', { with: { type: 'json' } }).then(pkg => console.log(pkg.version || pkg.default?.version));`

        const command = [
            JSON.stringify(nodePath),
            '-e',
            JSON.stringify(code),
        ].join(' ')

        exec(
            command,
            {
                cwd,
            },
            (error, stdout, stderr) => {
                if (error) {
                    // Package not installed - this is expected and handled by auto-install
                    reject(new Error(`${pkg} is not installed in your project`))
                    return
                }
                const version = stdout.trim()
                packageVersionCache.set(pkg, version)
                resolve(version)
            },
        )
    })
}

export function resolvePackage({ cwd, pkg }) {
    return new Promise<boolean>((resolve) => {
        const code = `import('${pkg}/package.json', { with: { type: 'json' } }).then(()=>console.log('true')).catch(()=>import('${pkg}').then(()=>console.log('true')).catch(()=>console.log('false')));`

        const command = [
            JSON.stringify(nodePath),
            '-e',
            JSON.stringify(code),
        ].join(' ')

        exec(
            command,
            {
                cwd,
            },
            (error, stdout) => {
                if (error) {
                    resolve(false)
                    return
                }
                const exists = stdout.trim().split('\n').pop() === 'true'
                resolve(exists)
            },
        )
    })
}

export function getDarkModeSelector(opts: {
    darkModeType?: 'class' | 'media'
    content: string
}) {
    const { darkModeType = 'class', content } = opts
    if (darkModeType === 'media') {
        return (
            '@media (prefers-color-scheme: dark) {\n' +
            '    :root {\n' +
            content +
            '\n' +
            '    }\n' +
            '}'
        )
    }
    return '.dark {\n' + content + '\n' + '}'
}

export function getStyleTokensCss(
    tokens: StyleToken[],
    darkModeType: 'class' | 'media' = 'class',
) {
    if (!tokens?.length) {
        return ''
    }

    const lightUnframerTokens = tokens
        .map(
            (token) =>
                '    --unframer-' +
                kebabCase(token.name || token.id) +
                ': ' +
                token.lightColor +
                ';',
        )
        .join('\n')

    const lightTokens = tokens
        .map(
            (token) =>
                '    --token-' + token.id + ': ' + token.lightColor + ';',
        )
        .join('\n')

    const darkUnframerTokens = tokens
        .map(
            (token) =>
                '    --unframer-' +
                kebabCase(token.name || token.id) +
                ': ' +
                token.darkColor +
                ';',
        )
        .join('\n')

    const darkTokens = tokens
        .map(
            (token) => '    --token-' + token.id + ': ' + token.darkColor + ';',
        )
        .join('\n')

    return (
        ':root {\n' +
        lightUnframerTokens +
        '\n\n' +
        lightTokens +
        '\n' +
        '}\n\n' +
        getDarkModeSelector({
            darkModeType,
            content: darkUnframerTokens + '\n\n' + darkTokens,
        })
    )
}
export function findRelativeLinks(text: string) {
    const regex = /webPageId:\s+/g
    const lines = text.split('\n')
    const lineNumbers = new Set<number>()

    for (let i = 0; i < lines.length; i++) {
        if (regex.test(lines[i])) {
            lineNumbers.add(i)
        }
    }

    return [...lineNumbers]
}

const nodePath = process.argv[0] || 'node'

export async function extractPropControlsUnsafe(
    filename,
    name,
): Promise<{
    propertyControls?: PropertyControls
    fonts?: ComponentFontBundle[]
}> {
    const delimiter = '__delimiter__'
    let propCode = `JSON.stringify({propertyControls: x.default?.propertyControls, fonts: x?.default?.fonts } || {}, null, 2)`

    const fileUrl = url.pathToFileURL(filename).href
    const code = `import('${fileUrl}').then(x => { console.log('${delimiter}'); console.log(${propCode}) })`

    const TIMEOUT = 5 * 1000
    const UNFRAMER_MAP_PACKAGES = {
        unframer: url.pathToFileURL(require.resolve('../dist/index.js')).href,
        react: url.pathToFileURL(require.resolve('react')).href,
        'react-dom': url.pathToFileURL(require.resolve('react-dom')).href,
        'react/jsx-runtime': url.pathToFileURL(
            require.resolve('react/jsx-runtime'),
        ).href,
    }
    let loaderOption = `--loader "${url.pathToFileURL(
        require.resolve('../dist/unframer-loader.js'),
    )}"`
    // try {
    //     require.resolve('unframer/package.json')
    //     UNFRAMER_MAP_PACKAGES.unframer = ''
    // } catch {}
    let stdout = await new Promise<string>((res, rej) => {
        const cmd = `"${
            nodePath
        }" --no-warnings --input-type=module ${loaderOption} -e "${code}"`

        let childProcess = exec(
            cmd,
            {
                env: {
                    // ...process.env,
                    UNFRAMER_MAP_PACKAGES: JSON.stringify(
                        UNFRAMER_MAP_PACKAGES,
                    ),
                },
            } as any,
            (err, stdout, stderr) => {
                clearTimeout(timer)
                if (err) {
                    spinner.error(`error extracting types for ${name}`)
                    console.error(stderr)
                    return rej(err)
                }

                res(stdout.toString())
            },
        )

        const timer = setTimeout(() => {
            childProcess.kill()
            rej(
                new Error(
                    `Timed out after ${TIMEOUT}ms while extracting types for ${name}`,
                ),
            )
        }, TIMEOUT)
    }).catch((e) => {
        logger.log(e.stack)
        return ''
    })

    stdout = stdout.split(delimiter)[1] || ''
    if (!stdout) {
        return {}
    }

    // console.log(stdout)
    return safeJsonParse(stdout)
}

function safeJsonParse(text) {
    try {
        return JSON.parse(text)
    } catch (e) {
        logger.error('cannot parse json', text.slice(0, 100))
        return null
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

type ExtractedTokenInfo = {
    tokenName: string
    metadata?: Record<string, any>

    defaultValue: string
}

export function extractTokenInfo(code: string): ExtractedTokenInfo[] {
    const lines = code.split('\n')
    const tokenLines = lines.filter((line) => line.includes('var(--token'))
    const tokens: ExtractedTokenInfo[] = []

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

const breakpointVariants = ['mobile', 'tablet', 'desktop']

async function recursiveReaddir(dir: string): Promise<string[]> {
    const dirents = await fs.promises.readdir(dir, { withFileTypes: true })
    const files = await Promise.all(
        dirents.map((dirent) => {
            const res = path.resolve(dir, dirent.name)
            return dirent.isDirectory() ? recursiveReaddir(res) : res
        }),
    )
    return files.flat()
}

export function indentWithTabs(str: string, tabs: string) {
    if (!str) return ''
    return str
        .split('\n')
        .map((line, i) => (!i ? line : tabs + line))
        .join('\n')
}

export async function createExampleComponentCode({
    outDir,
    config,
}: {
    outDir: string
    config: Config
}) {
    const outDirForExample = path
        .relative(process.cwd(), outDir)
        .split(path.sep)
        .join('/')
        .replace(/^src\//, '') // remove src so file works inside src
    const instances = config?.componentInstancesInIndexPage?.sort((a, b) => {
        // Order first by nodeDepth (lower is better)
        return a.nodeDepth - b.nodeDepth || a.pageOrdering - b.pageOrdering
    })

    // If no instances, use components directly
    if (!instances?.length) {
        const componentNames = Object.keys(config.components || {})
        if (!componentNames.length) {
            return { outDirForExample, exampleCode: '' }
        }

        // Generate simple example with all available components
        const imports = componentNames.map((name) => {
            return `import ${componentCamelCase(name)} from './${outDirForExample}/${name}'`
        })

        const jsx = componentNames.map((name) => {
            return `<${componentCamelCase(name)}.Responsive />`
        })

        let containerClasses = ''
        if (config.pageBackgroundColor) {
            let bg = config.pageBackgroundColor?.replace(/ /g, '_')
            containerClasses += `bg-[${bg}]`
        }

        const exampleCode = dedent`
          import './${outDirForExample}/styles.css'

          ${indentWithTabs(imports?.join('\n'), '')}

          export default function App() {
            return (
              <div className='flex flex-col items-center gap-3 ${containerClasses}'>
                ${indentWithTabs(jsx?.join('\n'), '          ')}
              </div>
            );
          };
          `

        return {
            outDirForExample,
            exampleCode,
        }
    }

    const imports = instances?.map((exampleComponent) => {
        return `import ${componentCamelCase(exampleComponent?.componentPathSlug)} from './${outDirForExample}/${
            exampleComponent?.componentPathSlug
        }'`
    })

    const jsx = instances?.map((exampleComponent) => {
        let propStr = ''
        for (let [key, value] of Object.entries(
            exampleComponent.controls || {},
        )) {
            if (key === 'variant') {
                continue
            }
            if (typeof value === 'object') {
                continue
            }
            // TODO get property controls to render enums much better? maybe do this in plugin instead
            propStr += '\n'
            propStr += `  ${key}={${JSON.stringify(value)}}`
        }
        if (propStr) propStr += '\n'
        const responsiveComponent = `<${componentCamelCase(exampleComponent?.componentPathSlug)}.Responsive${propStr}/>`
        return responsiveComponent
    })
    if (!jsx.join().trim()) return { outDirForExample, exampleCode: '' }

    let containerClasses = ''
    if (config.pageBackgroundColor) {
        let bg = config.pageBackgroundColor?.replace(/ /g, '_')
        containerClasses += `bg-[${bg}]`
    }

    const exampleCode = dedent`
      import './${outDirForExample}/styles.css'

      ${indentWithTabs(imports?.join('\n'), '')}

      export default function App() {
        return (
          <div className='flex flex-col items-center gap-3 ${containerClasses}'>
            ${indentWithTabs(jsx?.join('\n'), '      ')}
          </div>
        );
      };
      `
    return {
        outDirForExample,
        exampleCode,
    }
}

type BundleResult = {
    components: Array<{
        componentPathSlug: string
        name: string
        url: string
        componentName: string
        propertyControls?: PropertyControls
    }>
}

/**
 * Compares two semantic version strings.
 * Returns true if versionB is greater than versionA.
 * Handles x.y.z, x.y, x, and optional pre-release (-alpha, etc).
 */
export function isVersionGreater(versionA: string, versionB: string): boolean {
    try {
        function parseVersion(version: string) {
            // Remove pre-release (e.g. -alpha.1)
            let [core] = version.trim().split('-')
            return core.split('.').map((x) => parseInt(x, 10))
        }
        const [a1 = 0, a2 = 0, a3 = 0] = parseVersion(versionA)
        const [b1 = 0, b2 = 0, b3 = 0] = parseVersion(versionB)

        if (b1 > a1) return true
        if (b1 < a1) return false
        if (b2 > a2) return true
        if (b2 < a2) return false
        if (b3 > a3) return true
        if (b3 < a3) return false

        // If all equal, not greater
        return false
    } catch (error) {
        spinner.error(
            `Error comparing versions "${versionA}" and "${versionB}": ${error?.stack || error?.message || error}`,
        )
        return true
    }
}
