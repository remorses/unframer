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
    "variant"?: 'Desktop 1' | 'Tablet 1' | 'Mobile 1' | 'Mobile 2'
    "buyEvent"?: Function
}

const Component = (props: Props) => any

type VariantsMap = Partial<Record<UnframerBreakpoint, Props['variant']>> & { base: Props['variant'] }

Component.Responsive = (props: Omit<Props, 'variant'> & {variants: VariantsMap}) => any

export default Component

