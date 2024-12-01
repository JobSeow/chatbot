import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost, faUser } from '@fortawesome/free-solid-svg-icons' // Import chatbot or robot icon

type Props = {
    message: {
        createdAt: string
        messageContent: {
            role: { S: string }
            content: { S: string }
        }
    }
}

function Message({ message }: Props) {
    const isChatGPT = message.messageContent.M.role.S == 'assistant'

    return (
        <div
            className={`py-5 text-white
                 'text-left'`}
        >
            <div
                className={`flex space-x-5 px-10 max-w-2xl mx-auto ${
                    isChatGPT ? '' : 'justify-end'
                }`}
            >
                {isChatGPT ? (
                    <FontAwesomeIcon
                        icon={faGhost}
                        className="h-10 w-10 text-white"
                    />
                ) : (
                    ''
                )}
                <div
                    className={`pt-1 text-md ${
                        isChatGPT ? '' : 'bg-[#2f2f2f] rounded-2xl px-4 py-2'
                    }`}
                >
                    {message.messageContent.M.content.S}
                </div>
                {isChatGPT ? (
                    ''
                ) : (
                    <FontAwesomeIcon
                        icon={faUser}
                        className="h-10 w-10 text-white"
                    />
                )}
            </div>
        </div>
    )
}

export default Message
