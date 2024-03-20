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

const session = process.env.FRAMER_SESSION

export async function main({ framerUrl, framerTypesUrl }) {
    const { src } = await getLatestFramerScriptSrc({ session })
    console.log('src', src)
    return
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

        plugins: [esbuildPluginBundleDependencies({})],
        write: true,
        // inject: [path.resolve(__dirname, '../src/inject.ts')],
        // outfile: 'dist/example.js',
        outfile: resultFile,
    })
    // logger.log('result', result)
    let types = await fetch(framerTypesUrl).then((x) => x.text())
    types += `
    export declare const combinedCSSRules: string[]

    export * from 'real-framer-motion'
    `
    fs.writeFileSync(path.resolve(out, 'framer.d.ts'), types)

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
    const framerVersion = extractFramerVersion(code)
    const framerMotionVersion = extractFramerMotionVersion(code)
    logger.log('framer version:', framerVersion)
    logger.log('framer motion version', framerMotionVersion)
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
    framerTypesUrl: 'https://app.framerstatic.com/framer-DT2GEHUE.dts',
    // framerMotionUrl: `https://app.framerstatic.com/framer-motion.5PJAF455.js`,
    framerUrl: `https://app.framerstatic.com/framer.YTPROCQS.js`,
})

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
            referrer:
                'https://framer.com/projects/?teamId=68b7d393-dc1e-4609-bf20-92f559ab1ce6',
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
