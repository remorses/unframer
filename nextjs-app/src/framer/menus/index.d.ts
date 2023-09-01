import * as React from "react"
export interface Props {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
  id?: string
  width?: any
  height?: any
  layoutId?: string
  "variant"?: 'Normal' | 'Feature' | 'Learn' | 'Why us' | 'Our team'
}
export default function(props: Props): any
