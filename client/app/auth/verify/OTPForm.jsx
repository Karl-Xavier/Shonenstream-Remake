'use client'

import React, { useState } from 'react'
import OTPInput from 'react-otp-input'
import './otpform.css'
import { verifyToken } from '@/app/services/auth/verifyToken'
import { useAuth } from '@/app/utils/context/authContext'
import Toast from '@/app/component/Toast/Toast'
import { PacmanLoader } from 'react-spinners'
import { useRouter } from 'next/navigation'

export default function OTPForm() {

  const router = useRouter()

  const { getSavedUsername, deleteUserName } = useAuth()

  const [otp, setOtp] = useState('')
  const [toast, setToast] = useState({
    message: null,
    type: null
  })
  const [loading, setLoading] = useState(false)

  function handleChange(){
    setOtp(otp)
  }

  const styles = {
    width: '2.1rem',
    height: '2.1rem',
    fontSize: '1rem',
    margin: '0 5px',
    borderRadius: '4px',
    border: '2px solid #643c7d'
  }

  async function handleOTPForm(e){
    e.preventDefault()

    const username = getSavedUsername()
    setLoading(true)
    const info = await verifyToken(username, otp)

    setLoading(false)
    console.log(info)

    if(info.error){
      setToast({ message: info.error, type: 'error' })
    }else {
      setToast({ message: info, type: 'success' })
      deleteUserName()
      router.push('/auth/login')
    }
  }

  return (
    <form className='otp-form w-full md:w-[450px] p-[10px] rounded' onSubmit={handleOTPForm}>
      <h2>Verify Your Email</h2>
      <OTPInput value={otp} onChange={handleChange} numInputs={8} shouldAutoFocus renderInput={(iprop) => <input {...iprop} className='outline-none'/>} inputStyle={styles}/>
      <button disabled={loading}>{loading ? <PacmanLoader size={12} color='#eee'/> : 'Verify'}</button>
      <section className='note text-center'>
        <p>If you don't see an Email in your inbox, Check Your Spam</p>
        <small>NB: You need to verify your email under 15 minutes after the verification code has been sent in other to login </small>
      </section>
      {toast.message && <Toast message={toast.message} type={toast.type} closeToast={() => setToast({ message: null, type: null })}/>}
    </form>
  )
}