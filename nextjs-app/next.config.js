/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        urlImports: [
            'https://framer.com/m/',
            'https://framerusercontent.com/',
            'https://fonts.gstatic.com/',
            'https://ga.jspm.io/',
            'https://jspm.dev/',
        ],
        externalDir: true,
    },
}

module.exports = nextConfig
