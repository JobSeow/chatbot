'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, FormEvent } from 'react'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons' // Import chatbot or robot icon
import { createMessage } from '@/utils/api'

type Props = {
    chatId: string
}

function ChatInput({ chatId }: Props) {
    const [prompt, setPrompt] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const handleOnClick = async () => {}
    // const { data: session } = useSession()

    //useSWR to get model
    // const { data: model } = useSWR('model', {
    //     fallbackData: 'text-davinci-003',
    // })

    const sendMessage = async () => {
        try {
            console.log('=================================')
            console.log(prompt)
            await createMessage(prompt.trim(), chatId)
            // setPrompt('')
            // setIsLoading(false)
        } catch (error: any) {
            console.log(error.message)
        }
    }

    return (
        <div className="bg-[#44465371] text-white rounded-lg text-md">
            {/* <form className="p-5 space-x-5 flex"> */}
            <div className="p-5 space-x-5 flex">
                <input
                    className="
                        bg-transparent 
                        focus:outline-none 
                        flex-1
                        disabled:cursor-not-allowed 
                        disabled:text-grey-300"
                    disabled={false}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    type="text"
                    placeholder="Send a message."
                />

                {/* send button */}
                <button
                    disabled={false}
                    type="submit"
                    onClick={sendMessage}
                    className="text-gray-200
                        hover:  px-2 py-1 rounded
                        disabled:text-gray-500 disabled:cursor-not-allowed"
                >
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </div>
            {/* </form> */}
        </div>
    )
}

export default ChatInput
