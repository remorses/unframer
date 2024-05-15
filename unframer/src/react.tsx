'use client'
import { combinedCSSRules, LayoutGroup } from './framer'

import {
    ComponentPropsWithoutRef,
    ComponentType,
    forwardRef,
    useId,
    useMemo,
    useSyncExternalStore,
} from 'react'
import {
    breakpointsStyles,
    defaultBreakpointSizes,
    getFontsStyles,
} from './css.js'

function classNames(...args) {
    return args.filter(Boolean).join(' ')
}

// breakpoints from the higher to the lower
const defaultBreakpoints = Object.keys(
    defaultBreakpointSizes,
).reverse() as UnframerBreakpoint[]

export type UnframerBreakpoint = keyof typeof defaultBreakpointSizes

function getBreakpointNameFromWindowWidth(windowWidth: number) {
    return defaultBreakpoints.find(
        (name) => windowWidth >= defaultBreakpointSizes[name],
    )
}

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

/**
 * @deprecated Use styles.css import instead
 */
export function FramerStyles({ Components = [] as any[] }): any {
    const isClient = useSyncExternalStore(
        nothing,
        () => true,
        () => false,
    )
    const breakpoints = (
        <style
            dangerouslySetInnerHTML={{
                __html: breakpointsStyles(defaultBreakpointSizes),
            }}
            key='breakpointsStyles'
            suppressHydrationWarning
            hidden
        />
    )
    const fonts = (
        <style
            dangerouslySetInnerHTML={{
                __html: getFontsStyles(
                    Components.map((x) => x.fonts || []).flat(),
                ),
            }}
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
                    {/* @ts-ignore */}
                    <Component
                        ref={ref}
                        key={variant}
                        // LayoutGroup is used internally
                        layoutId={id + variant}
                        // layoutDependency={id}
                        // layoutId={id + variant}
                        // layoutId={breakpointName}
                        {...rest}
                        variant={variant as any}
                    />
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
