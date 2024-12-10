import { test, expect, describe } from 'vitest'
import dprint from 'dprint-node'
import dedent from 'string-dedent'
import { babelPluginDeduplicateImports, babelPluginJsxTransform } from '../src/babel-plugin-imports'
import { transform } from '@babel/core'
function trans(code: string, plugins: any[] = [babelPluginDeduplicateImports]) {
    const res = transform(code || '', {
        babelrc: false,
        sourceType: 'module',
        plugins,
        filename: 'x.js',
        compact: true,
        sourceMaps: false,
    })
    let out = res!.code!
    let formatted = dprint.format('x.jsx', out, {
        lineWidth: 80,
        quoteStyle: 'alwaysSingle',

        trailingCommas: 'always',
        semiColons: 'always',
    })
    return formatted
}

import { babelPluginRenameExports } from '../src/babel-plugin-imports'

describe('babelPluginRenameExports', () => {
    test('renames exports', () => {
        const map = new Map([
            ['oldName0', 'newName0'],
            ['oldName1', 'newName1'],
            ['something', 'renamedSomething'],
        ])
        expect(
            trans(
                dedent`
                const something = 9
                export { something as oldName };
                export {something}
                export function oldName1() {}
                export default defaultExport;
            `,
                [babelPluginRenameExports({ map })],
            ),
        ).toMatchInlineSnapshot(`
          "const something = 9;
          export { something as oldName, };
          export { something as renamedSomething, };
          export function newName1() {}
          export default defaultExport;
          "
        `)
    })
})

describe('babelPluginJsxTransform', () => {
    test('transforms _jsx and _jsxs calls to JSX', () => {
        expect(
            trans(
                dedent`
                import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
                
                const element = _jsx("div", {
                    className: "container",
                    children: _jsxs("span", {
                        style: { color: "red" },
                        children: [
                            _jsx("strong", {
                                children: "Hello"
                            }),
                            " world"
                        ]
                    })
                });
                `,
                [babelPluginJsxTransform()],
            ),
        ).toMatchInlineSnapshot(`
          "import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
          const element = (
            <div className={'container'}>
              {
                <span style={{ color: 'red', }}>
                  {<strong>{'Hello'}</strong>}
                  {' world'}
                </span>
              }
            </div>
          );
          "
        `)
    })

    test('handles member expressions', () => {
        expect(
            trans(
                dedent`
                import { jsx as _jsx } from 'react/jsx-runtime';
                
                const element = _jsx(Components.Button, {
                    onClick: () => 'Hello',
                    children: "Click me"
                });
                `,
                [babelPluginJsxTransform()],
            ),
        ).toMatchInlineSnapshot(`
          "import { jsx as _jsx, } from 'react/jsx-runtime';
          const element = (
            <Components.Button onClick={() => 'Hello'}>{'Click me'}</Components.Button>
          );
          "
        `)
    })
})


describe('babelPluginDeduplicateImports', () => {
    test('simple', () => {
        expect(
            trans(dedent`
            import React1 from 'react';
            import React2 from 'react';
            import * as ReactAll from 'react';
            import * as ReactEverything from 'react';
            import { Fragment, } from 'react/jsx-runtime'
            import { Fragment as Fragment2, } from 'react'
            import { createContext, } from 'react';
            import { createContext as createContext2, } from 'react';
            import { createContext as createContext3, } from 'react';
            import { useEffect, useLayoutEffect, } from 'react';
            import { createContext as createContext4, } from 'react';
            import { createContext as createContext5, } from 'react';
            import { jsx, jsxs, } from 'react/jsx-runtime';

            console.log(React1, React2, createContext, createContext2, createContext3, useEffect, useLayoutEffect, createContext4, createContext5, jsx, jsxs)
        `),
        ).toMatchInlineSnapshot(`
          "import React1 from 'react';
          import * as ReactAll from 'react';
          import { Fragment, } from 'react/jsx-runtime';
          import { createContext, } from 'react';
          import { useEffect, useLayoutEffect, } from 'react';
          import { jsx, jsxs, } from 'react/jsx-runtime';
          console.log(
            React1,
            React1,
            createContext,
            createContext,
            createContext,
            useEffect,
            useLayoutEffect,
            createContext,
            createContext,
            jsx,
            jsxs,
          );
          "
        `)
    })
})
