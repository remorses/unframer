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
    "variant"?: '1' | '2' | 'Rani' | 'RaniHistory' | '3'
    "on2"?: Function
    "on1"?: Function
    "on3"?: Function
}

const GrowthSpaceMenuFramerComponent = (props: Props) => any

type VariantsMap = Partial<Record<UnframerBreakpoint, Props['variant']>> & { base: Props['variant'] }

GrowthSpaceMenuFramerComponent.Responsive = (props: Omit<Props, 'variant'> & {variants: VariantsMap}) => any

export default GrowthSpaceMenuFramerComponent
