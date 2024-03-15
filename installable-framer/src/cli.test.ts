import tmp from 'tmp'
import path from 'path'
import { test, expect } from 'vitest'
import { bundle } from './exporter.js'

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
