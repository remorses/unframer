// FlatCacheStore.ts
import { Writable } from 'node:stream'
import { promises as fs } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { createHash } from 'node:crypto'

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type * as CacheInterceptor from 'undici/types/cache-interceptor.d.ts'
import { logger } from './utils.js'

type CacheKey = CacheInterceptor.default.CacheKey
type CacheValue = CacheInterceptor.default.CacheValue
type GetResult = CacheInterceptor.default.GetResult
type CacheStore = CacheInterceptor.default.CacheStore

/**
 * A CacheStore that persists each entry as separate files in os.tmpdir()/.unframer.
 * Each cache entry creates a .json file for metadata and a .bin file for the body.
 */
export class FlatCacheStore implements CacheStore {
    private readonly cacheDir: string

    constructor({ cacheDir }: { cacheDir: string }) {
        this.cacheDir = join(tmpdir(), cacheDir)
        logger.log(`using cache dir`, this.cacheDir)
        this.ensureCacheDir()
    }

    private async ensureCacheDir(): Promise<void> {
        try {
            await fs.mkdir(this.cacheDir, { recursive: true })
        } catch {
            // Directory might already exist, ignore error
        }
    }

    private getFileHash(key: CacheKey): string {
        return createHash('sha256').update(JSON.stringify(key)).digest('hex')
    }

    private getFilePaths(key: CacheKey): {
        metaPath: string
        bodyPath: string
    } {
        const hash = this.getFileHash(key)
        return {
            metaPath: join(this.cacheDir, `${hash}.json`),
            bodyPath: join(this.cacheDir, `${hash}.bin`),
        }
    }

    async get(key: CacheKey): Promise<GetResult | undefined> {
        try {
            const { metaPath, bodyPath } = this.getFilePaths(key)
            const [metaData, bodyData] = await Promise.all([
                fs.readFile(metaPath, 'utf-8'),
                fs.readFile(bodyPath),
            ])
            const meta = JSON.parse(metaData)
            return { ...meta, body: bodyData }
        } catch {
            return undefined
        }
    }

    createWriteStream(key: CacheKey, meta: CacheValue): Writable {
        const chunks: Buffer[] = []
        return new Writable({
            write(chunk, _enc, cb) {
                chunks.push(chunk as Buffer)
                cb()
            },
            final: async (cb) => {
                try {
                    await this.ensureCacheDir()
                    const { metaPath, bodyPath } = this.getFilePaths(key)
                    await Promise.all([
                        fs.writeFile(metaPath, JSON.stringify(meta, null, 2)),
                        fs.writeFile(bodyPath, Buffer.concat(chunks)),
                    ])
                    cb()
                } catch (error) {
                    cb(error as Error)
                }
            },
        })
    }

    async delete(key: CacheKey): Promise<void> {
        try {
            const { metaPath, bodyPath } = this.getFilePaths(key)
            await Promise.all([
                fs.unlink(metaPath).catch(() => {}),
                fs.unlink(bodyPath).catch(() => {}),
            ])
        } catch {
            // Ignore errors when deleting non-existent files
        }
    }
}
