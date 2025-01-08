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
    // @ts-ignore
    LocaleInfoContext,
    // @ts-ignore
    FramerLink as Link,
} from './framer.js'
import React from 'react'

type Routes = Record<string, { path: string }>

const routesContext = React.createContext<Routes>({})

function replacePathParams(path: string, params: Record<string, string>) {
    const paramRegex = /:[a-zA-Z]+/g
    const matches = path.match(paramRegex)

    // If there is only one match
    if (matches?.length === 1) {
        const paramValue = Object.values(params)[0]

        let res = path.replace(paramRegex, paramValue)
        // console.log({ matches, params, paramValue, res })

        return res
    }

    return path.replace(paramRegex, (match) => {
        const param = match.slice(1) // Remove the : prefix
        return params[param] || match // Replace with param value or keep original if not found
    })
}

export function ResolveLinksAdapted({ links, children }) {
    // TODO add ref
    return children(links.map((x) => x.href))
}

export function AdaptedLink({
    href,
    nodeId,
    openInNewTab,
    smoothScroll,
    ...rest
}) {
    const onlyForFramer = { nodeId, openInNewTab, smoothScroll }
    const routes = React.useContext(routesContext)
    const webPageId = href?.webPageId as string
    const pathVariables = href?.pathVariables as Record<string, string>
    const route = routes?.[webPageId]
    // console.log({ href, pathVariables, path: route?.path, ...rest })
    if (href?.startsWith && href.startsWith('/')) {
        return <a href={href} {...rest} />
    }
    if (!webPageId) {
        return <Link href={href} {...rest} {...onlyForFramer} />
    }

    if (!route || !route.path) {
        return <Link href={href} {...rest} {...onlyForFramer} />
    }
    let path = route.path
    if (pathVariables) {
        path = replacePathParams(path, pathVariables)
    }
    if (path?.startsWith?.('/')) {
        return <a href={path} {...rest} />
    }

    return <Link href={path} {...rest} {...onlyForFramer} />
}

export function ContextProviders({
    locale,
    children,
    framerSiteId,
    routes,
    // collectionUtils,
    locales,
}) {
    const activeLocale = locales?.find(
        (l) => l.slug === locale || l.code === locale || l.id === locale,
    )

    const localeInfo = useMemo(() => {
        return {
            activeLocale,
            locales,
            setLocale: async (localeOrLocaleId) => {
                console.log('setLocale', localeOrLocaleId)
            },
        }
    }, [activeLocale, locales])
    return (
        <FetchClientProvider>
            <CustomCursorHost>
                <FormContext.Provider value={framerSiteId}>
                    <LocaleInfoContext value={localeInfo}>
                        <routesContext.Provider value={routes}>
                            {/* <Router
                                initialRoute='x'
                                routes={{
                                    x: { page: children, path: '/' },
                                    ...routes,
                                }}
                                locales={locales}
                                initialLocaleId={activeLocale?.id}
                            >
                                {children}
                            </Router> */}
                            {children}
                        </routesContext.Provider>
                    </LocaleInfoContext>
                </FormContext.Provider>
            </CustomCursorHost>
        </FetchClientProvider>
    )
}
