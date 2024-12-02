import { createUser, getUserByUserEmail } from '@/utils/db'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

const createNewUser = async () => {
    const user = await currentUser()
    const match = await getUserByUserEmail(user.id as string)
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
