'use client'

import { FramerStyles, WithFramerBreakpoints } from 'unframer/dist/react'
import { PageRoot } from 'unframer/dist/framer'
import Logos from '@/framer/logos'
import Menus from '@/framer/menus'
import Test from '@/framer/testimonials'
import Comp from '@/framer/fylo'
import FullPage from '@/framer/full-page'
import MenuOverlay from '@/framer/menu-overlay'

export default function Home() {
    return (
        <>
            {/* <PageRoot routeId='sdf' localeId='it-it' RootComponent='div' /> */}
            <div className='bg-gray-100 text-gray-800 flex flex-col items-center p-10'>
                <MenuOverlay />
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
                <div className='pt-[500px]'>
                    <Menus />

                    <Logos.Responsive
                        variants={{
                            Desktop: 'Logo Ticker',
                            Tablet: 'Logo Ticker - M',
                            Mobile: 'Logo Ticker - M',
                        }}
                    />
                    {/* <Logos variant='Logo Ticker - M' /> */}
                </div>
                <div className='pt-[200px]'></div>
            </div>
        </>
    )
}
