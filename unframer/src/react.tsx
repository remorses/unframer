'use client'
import { combinedCSSRules, LayoutGroup, MotionConfig } from './framer.js'

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
    const allBreakpoints = fillBreakpoints(_breakpointsMap)
    const variants = new Map<
        string,
        { className: string; variant: string; breakpoints: string[] }
    >()
    for (let breakpointName of Object.keys(allBreakpoints)) {
        const realVariant = allBreakpoints[breakpointName]
        if (!realVariant) {
            continue
        }

        const existingVariant = variants.get(realVariant)
        if (existingVariant) {
            existingVariant.breakpoints.push(breakpointName)
            existingVariant.className = classNames(
                existingVariant.className,
                `unframer-${breakpointName}`,
            )
        } else {
            variants.set(realVariant, {
                className: classNames(
                    'unframer-hidden',
                    `unframer-${breakpointName}`,
                ),
                variant: realVariant,
                breakpoints: [breakpointName],
            })
        }
    }
    const parts = [...variants.values()].map(
        ({ className, breakpoints, variant }) => {
            const shouldShow =
                !currentBreakpoint || breakpoints.includes(currentBreakpoint)
            if (!shouldShow) {
                return null
            }
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
        },
    )

    return parts
})

const onResize = (callback) => {
    window.addEventListener('resize', callback)
    return () => window.removeEventListener('resize', callback)
}

const onResizeWithDebounce = (callback) => {
    let timeoutId
    const debouncedCallback = () => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            callback()
        }, 16)
    }
    window.addEventListener('resize', debouncedCallback)
    return () => {
        clearTimeout(timeoutId)
        window.removeEventListener('resize', debouncedCallback)
    }
}

import {
    // @ts-ignore
    CustomCursorHost,
    // @ts-ignore
    FetchClientProvider,
    // @ts-ignore
    FormContext,
    // @ts-ignore
    Router,
} from './framer.js'

export function ContextProviders({
    locale,
    children,
    framerSiteId,
    routes,
    routeId,
    pathVariables,
    collectionUtils,
    locales,
}) {
    const localeId = locales?.find(
        (l) => l.slug === locale || l.code === locale || l.id === locale,
    )?.id
    return (
        <FetchClientProvider>
            <CustomCursorHost>
                <FormContext.Provider value={framerSiteId}>
                    <Router
                        initialRoute={routeId}
                        initialPathVariables={pathVariables}
                        initialLocaleId={localeId}
                        enableImproveInpDuringHydration={true}
                        routes={routes}
                        collectionUtils={collectionUtils}
                        locales={locales}
                    >
                        {children}
                    </Router>
                </FormContext.Provider>
            </CustomCursorHost>
        </FetchClientProvider>
    )
}
