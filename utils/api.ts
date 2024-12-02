const createURL = (path: string) => {
    return window.location.origin + path
}

export const createMessage = async (content: string, chatId: string) => {
    const res = await fetch(createURL('/api/message'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            content: content,
            chatId: chatId,
        }),
    })

    if (res.ok) {
        const data = await res.json()
        return data.data
    }
}

export const getMessages = async (chatId: string) => {
    const res = await fetch(createURL(`/api/message/${chatId}`), {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })

    if (res.ok) {
        const data = await res.json()

        return data.data
    }
}
export const getMessagesByUserId = async () => {
    const res = await fetch(createURL(`/api/message`), {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })

    if (res.ok) {
        const data = await res.json()
        return data.data
    }
}
