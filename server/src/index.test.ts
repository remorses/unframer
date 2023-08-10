import { test, expect } from 'vitest'
import fs from 'fs'
import { build } from 'esbuild'
import {
    bundle,
    esbuildPlugin,
    extractPropControls,
    parsePropertyControls,
} from './exporter'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import { execSync } from 'child_process'
import { tmpdir } from 'os'
import path from 'path'
import { getProjectComponents } from './utils'

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
    'getProjectComponents',
    async () => {
        const res = await getProjectComponents({
            // project: 'Se1qpbnUsS1NDUxLzXVs',
        })
        console.log(res)
    },
    1000 * 10,
)

test.skip(
    'server',
    async () => {
        const zip = path.resolve('example-download/zip.tar.gz')
        const out = path.resolve(path.dirname(zip), 'uzipped')
        fs.mkdirSync(out, { recursive: true })
        console.log('downloading to ', zip)
        execSync(
            `curl -o ${zip} http://localhost:2323/m/Mega-Menu-2wT3.js@W0zNsrcZ2WAwVuzt0BCl`,
            { stdio: 'inherit' },
        )
        execSync(`unzip ${zip} `, { stdio: 'inherit' })
        execSync(`tree ${zip}`, { stdio: 'inherit' })
    },
    1000 * 100,
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
        {
            const res = await extractPropControls(
                'https://framer.com/m/Mega-Menu-2wT3.js@W0zNsrcZ2WAwVuzt0BCl',
            )
            console.log(res)
        }
        {
            const res = await extractPropControls(
                'https://framer.com/m/Avatar-Jptx.js@zytD4VDFUKBkIHh56Z3q',
            )
            console.log(res)
        }
    },
    1000 * 10,
)
