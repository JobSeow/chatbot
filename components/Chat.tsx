'use client'
import { useEffect, useState } from 'react'
import Message from './Message'
import { createMessage, getMessages } from '@/utils/api'
import ChatInput from './ChatInput'
import OverlaySpinner from './OverlaySpinner'

type Props = {
    chatId: string
}

function Chat({ chatId }: Props) {
    const [messages, setMessages] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [messageSent, setMessageSent] = useState(false)
    const [prompt, setPrompt] = useState('')

    useEffect(() => {
        fetchMessages()
    }, [messageSent, setMessageSent])

    const fetchMessages = async () => {
        try {
            setIsLoading(true)
            const result = await getMessages(chatId) // Use the chatId passed as a prop
            setMessages(result) // Update state with the fetched messages
            setIsLoading(false)
        } catch (error: any) {
            console.log(error.message) // Log any error if the API fails
        }
    }

    const sendMessage = async () => {
        try {
            setIsLoading(true)
            await createMessage(prompt.trim(), chatId)
            setMessageSent((prevValue) => !prevValue)
            setPrompt('')
            setIsLoading(false)
        } catch (error: any) {
            console.log(error.message)
        }
    }

    return (
        <>
            <div className="flex-1 overflow-y-auto overflow-x-hidden">
                <OverlaySpinner isLoading={isLoading} />
                {messages?.map((message) => {
                    return <Message key={message.messageId} message={message} />
                })}
            </div>
            <div className="sticky bottom-0 bg-[#343541] p-4">
                <ChatInput
                    chatId={chatId}
                    sendMessage={sendMessage}
                    setPrompt={setPrompt}
                    prompt={prompt}
                />
            </div>
        </>
    )
}

export default Chat
