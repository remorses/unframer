/* This file was generated by Unframer, do not edit manually */
import * as React from "react"

import { UnframerBreakpoint } from "unframer"

type Locale = 'it-IT'
export interface Props {
    children?: React.ReactNode
    locale?: Locale
    style?: React.CSSProperties
    className?: string
    id?: string
    width?: any
    height?: any
    layoutId?: string
    "variant"?: 'First' | 'Second' | 'Third' | 'Fourth'
    "click"?: Function
    "click2"?: Function
    "click3"?: Function
    "click4"?: Function
    "variant"?: 'Desktop' | 'Mobile'
}

const CustomerStoriesFramerComponent = (props: Props) => any

type VariantsMap = Partial<Record<UnframerBreakpoint, Props['variant']>> & { base: Props['variant'] }

CustomerStoriesFramerComponent.Responsive = (props: Omit<Props, 'variant'> & {variants: VariantsMap}) => any

export default CustomerStoriesFramerComponent
