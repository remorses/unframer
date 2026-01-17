import { describe, test, expect } from 'vitest'
import { replaceWebPageIds } from './esbuild.js'
import path from 'path'

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
