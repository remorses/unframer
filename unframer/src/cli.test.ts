import { expect, test } from 'vitest'
import {
    componentCamelCase,
    extractTokenInfo,
    findRelativeLinks,
} from './exporter.js'

import { componentNameToPath } from './utils.js'

test('componentNameToPath', () => {
    expect(componentNameToPath('LogoTicker')).toMatchInlineSnapshot(
        `"logo-ticker"`,
    )
    expect(componentNameToPath('NavBar')).toMatchInlineSnapshot(`"nav-bar"`)
    expect(componentNameToPath('components/HeroSection')).toMatchInlineSnapshot(
        `"components/hero-section"`,
    )
    expect(componentNameToPath('shared/nav/framerNav')).toMatchInlineSnapshot(
        `"shared/nav/framer-nav"`,
    )
})
test('componentCamelCase', () => {
    expect(componentCamelCase('logo-ticker')).toMatchInlineSnapshot(
        `"LogoTickerFramerComponent"`,
    )
    expect(componentCamelCase('Logo-Ticker')).toMatchInlineSnapshot(
        `"LogoTickerFramerComponent"`,
    )
    expect(componentCamelCase('logo')).toMatchInlineSnapshot(
        `"LogoFramerComponent"`,
    )
    expect(componentCamelCase('nav')).toMatchInlineSnapshot(
        `"NavFramerComponent"`,
    )
    expect(componentCamelCase('framer_nav')).toMatchInlineSnapshot(
        `"FramerNavFramerComponent"`,
    )
    expect(componentCamelCase('shared/nav/framer-nav')).toMatchInlineSnapshot(
        `"FramerNavFramerComponent"`,
    )
})
test('findRelativeLinks', () => {
    expect(
        findRelativeLinks(`
    some code
    href: { pathVariables: { m3uy2HDcr: m3uy2HDcry78Q_MgWu2, }, webPageId: 'MREmP2Mxd', },
    other code
    webPageId: 'another id', webPageId: 'xxx',
    `),
    ).toMatchInlineSnapshot(`
      [
        2,
        4,
      ]
    `)
})

test(
    'extractTokenInfo',
    async () => {
        const str = `
        some other code
        else: --framer-text-color: var(--token-67c1333b-4249-4ff1-a333-3581964020b4, #ffffff);
        else: --framer-text-color: var(--token-67c1333b-4249-4ff1-a333-3581964020b4, rgb(0, 0, 0));
        var(not a token)
        mltiple lines
        '--border-color': 'var(--token-64603892-5c8b-477a-82d6-e795e75dd5dc, rgb(255, 79, 0)) /* {"name":"Orange"} */',
        --framer-text-color: var(--token-same-line, rgb(9,34,76)); another-one: --framer-text: var(--token-another-one-in-line, #ffffff);
        color: 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {"name":"Space"} */',

        `
        const tokens = extractTokenInfo(str)
        expect(tokens).toMatchInlineSnapshot(`
          [
            {
              "defaultValue": "#ffffff",
              "metadata": undefined,
              "tokenName": "--token-67c1333b-4249-4ff1-a333-3581964020b4",
            },
            {
              "defaultValue": "rgb(0, 0, 0)",
              "metadata": undefined,
              "tokenName": "--token-67c1333b-4249-4ff1-a333-3581964020b4",
            },
            {
              "defaultValue": "rgb(255, 79, 0)",
              "metadata": {
                "name": "Orange",
              },
              "tokenName": "--token-64603892-5c8b-477a-82d6-e795e75dd5dc",
            },
            {
              "defaultValue": "rgb(9,34,76)",
              "metadata": undefined,
              "tokenName": "--token-same-line",
            },
            {
              "defaultValue": "#ffffff",
              "metadata": undefined,
              "tokenName": "--token-another-one-in-line",
            },
            {
              "defaultValue": "rgb(16, 25, 66)",
              "metadata": {
                "name": "Space",
              },
              "tokenName": "--token-bb315df6-c2cd-4c31-805d-6d1891fd5658",
            },
          ]
        `)
    },
    1000 * 10,
)
