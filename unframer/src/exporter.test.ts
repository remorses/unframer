import { describe, test, expect } from 'vitest'
import { replaceWebPageIds } from './esbuild.js'
import { getStyleTokensCss } from './exporter.js'
import { transform } from 'lightningcss'
import path from 'path'

// Regression for https://github.com/unframer/website-c50b9 CI failure:
// a Framer color style whose color value contained CSS-structural chars (a `}`
// followed by grammar-like text from a code-highlighting component) closed the
// `:root {}` block early. The leaked text became a top-level class rule like
// `.[-:=] { -: =; }`. Browsers tolerate this but lightningcss (used by Vite's
// css minifier) rejects it with "Expected identifier in class selector".
// getStyleTokensCss must always emit CSS that lightningcss can minify.
describe('getStyleTokensCss', () => {
    function assertMinifiable(css: string) {
        // throws if lightningcss cannot parse/minify the css
        transform({ filename: 'styles.css', code: Buffer.from(css), minify: true })
    }

    test('emits valid CSS for normal tokens', () => {
        const css = getStyleTokensCss([
            { id: 'abc', name: 'Primary', lightColor: '#fff', darkColor: '#000' },
        ])
        assertMinifiable(css)
        expect(css).toMatchInlineSnapshot(`
          ":root {
              --unframer-primary: #fff;

              --token-abc: #fff;
          }

          .dark {
              --unframer-primary: #000;

              --token-abc: #000;
          }"
        `)
    })

    test('skips tokens whose color value breaks out of the block', () => {
        const css = getStyleTokensCss([
            {
                id: 'a',
                name: 'Evil',
                lightColor: 'red } .[-:=] { -: =',
                darkColor: 'blue',
            },
            { id: 'b', name: 'Good', lightColor: '#fff', darkColor: '#000' },
        ])
        assertMinifiable(css)
        expect(css).toMatchInlineSnapshot(`
          ":root {
              --unframer-good: #fff;

              --token-b: #fff;
          }

          .dark {
              --unframer-good: #000;

              --token-b: #000;
          }"
        `)
    })

    test('skips tokens whose name produces an empty css variable', () => {
        const css = getStyleTokensCss([
            { id: 'a', name: '![a-zA-Z:_]', lightColor: '#111', darkColor: '#222' },
        ])
        assertMinifiable(css)
        expect(css).toMatchInlineSnapshot(`
          ":root {
              --unframer-a-z-a-z: #111;

              --token-a: #111;
          }

          .dark {
              --unframer-a-z-a-z: #222;

              --token-a: #222;
          }"
        `)
    })
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
