import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const links = [
    { name: 'Journals', href: '/journal' },
    { name: 'History', href: '/history' },
]
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex">
            {/* sidebar */}
            {/* bg-[#202123]  */}
            {/* bg-gradient-to-r from-purple-300 to-pink-300  */}
            <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[17rem]">
                {/*  hidden sm:inline*/}
                {/* <SideBar /> */}
            </div>

            {/* clientProvider notification */}
            {/* <ClientProvider /> */}
            {/* bg-[#343541] */}
            {/* bg-gradient-to-r from-pink-500 */}

            {/* <header className="bg-[#343541] h-[60px] border-b border-black/10">
                <nav className="px-4 h-full">
           
                </nav>
            </header> */}
            <header style={{ width: 0 }}>
                <UserButton afterSignOutUrl="/" />
            </header>
            <div className="bg-[#343541] flex-1">{children}</div>
        </div>
    )
}
