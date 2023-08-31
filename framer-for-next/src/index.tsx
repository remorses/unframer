/// <reference types="../types.d.ts" />
'use client'

import classNames from 'classnames'
import { ReactNode } from 'react'

import React from 'react'

function getFonts(component) {
    const fonts = component.fonts
    return fonts || []
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

export function getFontsStyles(Components) {
    let styles: string[] = []
    for (let Component of Components) {
        const fonts = getFonts(Component)
        // console.log(JSON.stringify(fonts, null, 2))
        let str = fonts
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
        styles.push(str)
    }
    let str = styles.join('\n')
    return str
}

export function FontsForComponents({ Components }) {
    return (
        <style
            dangerouslySetInnerHTML={{ __html: getFontsStyles(Components) }}
            suppressHydrationWarning
            hidden
        />
    )
}

export function WithFramerBreakpoints({
    children,
    variants: breakpointsMap = defaultMap,
}: {
    children: any
    variants?: Record<Breakpoint, string>
}) {
    let child = React.Children.only(children)
    if (!child) {
        return null
    }
    if (!React.isValidElement<any>(child)) {
        return null
    }
    // let inverted = Object.fromEntries(
    //     breakpointsMap
    //         ? Object.entries(breakpointsMap).map(([k, v]) => [v, k])
    //         : [],
    // )

    const controls = child.type['propertyControls']

    const variantControls = controls?.['variant']
    if (!variantControls) {
        return children
    }
    // console.log({ variantControls })
    const options = variantControls?.optionTitles

    // console.log(child.fonts)
    // Checking isValidElement is the safe way and avoids a
    // typescript error too.

    let parts: ReactNode[] = []
    for (let breakpointName of defaultBreakpoints) {
        let realVariant = breakpointsMap[breakpointName]
        if (!realVariant) {
            continue
        }
        let mapped = defaultBreakpoints.filter((x) => breakpointsMap[x])

        let map = getClassMap(mapped)[breakpointName]
        let className = classNames('', map)
        // console.log({ mapped, options, map, realVariant, className })
        parts.push(
            // hidden disable the tailwind spacing for other elements
            <div className={className}>
                {React.cloneElement(child, {
                    variant: realVariant,
                    className,
                })}
            </div>,
        )
    }

    return <div className='contents'>{parts}</div>
}
