import { reactRouter } from '@react-router/dev/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    define: {
        'window.BUILDER_HYDRATION_OVERLAY.APP_ROOT_SELECTOR': '"html"',
    },
    plugins: [reactRouter({ ssr: true }), tsconfigPaths()],
})
