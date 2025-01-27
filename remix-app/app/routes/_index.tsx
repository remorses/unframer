'use client'

import 'nextjs-app/src/framer-simplicity/styles.css'

import { useLoaderData } from '@remix-run/react'
import { Home } from 'nextjs-app/src/app/page'

export function loader() {
    return {}
}

export default function Page() {
    const {} = useLoaderData() as any
    return <Home />
}
