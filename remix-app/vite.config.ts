import { vitePlugin as remix } from '@remix-run/dev'

import { installGlobals } from '@remix-run/node'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

installGlobals()

export default defineConfig({
    define: {
        'window.BUILDER_HYDRATION_OVERLAY.APP_ROOT_SELECTOR': '"html"',
    },
    plugins: [remix({ ssr: true }), tsconfigPaths()],
})
