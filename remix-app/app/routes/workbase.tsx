'use client'

import '../../workbase-bugs/styles.css'

import { useLoaderData } from '@remix-run/react'
import TrainingsBreadcrumbsFramerComponent from 'workbase-bugs/trainings-breadcrumbs'
import TrainingsCollectionFramerComponent from 'workbase-bugs/trainings-collection'
import TrainingsHeroFramerComponent from 'workbase-bugs/trainings-hero'
import TrainingsLessonFramerComponent from 'workbase-bugs/trainings-lesson'

export function loader() {
    return {}
}

export default function Home() {
    const {} = useLoaderData() as any
    return (
        <div className='dark'>
            <div className=' dark:bg-gray-900 '>
                <TrainingsHeroFramerComponent />
                <TrainingsBreadcrumbsFramerComponent />
                <TrainingsLessonFramerComponent variant='Small' />
                <TrainingsCollectionFramerComponent />
            </div>
        </div>
    )
}
