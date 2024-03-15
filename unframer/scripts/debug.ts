import { downloadSourcemapsEsm } from './sourcemaps-exporter'

downloadSourcemapsEsm({
    outputPath: 'example-framer-site',
    entryUrl:
        'https://framerusercontent.com/sites/7AozRUZsw4uLQqKSq2WA8i/preview_script0.NVJQNMQQ.mjs',
    // findExport: {
    //     regex: /(deserializeFromProtocolBuffer)/,
    //     srcPath: 'serialization.ts',
    // },
})
