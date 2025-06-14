import React from 'react'
import LoginForm from './LoginForm'
import ProtectedRoute from '@/app/component/ProtectedRoute'

export default function page() {
  return (
    <ProtectedRoute>
      <section className='w-full h-screen flex flex-col justify-center items-center p-[10px]'>
        <LoginForm/>
      </section>
    </ProtectedRoute>
  )
}