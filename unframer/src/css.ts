import dedent from 'dedent'
import { ComponentFont } from './framer.js'

export const breakpointSizes = {
    base: 0,
    sm: 320,
    md: 768,
    lg: 960,
    xl: 1200,
    '2xl': 1536,
} as const

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
    fonts: ComponentFont[]
}

export function getFontsStyles(_fontsDefs: ComponentFontBundle[]) {
    let fontsDefs = _fontsDefs?.flatMap((x) => x.fonts)
    if (!fontsDefs?.length) {
        return ''
    }
    

    const allFonts = deduplicateByKey(fontsDefs, (x) => x?.url).filter(
        (x) => x.url,
    )
    // console.log('fontsDefs', JSON.stringify(allFonts, null, 2))

    // console.log(JSON.stringify(fonts, null, 2))
    let str = allFonts
        .map((x) => {
            let str = `/* From ${x.source} */\n`
            str += dedent`
            @font-face {
                font-family: '${x.family}'; 
                src: url(${x.url});\n`
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
        .join('\n')

    return '\n' + str + '\n'
}

export const breakpointsStyles = /* css */ `
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
