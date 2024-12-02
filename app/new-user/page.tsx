import { createUser, getUserById } from '@/utils/db'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

const createNewUser = async () => {
    const user = await currentUser()
    const match = await getUserById(user?.id)
    if (match?.length === 0) {
        await createUser(
            user.id as string,
            user?.primaryEmailAddress?.emailAddress as string
        )
    }
    redirect('/journal')
}
const NewUser = async () => {
    await createNewUser()
    return <div>...loading</div>
}
export default NewUser
