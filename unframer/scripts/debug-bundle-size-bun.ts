import { build } from 'bun'
import fs from 'fs'
import path from 'path'

export async function debugFramerBundleSize() {
    const res = await build({
        entrypoints: ['scripts/entry.js'],

        // jsxSideEffects: false,

        format: 'esm',
        target: 'browser',
        external: ['react', 'react-dom'],

        // minifyWhitespace: true,
        // minifySyntax: true,
        // minify: true,
    })
    const code = await res.outputs[0].text()
    const bundleSize = code.length
    const mbs = bundleSize / 1024 / 1024
    console.log(`bundle size is ${mbs.toFixed(3)} Mb`)
    let p = path.resolve(__dirname, './bundled.js')
    await fs.promises.unlink(p).catch(() => null)
    console.log(`writing to ${p}`)
    fs.writeFileSync(p, code)
}

debugFramerBundleSize()
