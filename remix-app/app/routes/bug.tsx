import { useLoaderData } from 'react-router'
import SidebarFramerComponent from '../../bug/sidebar'
import '../../bug/styles.css'

export async function loader() {
    return {}
}

export default function BugRoute() {
    const data = useLoaderData<typeof loader>()

    return (
        <div>
            <SidebarFramerComponent />
        </div>
    )
}
