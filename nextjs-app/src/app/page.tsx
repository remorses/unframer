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
                    variants={{
                        Desktop: 'Variant 1',
                        Tablet: 'mobile',
                        Mobile: 'mobile',
                    }}
                    className='bg-gray-800 !p-14'
                />
                <AnimatePresence>
                    <MenuOverlay />
                </AnimatePresence>
                <FramerStyles Components={[Logos, Comp]} />
                <div className='relative h-[500px]'>
                    <Test.Responsive
                        variants={{
                            Desktop: 'Desktop',
                            Tablet: 'Tablet',
                            Mobile: 'Mobile',
                        }}
                    />
                </div>
                <FullPage.Responsive
                    variants={{
                        Desktop: 'Desktop',
                        Tablet: 'Tablet',
                        Mobile: 'Tablet',
                    }}
                />
                <Comp />
                <Collection />

                <div className='pt-[200px]'></div>
            </div>
        </>
    )
}
