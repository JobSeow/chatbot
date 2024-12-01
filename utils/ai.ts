import OpenAI from 'openai'
type Message = {
    role: 'user' | 'system' | 'assistant' // Adjust roles as needed
    content: string
}

export const analyze = async (
    context: Message[], // context is an array of messages
    incomingMessageContent: Message
) => {
    const openai = new OpenAI()
    console.log(incomingMessageContent)
    console.log(context)

    const allMessages = [...context, incomingMessageContent]
    console.log(allMessages)
    const stream = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: allMessages,
    })

    return stream.choices[0]
}
