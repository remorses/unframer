'use client'

import '@/framer/styles.css'
import { AnimatePresence, PageRoot } from 'unframer'

import Logos from '@/framer/logos'
import Nav from '@/framer/framerNav'
import Form from '@/framer/form'
import Menus from '@/framer/menus'
import Test from '@/framer/testimonials'
import Comp from '@/framer/fylo'
import FullPage from '@/framer/full-page'
import Hero from '@/framer/hero'
import MenuOverlay from '@/framer/menu-overlay'
import Collection from '@/framer/collection'
import Card from '@/framer/card'
import { use } from 'react'

const proxyThatLogsProps = (original) =>
    new Proxy(original, {
        get(target, prop, receiver) {
            console.log('Getting prop', prop)
            return original[prop]
        },
    })

export default function Page() {
    const siteId = use(sha256Encode('MOHUmEgItazhBLBtW6H0'))
    return (
        <PageRoot
            framerSiteId={siteId}
            routeId='index'
            localeId='it-it'
            routes={{
                // _index: proxyThatLogsProps,
                index: proxyThatLogsProps({ page: <Home />, path: '/' }),
            }}
            RootComponent={'div'}
            isWebsite={true}
        />
    )
}

export function Home() {
    return (
        <div>
            <div className='bg-gray-100 text-gray-800 flex flex-col items-center p-10'>
                <div className='relative w-full flex flex-col'>
                    <Nav.Responsive
                        className='!w-full'
                        variants={{ base: 'Phone', lg: 'Desktop' }}
                    />
                </div>
                <div className=' top-[200px] flex z-10 w-full absolute flex-col items-center'>
                    <Menus className=' mx-auto' />
                </div>
                <div className='pt-[300px]'></div>
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

                <Collection />
                <Card />
                <Form />
                <div className='pt-[200px]'></div>
            </div>
        </div>
    )
}

async function sha256Encode(text: string) {
    const utf8 = new TextEncoder().encode(text)
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('')
    return hashHex
}
