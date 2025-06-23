'use client'

import React, { useState } from 'react'
import './css/forgotpassword.css'
import Toast from '@/app/component/Toast/Toast'
import { submitEmail } from '@/app/services/auth/submitEmail'
import { PacmanLoader } from 'react-spinners'
import { useRouter } from 'next/navigation'

export default function ForgotPassword() {

  const router = useRouter()

  const [email, setEmail] = useState('')
  const [toast, setToast] = useState({
    message: null,
    type: null
  })
  const [loading, setLoading] = useState(false)

  async function handleSubmitEmail(e){

    e.preventDefault()

    setLoading(true)

    const info = await submitEmail(email)
    
    setLoading(false)

    if(info.error){
      setToast({
        message: info.error,
        type: 'error'
      })
    }else{
      setToast({
        message: info,
        type: 'success'
      })

      router.push('/auth/verify-reset')
    }

  }

  return (
    <>
      <form className='w-full md:w-[400px]' onSubmit={handleSubmitEmail}>
        <h2>Send Code to your Email</h2>
        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button disabled={loading}>{loading ? <PacmanLoader size={12} color='#eee'/> : 'Send'}</button>
      </form>
      {toast.message && <Toast message={toast.message} type={toast.type} closeToast={() => setToast({ message: null, type: null })}/>}
    </>
  )
}