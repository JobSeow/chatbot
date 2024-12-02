'use client'
import { getMessagesByUserEmail } from '@/utils/api'
import { UserButton } from '@clerk/nextjs'
import {
    faPlus,
    faSpinner,
    faTruckLoading,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ChatRow from './ChatRow'
import { useUser } from '@clerk/nextjs'
import { v4 as uuidv4 } from 'uuid'

function SideBar() {
    const [chats, setChats] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getMessagesByUser()
    }, [])

    const getMessagesByUser = async () => {
        try {
            setIsLoading(true)
            const result = await getMessagesByUserEmail()
            setChats(result)
            setIsLoading(false)
        } catch (error: any) {
            console.log(error.message)
        }
    }

    const generateUUID = () => {
        const newId = uuidv4()
        return newId
    }
    return (
        <div className="p-2 flex flex-col h-screen text-white font-mono">
            <div className="flex-1">
                <div>
                    <Link
                        href={`/chat/${generateUUID()}`}
                        className={`justify-center bg-gray-700/50 flex items-center gap-2`}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                        <p>New chat</p>
                    </Link>
                    <div className="hidden sm:inline">
                        <div className="text-white">user</div>
                        <UserButton afterSignOutUrl="/" />
                    </div>

                    <div className={` bg-gray-700/50 flex items-center gap-2`}>
                        history
                    </div>

                    <div className="flex flex-col space-y-2 my-2">
                        {isLoading && (
                            <div className="animate-pulse text-center text-white">
                                <p>Loading chats...</p>
                            </div>
                        )}

                        {chats?.map((chat) => {
                            return (
                                <ChatRow
                                    key={chat?.chatId.S}
                                    chatId={chat?.chatId.S}
                                    message={chat.messageContent}
                                />
                            )
                        })}
                        <div
                            className={` bg-gray-700/50 flex items-center gap-2`}
                        >
                            <button onClick={getMessagesByUser}>
                                <FontAwesomeIcon icon={faSpinner} /> refresh
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
