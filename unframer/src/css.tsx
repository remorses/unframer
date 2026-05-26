import React from 'react'
import { withCSS as withCSSOriginal } from './framer.js'

export * from './css-core.js'

/**
 * Custom withCSS function that restores the previous behavior
 * of rendering inline style tags instead of using cssCollector
 */
export function withCSS(
    Component: any,
    escapedCSS: any,
    componentSerializationId?: string,
) {
    const framerCSSMarker = 'data-framer-css-ssr'

    if (typeof window !== 'undefined' && typeof window.document !== 'undefined')
        return withCSSOriginal(Component, escapedCSS, componentSerializationId || '')

    return (props: any) => {
        const isBrowser =
            typeof window !== 'undefined' &&
            typeof window.document !== 'undefined'

        if (!isBrowser) {
            const id = componentSerializationId
            const cssContent =
                typeof escapedCSS === 'function'
                    ? escapedCSS('EXPORT')
                    : Array.isArray(escapedCSS)
                      ? escapedCSS.join('\n')
                      : escapedCSS

            return (
                <>
                    <style
                        {...{ [framerCSSMarker]: true }}
                        data-framer-component={id}
                        dangerouslySetInnerHTML={{ __html: cssContent }}
                    />
                    <Component {...props} />
                </>
            )
        }

        return <Component {...props} />
    }
}
