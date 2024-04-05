import tmp from 'tmp'
import path from 'path'
import { test, expect } from 'vitest'
import { bundle, extractTokenInfo } from './exporter.js'

test(
    'extractTokenInfo',
    async () => {
        const str = `
        some other code
        else: --framer-text-color: var(--token-67c1333b-4249-4ff1-a333-3581964020b4, #ffffff);
        else: --framer-text-color: var(--token-67c1333b-4249-4ff1-a333-3581964020b4, rgb(0, 0, 0));
        `
        const tokens = extractTokenInfo(str)
        expect(tokens).toMatchInlineSnapshot(`
          [
            {
              "defaultValue": "#ffffff",
              "tokenName": "--token-67c1333b-4249-4ff1-a333-3581964020b4",
            },
            {
              "defaultValue": "rgb(0, 0, 0)",
              "tokenName": "--token-67c1333b-4249-4ff1-a333-3581964020b4",
            },
          ]
        `)
    },
    1000 * 10,
)
test(
    'bundle simple component',
    async () => {
        const tempFolder = tmp.dirSync({ unsafeCleanup: true }).name
        console.log('tempFolder', tempFolder)
        const url =
            'https://framer.com/m/Logo-Ticker-1CEq.js@YtVlixDzOkypVBs3Dpav'
        await bundle({
            components: {
                ticker: url,
            },
            cwd: tempFolder,
        })
    },
    1000 * 10,
)
test(
    'issue #1',
    async () => {
        const tempFolder = tmp.dirSync({ unsafeCleanup: true }).name
        console.log('tempFolder', tempFolder)
        const url = 'https://framer.com/m/Item-Qetw.js@vUDyI0yvPLONiBDf8Kzw'
        await bundle({
            components: {
                item: url,
            },
            cwd: tempFolder,
        })
    },
    1000 * 10,
)
test(
    'bundle ticker variant',
    async () => {
        const tempFolder = tmp.dirSync({ unsafeCleanup: true }).name
        console.log('tempFolder', tempFolder)
        const url =
            'https://framer.com/m/Brand-Logo-Ticker-Uc8E.js@WLfLN2D3C6m9DWtZu0ci'
        await bundle({
            components: {
                logos: url,
            },
            cwd: tempFolder,
        })
    },
    1000 * 10,
)
