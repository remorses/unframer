import { test, expect } from 'vitest'
import { build } from 'esbuild'
import {
    bundle,
    esbuildPlugin,
    extractPropControls,
    parsePropertyControls,
} from './exporter'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'

test(
    'bundle',
    async () => {
        const res = await bundle({
            url: 'https://framer.com/m/Mega-Menu-2wT3.js@W0zNsrcZ2WAwVuzt0BCl',
            cwd: 'example-generated',
        })
        console.log(res)
        console.log(res.types)
    },
    1000 * 10,
)
test(
    'parsePropertyControls',
    async () => {
        const res = parsePropertyControls(
            `"some code"; 
            addPropertyControls(asdfasdf, {x: something(), 
                another: x(test(xx))}
            ); 
            console.log('hello')`,
        )
        console.log(res)
    },
    1000 * 10,
)
test(
    'extractPropControls',
    async () => {
        const res = await extractPropControls(
            'https://framer.com/m/Mega-Menu-2wT3.js@W0zNsrcZ2WAwVuzt0BCl',
        )
        console.log(res)
    },
    1000 * 10,
)

test.skip('types', async () => {
    const m = await import('../example-generated/dist/main.js')
    m.default({ variant: 'Feature' })
})
