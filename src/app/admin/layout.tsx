import Navbar from '@/components/admin-props/navbar';
import React from 'react'

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='bg-white h-full w-full'>
      {/* <Navbar/> */}
      {children}
    </div>
  )
}
