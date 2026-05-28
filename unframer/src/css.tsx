import React from 'react'
import { withCSS as withCSSOriginal } from './framer.js'

export * from './css-core.js'

/**
 * Custom withCSS that renders inline <style> tags for SSR instead of using
 * framer's cssCollector. The tree structure must be identical on server and
 * client so React's hydration and ID generation (React Aria, useId, etc.)
 * stay consistent. Both sides render: Fragment > [style, Component].
 * On the client the style content is empty because framer.js injects CSS
 * via useInsertionEffect; suppressHydrationWarning covers the content diff.
 */
export function withCSS(
    Component: any,
    escapedCSS: any,
    componentSerializationId?: string,
) {
    const framerCSSMarker = 'data-framer-css-ssr'
    const id = componentSerializationId

    return (props: any) => {
        const isBrowser =
            typeof window !== 'undefined' &&
            typeof window.document !== 'undefined'

        const cssContent = (() => {
            if (isBrowser) {
                return ''
            }
            if (typeof escapedCSS === 'function') {
                return escapedCSS('EXPORT')
            }
            if (Array.isArray(escapedCSS)) {
                return escapedCSS.join('\n')
            }
            return escapedCSS
        })()

        return (
            <>
                <style
                    suppressHydrationWarning
                    {...{ [framerCSSMarker]: true }}
                    data-framer-component={id}
                    dangerouslySetInnerHTML={{ __html: cssContent }}
                    hidden
                />
                <Component {...props} />
            </>
        )
    }
}
