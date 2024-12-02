import Chat from '@/components/Chat'
import ChatInput from '@/components/ChatInput'

type Props = {
    params: {
        id: string
    }
}
const ChatPage = async ({ params }: Props) => {
    const { id } = await params

    return (
        <div className="w-full h-full flex flex-col">
            <Chat chatId={id} />
        </div>
    )
}
export default ChatPage
