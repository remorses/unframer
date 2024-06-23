import { build } from 'esbuild'
import fs from 'fs'
import path from 'path'

export async function debugFramerBundleSize() {
    const res = await build({
        stdin: {
            contents: `
            export {
            addFonts as addFonts2,
            ComponentViewportProvider,
            cx as cx2,
            FormContainer,
            FormPlainTextInput,
            FormSelect,
            getFonts,
            RichText as RichText2,
            useComponentViewport as useComponentViewport2,
            useLocaleInfo as useLocaleInfo2,
            useVariantState as useVariantState2,
            withCSS as withCSS2,
            } from 'unframer/src/framer.js';
            `,
            resolveDir: path.resolve(__dirname, '../'),
        },
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
    fs.writeFileSync(path.resolve(__dirname, './bundled.js'), code)
}

if (require.main === module) {
    debugFramerBundleSize()
}
