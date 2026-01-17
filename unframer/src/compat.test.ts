import { describe, test, expect } from 'vitest'
import { propCamelCaseJustLikeFramer } from './compat.js'

describe('propCamelCase', () => {
    test('converts dashes to camelCase', () => {
        expect(propCamelCaseJustLikeFramer('foo-bar')).toMatchInlineSnapshot(
            `"fooBar"`,
        )
        expect(
            propCamelCaseJustLikeFramer('foo-bar-baz'),
        ).toMatchInlineSnapshot(`"fooBarBaz"`)
        expect(propCamelCaseJustLikeFramer('Detail - 1')).toMatchInlineSnapshot(
            `"detail1"`,
        )
    })
    test('converts example-variable_dashes etc XX something 11 to camelCase', () => {
        expect(
            propCamelCaseJustLikeFramer(
                'example-variable_dashes etc XX something 11',
            ),
        ).toBe(`exampleVariableDashesEtcXXSomething11`)
    })
    test('converts 0 starts with ZeroEtc to camelCase', () => {
        expect(propCamelCaseJustLikeFramer('0 starts with ZeroEtc')).toBe(
            `_0StartsWithZeroEtc`,
        )
    })

    test('converts underscores to camelCase', () => {
        expect(propCamelCaseJustLikeFramer('foo_bar')).toMatchInlineSnapshot(
            `"fooBar"`,
        )
        expect(
            propCamelCaseJustLikeFramer('foo_bar_baz'),
        ).toMatchInlineSnapshot(`"fooBarBaz"`)
    })

    test('removes spaces and camelCases', () => {
        expect(propCamelCaseJustLikeFramer('Foo Bar')).toMatchInlineSnapshot(
            `"fooBar"`,
        )
        expect(
            propCamelCaseJustLikeFramer('Foo Bar Baz'),
        ).toMatchInlineSnapshot(`"fooBarBaz"`)
    })

    test('ensures first character is lowercase', () => {
        expect(propCamelCaseJustLikeFramer('FooBar')).toMatchInlineSnapshot(
            `"fooBar"`,
        )
        expect(propCamelCaseJustLikeFramer('Foo')).toMatchInlineSnapshot(
            `"foo"`,
        )
    })

    test('handles empty string', () => {
        expect(propCamelCaseJustLikeFramer('')).toMatchInlineSnapshot('""')
    })

    test('handles mixed cases', () => {
        expect(
            propCamelCaseJustLikeFramer('Foo-Bar_Baz Test'),
        ).toMatchInlineSnapshot(`"fooBar_BazTest"`)
    })
    test('converts APITableData to apiTableData', () => {
        expect(propCamelCaseJustLikeFramer('Settings APITableData')).toBe(
            `settingsAPITAbleData`,
        )
    })
})
