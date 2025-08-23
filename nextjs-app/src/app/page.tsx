'use client'
import { useRouter } from 'next/navigation'
// import LogosFramerComponent from '@/framer-unchatgpt/logos'
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
import { UnframerProvider } from 'unframer'

export default function Page() {
    return <Home />
}

function Home() {

    return (
        <UnframerProvider
            // navigate={(x) => {
            //     console.log(`using client navigation for`, x)
            //     // router.push(x)
            // }}
        >
            <div className='bg-black flex flex-col items-center'>
                <NavigationFramerComponent.Responsive     />

                <SectionHeroFramerComponent.Responsive  />

                <SectionLogosFramerComponent.Responsive />
                <SectionHowItWorksFramerComponent.Responsive />
                <SectionLargeTestimonialFramerComponent.Responsive />
                <SectionFeaturesFramerComponent.Responsive />
                <SectionPricingFramerComponent.Responsive />
                <SectionTestimonialsFramerComponent.Responsive />
                <SectionFrequentlyAskedQuestionsFramerComponent.Responsive />
                <SectionCallToActionFramerComponent.Responsive />
                {/*<LogosFramerComponent.Responsive />*/}
                <SectionFooterFramerComponent.Responsive />
                <SectionPricingFramerComponent  />
            </div>
        </UnframerProvider>
    )
}
