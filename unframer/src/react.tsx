'use client'
import { combinedCSSRules, withCSS as originalWithCSS } from './framer.js'

import {
    ComponentPropsWithoutRef,
    ComponentType,
    createContext,
    forwardRef,
    useContext,
    useMemo,
    useSyncExternalStore,
} from 'react'
import {
    breakpointsStylesLegacy,
    defaultBreakpointSizes,
    getFontsStyles,
} from './css.js'
import { version } from './version.js'

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
                __html: breakpointsStylesLegacy(defaultBreakpointSizes),
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

export const WithFramerBreakpoints = <
    T extends ComponentType<{ variant?: any; className?: string }>,
>({
    Component,
    variants: _breakpointsMap,
    ...rest
}: {
    Component: T
    variants: Record<UnframerBreakpoint, ComponentPropsWithoutRef<T>['variant']>
} & Omit<ComponentPropsWithoutRef<T>, 'variant'>): any => {
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
    if (isEmpty(_breakpointsMap)) {
        // @ts-ignore
        return <Component {...rest} />
    }
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
                    'unframer unframer-hidden',
                    `unframer-${breakpointName}`,
                ),
                variant: realVariant,
                breakpoints: [breakpointName],
            })
        }
    }
    const parts = [...variants.values()].map(
        ({ className, breakpoints, variant }, i) => {
            const shouldShow =
                !currentBreakpoint || breakpoints.includes(currentBreakpoint)
            if (!shouldShow) {
                return null
            }
            const c = classNames(className, rest.className)

            return (
                // @ts-ignore
                <Component
                    // LayoutGroup is used internally
                    layoutId={variant}
                    key={variant}
                    // layoutDependency={id}
                    // layoutId={id + variant}
                    // layoutId={breakpointName}
                    {...rest}
                    className={c}
                    variant={variant as any}
                />
            )
        },
    )
    parts.push(<DebugUnframerVersion key='debug-unframer-version' />)

    return parts
}

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

import React from 'react'
import {
    // @ts-ignore
    CustomCursorHost,
    // @ts-ignore
    FetchClientProvider,
    // @ts-ignore
    FormContext,
    // @ts-ignore
    FramerLink as Link,
    // @ts-ignore
    LocaleInfoContext,
} from './framer.js'

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

function isRelativeLink(url) {
    if (!url) {
        return false
    }
    return url?.startsWith?.('/') || url?.startsWith?.('#')
}
export function AdaptedLink({
    href,
    nodeId,
    openInNewTab,
    smoothScroll,
    children,
    ...rest
}) {
    const context = useContext(unframerContext)
    let onClick =
        context.navigate && !openInNewTab
            ? (e) => {
                  if (!context.navigate) return
                  const href = e.currentTarget?.getAttribute('href')
                  if (!href) return
                  e.preventDefault()
                  if (rest.onClick) rest.onClick(e)
                  context.navigate(href)
              }
            : null
    const onlyForFramer = { children, nodeId, openInNewTab, smoothScroll }
    const routes = React.useContext(routesContext)
    const webPageId = href?.webPageId as string
    const pathVariables = href?.pathVariables as Record<string, string>
    const route = routes?.[webPageId]
    const target = openInNewTab ? '_blank' : undefined
    // console.log({ href, pathVariables, path: route?.path, ...rest })
    if (isRelativeLink(href)) {
        return React.cloneElement(children, { ...rest, onClick, href, target })
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
    if (isRelativeLink(path)) {
        return React.cloneElement(children, {
            ...rest,
            onClick,
            href: path,
            target,
        })
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

const isFunction = (value: any): value is Function => {
    return typeof value === 'function'
}

var framerCSSMarker = 'data-framer-css-ssr'

/**
 * Add Unframer debug information to debug websites using Unframer
 */
function DebugUnframerVersion() {
    return (
        <details style={{ display: 'none' }}>
            Using{' '}
            <a href='https://unframer.co' className=''>
                Framer React Export
            </a>{' '}
            version {version}
        </details>
    )
}
function isEmpty(obj: Record<any, any>) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false
        }
    }
    return true
}

type UnframerProviderProps = {
    navigate?: (url: string) => void
    children: React.ReactNode
}

const unframerContext = createContext<Partial<UnframerProviderProps>>({
    navigate: undefined,
})

export function UnframerProvider(props: UnframerProviderProps) {
    return (
        <unframerContext.Provider value={props}>
            {props.children}
        </unframerContext.Provider>
    )
}
