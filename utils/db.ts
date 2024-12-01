import { db } from '@/config'
import {
    ScanCommand,
    PutItemCommand,
    QueryCommand,
} from '@aws-sdk/client-dynamodb'

export async function getAllMessages() {
    const params = {
        TableName: 'Messages',
    }
    try {
        const command = new ScanCommand(params)
        const data = await db.send(command)
        return data.Items // Returns the messages
    } catch (error) {
        console.error('Error fetching messages:', error)
        throw new Error('Could not fetch messages')
    }
}

export async function addMessage(
    messageId: string,
    userId: string,
    content: string,
    role: string,
    chatId: string
) {
    const params = {
        TableName: 'Messages',
        Item: {
            chatId: { S: chatId },
            messageId: { S: messageId },
            userId: { S: userId },
            messageContent: {
                M: {
                    role: { S: role },
                    content: { S: content },
                },
            },
            createdAt: { S: new Date().toISOString() },
        },
    }

    try {
        console.log('toeoeo')

        console.log(params)
        console.log('toeoeo')

        const command = new PutItemCommand(params)
        await db.send(command)
        return { success: true, message: 'Message added successfully' }
    } catch (error) {
        console.error('Error adding message:', error)
        throw new Error('Could not add message')
    }
}

export async function getMessagesByChatId(chatId: string) {
    const params = {
        TableName: 'Messages',
        KeyConditionExpression: 'chatId = :chatId',
        ExpressionAttributeValues: {
            ':chatId': { S: chatId }, // Specify the data type
        },
    }

    try {
        const command = new QueryCommand(params)
        const data = await db.send(command)
        return data.Items // Returns the messages for the given userId
    } catch (error) {
        console.error('Error fetching messages by chatId:', error)
        throw new Error('Could not fetch messages for user')
    }
}

export async function getUserById(userId: string) {
    const params = {
        TableName: 'Users',
        KeyConditionExpression: 'userId = :userId',
        ExpressionAttributeValues: {
            ':userId': { S: userId },
        },
    }
    try {
        const command = new QueryCommand(params)
        const data = await db.send(command)
        return data.Items // Returns the messages
    } catch (error) {
        console.error('Error fetching messages:', error)
        throw new Error('Could not fetch messages')
    }
}

export async function createUser(userId: string, emailAddress: string) {
    const params = {
        TableName: 'Users',
        Item: {
            userId: { S: userId },
            email: { S: emailAddress },
            createdAt: { S: new Date().toISOString() },
        },
    }
    try {
        const command = new PutItemCommand(params)
        await db.send(command)
        return { success: true, message: 'Message added successfully' }
    } catch (error) {
        console.error('Error fetching messages:', error)
        throw new Error('Could not fetch messages')
    }
}

// export async function getMessagesByChatId(
//     chatId: string
// ) {
//     const params = {
//         TableName: 'Messages',
//         KeyConditionExpression:
//             'userId = :userId AND chatId = :chatId',
//         ExpressionAttributeValues: {

//             ':chatId': { S: chatId },
//             ':todaysDate': { S: new Date().toISOString() },
//         },
//     }

//     try {
//         const command = new QueryCommand(params)
//         const data = await db.send(command)
//         return data.Items // Returns the messages for the given userId
//     } catch (error) {
//         console.error('Error fetching messages by userId:', error)
//         throw new Error('Could not fetch messages for user')
//     }
// }
