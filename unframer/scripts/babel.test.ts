import { test, expect, describe } from 'vitest'
import fs from 'fs'
import path from 'path'
import dprint from 'dprint-node'
import dedent from 'string-dedent'
import {
    babelPluginDeduplicateImports,
    babelPluginJsxTransform,
} from '../src/babel-plugin-imports'
import { transform } from '@babel/core'

function trans(
    code: string,
    plugins: any[] = [babelPluginDeduplicateImports],
    filename: string = 'x.js',
) {
    const res = transform(code || '', {
        babelrc: false,
        sourceType: 'module',
        plugins,
        filename,
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

test(
    'babelPluginJsxTransform, transforms files in nextjs-app/src/framer to JSX',
    async () => {
        async function getAllFiles(dir) {
            const entries = await fs.promises.readdir(dir, {
                withFileTypes: true,
            })

            const files = await Promise.all(
                entries.map(async (entry) => {
                    const fullPath = path.join(dir, entry.name)
                    if (entry.isDirectory()) {
                        return getAllFiles(fullPath)
                    } else if (entry.name.endsWith('.js')) {
                        return [fullPath]
                    }
                    return []
                }),
            )

            return files.flat()
        }

        const baseDir = path.resolve(__dirname, '../../nextjs-app/src/framer')
        const files = await getAllFiles(baseDir)

        for (const file of files) {
            // console.log(file)
            const code = await fs.promises.readFile(file, 'utf8')
            const outPath = file
                .replace('/framer/', '/framer-jsx/')
                .replace('.js', '.jsx')

            // Create output directory if it doesn't exist
            await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
            console.log(outPath)

            // Transform and write JSX file
            const transformed = trans(code, [babelPluginJsxTransform()], file)
            await fs.promises.writeFile(outPath, transformed)
        }
    },
    1000 * 20,
)

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
