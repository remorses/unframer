/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites() {
        // turn /m/:x to /api/m/:x
        return [
            {
                source: '/m/:path*',
                destination: '/api/m/:path*',
            },
        ]
    },
}

module.exports = nextConfig
