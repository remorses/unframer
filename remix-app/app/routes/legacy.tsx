'use client'

import 'nextjs-app/src/framer/styles.css'
import {
    AnimatePresence,
    MotionConfig,
    MotionConfigContext,
    PageRoot,
} from 'unframer'

import Logos from 'nextjs-app/src/framer/logos'
import Menus from 'nextjs-app/src/framer/menus'
import Test from 'nextjs-app/src/framer/testimonials'
import Comp from 'nextjs-app/src/framer/fylo'
import FullPage from 'nextjs-app/src/framer/full-page'
import FramerNav from 'nextjs-app/src/framer/framerNav'
import Hero from 'nextjs-app/src/framer/hero'
import MenuOverlay from 'nextjs-app/src/framer/menu-overlay'
import Collection from 'nextjs-app/src/framer/collection'
import Card from 'nextjs-app/src/framer/card'
import { useLoaderData } from 'react-router'
import PluginComponentTestFramerComponent from '../../framer-canvas-pages/plugin-component-test'

export function loader() {
    return {}
}

export default function Home() {
    const {} = useLoaderData() as any
    return (
        <>
            {/* <PageRoot routeId='sdf' localeId='it-it' RootComponent='div' /> */}

            <div className='bg-gray-100 text-gray-800 flex flex-col items-center p-10'>
                <PluginComponentTestFramerComponent />
                <div className=' flex z-10 w-full absolute flex-col items-center'>
                    <Menus  className=' mx-auto' />
                </div>
                <FramerNav className='!w-full' />
                <div className='pt-[200px]'></div>
                <Hero.Responsive
                    variants={{ base: 'mobile', lg: 'Variant 1' }}
                    className='bg-gray-800 !p-14'
                />

                <MenuOverlay />

                <div className='relative h-[500px]'>
                    <Test.Responsive
                        variants={{
                            lg: 'Desktop',
                            md: 'Tablet',
                            base: 'Mobile',
                        }}
                    />
                </div>

                {/* <FullPage.Responsive
                    variants={{
                        lg: 'Desktop',
                        md: 'Tablet',
                        base: 'Tablet',
                    }}
                /> */}
                {/* <Comp /> */}
                <Collection />
                <Card />

                <div className='pt-[200px]'></div>
            </div>
        </>
    )
}
