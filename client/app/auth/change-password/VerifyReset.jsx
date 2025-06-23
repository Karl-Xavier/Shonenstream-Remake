'use client'

import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { PacmanLoader } from 'react-spinners'
import './css/verifyreset.css'
import { verifyResetToken } from '@/app/services/auth/verifyResetToken'
import Toast from '@/app/component/Toast/Toast'

export default function VerifyReset() {

  const router = useRouter()
  const searchParam = useSearchParams()

  const email = searchParam.get('for')
  const token = searchParam.get('token')

  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState({
    message: null,
    type: null
  })

  async function handleSubmitEmailVerification(e){

    e.preventDefault()

    setLoading(true)
    const info = await verifyResetToken(token, email, password)
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

      router.push('/auth/login')

    }

  }

  return (
    <>
      <form className='reset-form w-full md:w-[400px]' onSubmit={handleSubmitEmailVerification}>
        <h2>Enter your New Password</h2>
        <input type='text' placeholder='New Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button disabled={loading}>{loading ? <PacmanLoader size={12} color='#eee'/> : 'Verify'}</button>
      </form>
      {toast.message && <Toast message={toast.message} type={toast.type} closeToast={() => setToast({ message: null, type: null })}/>}
    </>
  )
}