'use client'

import NavigationFramerComponent from '../framer-simplicity/navigation/navigation'
import SectionCallToActionFramerComponent from '../framer-simplicity/section-call-to-action'
import SectionFeaturesFramerComponent from '../framer-simplicity/section-features'
import SectionFooterFramerComponent from '../framer-simplicity/section-footer'
import SectionFrequentlyAskedQuestionsFramerComponent from '../framer-simplicity/section-frequently-asked-questions'
import SectionHeroFramerComponent from '../framer-simplicity/section-hero'
import SectionHowItWorksFramerComponent from '../framer-simplicity/section-how-it-works'
import SectionLargeTestimonialFramerComponent from '../framer-simplicity/section-large-testimonial'
import SectionLogosFramerComponent from '../framer-simplicity/section-logos'
import SectionPricingFramerComponent from '../framer-simplicity/section-pricing'
import SectionTestimonialsFramerComponent from '../framer-simplicity/section-testimonials'
import '../framer-simplicity/styles.css'

export default function Page() {
    return <Home />
}

function Home() {
    return (
        <div className='bg-black flex flex-col items-center'>
            <NavigationFramerComponent.Responsive />

            <SectionHeroFramerComponent.Responsive />

            <SectionLogosFramerComponent.Responsive />
            <SectionHowItWorksFramerComponent.Responsive />
            <SectionLargeTestimonialFramerComponent.Responsive />
            <SectionFeaturesFramerComponent.Responsive />
            <SectionPricingFramerComponent.Responsive />
            <SectionTestimonialsFramerComponent.Responsive />
            <SectionFrequentlyAskedQuestionsFramerComponent.Responsive />
            <SectionCallToActionFramerComponent.Responsive />
            <SectionFooterFramerComponent.Responsive />
        </div>
    )
}
