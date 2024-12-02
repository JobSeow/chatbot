import { getMessagesByChatId } from '@/utils/db'
import { NextResponse } from 'next/server'

export const GET = async (req, { params }) => {
    const { id } = await params

    if (id) {
        const data = await getMessagesByChatId(id)

        return NextResponse.json({ data: data })
    }
}
