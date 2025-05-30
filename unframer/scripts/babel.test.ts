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
    filename: string = 'x.jsx',
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
    let formatted = dprint.format(filename, out, {
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
describe('babelPluginJsxTransform transforms files in nextjs-app/src/framer to JSX', () => {
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

    test('gets list of files to transform', async () => {
        const files = await getAllFiles(baseDir)
        expect(files.length).toBeGreaterThan(0)
        expect(files[0]).toMatch(/\.js$/)
    })

    test.skip(
        'transforms each file to JSX',
        async () => {
            const files = await getAllFiles(baseDir)

            for (const file of files) {
                const code = await fs.promises.readFile(file, 'utf8')
                const outPath = file
                    .replace('/framer/', '/framer-jsx/')
                    .replace('.js', '.jsx')

                await fs.promises.mkdir(path.dirname(outPath), {
                    recursive: true,
                })

                const transformed = trans(
                    code,
                    [babelPluginJsxTransform()],
                    outPath,
                )
                await fs.promises.writeFile(outPath, transformed)
                console.log(outPath)

                expect(transformed).toBeTruthy()
                // expect(transformed).toContain('jsx')
            }
        },
        1000 * 20,
    )
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
              <span style={{ color: 'red', }}>
                <strong>{'Hello'}</strong>
                {' world'}
              </span>
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

    test('handles cloneElement with complex props', () => {
        expect(
            trans(
                dedent`
                import { jsx as _jsx } from 'react/jsx-runtime';
                import { cloneElement } from 'react';

                const element = _jsx("li", {
                    ref: ref,
                    style: size2,
                    children: cloneElement(
                        child,
                        {
                            style: {
                                ...(child.props?.style),
                                ...size2,
                                flexShrink: 0,
                                ...childrenStyles,
                            },
                            layoutId: child.props.layoutId
                                ? child.props.layoutId + '-original-' + index
                                : undefined,
                        },
                        child.props?.children
                    )
                });
                `,
                [babelPluginJsxTransform()],
            ),
        ).toMatchInlineSnapshot(`
          "import { jsx as _jsx, } from 'react/jsx-runtime';
          import { cloneElement, } from 'react';
          const element = (
            <li ref={ref} style={size2}>
              {cloneElement(child, {
                style: {
                  ...child.props?.style,
                  ...size2,
                  flexShrink: 0,
                  ...childrenStyles,
                },
                layoutId: child.props.layoutId
                  ? child.props.layoutId + '-original-' + index
                  : undefined,
              }, child.props?.children,)}
            </li>
          );
          "
        `)
    })

    test('handles jsx function called jsx', () => {
        expect(
            trans(
                dedent`
                    import { jsx } from 'react/jsx-runtime';

                    const element = jsx("div", {
                        className: "container",
                        children: "Hello world"
                    });
                    `,
                [babelPluginJsxTransform()],
            ),
        ).toMatchInlineSnapshot(`
          "import { jsx, } from 'react/jsx-runtime';
          const element = <div className={'container'}>{'Hello world'}</div>;
          "
        `)
    })
    test('handles jsx passed as prop to another component', () => {
        expect(
            trans(
                dedent`
                    import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

                    const element = _jsx(Modal, {
                        content: _jsx("div", {
                            className: "modal-content",
                            children: _jsx("p", {
                                children: "This is modal content"
                            })
                        }),
                        footer: _jsxs("div", {
                            className: "modal-footer",
                            children: [
                                _jsx("button", {
                                    children: "Cancel"
                                }),
                                _jsx("button", {
                                    children: "OK"
                                })
                            ]
                        })
                    });
                    `,
                [babelPluginJsxTransform()],
            ),
        ).toMatchInlineSnapshot(`
              "import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
              const element = (
                <Modal
                  content={
                    <div className={'modal-content'}>
                      <p>{'This is modal content'}</p>
                    </div>
                  }
                  footer={
                    <div className={'modal-footer'}>
                      <button>{'Cancel'}</button>
                      <button>{'OK'}</button>
                    </div>
                  }
                />
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
