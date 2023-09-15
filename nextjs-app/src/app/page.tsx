'use client'
import 'framer-for-next/styles.css'

import Cultrure from 'https://framer.com/m/cultrure-b10L.js#x'
import Avatar from 'framer-avatar'
import MegaMenu from 'https://framer.com/m/Mega-Menu-2wT3.js@W0zNsrcZ2WAwVuzt0BCl'
import LogoTicker from 'https://framer.com/m/Logo-Ticker-1CEq.js@YtVlixDzOkypVBs3Dpav'
import {
    FramerStyles,
    WithFramerBreakpoints,
} from 'installable-framer/dist/react'
import Logos from '@/framer/logos'

console.log('Logos', Logos)

export default function Home() {
    return (
        <div className='bg-gray-100 text-gray-800 flex flex-col items-center p-10'>
            <FramerStyles Components={[Cultrure]} />
            <div className='z-50 fixed top-12 '>
                <MegaMenu />
            </div>
            <div className='pt-[500px]'>
                <WithFramerBreakpoints
                    variants={{
                        Desktop: 'Logo Ticker',
                        Tablet: 'Logo Ticker - M',
                        Mobile: 'Logo Ticker - M',
                    }}
                    Component={Logos}
                    // style={{ width: '100%' }}
                ></WithFramerBreakpoints>
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
            <Avatar radius={10} image={{ src: '/next.svg' }} />
            <div className='max-w-[1200px] w-full'>
                <WithFramerBreakpoints
                    variants={{
                        Desktop: 'desktop',
                        Tablet: 'tablet',
                        Mobile: 'mobile',
                    }}
                    Component={Cultrure}
                    style={{ width: '100%' }}
                ></WithFramerBreakpoints>
            </div>
            <div className='max-w-[1200px] w-full'>
                <WithFramerBreakpoints
                    Component={LogoTicker}
                    variants={{
                        Desktop: 'Primary',
                        Tablet: 'Logo Ticker - M',
                        Mobile: 'Logo Ticker - M',
                    }}
                ></WithFramerBreakpoints>
            </div>
        </div>
    )
}
