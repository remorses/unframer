import dedent from 'string-dedent'

export function generateStackblitzFiles({
    projectId,
    appComponentCode = '',
    title = '',
}): { relativePath: string; contents: string }[] {
    const packageJson = {
        name: 'unframer-vite-react-typescript-starter',
        private: true,
        version: '0.0.0',
        type: 'module',
        stackblitz: {
            startCommand: `STACKBLITZ_DEMO_EXAMPLE=src/App.tsx npm run framer && npm run dev`,
        },
        scripts: {
            dev: 'vite',
            build: 'vite build',
            framer: `unframer ${projectId} --outDir src/framer`,
        },
        dependencies: {
            react: 'latest',
            unframer: 'latest',
            'react-dom': 'latest',
        },
        devDependencies: {
            '@types/react': 'latest',
            '@types/react-dom': 'latest',
            '@vitejs/plugin-react': 'latest',
            tailwindcss: '^3.4.0',
            postcss: '^8.4.0',
            autoprefixer: '^10.4.0',
            typescript: 'latest',
            vite: 'latest',
        },
    }

    const tsconfig = {
        compilerOptions: {
            target: 'ES2020',
            useDefineForClassFields: true,
            lib: ['ES2020', 'DOM', 'DOM.Iterable'],
            module: 'ESNext',
            skipLibCheck: true,
            moduleResolution: 'bundler',
            allowImportingTsExtensions: true,
            resolveJsonModule: true,
            isolatedModules: true,
            noEmit: true,
            jsx: 'react-jsx',
            noUnusedLocals: true,
            noUnusedParameters: true,
            noFallthroughCasesInSwitch: true,
        },
        include: ['src'],
    }

    const viteConfig = dedent`

        import { defineConfig } from 'vite'
        import react from '@vitejs/plugin-react'

        // https://vitejs.dev/config/
        export default defineConfig({
            plugins: [react()],
        })

    `

    const postcssConfig = dedent`

        export default {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            }
        }

    `

    const tailwindConfig = dedent`

        /** @type {import('tailwindcss').Config} */
        export default {
            content: [
                "./index.html",
                "./src/**/*.{js,ts,jsx,tsx}",
            ],
            theme: {
                extend: {},
            },
            plugins: [],
        }

    `

    const indexHtml = dedent`

        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Unframer + Vite + React + TS</title>
            </head>
            <body>
                <div id="root"></div>
                <script type="module" src="/src/main.tsx"></script>
            </body>
        </html>

    `

    const app =
        appComponentCode ||
        dedent`
        const docs = \`
        # Unframer Demo Project

        This is a demo project showing how to use Unframer to export Framer components to React.

        ## What's happening now:
        If you're seeing this file, the unframer CLI is currently running in the terminal below.
        Just wait until it finishes downloading and bundling your Framer components.
        Once complete, you'll see your components rendered in the browser preview on the right and this file will be replaced with an example.

        Try making changes to your components in Framer, then run the \`npm run framer\` command again
        to see the updates reflected here.

        ## How it works:
        1. The Framer React Export plugin saves your components to the Unframer database
        2. The unframer CLI downloads and bundles those components into regular React components inside the \`src/framer\` folder
        3. You can then import and use them in your React app just like any other component

        \`

        `

    const main = dedent`

        import './index.css'
        import React from 'react'
        import ReactDOM from 'react-dom/client'
        import App from './App'

        ReactDOM.createRoot(document.getElementById('root')!).render(
            <App />
        )

    `

    const css = dedent`
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    `

    return [
        {
            relativePath: 'tsconfig.json',
            contents: JSON.stringify(tsconfig, null, 2),
        },
        {
            relativePath: 'package.json',
            contents: JSON.stringify(packageJson, null, 2),
        },
        {
            relativePath: '.gitignore',
            contents: dedent`

                node_modules
                dist
                .DS_Store
                .env
                .env.*
                .stackblitzrc
                npm-debug.log*
                yarn-debug.log*
                yarn-error.log*
                *.log

            `,
        },
        { relativePath: 'vite.config.ts', contents: viteConfig },
        { relativePath: 'postcss.config.js', contents: postcssConfig },
        { relativePath: 'tailwind.config.js', contents: tailwindConfig },
        { relativePath: 'index.html', contents: indexHtml },
        { relativePath: 'src/App.tsx', contents: app },
        { relativePath: 'src/index.css', contents: css },
        // { relativePath: 'pnpm-lock.yaml', contents: '\n' },
        { relativePath: 'src/main.tsx', contents: main },
    ]
}
