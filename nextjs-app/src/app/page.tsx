'use client'

import { FramerStyles, WithFramerBreakpoints } from 'unframer/dist/react'
import { AnimatePresence } from 'unframer'

import Logos from '@/framer/logos'
import Menus from '@/framer/menus'
import Test from '@/framer/testimonials'
import Comp from '@/framer/fylo'
import FullPage from '@/framer/full-page'
import Hero from '@/framer/hero'
import MenuOverlay from '@/framer/menu-overlay'
import Collection from '@/framer/collection'
import Card from '@/framer/card'

export default function Home() {
    return (
        <>
            {/* <PageRoot routeId='sdf' localeId='it-it' RootComponent='div' /> */}

            <div className='bg-gray-100 text-gray-800 flex flex-col items-center p-10'>
                <div className=' flex z-10 w-full absolute flex-col items-center'>
                    <Menus className=' mx-auto' />
                </div>
                <div className='pt-[200px]'></div>
                <Hero.Responsive
                    variants={{ base: 'mobile', lg: 'Variant 1' }}
                    className='bg-gray-800 !p-14'
                />
                <AnimatePresence>
                    <MenuOverlay />
                </AnimatePresence>
                <FramerStyles Components={[Logos, Comp]} />
                <div className='relative h-[500px]'>
                    <Test.Responsive
                        variants={{
                            lg: 'Desktop',
                            md: 'Tablet',
                            base: 'Mobile',
                        }}
                    />
                </div>
                <FullPage.Responsive
                    variants={{
                        lg: 'Desktop',
                        md: 'Tablet',
                        base: 'Tablet',
                    }}
                />
                <Comp />
                <Collection />
                <Card />

                <div className='pt-[200px]'></div>
            </div>
        </>
    )
}
