'use client'
import 'framer-for-next/styles.css'

import { FontsForComponents, WithFramerBreakpoints } from 'framer-for-next/src'
import Cultrure from 'https://framer.com/m/cultrure-b10L.js#x'

export default function Home() {
    return (
        <div className='bg-white text-gray-800 flex flex-col items-center p-10'>
            <FontsForComponents Components={[Cultrure]} />
            <div className='max-w-[1200px] w-full'>
                <WithFramerBreakpoints
                    breakpoints={{
                        Desktop: 'desktop',
                        Tablet: 'tablet',
                        Mobile: 'mobile',
                    }}
                >
                    <Cultrure style={{ width: '100%' }} />
                </WithFramerBreakpoints>
            </div>
        </div>
    )
}
