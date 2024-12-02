import { analyze } from '@/utils/ai'
import {
    addMessage,
    getMessagesByUserEmail,
    getMessagesByChatIdAndUserEmail,
} from '@/utils/db'
import { NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'

export const POST = async (request: any) => {
    const user = await currentUser()
    const { content, chatId } = await request.json()
    let messageId = `${user.id}-${Date.now()}`

    await addMessage(
        messageId,
        user?.primaryEmailAddress?.emailAddress,
        content,
        'user',
        chatId
    )
    const previousMessages = await getMessagesByChatIdAndUserEmail(
        chatId,
        user?.primaryEmailAddress?.emailAddress
    )
    const context = previousMessages?.map((message) => {
        return {
            content: message?.messageContent?.M.content.S,
            role: message?.messageContent?.M.role.S,
        }
    })
    const analysisResult = await analyze(context, {
        role: 'user',
        content: content,
    })
    const { refusal, ...analysisResultToSave } = analysisResult.message
    messageId = `${user.id}-${Date.now()}`
    await addMessage(
        messageId,
        user?.primaryEmailAddress?.emailAddress,
        analysisResultToSave?.content,
        'assistant',
        chatId
    )
    return NextResponse.json({
        data: previousMessages,
    })
}

export const GET = async () => {
    const user = await currentUser()
    if (user) {
        const data = await getMessagesByUserEmail(
            user?.primaryEmailAddress?.emailAddress
        )

        return NextResponse.json({ data: data })
    }
}
