import SideBar from '@/components/SideBar'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body>
                <div className="flex">
                    <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[17rem] sticky top-0">
                        <SideBar />
                    </div>
                    <header style={{ width: 0 }}></header>
                    <div className="bg-[#343541] flex-1">{children}</div>
                </div>
            </body>
        </html>
    )
}
