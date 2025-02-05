import { BuildResult, build, context, type BuildOptions } from 'esbuild'
import packageJson from '../package.json'

import url from 'url'
import { Config } from './cli'

import { Sema } from 'async-sema'

import { nodeModulesPolyfillPlugin } from 'esbuild-plugins-node-modules-polyfill'

import { exec } from 'child_process'
import fs from 'fs'
import path from 'path'
import dedent from 'string-dedent'
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
    defaultExternalPackages,
    esbuildPluginBundleDependencies,
    resolveRedirect,
} from './esbuild'
import {
    ControlDescription,
    ControlType,
    PropertyControls,
    combinedCSSRules,
} from './framer.js'
import {
    stackblitzDemoExample,
    kebabCase,
    logger,
    spinner,
    terminalMarkdown,
} from './utils.js'

export type StyleToken = {
    id: string
    name?: string | null
    lightColor: string
    darkColor: string
}

export async function bundle({
    config,
    cwd: out = '',
    watch = false,
    signal = undefined as AbortSignal | undefined,
}: {
    config: Config
    cwd: string
    watch?: boolean
    signal?: AbortSignal
}) {
    const { components, breakpoints, tokens, framerWebPages } = config
    out ||= path.resolve(process.cwd(), 'example')
    out = path.resolve(out)
    try {
        await fs.promises.mkdir(out, { recursive: true })
    } catch (e) {}

    spinner.start()

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
    let foundError = false
    const buildContext = await fn({
        absWorkingDir: out,

        entryPoints: Object.keys(components).map((name) => {
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
        logLevel: 'error',
        pure: ['addPropertyControls'],
        external: defaultExternalPackages,
        chunkNames: 'chunks/[name]-[hash]',
        plugins: [
            esbuildPluginBundleDependencies({
                signal,
                externalPackages: config.externalPackages,
                externalizeNpm: config.allExternal,
                outDir: config.outDir,
                onMissingPackage: (e) => {
                    foundError = true
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
                                const locales = ${
                                    JSON.stringify(config.locales) || '[]'
                                }
                                const defaultResponsiveVariants = ${JSON.stringify(
                                    responsiveVariants,
                                    null,
                                    2,
                                )}

                                Component.Responsive = ({ locale, ...rest }) => {
                                    return (
                                        <ContextProviders
                                            routes={${JSON.stringify(
                                                otherRoutes,
                                            )}}
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

                                export default function ComponentWithRoot({ locale, ...rest }) {
                                    return (
                                        <ContextProviders
                                            routes={${JSON.stringify(
                                                otherRoutes,
                                                null,
                                                2,
                                            )}}
                                            children={<Component {...rest} />}
                                            framerSiteId={${JSON.stringify(
                                                config.fullFramerProjectId,
                                            )}}
                                            locale={locale}
                                            locales={locales}
                                        />
                                    )
                                }
                                Object.assign(ComponentWithRoot, Component)
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
        const prevFiles = await recursiveReaddir(out)
        const buildResult = await buildContext.rebuild().catch((e) => {
            if (e.message.includes('No matching export ')) {
                foundError = true
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

        for (let file of buildResult.outputFiles!) {
            const resultPathAbs = path.resolve(out, file.path)
            const existing = await fs.promises
                .readFile(file.path, 'utf-8')
                .catch(() => null)
            // let res = transform(file.text || '', {
            //     babelrc: false,
            //     sourceType: 'module',
            //     plugins: [
            //         babelPluginDeduplicateImports,

            //         babelPluginJsxTransform(),
            //     ],
            //     filename: 'x.js',
            //     compact: true,
            //     sourceMaps: false,
            // })
            // let inputCode = res!.code!

            const tooBigSize = 1 * 1024 * 1024

            let formatted = file.text
            // let tooBig = file.text.length >= tooBigSize
            // let shouldFormat = !tooBig && !file.path.includes('chunks')
            // if (shouldFormat) {
            //     spinner.update(`Formatting ${path.relative(out, file.path)}`)
            //     formatted = dprint.format('file.jsx', file.text, {
            //         lineWidth: 140,
            //         quoteStyle: 'alwaysSingle',
            //         trailingCommas: 'always',
            //         semiColons: 'always',
            //     })
            // }
            // if (tooBig) {
            //     spinner.info(
            //         `skipping formatting ${path.relative(
            //             out,
            //             file.path,
            //         )}, too big`,
            //     )
            // }

            let codeNew =
                `// @ts-nocheck\n` +
                `/* eslint-disable */\n` +
                doNotEditComment +
                formatted
            // if (framerWebPages?.length) {
            //     codeNew = replaceWebPageIds({
            //         code: codeNew,
            //         elements: framerWebPages,
            //     })
            // }
            // const lines = findRelativeLinks(codeNew)
            // if (lines.length) {
            //     spinner.error(
            //         `found broken links for ${path.relative(out, file.path)}`,
            //     )
            //     lines.forEach((line) => {
            //         logger.log(`${path.resolve(out, file.path)}:${line + 1}`)
            //     })
            // }

            if (existing === codeNew) {
                continue
            }
            logger.log(`writing`, path.relative(out, file.path))
            await fs.promises.mkdir(path.dirname(resultPathAbs), {
                recursive: true,
            })
            await fs.promises.writeFile(resultPathAbs, codeNew, 'utf-8')
        }
        spinner.stop()
        await fs.promises.writeFile(
            path.resolve(out, '.cursorignore'),
            `**/*.js\nchunks\n`,
            'utf-8',
        )

        if (!buildResult?.outputFiles) {
            throw new Error('Failed to generate result')
        }
        const packageJson = path.resolve(out, 'package.json')
        await fs.promises.writeFile(
            packageJson,
            JSON.stringify({ type: 'module' }),
            'utf-8',
        )

        const sema = new Sema(stackblitzDemoExample ? 5 : 10)
        spinner.update('Extracting types')
        logger.log(`using node path`, nodePath)
        let allFonts = [] as ComponentFontBundle[]
        const propControlsData = await Promise.all(
            buildResult?.outputFiles.map(async (file) => {
                try {
                    await sema.acquire()
                    const name = path
                        .relative(out, file.path)
                        .replace(/\.js$/, '')
                    const resultPathAbs = path.resolve(out, file.path)
                    if (!components[name]) {
                        return
                    }
                    logger.log(`extracting types for ${name}`)
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
                    const types = propControlsToType({
                        controls: propertyControls!,
                        fileName: name,
                        config,
                    })
                    await fs.promises.mkdir(out, { recursive: true })
                    await fs.promises.writeFile(
                        path.resolve(out, `${name}.d.ts`),
                        types,
                    )
                    return {
                        propertyControls,
                        fonts,
                        name,
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
        // spinner.stop()

        const cssString =
            doNotEditComment +
            '/* This css file has all the necessary styles to run all your components */\n' +
            '\n' +
            resetCssStyles +
            getStyleTokensCss(tokens || []) +
            breakpointsStyles(breakpoints) +
            breakpointsStylesLegacy(breakpoints) +
            '\n\n' +
            combinedCSSRules
                .map((x) => (x?.startsWith('  ') ? dedent(x) : x))
                .join('\n') +
            getFontsStyles(allFonts)
        await fs.promises.writeFile(
            path.resolve(out, 'styles.css'),
            cssString,
            'utf-8',
        )

        logFontsUsage(allFonts)
            .split('\n')
            .forEach((x) => logger.log(x))

        const outFiles = buildResult.outputFiles
            .map((x) => path.resolve(out, x.path))
            .concat([
                path.resolve(out, 'meta.json'),
                path.resolve(out, 'tokens.css'),
                path.resolve(out, '.cursorignore'),
                path.resolve(out, 'styles.css'),
            ])
            .concat(
                buildResult.outputFiles.map((x) =>
                    path.resolve(out, x.path.replace('.js', '.d.ts')),
                ),
            )
        const filesToDelete = prevFiles.filter((x) => !outFiles.includes(x))
        for (let file of filesToDelete) {
            logger.log('deleting', path.relative(out, file))
            try {
                await fs.promises.rm(file)
            } catch (error) {
                // Ignore error if file doesn't exist or can't be deleted
            }
        }

        await fs.promises.writeFile(
            path.resolve(out, 'meta.json'),
            JSON.stringify(buildResult.metafile, null, 2),
            'utf-8',
        )

        if (signal?.aborted) {
            throw new Error('aborted')
        }

        if (watch) {
            logger.log('waiting for components or config changes')
        }
        if (!tokens?.length) {
            const tokensCss =
                "/* This css file contains your color variables, sometimes these get desynced when updated in Framer so it's good that you copy and paste this snippet into your app css */\n" +
                '/* Bug: https://www.framer.community/c/bugs/color-style-unlinks-when-copying-component-between-projects-resulting-in-potential-value-discrepancy */\n' +
                getTokensCss({ out, result: buildResult })
            await fs.promises.writeFile(
                path.resolve(out, 'tokens.css'),
                tokensCss,
                'utf-8',
            )
        }
        const res = {
            components: Object.entries(components).map(([name, v]) => {
                const propControls = propControlsData.find(
                    (x) => x?.name === name,
                )

                return {
                    path: name,
                    url: v,
                    name,
                    componentName: componentCamelCase(name),
                    propertyControls: propControls?.propertyControls,
                }
            }),
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

    let exampleComponent = result?.components?.sort((a, b) => {
        const aVariants = getVariantsFromPropControls(a.propertyControls)
        const bVariants = getVariantsFromPropControls(b.propertyControls)
        const aHasBreakpoints = (aVariants?.breakpoints?.length || 0) >= 2
        const bHasBreakpoints = (bVariants?.breakpoints?.length || 0) >= 2

        // Sort components with breakpoints first
        if (aHasBreakpoints && !bHasBreakpoints) return -1
        if (!aHasBreakpoints && bHasBreakpoints) return 1

        // Within each group, prefer components with example properties
        const aProp = findExampleProperty(a.propertyControls)
        const bProp = findExampleProperty(b.propertyControls)
        return (bProp ? 1 : 0) - (aProp ? 1 : 0)
    })?.[0]
    if (!exampleComponent) {
        logger.log(
            `No example component found with breakpoints, using random example`,
        )
        // Create an example component if none found with breakpoints
        exampleComponent = {
            path: 'hero',
            componentName: 'HeroFramerComponent',
            propertyControls: {
                variant: {
                    type: ControlType.Enum,
                    options: ['Desktop', 'Tablet', 'Mobile'],
                    optionTitles: ['Desktop', 'Tablet', 'Mobile'],
                },
            } as any,
            name: 'Hero',
            url: '',
        }
        if (!exampleComponent) {
            return { rebuild, buildContext }
        }
    }

    const outDirForExample = path.posix
        .relative(process.cwd(), out)
        .replace(/^src\//, '') // remove src so file works inside src
    logger.log(
        'exampleComponent?.propertyControls',
        exampleComponent?.propertyControls,
    )
    const prop =
        findExampleProperty(exampleComponent?.propertyControls) ||
        'exampleFramerVariable'
    const responsiveComponent = (() => {
        return dedent`
            {/* use .Responsive for components with breakpoints */}
            <${exampleComponent?.componentName}.Responsive
                ${prop}='example' 
            />
            `
    })()
    const exampleCode = dedent`
    import './${outDirForExample}/styles.css'
    // this file imported below is generated when you run \`npm run framer\`
    import ${exampleComponent?.componentName} from './${outDirForExample}/${
        exampleComponent?.path
    }'
    
    export default function App() {
        return (
            <div className='flex flex-col'>
                <${exampleComponent?.componentName}
                    ${prop}='example'
                    style={{ width: '100%' }}
                />
                ${responsiveComponent
                    .split('\n')
                    .map((line, i) => (!i ? line : '            ' + line))
                    .join('\n')}
            </div>
        );
    };
    `

    if (stackblitzDemoExample) {
        logger.log(`Inside Stackblitz demo, writing App.tsx`)
        await fs.promises.mkdir(path.dirname(stackblitzDemoExample), {
            recursive: true,
        })
        await fs.promises.writeFile(stackblitzDemoExample, exampleCode)
    }
    if (!foundError) {
        console.log(
            terminalMarkdown(dedent`
        # How to use the Framer components

        Your components are exported to \`${outDirForExample}\` folder. Now please install the \`unframer\` runtime dependency:

        \`\`\`sh
        npm install unframer
        \`\`\`

        Each component has a \`.Responsive\` variant that allows you to specify different variants for different breakpoints.
        
        You can use the components like this (try copy pasting the code below into your React app):

        \`\`\`jsx
        ${exampleCode}
        \`\`\`

        It's very important to import the \`styles.css\` file to include the necessary styles for the components.

        To style components you can pass a \`style\` or \`className\` prop (but remember to use !important to increase the specificity).

        Read more on GitHub: https://github.com/remorses/unframer
        
        `),
        )
    }
    await checkUnframerVersion({ cwd: out })
    console.log()
    return { result, rebuild, buildContext }
}

const packageVersionCache = new Map<string, string>()

export function resolvePackage({ cwd, pkg }) {
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
                    logger.log(stderr)
                    reject(
                        new Error('Unframer is not installed in your project'),
                    )
                    return
                }
                const version = stdout.trim()
                packageVersionCache.set(pkg, version)
                resolve(version)
            },
        )
    })
}

export async function checkUnframerVersion({ cwd }: { cwd: string }) {
    const currentVersion = packageJson.version
    try {
        const installedVersion = await resolvePackage({ cwd, pkg: 'unframer' })
        if (installedVersion !== currentVersion) {
            spinner.error(
                `IMPORTANT: Unframer version mismatch. Please run: npm update unframer@latest`,
            )
        }
    } catch (e) {
        spinner.error(
            'IMPORTANT: Unframer is not installed in your project. Please run: npm install unframer',
        )
    }
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

async function extractPropControlsSafe(text, name) {
    try {
        const propControlsCode = await parsePropertyControls(text)
        // console.log('propControlsCode', propControlsCode)
        const propControls: PropertyControls | undefined =
            await Promise.resolve().then(async () => {
                if (!propControlsCode) return
                const ivm = require('isolated-vm')
                const vm = new ivm.Isolate({ memoryLimit: 128 })

                const vmContext = vm.createContextSync()

                const jail = vmContext.global

                let result = undefined
                vmContext.global.setSync('__return', (x) => {
                    result = x
                })

                const mod = vm.compileModuleSync(`${text}`)
                await mod.instantiateSync(vmContext, (spec, mod) => {
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
        unframer: url.pathToFileURL(require.resolve('../esm/index.js')).href,
        react: url.pathToFileURL(require.resolve('react')).href,
        'react-dom': url.pathToFileURL(require.resolve('react-dom')).href,
        'react/jsx-runtime': url.pathToFileURL(
            require.resolve('react/jsx-runtime'),
        ).href,
    }
    let loaderOption = `--loader "${url.pathToFileURL(
        require.resolve('../dist/unframer-loader.js'),
    )}"`
    try {
        require.resolve('unframer/package.json')

        UNFRAMER_MAP_PACKAGES.unframer = ''
    } catch {}
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
            },
            (err, stdout, stderr) => {
                clearTimeout(timer)
                if (err) {
                    spinner.error(`error extracting types for ${name}`)
                    console.error(stderr)
                    return rej(err)
                }

                res(stdout)
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

export function propControlsToType({
    config,
    fileName,
    controls,
}: {
    controls: PropertyControls
    fileName
    config
}) {
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
                let name = propCamelCase(value.title || key || '')
                if (!name) {
                    return ''
                }
                return `    ${JSON.stringify(name)}?: ${typescriptType(value)}`
            })
            .filter(Boolean)
            .join('\n')

        const componentName = componentCamelCase(fileName)

        const defaultPropsTypes =
            [
                'children?: React.ReactNode',
                'locale?: Locale',
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
        t += '/* This file was generated by Unframer, do not edit manually */\n'

        t += 'import * as React from "react"\n\n'
        t += 'import { UnframerBreakpoint } from "unframer"\n\n'
        t += `type Locale = ${
            config.locales?.length
                ? config.locales.map((l) => `'${l.code}'`).join(' | ')
                : 'string'
        }\n`
        t += `export interface Props {\n${defaultPropsTypes}${types}\n}\n\n`
        t += `const ${componentName} = (props: Props) => any\n\n`
        t += `type VariantsMap = Partial<Record<UnframerBreakpoint, Props['variant']>> & { base: Props['variant'] }\n\n`
        t += `${componentName}.Responsive = (props: Omit<Props, 'variant'> & {variants?: VariantsMap}) => any\n\n`
        t += `export default ${componentName}\n\n`

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

export function componentCamelCase(str: string) {
    str = str?.replace(/\.js$/, '')
    if (!str) {
        return 'FramerComponent'
    }
    // Take last part after slashes
    str = str.split('/').filter(Boolean).pop() || ''
    str = str.replace(/-([\w])/g, (g) => g[1].toUpperCase())
    str = str.replace(/_([a-z])/g, (g) => g[1].toUpperCase())
    str = str[0].toUpperCase() + str.slice(1)
    str = str + 'FramerComponent'
    return str
}

const breakpointVariants = ['mobile', 'tablet', 'desktop']

function getVariantsFromPropControls(propControls?: PropertyControls) {
    if (!propControls?.variant) {
        return null
    }

    let variants =
        propControls.variant?.['optionTitles'] ||
        propControls.variant?.['options'] ||
        []
    // Sort breakpoint-related variants first
    return {
        variants: variants,
        breakpoints: variants.filter((v) =>
            breakpointVariants.some((device) =>
                v.toLowerCase().includes(device),
            ),
        ),
    }
}

function findExampleProperty(propertyControls?: PropertyControls) {
    if (!propertyControls) {
        return null
    }

    const stringProp = Object.entries(propertyControls).find(([_, control]) => {
        // console.log('control', _, control)
        return control?.type === ControlType.String
    })

    if (!stringProp) {
        return null
    }

    return propCamelCase(stringProp[1]?.title || '')
}
export function propCamelCase(str: string) {
    if (!str) {
        return ''
    }
    // Handle consecutive uppercase letters followed by lowercase, this is a bug in Framer, makes it match Framer
    str = str.replace(/([A-Z]{2,})([a-z])/g, (_, upper, lower) => {
        return upper + lower.toUpperCase()
    })
    // Convert dashes to camelCase (e.g. foo-bar -> fooBar)
    str = str.replace(/-([\w])/g, (g) => g[1].toUpperCase())
    // Convert underscores to camelCase (e.g. foo_bar -> fooBar)
    str = str.replace(/_([a-z])/g, (g) => g[1].toUpperCase())
    // Remove spaces (e.g. "Foo Bar" -> "fooBar")
    str = str.replace(/\s+(.)/g, (_, c) => c.toUpperCase())

    // Ensure first character is lowercase
    str = str[0].toLowerCase() + str.slice(1)
    // Add underscore prefix if starts with number
    if (/^\d/.test(str)) {
        str = '_' + str
    }
    return str
}

const resetCssStyles = `
:root {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
* {
    box-sizing: border-box;
    -webkit-font-smoothing: inherit;
}
h1, h2, h3, h4, h5, h6, p, figure {
    margin: 0;
}
        
`

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
