import ProtectedRoute from '@/app/component/ProtectedRoute'
import React from 'react'
import ForgotPassword from './ForgotPassword'

export default function page() {

  return (
    <ProtectedRoute>
      <section className='forgot-password-section w-full h-screen flex flex-col items-center justify-center p-2'>
        <ForgotPassword/>
      </section>
    </ProtectedRoute>
  )
}