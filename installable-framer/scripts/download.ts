import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import dprint from 'dprint-node'

import fs from 'fs'
import { build } from 'esbuild'
import path from 'path'
import {
    esbuildPluginBundleDependencies,
    extractPropControlsUnsafe,
    logger,
    propControlsToType,
} from '../src/exporter'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

export async function main({ framerUrl, framerTypesUrl }) {
    const deps = new Set<string>()
    let out = path.resolve(__dirname, '../framer-fixed/dist')
    out = path.resolve(out)
    fs.mkdirSync(path.resolve(out), { recursive: true })

    const u = new URL(framerUrl)

    const resultFile = path.resolve(out, `framer.js`)
    const result = await build({
        entryPoints: [framerUrl],

        jsx: 'automatic',

        bundle: true,
        platform: 'browser',
        format: 'esm',
        minify: false,
        treeShaking: true,
        // splitting: true,
        logLevel: 'error',
        pure: ['addPropertyControls'],
        external: [],
        plugins: [
            esbuildPluginBundleDependencies({
                onDependency: (x) => {
                    // logger.log('dep', x)
                    deps.add(x)
                },
            }),
            NodeModulesPolyfillPlugin({}),
        ],
        write: true,
        // outfile: 'dist/example.js',
        outfile: resultFile,
    })
    // logger.log('result', result)
    let types = await fetch(framerTypesUrl).then((x) => x.text())
    types += `
    export declare const combinedCSSRules: string[]

    `
    fs.writeFileSync(
        path.resolve(out, 'framer.d.ts'),
        types,
    )

    const output = fs.readFileSync(resultFile, 'utf-8')
    let code = dprint.format(resultFile, output, {
        lineWidth: 140,
        quoteStyle: 'alwaysSingle',
        trailingCommas: 'always',
        semiColons: 'always',
    })
    let codeAfter = code.replace(
        'var combinedCSSRules =',
        'export var combinedCSSRules =',
    )
    if (code === codeAfter) {
        throw new Error('Failed to export combinedCSSRules')
    }
    code = codeAfter
    fs.writeFileSync(resultFile, code, 'utf-8')
}


// find these scripts in Framer html:
// <script>
//     window.exportAssets = Object.freeze({
//         library: "https://app.framerstatic.com/framer.5AKNTIWS.js",
//         framerMotion: "https://app.framerstatic.com/framer-motion.5PJAF455.js",
//     })
// </script>
main({
    framerTypesUrl: 'https://app.framerstatic.com/framer-KJWFDJQN.dts',
    framerMotionUrl: `https://app.framerstatic.com/framer-motion.5PJAF455.js`,
    framerUrl: `https://app.framerstatic.com/framer.5AKNTIWS.js`,
})
