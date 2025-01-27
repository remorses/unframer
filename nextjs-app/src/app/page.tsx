'use client'

import '@/framer/styles.css'

import Card from '@/framer/card'
import Collection from '@/framer/collection'
import Footer from '@/framer/footer'
import Form from '@/framer/form'
import Nav from '@/framer/framerNav'
import GrowthSpaceMenu from '@/framer/GrowthSpaceMenu'
import Hero from '@/framer/hero'
import InputFramerComponent from '@/framer/input'
import MenuOverlay from '@/framer/menu-overlay'
import Menus from '@/framer/menus'
import Test from '@/framer/testimonials'
import SectionHeroFramerComponent from '@/framer-simplicity/section-hero'
import SectionLogosFramerComponent from '@/framer-simplicity/section-logos'
import SectionHowItWorksFramerComponent from '@/framer-simplicity/section-how-it-works'
import SectionLargeTestimonialFramerComponent from '@/framer-simplicity/section-large-testimonial'
import SectionFeaturesFramerComponent from '@/framer-simplicity/section-features'
import SectionPricingFramerComponent from '@/framer-simplicity/section-pricing'
import SectionFrequentlyAskedQuestionsFramerComponent from '@/framer-simplicity/section-frequently-asked-questions'
import SectionCallToActionFramerComponent from '@/framer-simplicity/section-call-to-action'
import SectionFooterFramerComponent from '@/framer-simplicity/section-footer'
import SectionTestimonialsFramerComponent from '@/framer-simplicity/section-testimonials'

export default function Page() {
    return <Home />
}

function Home() {
    return (
        <div>
            <div className='text-gray-900 flex flex-col items-center p-10'>
                <SectionHeroFramerComponent.Responsive className='w-full' />
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
        </div>
    )
}
