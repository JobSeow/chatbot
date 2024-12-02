import { getMessagesByChatIdAndUserEmail } from '@/utils/db'
import { currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export const GET = async (req, { params }) => {
    const { id } = await params
    const user = await currentUser()
    if (id) {
        const data = await getMessagesByChatIdAndUserEmail(
            id,
            user?.primaryEmailAddress?.emailAddress
        )

        return NextResponse.json({ data: data })
    }
}
