// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
    integrations: [react({ experimentalReactChildren: true })],
    vite: {
        // `resolve.tsconfigPaths: false` is Vite's own default, but Astro never
        // populates it: it builds its Vite config without merging
        // `configDefaults.resolve`, so `config.resolve.tsconfigPaths` is
        // `undefined` at the top level and in every environment (client, ssr,
        // astro, prerender).
        //
        // Vite's internal resolvers hardcode `tsconfigPaths: false` so they are
        // unaffected, but `@tailwindcss/vite` builds its own css resolver by
        // spreading `config.resolve`, which carries the `undefined` through to
        // rolldown's Rust binding where the field is required:
        //
        //     [@tailwindcss/vite:generate:build] Missing field `tsconfigPaths`
        //     on BindingViteResolvePluginConfig.resolveOptions
        //
        // Setting it explicitly gives the spread a real value. Still reproduces
        // on @tailwindcss/vite 4.3.3 + vite 8.2.1, so this stays until Astro
        // applies the Vite defaults. Harmless once it does, `false` is the
        // documented default.
        resolve: { tsconfigPaths: false },
        plugins: [tailwindcss()],
    },
})
