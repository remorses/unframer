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
    "variant"?: 'Desktop' | 'Tablet' | 'Mobile'
    "primaryCTAText"?: string
    "primaryCTALink"?: string
    "heroPreHeadingText"?: string
    "heroTitle"?: string
    "heroDescription"?: string
    "heroSocialProof"?: string
    "logosSocialProofText"?: string
    "valuePropIntroPreHeadingText"?: string
    "valuePropIntroTitle"?: string
    "valuePropIntroDescription"?: string
    "valueProp1PreHeadingText"?: string
    "valueProp1Title"?: string
    "valueProp1Description"?: string
    "valueProp2PreHeadingText"?: string
    "valueProp2Title"?: string
    "valueProp2Description"?: string
    "valueProp3PreHeadingText"?: string
    "valueProp3Title"?: string
    "valueProp3Description"?: string
    "howItWorksIntroTitle"?: string
    "howItWorks1PhosphorIcon"?: string
    "howItWorks1Title"?: string
    "howItWorks1Description"?: string
    "howItWorks2PhosphorIcon"?: string
    "howItWorks2Title"?: string
    "howItWorks2Description"?: string
    "howItWorks3PhosphorIcon"?: string
    "howItWorks3Title"?: string
    "howItWorks3Description"?: string
    "ctaSectionTitle"?: string
    "ctaSectionDescription"?: string
    "faqQuestion1"?: string
    "faqAnswer1"?: string
    "faqQuestion2"?: string
    "faqAnswer2"?: string
    "faqQuestion3"?: string
    "faqAnswer3"?: string
    "faqQuestion4"?: string
    "faqAnswer4"?: string
    "faqQuestion5"?: string
    "faqAnswer5"?: string
}

const Issue17FramerComponent = (props: Props) => any

type VariantsMap = Partial<Record<UnframerBreakpoint, Props['variant']>> & { base: Props['variant'] }

Issue17FramerComponent.Responsive = (props: Omit<Props, 'variant'> & {variants: VariantsMap}) => any

export default Issue17FramerComponent
