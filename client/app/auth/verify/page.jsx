import React from 'react'
import OTPForm from './OTPForm'
import ProtectedRoute from '@/app/component/ProtectedRoute'

export default function page() {
  return (
    <ProtectedRoute>
      <section className='w-full h-screen flex flex-column justify-center items-center p-[10px]'>
        <OTPForm/>
      </section>
    </ProtectedRoute>
  )
}