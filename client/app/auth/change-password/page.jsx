import ProtectedRoute from '@/app/component/ProtectedRoute'
import React from 'react'
import VerifyReset from './VerifyReset'

export const metadata = {
  title: 'Verify and Change your Password',
  description: 'Watch and Download Anime Online for free on Shonenstream'
}

export default function page() {
  return (
    <ProtectedRoute>
      <section className="w-full h-screen flex flex-col justify-center items-center p-2">
        <VerifyReset/>
      </section>
    </ProtectedRoute>
  )
}