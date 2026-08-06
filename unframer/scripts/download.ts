import { dedent } from '../src/utils.js'

import * as t from '@babel/types'

import annotateAsPure from '@babel/helper-annotate-as-pure'

import dprint from 'dprint-node'

import { build } from 'esbuild'
import { PluginObj, transform } from '@babel/core'
import fs from 'fs'
import path from 'path'
import { esbuildPluginBundleDependencies } from "../src/esbuild.js"
import { logger } from "../src/utils.js"
import { babelPluginDeduplicateImports } from "../src/babel-plugin-imports.js"
import { babelPluginSuppressHydration } from "../src/babel-jsx.js"

const __dirname = path.dirname(new URL(import.meta.url).pathname)

const session = process.env.FRAMER_SESSION
if (!session) {
    throw new Error('Missing session')
}

export async function main({ framerTypesUrl }) {
    const { src: framerUrl } = await getLatestFramerScriptSrc({ session })

    // console.log('src', src)
    let out = path.resolve(__dirname, '../src')
    const prevFileCode = await fs.promises
        .readFile(path.resolve(out, `framer.js`), 'utf-8')
        .catch(() => '')
    out = path.resolve(out)
    fs.mkdirSync(path.resolve(out), { recursive: true })

    const u = new URL(framerUrl)

    const chunksDir = path.resolve(out, 'framer-chunks')
    if (fs.existsSync(chunksDir)) {
        fs.rmSync(chunksDir, { recursive: true })
        console.log('cleaned old framer-chunks/')
    }

    const resultFile = path.resolve(out, `framer.js`)
    const result = await build({
        entryPoints: { framer: framerUrl },
        chunkNames: 'framer-chunks/[name]-[hash]',
        jsx: 'automatic',
        splitting: true,
        bundle: true,
        platform: 'browser',
        format: 'esm',
        minify: false,
        treeShaking: true,
        // splitting: true,
        logLevel: 'error',
        jsxSideEffects: false,

        pure: ['addPropertyControls'],
        define: {
            'process.env.NODE_ENV': JSON.stringify('production'),
            // 'RenderEnvironment.target': JSON.stringify('PREVIEW'),
        },
        plugins: [
            // Stub Framer editor-only modules so esbuild never fetches or
            // bundles them. These are only used by the Framer editor (font
            // inspector, CMS canvas preview) and are dead code in exported
            // websites: fontStore.enabled defaults to false and is never set
            // to true, so the font import chain is never triggered. SQLite
            // is only used for Framer's canvas CMS preview.
            {
                name: 'stub-dead-framer-modules',
                setup(build) {
                    const deadPattern = /(google-|fontshare-|framer-font-|sqlite|default-blog)/
                    build.onLoad({ filter: deadPattern, namespace: '/' }, (args) => {
                        console.log(`[STUB] ${args.path}`)
                        return { contents: 'export default {}', loader: 'js' }
                    })
                },
            },
            esbuildPluginBundleDependencies({
                externalizeNpm: true,
                outDir: path.dirname(resultFile),
                onFetch: ({ url, resolvedUrl }) => {
                    console.log(`[FETCH] ${url}`)
                },
            }),
        ],
        write: true,
        // inject: [path.resolve(__dirname, '../src/inject.ts')],
        // outfile: 'dist/example.js',
        outdir: path.dirname(resultFile),
    })
    // logger.log('result', result)
    let types = await fetch(framerTypesUrl).then((x) => x.text())
    types = types
        .replace('export * from "framer-motion";', '')
        .replace(
            'export declare interface ComponentFont extends Omit<ComponentFontV2, "family"> {',
            'export declare interface ComponentFont extends Omit<ComponentFontV2, "family"> {\n    cssFamilyName?: string;',
        )
        .replace('declare interface ComponentFontV1 {', 'export declare interface ComponentFontV1 {')

    types += dedent`
    export declare const combinedCSSRules: string[]

    export interface FramerMotionGlobalConfig {
        useManualTiming?: boolean
        instantAnimations?: boolean
        skipAnimations?: boolean
        mix?: unknown
        WillChange?: new (value: string) => unknown
    }

    export interface FramerInjectedRuntimeImage {
        src?: string
        srcSet?: string
    }

    export interface FramerInjectedRuntimeRect {
        width?: number
        height?: number
    }

    export interface FramerInjectedRuntime {
        imagePlaceholderSvg?: string
        useImageSource?(image: FramerInjectedRuntimeImage, rect?: FramerInjectedRuntimeRect, nodeId?: string): string
        useImageElement?(image: FramerInjectedRuntimeImage, rect?: FramerInjectedRuntimeRect, nodeId?: string): HTMLImageElement
        canRenderOptimizedCanvasImage?(src?: string): boolean
        isOnPageCanvas?: boolean
    }

    export interface FramerMotionFrameData {
        delta: number
        timestamp: number
        isProcessing: boolean
    }

    export type FramerMotionFrameCallback = (frameData: FramerMotionFrameData) => void

    export interface FramerMotionFrameStep {
        schedule(callback: FramerMotionFrameCallback, keepAlive?: boolean, immediate?: boolean): FramerMotionFrameCallback
        cancel(callback: FramerMotionFrameCallback): void
        process(frameData: FramerMotionFrameData): void
    }

    export type FramerMotionFrameStepName =
        | 'setup'
        | 'read'
        | 'resolveKeyframes'
        | 'preUpdate'
        | 'update'
        | 'preRender'
        | 'render'
        | 'postRender'

    export type FramerMotionFrameSteps = Record<FramerMotionFrameStepName, FramerMotionFrameStep>

    export interface FramerMotionTime {
        now(): number
        set(newTime: number): void
    }

    export interface FramerMotionGeneratorState<Value = unknown> {
        value: Value
        done?: boolean
    }

    export interface FramerMotionGenerator<Value = unknown> {
        calculatedDuration?: number | null
        next(time: number): FramerMotionGeneratorState<Value>
        velocity?(time: number): number
    }

    export interface FramerMotionAnimationDriver {
        now(): number
        start(autoplay?: boolean): void
        stop(): void
    }

    export interface FramerMotionAnimationOptions<Value = unknown> {
        keyframes: Value[]
        autoplay?: boolean
        delay?: number
        repeat?: number
        repeatDelay?: number
        repeatType?: 'loop' | 'reverse' | 'mirror'
        velocity?: number
        finalKeyframe?: Value
        startTime?: number
        allowFlatten?: boolean
        motionValue?: { updatedAt?: number }
        type?: (options: FramerMotionAnimationOptions<Value>) => FramerMotionGenerator<Value>
        driver?: (update: (timestamp: number) => void) => FramerMotionAnimationDriver
        onUpdate?(latest: Value): void
        onPlay?(): void
        onComplete?(): void
        onCancel?(): void
        onStop?(): void
    }

    export declare class JSAnimation<Value = unknown> implements PromiseLike<void> {
        constructor(options: FramerMotionAnimationOptions<Value>)
        options: FramerMotionAnimationOptions<Value>
        state: 'idle' | 'running' | 'paused' | 'finished'
        currentTime: number
        playbackSpeed: number
        readonly duration: number
        readonly iterationDuration: number
        time: number
        speed: number
        readonly finished: Promise<void>
        then<TResult1 = void, TResult2 = never>(
            onfulfilled?: ((value: void) => TResult1 | PromiseLike<TResult1>) | null,
            onrejected?: ((reason: Error) => TResult2 | PromiseLike<TResult2>) | null,
        ): Promise<TResult1 | TResult2>
        play(): void
        pause(): void
        complete(): void
        finish(): void
        cancel(): void
        stop(): void
        tick(timestamp: number, sample?: boolean): FramerMotionGeneratorState<Value>
        sample(sampleTime: number): FramerMotionGeneratorState<Value>
        attachTimeline(timeline: { observe(animation: JSAnimation<Value>): VoidFunction }): VoidFunction
    }

    export declare const MotionGlobalConfig: FramerMotionGlobalConfig
    export declare const frameData: FramerMotionFrameData
    export declare const frameSteps: FramerMotionFrameSteps
    export declare const time: FramerMotionTime
    export declare const visualElementStore: WeakMap<object, unknown>
    export declare function _injectRuntime(injectedRuntime: FramerInjectedRuntime): void

    export * from 'real-framer-motion'
    `
    fs.writeFileSync(path.resolve(out, 'framer.d.ts'), types)

    const { code, framerMotionVersion, framerVersion } = await fixFramerCode({
        resultFile,
    })

    // if the file changed, call changeset
    if (prevFileCode !== code) {
        logger.log('new framer version found, versioning...')
        const change = dedent`
        ---
        unframer: patch
        ---

        Update to latest Framer runtime, framer@${framerVersion}, framer-motion@${framerMotionVersion}
        `
        fs.writeFileSync(
            `../.changeset/${framerVersion}-${framerMotionVersion}.md`,
            change,
            'utf-8',
        )
        // increase package.json version with a patch, with pnpm

        // await changeset()
    }

    const { combinedCSSRules } = await import(resultFile)

    const css = combinedCSSRules
        .map((x) => (x?.startsWith('  ') ? dedent(x) : x))
        .join('\n')
    fs.writeFileSync(path.resolve(out, 'styles/framer.css'), css)
}

const purePlugin = ({}: { types: typeof t }): PluginObj => ({
    visitor: {
        ClassDeclaration(path) {
            annotateAsPure(path)
        },
        ClassExpression(path) {
            const { parent } = path

            if (t.isVariableDeclarator(parent)) {
                // only if at top level
                // if (path.getFunctionParent()) return
                annotateAsPure(path)
            }
        },
        // VariableDeclaration(path) {
        //     if (path.getFunctionParent()) return
        //     // if it is a function declaration, return
        //     if (
        //         path.node.declarations.some(
        //             (d) =>
        //                 t.isVariableDeclarator(d) &&
        //                 d.init &&
        //                 (t.isFunction(d.init) || t.isCallExpression(d.init)),
        //         )
        //     ) {
        //         return
        //     }

        //     annotateAsPure(path.node)
        // },

        //     CallExpression(path) {
        //         if (path.getFunctionParent()) return
        //         const { parent } = path
        //         if (
        //             t.isVariableDeclarator(parent) ||
        //             t.isAssignmentExpression(parent) ||
        //             t.isObjectProperty(parent) ||
        //             t.isObjectProperty(parent) ||
        //             t.isArrayExpression(parent) ||
        //             t.isCallExpression(parent)
        //         ) {
        //             annotateAsPure(path)
        //         }
        //     },
    },
})

/**
 * Framer ships a new runtime bundle every day and regularly renames or
 * refactors the code we patch. A plain `.replace()` that stops matching is a
 * silent no-op: the download keeps succeeding and the breakage only surfaces
 * much later, downstream, in exported sites.
 *
 * This bit us twice at once in Aug 2026:
 *   - `combinedCSSRules` became `LazyProp(() => combineCSSRules(false))`, so the
 *     exported value turned into a `{ get value() }` object instead of string[].
 *   - `initLazyModulesCache` went from `const promise = import(url).then` to
 *     `preloadLazyModule(hash2, () => import(url), url)`, so the
 *     webpackIgnore/@vite-ignore comments silently stopped being injected.
 *
 * The old `if (code === codeAfter) throw` guard could never fire, because
 * codeAfter always had appended text by the time it ran. Every patch below must
 * assert instead, so the daily workflow fails loudly the day Framer moves.
 */
function replaceOrThrow({
    code,
    find,
    replace,
    what,
}: {
    code: string
    find: RegExp
    replace: string
    what: string
}) {
    const result = code.replace(find, replace)
    if (result === code) {
        throw new Error(
            `Failed to patch framer.js: ${what}. The pattern ${find} no longer matches the Framer bundle, it probably got refactored upstream.`,
        )
    }
    return result
}

export async function fixFramerCode({ resultFile }) {
    const output = fs.readFileSync(resultFile, 'utf-8')
    const babelRes = transform(output || '', {
        babelrc: false,
        sourceType: 'module',
        plugins: [
            // '@babel/plugin-transform-react-pure-annotations',
            babelPluginDeduplicateImports,
            babelPluginSuppressHydration,
            // purePlugin,
        ],
        filename: '',
        compact: false,

        sourceMaps: false,
    })

    let codeToFormat = babelRes!.code!
    let code = dprint.format('x.js', codeToFormat, {
        lineWidth: 140,
        quoteStyle: 'alwaysSingle',

        trailingCommas: 'always',
        semiColons: 'always',
    })
    let codeAfter = code
    // this piece of code was removed in https://vercel.com/gang/unframer-nextjs-app/F8jbRtq2KZvmTYGBapgwbTVbsqyy
    // https://github.com/remorses/unframer/commit/537db6e74858b01d97cef3caeb047569bd6d3ccf
    // probably because new react version should append styles to head automatically but this does not happen now?
    codeAfter += dedent`
    if (typeof document !== 'undefined') {
        const fragment = new DocumentFragment();
        for (const node of document.querySelectorAll('body style[data-framer-css-ssr]')) {
            let copy = node.cloneNode(true)
            // copy.removeAttribute('data-framer-css-ssr')
            fragment.appendChild(node);
            // node.remove()
        }
        document.head.appendChild(fragment);
    }

    if (typeof document !== 'undefined'){
        const clearCaches = () => {
            defaultSheet = undefined
            componentsWithServerRenderedStyles.clear()
            defaultCache.clear()
        };
        document.addEventListener('astro:before-preparation', clearCaches);
        document.addEventListener('astro:before-swap', clearCaches);
    }
    `

    // NOTE: the lightningcss double var() workaround that used to live here was
    // deleted because Framer fixed it upstream. The bundle now ships the correct
    // `font-family: var(--framer-code-font-family, ...)` with a single var().
    // https://github.com/parcel-bundler/lightningcss/issues/897

    // Fix fetchpriority -> fetchPriority casing
    codeAfter = replaceOrThrow({
        code: codeAfter,
        find: /fetchpriority: image\.fetchPriority,/g,
        replace: 'fetchPriority: image.fetchPriority,',
        what: 'fetchpriority -> fetchPriority casing fix',
    })
    // suppressHydrationWarning is handled by babelPluginSuppressHydration for all jsx calls.
    // Add ignore comments to the lazy module dynamic import so Turbopack/webpack/Vite
    // don't try to statically resolve the runtime url. Framer refactored
    // initLazyModulesCache from `const promise = import(url).then` to
    // `preloadLazyModule(hash2, () => import(url), url)`, so match on the arrow
    // function instead of the surrounding statement.
    codeAfter = replaceOrThrow({
        code: codeAfter,
        find: /\(\) => import\(url/g,
        replace: '() => import(/* webpackIgnore: true */ /* @vite-ignore */ url',
        what: 'webpackIgnore/@vite-ignore comments on the lazy module dynamic import',
    })

    // Framer wraps combinedCSSRules in a LazyProp getter object, see
    // library/src/modules/LazyProp.ts. Its own getCombinedCSSRules() reads
    // `combinedCSSRules.value`, so the declaration must be left untouched:
    // rewriting it into a plain array silently returns undefined there and kills
    // css injection in every exported site. Re-export the resolved array under
    // the public name instead, so consumers keep seeing a string[].
    if (!/var combinedCSSRules = [^\n]*LazyProp\(/.test(codeAfter)) {
        throw new Error(
            'Failed to patch framer.js: could not find the `var combinedCSSRules = ... LazyProp(...)` declaration. Framer probably changed how combinedCSSRules is defined, check the bundle and update this script.',
        )
    }

    // TODO this code does not work in react strict mode, bug in framer
    const toRemove =
        /throw new ReferenceError\(\s*'useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle\.',\s*\)/
    codeAfter = replaceOrThrow({
        code: codeAfter,
        find: toRemove,
        replace: '',
        what: 'removal of the cloneChildrenWithPropsAndRef ReferenceError (breaks react strict mode)',
    })

    codeAfter += '\n\n'
    codeAfter += dedent`
    export { Link as FramerLink  }
    export { Router, FetchClientProvider, FormContext, LocaleInfoContext, injectCSSRule, componentsWithServerRenderedStyles }

    const unframerCombinedCSSRules = combinedCSSRules.value
    export { unframerCombinedCSSRules as combinedCSSRules }
    `
    code = codeAfter
    // code = code.replace(/safeToRemove\(\)/g, 'safeToRemove?.()')
    // code = '// @ts-nocheck\n' + code
    const framerVersion = extractFramerVersion(code)
    const framerMotionVersion = extractFramerMotionVersion(code)
    logger.log('framer version:', framerVersion)
    logger.log('framer motion version:', framerMotionVersion)
    fs.writeFileSync(resultFile, code, 'utf-8')

    const size = fs.statSync(resultFile).size / 1024 / 1024
    console.log(`framer.js size is ${Number(size).toFixed(2)} Mb`)
    return { code, framerVersion, framerMotionVersion }
}


// to find the types url: open framer app, load a code component, search in the network tab for a request to a .dts file. we also add export { ComponentFontV1 } at the end.
main({
    framerTypesUrl: 'https://app.framerstatic.com/framer-4PAPG5SK.dts',
    // framerMotionUrl: `https://app.framerstatic.com/framer-motion.5PJAF455.js`,
})

function extractFramerVersion(code: string) {
    const match = code.match(/name: 'framer',\n\s*version: '([^']+)'/)
    if (!match) {
        return ''
    }
    return match[1]
}

function extractFramerMotionVersion(code: string) {
    const match = code.match(/this.version = '([^']+)'/)
    if (!match) {
        return ''
    }
    return match[1]
}

async function getLatestFramerScriptSrc({ session }) {
    const res = await fetch(
        'https://framer.com/projects/unframer-source--XOxwdyyCrFEE9uKnKFPq-6gX7n',
        {
            headers: {
                accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'accept-language': 'it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7',
                'cache-control': 'max-age=0',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'same-origin',
                'sec-fetch-site': 'same-origin',
                'upgrade-insecure-requests': '1',
                cookie: `session=${session};`,
            },
            referrerPolicy: 'strict-origin-when-cross-origin',
            body: null,
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
        },
    )
    const html = await res.text()
    if (!res.ok) {
        throw new Error(`Failed to fetch framer project: ${res.status}`)
    }
    // console.log('html', html)
    // extract src from this code:
    // <script>
    //     window.exportAssets = Object.freeze({
    //         library: "https://app.framerstatic.com/framer.YTPROCQS.js",
    //         framerMotion: "https://app.framerstatic.com/framer-motion.5PJAF455.js",
    //     })
    // </script>
    const match = html.match(
        /window.exportAssets = Object.freeze\({\s*library: "([^"]+)"/,
    )
    if (!match) {
        console.log('html', html)
        throw new Error('Failed to extract framer script src')
    }
    const src = match[1]
    return { src }
}
