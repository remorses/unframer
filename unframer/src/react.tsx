'use client'
import { combinedCSSRules } from '../framer-fixed/dist/framer.js'

import {
    ComponentPropsWithoutRef,
    ComponentType,
    ReactNode,
    useEffect,
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

const defaultBreakpoints = ['Desktop', 'Tablet', 'Mobile'] as const

type Breakpoint = (typeof defaultBreakpoints)[number]

let defaultMap: Record<Breakpoint, string> = Object.fromEntries(
    defaultBreakpoints.map((x) => [x, x]),
) as any

function getClassMap(breakpoints: Breakpoint[]): Record<Breakpoint, string> {
    const classMap: Record<Breakpoint, string> = {
        Desktop: '',
        Tablet: '',
        Mobile: '',
    }

    if (breakpoints.length === 1) {
        classMap[breakpoints[0]] = 'FramerDesktop FramerTablet FramerMobile'
    } else if (breakpoints.length === 2) {
        if (breakpoints.includes('Desktop')) {
            classMap.Desktop = 'Desktop'
            classMap[breakpoints.find((b) => b !== 'Desktop')!] =
                'FramerTablet FramerMobile'
        } else if (breakpoints.includes('Tablet')) {
            classMap.Tablet = 'Tablet'
            classMap[breakpoints.find((b) => b !== 'Tablet')!] =
                'FramerDesktop FramerMobile'
        } else {
            classMap.Mobile = 'Mobile'
            classMap[breakpoints.find((b) => b !== 'Mobile')!] =
                'FramerDesktop FramerTablet'
        }
    } else if (breakpoints.length === 3) {
        classMap.Desktop = 'FramerDesktop'
        classMap.Tablet = 'FramerTablet'
        classMap.Mobile = 'FramerMobile'
    }

    return classMap
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

export function getFontsStyles(Components) {
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

const breakpointSizes: Record<(typeof defaultBreakpoints)[number], number> = {
    Desktop: 1024,
    Tablet: 768,
    Mobile: 0,
}

function getBreakpointNameFromWindowWidth(windowWidth: number) {
    return defaultBreakpoints.find(
        (name) => windowWidth >= breakpointSizes[name],
    )
}

const breakpointsStyles = `

.FramerTablet,
.FramerMobile,
.FramerDesktop {
    display: none;
}

@media (min-width: ${breakpointSizes.Desktop}px) {
    .FramerDesktop {
        display: contents;
    }
}

@media (min-width: ${breakpointSizes.Tablet}px) and (max-width: ${breakpointSizes.Desktop}px) {
    .FramerTablet {
        display: contents;
    }
}

@media (max-width: ${breakpointSizes.Tablet}px) {
    .FramerMobile {
        display: contents;
    }
}

.contents {
    display: contents;
}

`

const nothing = () => {}
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

export function WithFramerBreakpoints<
    T extends ComponentType<{ variant?: any; className?: string }>,
>({
    Component,
    variants: breakpointsMap = defaultMap,
    ...rest
}: {
    Component: T
    variants?: Record<Breakpoint, ComponentPropsWithoutRef<T>['variant']>
} & Omit<ComponentPropsWithoutRef<T>, 'variant'>): any {
    const controls = Component['propertyControls']

    const variantControls = controls?.['variant']
    if (!variantControls) {
        return <Component variant={undefined} {...rest} />
    }

    const options = variantControls?.optionTitles

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
            // on server
            return ''
        },
    )

    const parts = useMemo(() => {
        return defaultBreakpoints.map((breakpointName) => {
            if (currentBreakpoint && currentBreakpoint !== breakpointName) {
                return null
            }
            let realVariant = breakpointsMap[breakpointName]
            if (!realVariant) {
                // console.error(breakpointName, 'not found in', breakpointsMap)
                return null
            }
            let mapped = defaultBreakpoints.filter((x) => breakpointsMap[x])

            let map = getClassMap(mapped)[breakpointName]
            let className = classNames('', map)

            return (
                <div key={breakpointName} className={className}>
                    <Component
                        key={breakpointName}
                        layoutId={breakpointName}
                        {...rest}
                        variant={realVariant}
                    />
                </div>
            )
        })
    }, [currentBreakpoint])

    return parts
}

const onResize = (callback) => {
    window.addEventListener('resize', callback)
    return () => window.removeEventListener('resize', callback)
}
