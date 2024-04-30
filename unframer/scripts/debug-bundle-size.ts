import { build } from 'esbuild'
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
        bundle: true,
        write: false,
    })
    const bundleSize = res.outputFiles![0].text.length
    const mbs = bundleSize / 1024 / 1024
    console.log(`bundle size is ${mbs.toFixed(2)} Mb`)
}

main()
