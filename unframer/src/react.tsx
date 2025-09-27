'use client'
import { combinedCSSRules, withCSS as originalWithCSS } from './framer.js'
import { preconnect, prefetchDNS } from 'react-dom'

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

function Hints() {
    prefetchDNS('https://fonts.gstatic.com')
    preconnect('https://fonts.gstatic.com')
    preconnect('https://framerusercontent.com')
    return null // nothing to render
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
function removeInactiveUnframerHiddenElements() {
    // Remove all elements with the 'unframer-hidden' class that are not for the current breakpoint
    const windowWidth = window.innerWidth
    const activeBreakpoint = getBreakpointNameFromWindowWidth(windowWidth)
    const activeClass = activeBreakpoint ? `unframer-${activeBreakpoint}` : null

    console.log('Active unframer breakpoint class:', activeClass)

    document.querySelectorAll('.unframer-hidden').forEach((el) => {
        // Merge: Only remove the element itself if it has 'unframer-hidden' and does not match the current breakpoint's class.
        if (
            el.classList.contains('unframer-hidden') &&
            activeClass &&
            !el.classList.contains(activeClass)
        ) {
            el.parentNode?.removeChild(el)
        }
    })
}

if (typeof window !== 'undefined') {
    removeInactiveUnframerHiddenElements()
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
            if (typeof window !== 'undefined') {
                const breakpoint = getBreakpointNameFromWindowWidth(
                    window.innerWidth,
                )
                return breakpoint
            }

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
                    suppressHydrationWarning
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

function isMailto(url) {
    if (!url) {
        return false
    }
    return url?.startsWith?.('mailto:')
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
    let navigateClientSide =
        context.navigate && !openInNewTab
            ? (e) => {
                  if (!context.navigate) return
                  const href = e.currentTarget?.getAttribute('href')
                  if (!href || !isRelativeLink(href)) return
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
    if (isRelativeLink(href) || isMailto(href)) {
        return (
            <>
                {React.cloneElement(children, {
                    ...rest,
                    suppressHydrationWarning: true,
                    onClick: navigateClientSide,
                    href,
                    target,
                })}
            </>
        )
    }
    if (!webPageId) {
        return (
            <Link
                suppressHydrationWarning={true}
                href={href}
                {...rest}
                {...onlyForFramer}
            />
        )
    }

    if (!route || !route.path) {
        return (
            <Link
                suppressHydrationWarning={true}
                href={href}
                {...rest}
                {...onlyForFramer}
            />
        )
    }
    let resolvedPath = route.path
    if (pathVariables) {
        resolvedPath = replacePathParams(resolvedPath, pathVariables)
    }
    if (isRelativeLink(resolvedPath) || isMailto(href)) {
        return (
            <>
                {React.cloneElement(children, {
                    ...rest,
                    suppressHydrationWarning: true,
                    onClick: navigateClientSide,
                    href: resolvedPath,
                    target,
                })}
            </>
        )
    }

    return (
        <Link
            href={resolvedPath}
            suppressHydrationWarning={true}
            {...rest}
            {...onlyForFramer}
        />
    )
}

export function ContextProviders({
    locale: locale_,
    children,
    framerSiteId,
    routes,
    // collectionUtils,
    locales,
}) {
    const context = useContext(unframerContext)
    const locale = locale_ || context?.locale
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
            <Hints />
            <CustomCursorHost>
                <FormContext.Provider value={framerSiteId}>
                    <LocaleInfoContext value={localeInfo}>
                        <routesContext.Provider value={routes}>
                            {children}
                        </routesContext.Provider>
                    </LocaleInfoContext>
                </FormContext.Provider>
            </CustomCursorHost>
        </FetchClientProvider>
    )
}

/**
 * Add Unframer debug information to debug websites using Unframer
 */
function DebugUnframerVersion() {
    return null
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
    /**
     * Optional function to handle client-side navigation.
     * You can provide a navigation function such as one from React Router's `useNavigate`
     * or Next.js's `useRouter().push`, for example:
     *
     * ```tsx
     * // Using React Router:
     * import { useNavigate } from "react-router-dom";
     * const navigate = useNavigate();
     *
     * <UnframerProvider navigate={navigate}>...</UnframerProvider>
     *
     * // Using Next.js:
     * import { useRouter } from "next/navigation";
     * const router = useRouter();
     * const navigate = (url: string) => router.push(url);
     *
     * <UnframerProvider navigate={navigate}>...</UnframerProvider>
     * ```
     */
    navigate?: (url: string) => void
    /**
     * The locale slug for the language, e.g. "de" for German, "it" for Italian, etc.
     * This should be a short identifier (typically two or more lowercase letters)
     * that uniquely identifies the active language/region. Used for language resolution,
     * translations, routing, etc.
     * Examples:
     *   - "en" for English
     *   - "de" for German
     *   - "it" for Italian
     *   - "fr" for French
     *   - "es" for Spanish
     */
    locale?: string
    children: React.ReactNode
}

const unframerContext = createContext<Partial<UnframerProviderProps>>({
    navigate: undefined,
})

export function UnframerProvider(props: UnframerProviderProps) {
    return (
        <unframerContext.Provider value={props}>
            <Hints />
            {props.children}
        </unframerContext.Provider>
    )
}
