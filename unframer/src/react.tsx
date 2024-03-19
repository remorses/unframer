'use client'
import { combinedCSSRules, LayoutGroup } from '../framer-fixed/dist/framer.js'

import {
    ComponentPropsWithoutRef,
    ComponentType,
    forwardRef,
    useId,
    useMemo,
    useSyncExternalStore,
} from 'react'

function getFonts(component) {
    const fonts = component.fonts
    return fonts || []
}

function classNames(...args) {
    return args.filter(Boolean).join(' ')
}

function deduplicateByKey<T>(arr: T[], key: (k: T) => string) {
    let map = new Map()
    for (let item of arr) {
        let value = item[key(item)]
        if (map.has(value)) {
            continue
        }
        map.set(value, item)
    }
    return Array.from(map.values())
}

function getFontsStyles(Components) {
    const allFonts = deduplicateByKey<{ family; url; style; weight }>(
        Components.map(getFonts).flat(),
        (x) => x.url,
    ).filter((x) => x.url)

    // console.log(JSON.stringify(fonts, null, 2))
    let str = allFonts
        .map((x) => {
            let str = `@font-face { font-family: '${x.family}'; src: url(${x.url});`
            if (x.style) {
                str += ` font-style: ${x.style};`
            }
            if (x.weight) {
                str += ` font-weight: ${x.weight};`
            }
            str += ` }`
            return str
        })
        .join('\n')

    return str
}

const breakpointSizes = {
    base: 0,
    sm: 320,
    md: 768,
    lg: 960,
    xl: 1200,
    '2xl': 1536,
} as const

// breakpoints from the higher to the lower
const defaultBreakpoints = Object.keys(
    breakpointSizes,
).reverse() as UnframerBreakpoint[]

export type UnframerBreakpoint = keyof typeof breakpointSizes

function getBreakpointNameFromWindowWidth(windowWidth: number) {
    return defaultBreakpoints.find(
        (name) => windowWidth >= breakpointSizes[name],
    )
}

const breakpointsStyles = /* css */ `
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
type Breakpoints = Record<UnframerBreakpoint, string>

function fillBreakpoints(breakpoints: Breakpoints): Breakpoints {
    const breakpointsOrder = ['base', 'sm', 'md', 'lg', 'xl', '2xl']
    const filledBreakpoints: Breakpoints = { ...breakpoints }

    for (let i = 1; i < breakpointsOrder.length; i++) {
        const currentBreakpoint = breakpointsOrder[i]
        const previousBreakpoint = breakpointsOrder[i - 1]

        if (!filledBreakpoints[currentBreakpoint]) {
            filledBreakpoints[currentBreakpoint] =
                filledBreakpoints[previousBreakpoint]
        }
    }
    return filledBreakpoints
}

const nothing = () => {
    return () => {}
}
export function FramerStyles({ Components = [] as any[] }): any {
    const isClient = useSyncExternalStore(
        nothing,
        () => true,
        () => false,
    )
    const breakpoints = (
        <style
            dangerouslySetInnerHTML={{ __html: breakpointsStyles }}
            key='breakpointsStyles'
            suppressHydrationWarning
            hidden
        />
    )
    const fonts = (
        <style
            dangerouslySetInnerHTML={{ __html: getFontsStyles(Components) }}
            suppressHydrationWarning
            key='fonts'
            hidden
        />
    )
    // if (isClient) {
    //     // on client framer injects the styles by itself
    //     return (
    //         <>
    //             {breakpoints}
    //             {fonts}
    //         </>
    //     )
    // }
    return (
        <>
            {breakpoints}
            {fonts}
            <style
                dangerouslySetInnerHTML={{
                    __html: combinedCSSRules.join('\n'),
                }}
                key='combinedCSSRules'
                suppressHydrationWarning
                hidden
            />
        </>
    )
}

export const WithFramerBreakpoints = forwardRef(function WithFramerBreakpoints<
    T extends ComponentType<{ variant?: any; className?: string }>,
>(
    {
        Component,
        variants: _breakpointsMap,
        ...rest
    }: {
        Component: T
        variants: Record<
            UnframerBreakpoint,
            ComponentPropsWithoutRef<T>['variant']
        >
    } & Omit<ComponentPropsWithoutRef<T>, 'variant'>,
    ref,
): any {
    const id = useId()
    const currentBreakpoint = useSyncExternalStore(
        onResize,
        () => {
            // console.log('window.innerWidth', window.innerWidth)
            const breakpoint = getBreakpointNameFromWindowWidth(
                window.innerWidth,
            )
            return breakpoint
        },
        () => {
            // on server and during hydration

            return ''
        },
    )

    const parts = useMemo(() => {
        const allBreakpoints = fillBreakpoints(_breakpointsMap)
        const variants = {} as Record<
            string,
            { className: string; variant: string }
        >
        for (let breakpointName of Object.keys(allBreakpoints)) {
            const realVariant = allBreakpoints[breakpointName]
            if (!realVariant) {
                continue
            }
            if (currentBreakpoint && currentBreakpoint !== breakpointName) {
                continue
            }

            let className = classNames(
                variants[realVariant]?.className || 'unframer-hidden',
                `unframer-${breakpointName}`,
            )
            variants[realVariant] = { className, variant: realVariant }
        }

        return Object.values(variants).map(({ className, variant }) => {
            return (
                <div key={variant} className={className}>
                    <LayoutGroup key={variant} id={id + variant}>
                        {/* @ts-ignore */}
                        <Component
                            ref={ref}
                            key={variant}
                            // layoutDependency={id}
                            // layoutId={id + variant}
                            // layoutId={breakpointName}
                            {...rest}
                            variant={variant as any}
                        />
                    </LayoutGroup>
                </div>
            )
        })
    }, [currentBreakpoint, rest, _breakpointsMap])

    return parts
})

const onResize = (callback) => {
    window.addEventListener('resize', callback)
    return () => window.removeEventListener('resize', callback)
}
