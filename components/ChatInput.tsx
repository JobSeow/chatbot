'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, FormEvent } from 'react'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons' // Import chatbot or robot icon

type Props = {
    sendMessage: () => void
    setPrompt: () => void
    prompt: string
}

function ChatInput({ sendMessage, setPrompt, prompt }: Props) {
    const [isLoading, setIsLoading] = useState(false)

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault() // Prevents the newline in textarea
            sendMessage()
        }
    }

    return (
        <div className="bg-[#44465371] text-white rounded-lg text-md">
            {/* <form className="p-5 space-x-5 flex"> */}
            <div className="p-5 space-x-5 flex">
                <input
                    onKeyDown={handleKeyDown}
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

                <button
                    disabled={false}
                    type="submit"
                    onClick={() => {
                        sendMessage()
                    }}
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
