// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        exclude: ['**/dist/**', '**/esm/**', '**/node_modules/**', '**/e2e/**'],
    },
})
