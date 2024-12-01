import ChatInput from '@/components/ChatInput'
import Message from '@/components/Message'
import { getMessagesByChatId } from '@/utils/db'
const getMessages = async () => {
    const messages = await getMessagesByChatId('test')
    return messages
}

const ChatPage = async () => {
    const messages = await getMessages()

    return (
        <div className="w-full h-full flex flex-col">
            {messages?.map((message) => {
                return <Message key={message.messageId} message={message} />
            })}
            <div className="mt-auto">
                <ChatInput chatId={'test'} />
            </div>
        </div>
    )
}
export default ChatPage
