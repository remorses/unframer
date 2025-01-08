import { json } from '@remix-run/node'

import { useLoaderData } from '@remix-run/react'
import SidebarFramerComponent from '../../bug/sidebar'
import '../../bug/styles.css'

export async function loader() {
    return json({})
}

export default function BugRoute() {
    const data = useLoaderData<typeof loader>()

    return (
        <div>
            <SidebarFramerComponent />
        </div>
    )
}
