'use client'
import { combinedCSSRules } from 'framer'

export function FramerStyles({}) {
    return (
        <style hidden suppressHydrationWarning>
            {combinedCSSRules.join('\n')}
        </style>
    )
}
