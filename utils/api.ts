const createURL = (path: string) => {
    return window.location.origin + path
}

export const createMessage = async (content: string, chatId: string) => {
    console.log(content)
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
