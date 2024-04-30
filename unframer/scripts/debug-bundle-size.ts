import { build } from 'esbuild'
import fs from 'fs'
import path from 'path'

export async function main() {
    const res = await build({
        stdin: {
            contents: `
            export { useNavigate, useRouter } from 'unframer'
            `,
            resolveDir: path.resolve(__dirname, '../'),
        },
        platform: 'browser',
        jsxSideEffects: false,
        treeShaking: true,
        format: 'esm',
        target: 'esnext',
        external: ['react', 'react-dom'],
        // minifyWhitespace: true,
        // minifySyntax: true,
        bundle: true,
        write: false,
    })
    const code = res.outputFiles![0].text
    const bundleSize = code.length
    const mbs = bundleSize / 1024 / 1024
    console.log(`bundle size is ${mbs.toFixed(4)} Mb`)
    fs.writeFileSync(path.resolve(__dirname, './bundled.js'), code)
}

main()
