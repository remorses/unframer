'use client'

import '../../framer-intl/styles.css'
import { PageRoot } from 'unframer'
import Hero from '../../framer-intl/hero-section'
import Navigation from '../../framer-intl/docs/navigation'

import { useLoaderData } from '@remix-run/react'
import { Component, Fragment } from 'react'

export function loader() {
    return {}
}

type CollectionUtils = Record<
    string,
    () => Promise<{
        getSlugByRecordId: (
            recordId: string,
            locale?: { id: string; code: string; name: string; slug: string },
        ) => Promise<string | undefined>
        getRecordIdBySlug: (
            slug: string,
            locale: { id: string; code: string; name: string; slug: string },
        ) => Promise<string | undefined>
    }>
>

export default function Home() {
    const {} = useLoaderData() as any
    return (
        <div className='dark'>
            <div className=' dark:bg-gray-900 '>
                <PageRoot
                    {...{
                        isWebsite: true,
                        routeId: 'x',
                        routes: {
                            x: {
                                elements: {},
                                page: <Hero />,
                                path: '/',
                            },
                        },
                        enableImproveInpDuringHydration: true,
                        // framerSiteId:
                        //     'f667fc580d8d9346cf49d633d75940b95292fa43c24dd7765c9a175ec73f7405',
                        notFoundPage: 'div',
                        // isReducedMotion: true,
                        localeId: 'M_lnJlsvf',
                        // locales: [
                        //     {
                        //         code: 'en',
                        //         id: 'default',
                        //         name: 'English',
                        //         slug: 'en',
                        //     },
                        //     {
                        //         code: 'it-IT',
                        //         id: 'M_lnJlsvf',
                        //         name: 'Italian',
                        //         slug: 'it',
                        //     },
                        // ],
                        preserveQueryParams: true,
                        RootComponent: Fragment,
                    }}
                />
                <Hero locale='it-IT' />
                <Navigation locale='it-IT' />
                {/* <Component locale='it' /> */}
            </div>
        </div>
    )
}
