import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
export default async function Home() {
    const {userId} = await auth()
    let href = userId? '/journal':'/new-user'
    return (
        <div className="w-screen h-screen  justify-center items-center">
            <div>HOMEMMEE</div>
            <Link href={href}>
                test
            </Link>
        </div>
    )
}
