'use client'

import '../../workbase-bugs/styles.css'

import { useLoaderData } from '@remix-run/react'
import InvoicesRowFramerComponent from 'workbase-bugs/invoices-row'

export function loader() {
    return {}
}

export default function Home() {
    const {} = useLoaderData() as any
    return (
        <div className='dark'>
            <div className=' dark:bg-gray-900 '>
                <InvoicesRowFramerComponent />
            </div>
        </div>
    )
}
