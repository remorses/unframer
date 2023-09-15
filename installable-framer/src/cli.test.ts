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
        const { types } = await bundle({
            url,
            cwd: tempFolder,
            name: 'ticker',
        })
        console.log(types)
        console.log(tempFolder)
    },
    1000 * 10,
)
test(
    'bundle ticker variant',
    async () => {
        const tempFolder = tmp.dirSync({ unsafeCleanup: true }).name
        console.log('tempFolder', tempFolder)
        const url = 'https://framer.com/m/Brand-Logo-Ticker-Uc8E.js@WLfLN2D3C6m9DWtZu0ci'
        const { types } = await bundle({
            url,
            cwd: tempFolder,
            name: 'logos',
        })
        console.log(types)
        console.log(tempFolder)
    },
    1000 * 10,
)
