import { test, expect, describe } from 'vitest'
import dprint from 'dprint-node'
import dedent from 'dedent'
import { babelPluginDeduplicateImports } from './babel-plugin-imports'
import { transform } from '@babel/core'

function trans(code: string) {
    const res = transform(code || '', {
        babelrc: false,
        sourceType: 'module',
        plugins: [babelPluginDeduplicateImports],
        filename: 'x.js',
        sourceMaps: false,
    })
    let out = res!.code!
    let formatted = dprint.format('x', out, {
        lineWidth: 140,
        quoteStyle: 'alwaysSingle',

        trailingCommas: 'always',
        semiColons: 'always',
    })
    return formatted
}

test('babel bug', () => {
    expect(
        trans(dedent`
        if (isPresent2) {
            if (initial && animateConfig) {
            runEffectAnimation(animateConfig, effect, shouldReduceMotion, ref, appearId,);
            }
        } else {
            if (exit) {
            runEffectAnimation(exit, effect, shouldReduceMotion, ref, appearId,).then(() => safeToRemove());
            } else {
            safeToRemove();
            }
        }
        `),
    ).toMatchInlineSnapshot(`
      "if (isPresent2) {
        if (initial && animateConfig) {
          runEffectAnimation(animateConfig, effect, shouldReduceMotion, ref, appearId,);
        }
      } else {
        if (exit) {
          runEffectAnimation(exit, effect, shouldReduceMotion, ref, appearId,).then(() => safeToRemove());
        } else {
          safeToRemove();
        }
      }
      "
    `)
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
