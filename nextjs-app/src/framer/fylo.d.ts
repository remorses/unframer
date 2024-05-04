import * as React from "react"

import { UnframerBreakpoint } from "unframer"

export interface Props {
    children?: React.ReactNode
    style?: React.CSSProperties
    className?: string
    id?: string
    width?: any
    height?: any
    layoutId?: string
    "variant"?: 'Variant B-2' | 'Variant A-1' | 'Variant A-2' | 'Variant A-3' | 'Variant A-4' | 'Variant B-1' | 'Variant B-3' | 'Variant B-3' | 'Variant B-7' | 'Variant B-8' | 'Variant C-1' | 'Variant C-2' | 'Variant C-3' | 'Variant C-4' | 'Variant C-5' | 'Variant C-6' | 'Variant D-1' | 'Variant D-2' | 'Variant D-3' | 'Variant D-4' | 'Variant E-1' | 'Variant E-2' | 'Variant E-3' | 'Variant E-4' | 'Variant E-5' | 'Variant E-6' | 'Variant E-7' | 'Variant F-1' | 'Variant F-2' | 'Variant F-3' | 'Variant F-4' | 'Variant F-5' | 'Variant B-6'
}

const FyloFramerComponent = (props: Props) => any

type VariantsMap = Partial<Record<UnframerBreakpoint, Props['variant']>> & { base: Props['variant'] }

FyloFramerComponent.Responsive = (props: Omit<Props, 'variant'> & {variants: VariantsMap}) => any

export default FyloFramerComponent

