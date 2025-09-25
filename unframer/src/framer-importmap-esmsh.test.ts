import { expect, test, describe } from 'vitest'
import importMap from './framer-importmap-esmsh.json'

describe('esm.sh import map URLs', () => {
    // Extract all URLs from the import map
    const urls = [...Object.values(importMap.imports)]

    // Only test a sample since testing all URLs would be too slow
    const sampleSize = 50
    const urlSample = urls
        .filter((url) => url.startsWith('https://esm.sh/'))
        .sort(() => Math.random() - 0.5)
        .slice(0, sampleSize)

    test.concurrent.each(urlSample)(
        'URL should return valid status code: %s',
        async (url) => {
            const controller = new AbortController()
            const timeoutId = setTimeout(() => controller.abort(), 30000)

            try {
                const response = await fetch(url, {
                    method: 'HEAD',
                    signal: controller.signal,
                    headers: {
                        'User-Agent':
                            'Mozilla/5.0 (compatible; URLValidator/1.0)',
                    },
                })

                clearTimeout(timeoutId)

                // Check if response is successful (2xx) or redirect (3xx)
                expect(response.status).toBeGreaterThanOrEqual(200)
                expect(response.status).toBeLessThan(400)
            } catch (error) {
                clearTimeout(timeoutId)

                if (error.name === 'AbortError') {
                    throw new Error(`Request timed out for URL: ${url}`)
                }
                throw error
            }
        },
        35000,
    )
})
