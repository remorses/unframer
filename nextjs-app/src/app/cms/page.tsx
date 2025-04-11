'use client'

import DocsCmsWithFiltersFramerComponent from '@/framer-simplicity/docs-cms-with-filters'
import '@/framer-simplicity/styles.css'

export default function Page() {
    return <Home />
}

function Home() {
    return (
        <div className='bg-black flex flex-col items-center'>
            <DocsCmsWithFiltersFramerComponent />

        </div>
    )



}
