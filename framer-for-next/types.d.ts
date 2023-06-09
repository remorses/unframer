declare module 'https://framer.com/*' {
    import * as React from 'react'
    const component: React.ComponentType<{
        className?: string
        style?: React.CSSProperties
        id?: string
        width?: any
        height?: any
        layoutId?: string
        variant?: string
    }> & { fonts: any; propertyControls: any; defaultProps: any }
    export const __FramerMetadata__: any
    export default component
}
