import dedent from 'string-dedent'
import { ComponentFont } from './framer.js'

function deduplicateByKey<T>(arr: T[], key: (k: T) => string): T[] {
    let map = new Map()
    for (let item of arr) {
        let value = key(item)
        if (map.has(value)) {
            continue
        }
        map.set(value, item)
    }
    return Array.from(map.values())
}

export type ComponentFontBundle = {
    /**
     * This flag specifies whether the font bundle includes the specific font
     * weights of Framer’s Inter font that the component uses. New smart
     * components do that (which means we can emit CSS only for Inter fonts that
     * are actually used); older smart components don’t (which means some places
     * will emit CSS for all Inter fonts if this flag is not set).
     * https://www.notion.so/framer/RFC-ComponentFont-v2-d5fd3e822fb049ffb6971554ab0e4e42
     */
    explicitInter: boolean
    fileName?: string
    fonts: ComponentFont[]
}

export function logFontsUsage(fontsBundles: ComponentFontBundle[]) {
    if (!fontsBundles.length) {
        return ''
    }
    let familyToFilenames = new Map<string, Set<string>>()
    for (let fontDefBundle of fontsBundles) {
        let filename = fontDefBundle.fileName
        for (let font of fontDefBundle.fonts) {
            if (familyToFilenames.has(font.family)) {
                familyToFilenames.get(font.family)!.add(filename!)
            } else {
                familyToFilenames.set(font.family, new Set([filename!]))
            }
        }
    }
    let str = `There are ${familyToFilenames.size} fonts used:\n`
    for (let [family, filenames] of familyToFilenames.entries()) {
        str += `${JSON.stringify(family)}, used by\n`
        for (let filename of filenames) {
            str += `  - ${filename}\n`
        }
    }
    return str
}

export function getFontsStyles(_fontsDefs: ComponentFontBundle[]) {
    if (!_fontsDefs.length) {
        return ''
    }
    let urlToFilenames = new Map<string, Set<string>>()

    for (let fontDefBundle of _fontsDefs) {
        let filename = fontDefBundle.fileName
        for (let font of fontDefBundle.fonts) {
            if (urlToFilenames.has(font.url)) {
                urlToFilenames.get(font.url)!.add(filename!)
            } else {
                urlToFilenames.set(font.url, new Set([filename!]))
            }
        }
    }
    const allFonts = deduplicateByKey(
        _fontsDefs.flatMap((x) => x.fonts),
        (x) => x?.url,
    )
        .filter((x) => x.url)
        .sort((a, b) => a.url.localeCompare(b.url))

    // group fonts by the filenames users
    const grouped = groupBy(allFonts, (x) => {
        return [...(urlToFilenames.get(x.url) || [])].sort().join(', ')
    })

    let str = '\n\n'
    for (let [groupComment, fonts] of grouped.entries()) {
        fonts = sortByKey(fonts, (x) => x.url)
        str += `/* used by ${groupComment} */\n`
        str +=
            '\n' +
            fonts
                .map((x) => {
                    let str = ''
                    str += dedent`
                    @font-face {
                        font-family: '${x.family}'; 
                        src: url('${x.url}');\n
                    `
                    if (x.style) {
                        str += `    font-style: ${x.style};\n`
                    }
                    if (x.weight) {
                        str += `    font-weight: ${x.weight};\n`
                    }
                    if (x.unicodeRange) {
                        str += `    unicodeRange: ${x.unicodeRange};\n`
                    }
                    str += `}\n`
                    return str
                })
                .join('\n') +
            '\n'
    }

    return str
}

export const defaultBreakpointSizes = {
    base: 0,
    sm: 320,
    md: 768,
    lg: 960,
    xl: 1200,
    '2xl': 1536,
} as const

export type BreakpointSizes = typeof defaultBreakpointSizes

// @deprecated TODO remove this in future releases
export const breakpointsStylesLegacy = (breakpointSizes?: BreakpointSizes) => {
    breakpointSizes = { ...defaultBreakpointSizes, ...breakpointSizes }
    return /* css */ `
/* Base */
@media (min-width: ${breakpointSizes.base}px) and (max-width: ${
        breakpointSizes.sm - 1
    }px) {
    .unframer-hidden.unframer-base { 
        display: contents;
    }
}

/* Small */
@media (min-width: ${breakpointSizes.sm}px) and (max-width: ${
        breakpointSizes.md - 1
    }px) {
    .unframer-hidden.unframer-sm { 
        display: contents;
    }
}

/* Medium */
@media (min-width: ${breakpointSizes.md}px) and (max-width: ${
        breakpointSizes.lg - 1
    }px) {
    .unframer-hidden.unframer-md { 
        display: contents;
    }
}

/* Large */
@media (min-width: ${breakpointSizes.lg}px) and (max-width: ${
        breakpointSizes.xl - 1
    }px) {
    .unframer-hidden.unframer-lg { 
        display: contents;
    }
}

/* Extra Large */
@media (min-width: ${breakpointSizes.xl}px) and (max-width: ${
        breakpointSizes['2xl'] - 1
    }px) {
    .unframer-hidden.unframer-xl { 
        display: contents;
    }
}

/* 2 Extra Large */
@media (min-width: ${breakpointSizes['2xl']}px) {
    .unframer-hidden.unframer-2xl { 
        display: contents;
    }
}

.unframer-hidden {
    display: none;
}
`
}
export const breakpointsStyles = (breakpointSizes?: BreakpointSizes) => {
    breakpointSizes = { ...defaultBreakpointSizes, ...breakpointSizes }
    return /* css */ `
/* Base */
@media (min-width: ${breakpointSizes.base}px) and (max-width: ${breakpointSizes.sm - 1}px) {
    .unframer:not(.unframer-base) { 
        display: none !important;
    }
}

/* Small */
@media (min-width: ${breakpointSizes.sm}px) and (max-width: ${breakpointSizes.md - 1}px) {
    .unframer:not(.unframer-sm) { 
        display: none !important;
    }
}

/* Medium */
@media (min-width: ${breakpointSizes.md}px) and (max-width: ${breakpointSizes.lg - 1}px) {
    .unframer:not(.unframer-md) { 
        display: none !important;
    }
}

/* Large */
@media (min-width: ${breakpointSizes.lg}px) and (max-width: ${breakpointSizes.xl - 1}px) {
    .unframer:not(.unframer-lg) { 
        display: none !important;
    }
}

/* Extra Large */
@media (min-width: ${breakpointSizes.xl}px) and (max-width: ${breakpointSizes['2xl'] - 1}px) {
    .unframer:not(.unframer-xl) { 
        display: none !important;
    }
}

/* 2 Extra Large */
@media (min-width: ${breakpointSizes['2xl']}px) {
    .unframer:not(.unframer-2xl) { 
        display: none !important;
    }
}
`
}

export function groupBy<T>(arr: T[], key: (x: T) => string) {
    const map = new Map<string, T[]>()
    for (let item of arr) {
        const k = key(item)
        if (!map.has(k)) {
            map.set(k, [])
        }
        map.get(k)?.push(item)
    }
    return map
}

function sortByKey<T>(arr: T[], key: (x: T) => string) {
    return arr.slice().sort((a, b) => key(a).localeCompare(key(b)))
}
