'use client'

import {
    FramerStyles,
    WithFramerBreakpoints,
} from 'installable-framer/dist/react'
import Logos from '@/framer/logos'
import Menus from '@/framer/menus'

export default function Home() {
    return (
        <div className='bg-gray-100 text-gray-800 flex flex-col items-center p-10'>
            <FramerStyles Components={[Logos]} />

            <div className='pt-[500px]'>
                <Menus />
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
        </div>
    )
}
