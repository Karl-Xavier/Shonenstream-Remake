import React from 'react'
import Form from './Form'
import ProtectedRoute from '@/app/component/ProtectedRoute'

export default function page() {
  return (
    <ProtectedRoute>
      <section className='reqister-form w-full h-screen flex justify-center items-center'>
        <Form/>
      </section>
    </ProtectedRoute>
  )
}