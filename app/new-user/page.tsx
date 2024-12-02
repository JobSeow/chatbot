import { createUser, getUserById } from '@/utils/db'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'

const createNewUser = async () => {
    const user = await currentUser()
    const match = await getUserById(user?.id)
    const newId = uuidv4()
    if (match?.length === 0) {
        await createUser(
            user.id as string,
            user?.primaryEmailAddress?.emailAddress as string
        )
    }
    redirect(`/chat/${newId}`)
}
const NewUser = async () => {
    await createNewUser()
    return <div>...loading</div>
}
export default NewUser
