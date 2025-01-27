import type { Config } from 'tailwindcss'

export default {
    content: [
        './app/**/*.{js,jsx,ts,tsx}', //
        '../nextjs-app/src/**/*.{js,jsx,ts,tsx}', //
    ],
    darkMode: 'class',
    theme: {
        extend: {},
    },
    plugins: [],
} satisfies Config
