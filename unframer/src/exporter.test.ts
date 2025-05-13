import { describe, test, expect } from 'vitest'
import { checkUnframerVersion, propCamelCaseJustLikeFramer } from './exporter'
import { replaceWebPageIds } from './esbuild'
import path from 'path'

test('checkUnframerVersion', () => {
    checkUnframerVersion({ cwd: process.cwd() })
})

describe('replaceWebPageIds', () => {
    test('replaces webPageIds with paths', () => {
        const elements = [
            { webPageId: 'abc123', path: '/page1' },
            { webPageId: 'def456', path: '/page2' },
        ]
        const code = `{ webPageId: 'abc123' }`
        expect(replaceWebPageIds({ elements, code })).toEqual(`'/page1'`)

        const code2 = `{ webPageId: "def456" }`
        expect(replaceWebPageIds({ elements, code: code2 })).toEqual(`'/page2'`)
    })

    test('handles whitespace variations', () => {
        const elements = [{ webPageId: 'abc123', path: '/page1' }]

        const code = `{webPageId:'abc123'}`
        expect(replaceWebPageIds({ elements, code })).toEqual(`'/page1'`)

        const code2 = `{  webPageId  :  'abc123'  }`
        expect(replaceWebPageIds({ elements, code: code2 })).toEqual(`'/page1'`)
        const code3 = `{ href: { webPageId: 'zRPFqFbvc' } }`
        expect(
            replaceWebPageIds({
                elements: [{ webPageId: 'zRPFqFbvc', path: '/page1' }],
                code: code3,
            }),
        ).toEqual(`{ href: '/page1' }`)
        const code4 = `/* @__PURE__ */ _jsx(Link, {
                      href: { webPageId: 'zRPFqFbvc', },
                      nodeId: 'aU2SMIi6t',`
        expect(
            replaceWebPageIds({
                elements: [{ webPageId: 'zRPFqFbvc', path: '/page1' }],
                code: code4,
            }),
        ).toMatchInlineSnapshot(
            `
          "/* @__PURE__ */ _jsx(Link, {
                                href: '/page1',
                                nodeId: 'aU2SMIi6t',"
        `,
        )
    })

    test('preserves non-matching webPageIds', () => {
        const elements = [{ webPageId: 'abc123', path: '/page1' }]
        const code = `{ webPageId: 'xyz789' }`

        expect(replaceWebPageIds({ elements, code })).toEqual(
            `{ webPageId: 'xyz789' }`,
        )
    })

    test('handles newlines in input', () => {
        const elements = [{ webPageId: 'abc123', path: '/page1' }]

        const code = `{\n  webPageId: 'abc123'\n}`
        expect(replaceWebPageIds({ elements, code })).toEqual(`'/page1'`)

        const code2 = `{\n\n  webPageId:\n  'abc123'\n\n}`
        expect(replaceWebPageIds({ elements, code: code2 })).toEqual(`'/page1'`)
    })
})

describe('propCamelCase', () => {
    test('converts dashes to camelCase', () => {
        expect(propCamelCaseJustLikeFramer('foo-bar')).toMatchInlineSnapshot(`"fooBar"`)
        expect(propCamelCaseJustLikeFramer('foo-bar-baz')).toMatchInlineSnapshot(
            `"fooBarBaz"`,
        )
        expect(propCamelCaseJustLikeFramer('Detail - 1')).toMatchInlineSnapshot(
            `"detail-1"`,
        )
    })
    test('converts example-variable_dashes etc XX something 11 to camelCase', () => {
        expect(
            propCamelCaseJustLikeFramer('example-variable_dashes etc XX something 11'),
        ).toBe(`exampleVariableDashesEtcXXSomething11`)
    })
    test('converts 0 starts with ZeroEtc to camelCase', () => {
        expect(propCamelCaseJustLikeFramer('0 starts with ZeroEtc')).toBe(
            `_0StartsWithZeroEtc`,
        )
    })

    test('converts underscores to camelCase', () => {
        expect(propCamelCaseJustLikeFramer('foo_bar')).toMatchInlineSnapshot(`"fooBar"`)
        expect(propCamelCaseJustLikeFramer('foo_bar_baz')).toMatchInlineSnapshot(
            `"fooBarBaz"`,
        )
    })

    test('removes spaces and camelCases', () => {
        expect(propCamelCaseJustLikeFramer('Foo Bar')).toMatchInlineSnapshot(`"fooBar"`)
        expect(propCamelCaseJustLikeFramer('Foo Bar Baz')).toMatchInlineSnapshot(
            `"fooBarBaz"`,
        )
    })

    test('ensures first character is lowercase', () => {
        expect(propCamelCaseJustLikeFramer('FooBar')).toMatchInlineSnapshot(`"fooBar"`)
        expect(propCamelCaseJustLikeFramer('Foo')).toMatchInlineSnapshot(`"foo"`)
    })

    test('handles empty string', () => {
        expect(propCamelCaseJustLikeFramer('')).toMatchInlineSnapshot('""')
    })

    test('handles mixed cases', () => {
        expect(propCamelCaseJustLikeFramer('Foo-Bar_Baz Test')).toMatchInlineSnapshot(
            `"fooBar_BazTest"`,
        )
    })
    test('converts APITableData to apiTableData', () => {
        expect(propCamelCaseJustLikeFramer('Settings APITableData')).toBe(`settingsAPITAbleData`)
    })
})
