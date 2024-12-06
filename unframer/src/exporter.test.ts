import { describe, test, expect } from 'vitest'
import { propCamelCase } from './exporter'

describe('propCamelCase', () => {
    test('converts dashes to camelCase', () => {
        expect(propCamelCase('foo-bar')).toMatchInlineSnapshot('"fooBar"')
        expect(propCamelCase('foo-bar-baz')).toMatchInlineSnapshot(
            '"fooBarBaz"',
        )
    })
    test('converts example-variable_dashes etc XX something 11 to camelCase', () => {
        expect(
            propCamelCase('example-variable_dashes etc XX something 11'),
        ).toBe(`exampleVariableDashesEtcXXSomething11`)
    })
    test('converts 0 starts with ZeroEtc to camelCase', () => {
        expect(propCamelCase('0 starts with ZeroEtc')).toBe(
            `_0StartsWithZeroEtc`,
        )
    })

    test('converts underscores to camelCase', () => {
        expect(propCamelCase('foo_bar')).toMatchInlineSnapshot('"fooBar"')
        expect(propCamelCase('foo_bar_baz')).toMatchInlineSnapshot(
            '"fooBarBaz"',
        )
    })

    test('removes spaces and camelCases', () => {
        expect(propCamelCase('Foo Bar')).toMatchInlineSnapshot('"fooBar"')
        expect(propCamelCase('Foo Bar Baz')).toMatchInlineSnapshot(
            '"fooBarBaz"',
        )
    })

    test('ensures first character is lowercase', () => {
        expect(propCamelCase('FooBar')).toMatchInlineSnapshot('"fooBar"')
        expect(propCamelCase('Foo')).toMatchInlineSnapshot('"foo"')
    })

    test('handles empty string', () => {
        expect(propCamelCase('')).toMatchInlineSnapshot('""')
    })

    test('handles mixed cases', () => {
        expect(propCamelCase('Foo-Bar_Baz Test')).toMatchInlineSnapshot(
            `"fooBar_BazTest"`,
        )
    })
})
