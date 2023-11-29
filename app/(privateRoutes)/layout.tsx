'use client'

import { Sidebar } from '../components/Sidebar'
import { Header } from '../components/Header'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <Header />
        <div className='flex'>
            <Sidebar />
            <div className='mx-4 my-4 bg-white shadow rounded-md w-full h-[calc(100vh-130px)]'>{children}</div>
        </div>
    </ div>
  )
}
