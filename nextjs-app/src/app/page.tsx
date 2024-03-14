'use client'

import {
    FramerStyles,
    WithFramerBreakpoints,
} from 'installable-framer/dist/react'
import Logos from '@/framer/logos'
import Menus from '@/framer/menus'
import Test from '@/framer/testimonials'

export default function Home() {
    return (
        <div className='bg-gray-100 text-gray-800 flex flex-col items-center p-10'>
            <FramerStyles Components={[Logos]} />
            <div className='relative flex w-full h-[400px]'>
                <Test variant='Desktop' height={400} width={500} className='' />
            </div>
            
            <div className='pt-[200px]'></div>
        </div>
    )
}
