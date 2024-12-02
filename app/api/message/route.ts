import { analyze } from '@/utils/ai'
import {
    addMessage,
    getMessagesByUserId,
    getMessagesByChatId,
} from '@/utils/db'
import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'

export const POST = async (request: any) => {
    const { userId } = await auth()
    const { content, chatId } = await request.json()
    let messageId = `${userId}-${Date.now()}`

    await addMessage(messageId, userId, content, 'user', chatId)
    const previousMessages = await getMessagesByChatId(chatId)
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
    messageId = `${userId}-${Date.now()}`
    await addMessage(
        messageId,
        userId,
        analysisResultToSave?.content,
        'assistant',
        chatId
    )
    return NextResponse.json({
        data: previousMessages,
    })
}

export const GET = async () => {
    const { userId } = await auth()
    if (userId) {
        const data = await getMessagesByUserId(userId)

        return NextResponse.json({ data: data })
    }
}
