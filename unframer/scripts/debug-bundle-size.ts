import { build } from 'esbuild'
import fs from 'fs'
import path from 'path'

export async function debugFramerBundleSize() {
    const res = await build({
        entryPoints: ['scripts/entry.js'],
        platform: 'browser',
        // jsxSideEffects: false,
        treeShaking: true,
        format: 'esm',
        target: 'esnext',
        external: ['react', 'react-dom'],
        // minifyWhitespace: true,
        // minifySyntax: true,
        // minify: true,
        bundle: true,
        write: false,
    })
    const code = res.outputFiles![0].text
    const bundleSize = code.length
    const mbs = bundleSize / 1024 / 1024
    console.log(`bundle size is ${mbs.toFixed(3)} Mb`)
    let p = path.resolve(__dirname, './bundled.js')
    await fs.promises.unlink(p).catch(() => null)
    console.log(`writing to ${p}`)
    fs.writeFileSync(p, code)
}

if (require.main === module) {
    debugFramerBundleSize()
}
