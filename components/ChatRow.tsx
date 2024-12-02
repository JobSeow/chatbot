'use client'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

type Props = {
    message: string
    chatId: string
}

function ChatRow({ message, chatId }: Props) {
    return (
        <Link
            href={`/chat/${chatId}`}
            className={`justify-center bg-gray-700/50 flex items-center gap-2`}
        >
            <FontAwesomeIcon icon={faPaperPlane} />
            <p className="flex-1 hidden truncate md:inline-flex">
                {message.M.content.S}
            </p>
        </Link>
    )
}

export default ChatRow
