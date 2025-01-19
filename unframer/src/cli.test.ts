import { describe, it, expect, vi, beforeEach } from 'vitest'
import fs from 'node:fs'
import {
    fixOldUnframerPath,
    safeJsonParse,
    pluck,
    getNewNames,
    Config,
} from './cli'

vi.mock('node:fs', () => ({
    existsSync: vi.fn(),
    renameSync: vi.fn(),
    get default() {
        return this
    },
}))

describe('fixOldUnframerPath', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('should rename unframer.json to unframer.config.json if it exists', () => {
        vi.mocked(fs.existsSync).mockReturnValue(true)

        const result = fixOldUnframerPath()

        expect(result).toBe(true)
        expect(fs.existsSync).toHaveBeenCalledWith('unframer.json')
        expect(fs.renameSync).toHaveBeenCalledWith(
            'unframer.json',
            'unframer.config.json',
        )
    })

    it('should return false if unframer.json does not exist', () => {
        vi.mocked(fs.existsSync).mockReturnValue(false)

        const result = fixOldUnframerPath()

        expect(result).toBe(false)
        expect(fs.existsSync).toHaveBeenCalledWith('unframer.json')
        expect(fs.renameSync).not.toHaveBeenCalled()
    })
})

describe('safeJsonParse', () => {
    it('should parse valid JSON string', () => {
        const json = '{"name": "test", "value": 123}'
        const result = safeJsonParse(json)
        expect(result).toEqual({ name: 'test', value: 123 })
    })

    it('should return null for invalid JSON string', () => {
        const json = '{invalid json}'
        const result = safeJsonParse(json)
        expect(result).toBeNull()
    })

    it('should handle empty string', () => {
        const result = safeJsonParse('')
        expect(result).toBeNull()
    })
})

describe('pluck', () => {
    it('should extract specified properties from object', () => {
        const obj = {
            name: 'test',
            age: 25,
            email: 'test@example.com',
        }
        const result = pluck(obj, ['name', 'email'])
        expect(result).toEqual({
            name: 'test',
            email: 'test@example.com',
        })
    })

    it('should handle empty property list', () => {
        const obj = { name: 'test' }
        const result = pluck(obj, [])
        expect(result).toEqual({})
    })
})

describe('getNewNames', () => {
    it('should identify new component names', () => {
        const oldConfig: Config = {
            components: {
                comp1: 'url1',
                comp2: 'url2',
            },
        }
        const newConfig: Config = {
            components: {
                comp1: 'url1',
                comp2: 'url2',
                comp3: 'url3',
            },
        }
        const result = getNewNames(oldConfig, newConfig)
        expect(result).toEqual(['comp3'])
    })

    it('should identify changed component URLs', () => {
        const oldConfig: Config = {
            components: {
                comp1: 'url1',
                comp2: 'url2',
            },
        }
        const newConfig: Config = {
            components: {
                comp1: 'url1',
                comp2: 'newurl2',
            },
        }
        const result = getNewNames(oldConfig, newConfig)
        expect(result).toEqual(['comp2'])
    })

    it('should handle empty configs', () => {
        const oldConfig: Config = {
            components: {},
        }
        const newConfig: Config = {
            components: {},
        }
        const result = getNewNames(oldConfig, newConfig)
        expect(result).toEqual([])
    })

    it('should handle removed components', () => {
        const oldConfig: Config = {
            components: {
                comp1: 'url1',
                comp2: 'url2',
            },
        }
        const newConfig: Config = {
            components: {
                comp1: 'url1',
            },
        }
        const result = getNewNames(oldConfig, newConfig)
        expect(result).toEqual([])
    })
})
