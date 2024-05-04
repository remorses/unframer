import dedent from 'dedent'
import annotateAsPure from '@babel/helper-annotate-as-pure'

import dprint from 'dprint-node'

import { build } from 'esbuild'
import { transform } from '@babel/core'
import fs from 'fs'
import path from 'path'
import { esbuildPluginBundleDependencies } from '../src/esbuild'
import { logger } from '../src/utils'
import { babelPluginDeduplicateImports } from './babel-plugin-imports'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

const session = process.env.FRAMER_SESSION
if (!session) {
    throw new Error('Missing session')
}

export async function main({ framerTypesUrl }) {
    const { src: framerUrl } = await getLatestFramerScriptSrc({ session })

    // console.log('src', src)
    let out = path.resolve(__dirname, '../src')
    const prevFile = await fs.promises
        .readFile(path.resolve(out, `framer.js`), 'utf-8')
        .catch(() => '')
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
        jsxSideEffects: false,

        pure: ['addPropertyControls', '__commonJS'],
        define: {
            'RenderEnvironment.target': JSON.stringify('PREVIEW'),
        },
        plugins: [esbuildPluginBundleDependencies({})],
        write: true,
        // inject: [path.resolve(__dirname, '../src/inject.ts')],
        // outfile: 'dist/example.js',
        outfile: resultFile,
    })
    // logger.log('result', result)
    let types = await fetch(framerTypesUrl).then((x) => x.text())
    types = types.replace('export * from "framer-motion";', '')
    types += dedent`
    export declare const combinedCSSRules: string[]

    export * from 'real-framer-motion'
    `
    fs.writeFileSync(path.resolve(out, 'framer.d.ts'), types)

    const { code, framerMotionVersion, framerVersion } = await fixFramerCode({
        resultFile,
    })

    // if the file changed, call changeset
    if (prevFile !== code) {
        logger.log('new framer version found, versioning...')
        const change = dedent`
        ---
        unframer: patch
        --- 

        Update framer to ${framerVersion}, update framer motion to ${framerMotionVersion}
        `
        fs.writeFileSync(
            `../.changeset/${framerVersion}-${framerMotionVersion}.md`,
            change,
            'utf-8',
        )
        // increase package.json version with a patch, with pnpm

        // await changeset()
    }
}

const purePlugin = ({ types: t }) => ({
    visitor: {
        CallExpression(path) {
            if (path.getFunctionParent()) return
            const { parent } = path
            if (
                t.isVariableDeclarator(parent) ||
                t.isAssignmentExpression(parent) ||
                t.isObjectProperty(parent) ||
                t.isArrayExpression(parent) ||
                t.isCallExpression(parent)
            ) {
                annotateAsPure(path)
            }
        },
    },
})

export async function fixFramerCode({ resultFile }) {
    const output = fs.readFileSync(resultFile, 'utf-8')
    const babelRes = transform(output || '', {
        babelrc: false,
        sourceType: 'module',
        plugins: [
            // '@babel/plugin-transform-react-pure-annotations',
            babelPluginDeduplicateImports,
            // purePlugin,
        ],
        filename: '',

        sourceMaps: false,
    })

    let code = dprint.format(resultFile, babelRes?.code!, {
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

// find these scripts in Framer html:
// <script>
//     window.exportAssets = Object.freeze({
//         library: "https://app.framerstatic.com/framer.5AKNTIWS.js",
//         framerMotion: "https://app.framerstatic.com/framer-motion.5PJAF455.js",
//     })
// </script>
main({
    framerTypesUrl: 'https://app.framerstatic.com/framer-DT2GEHUE.dts',
    // framerMotionUrl: `https://app.framerstatic.com/framer-motion.5PJAF455.js`,
})
// fixFramerCode({ resultFile: path.resolve(__dirname, '../src/framer.js') })

// function that extracts version from this code:
// name: 'framer',
// version: '2.4.1',
function extractFramerVersion(code: string) {
    const match = code.match(/name: 'framer',\n\s*version: '([^']+)'/)
    if (!match) {
        return ''
    }
    return match[1]
}

// function that extracts framer motion version from this code:
// this.version = '11.0.7';
function extractFramerMotionVersion(code: string) {
    const match = code.match(/this.version = '([^']+)'/)
    if (!match) {
        return ''
    }
    return match[1]
}

async function getLatestFramerScriptSrc({ session }) {
    const res = await fetch(
        'https://framer.com/projects/unframer--MOHUmEgItazhBLBtW6H0-adT3u?node=augiA20Il',
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
        throw new Error('Failed to extract framer script src')
    }
    const src = match[1]
    return { src }
}
