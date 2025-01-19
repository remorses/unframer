import { describe, it, expect } from 'vitest'
import { __export, __defProp } from './chunk-WSFCRVEQ'

describe('chunk-WSFCRVEQ', () => {
    describe('__defProp', () => {
        it('should be Object.defineProperty', () => {
            expect(__defProp).toBe(Object.defineProperty)
        })
    })

    describe('__export', () => {
        it('should export properties to target object', () => {
            const target = {}
            const source = {
                prop1: () => 'value1',
                prop2: () => 'value2',
            }

            __export(target, source)

            expect(Object.getOwnPropertyDescriptor(target, 'prop1')).toEqual({
                enumerable: true,
                get: source.prop1,
                configurable: false,
                set: undefined,
            })

            expect(Object.getOwnPropertyDescriptor(target, 'prop2')).toEqual({
                enumerable: true,
                get: source.prop2,
                configurable: false,
                set: undefined,
            })
        })

        it('should make exported properties accessible via getter', () => {
            const target = {}
            const source = {
                prop1: () => 'value1',
                prop2: () => 'value2',
            }

            __export(target, source)

            expect(target['prop1']).toBe('value1')
            expect(target['prop2']).toBe('value2')
        })
    })
})
