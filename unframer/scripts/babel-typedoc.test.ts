
import { describe, test, expect } from 'vitest'
import { transform } from '@babel/core'
import dprint from 'dprint-node'
import { dedent } from '../src/utils.js'
import { babelPluginTypedoc } from "../src/babel-typedoc.js"

/**
 * Helper that runs Babel with the typedoc-injection plugin and formats the
 * result with dprint so snapshot / string comparisons are deterministic.
 */
function trans(
    code: string,
    {
        headerComment,
        responsiveComment,
        defaultExportComment,
    }: {
        headerComment: string
        responsiveComment?: string
        defaultExportComment?: string
    },
    filename = 'example.jsx',
) {
    const res = transform(code, {
        babelrc: false,
        sourceType: 'module',
        filename,
        parserOpts: {
            plugins: ['jsx'],
        },
        plugins: [
            // Pass options as the parameter for the plugin
            babelPluginTypedoc({ headerComment, responsiveComment, defaultExportComment }),
        ],
    })
    if (!res?.code) throw new Error('Babel transform returned no code')

    return dprint.format(filename, res.code, {
        lineWidth: 80,
        quoteStyle: 'alwaysSingle',
        trailingCommas: 'always',
        semiColons: 'always',
    })
}

describe('babelPluginTypedoc', () => {
    test('injects typedoc comments in the correct places', () => {
        const code = dedent`
            'use client';
            import React from 'react';

            const SectionHeroFramerComponent = () => <div>Hello</div>;
            SectionHeroFramerComponent.Responsive = () => <div />;

            function ComponentWithRoot(props) {
                return <SectionHeroFramerComponent {...props} />;
            }
            export default ComponentWithRoot;
        `
        const headerComment = dedent`
            /**
             * @typedef Locale
             * A string that represents the locale.
             */
        `
        const responsiveComment = dedent`
            /**
             * Renders SectionHeroFramerComponent for all breakpoints with a variants map.
             * @function
             */
        `
        const defaultExportComment = dedent`
            /** @type {SectionHeroFramerComponent} */
        `

        const out = trans(code, {
            headerComment,
            responsiveComment,
            defaultExportComment,
        })
        expect(out).toMatchInlineSnapshot(`
          "'use client';

          /**
           * @typedef Locale
           * A string that represents the locale.
           */
          import React from 'react';
          const SectionHeroFramerComponent = () => <div>Hello</div>;
          /**
           * Renders SectionHeroFramerComponent for all breakpoints with a variants map.
           * @function
           */
          SectionHeroFramerComponent.Responsive = () => <div />;
          /** @type {SectionHeroFramerComponent} */
          function ComponentWithRoot(props,) {
            return <SectionHeroFramerComponent {...props} />;
          }
          export default ComponentWithRoot;
          "
        `)
    })
})
