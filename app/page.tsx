import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
export default async function Home() {
    const { userId } = await auth()
    const generateUUID = () => {
        const newId = uuidv4()
        return newId
    }
    let href = userId ? `/chat/${generateUUID()}` : '/new-user'
    return (
        <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
            <div className="w-full max-w-[600px] mx-auto">
                <h1 className="text-6xl mb-4">Chatbot assignment</h1>
                <p className="text-2xl text-white/60 mb-4">by Job Seow</p>
                <div>
                    <Link href={href}>
                        <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
                            Get started
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
