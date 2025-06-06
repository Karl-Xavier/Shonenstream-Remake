'use client'

import { Eye, EyeClosed } from 'phosphor-react'
import React, { useState } from 'react'
import Link from 'next/link'
import './loginform.css'
import { useAuth } from '@/app/utils/context/authContext'
import { loginForm } from '@/app/services/auth/loginForm'
import Toast from '@/app/component/Toast/Toast'
import { PacmanLoader } from 'react-spinners'

export default function LoginForm() {

  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [toast, setToast] = useState({
    message: null,
    type: null
  })

  const { login } = useAuth()

  const handleInputChange = e => {
    const { name, value } = e.target

    setFormData({
      ...formData, [name]: value
    })
  }

  async function handleLogin(e){
    e.preventDefault()

    setLoading(true)
    const info = await loginForm(formData)
    setLoading(false)

    if(info.error){
      setToast({
        message: info.error,
        type: 'error'
      })
    }else{
      setToast({
        message: info.message,
        type: 'success'
      })

      login(info.data)
    }
  }

  return (
    <form className='login-form w-full md:w-[450px] flex flex-col justify-start items-center' onSubmit={handleLogin}>
      <h2 className='mb-2'>Log into your account</h2>
      <div className="login-form-area w-full flex flex-col">
        <input type="text" placeholder='username' name='username' value={formData.username} onChange={handleInputChange}/>
        <div className="login-password-area">
          <input type={showPassword ? 'text' : 'password'} name="password" placeholder='Password' value={formData.password} onChange={handleInputChange}/>
          <button type="button" className='outline-none cursor-pointer' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <Eye size={22} weight='fill'/> : <EyeClosed size={22} weight='fill'/>}</button>
        </div>
        <Link href={'/auth/forgot-password'} className='text-[#643c7d] text-[14px]'><span>Forgot Password</span></Link>

      </div>
        <button className='login-btn' disabled={loading}>{ loading ? <PacmanLoader size={12} color='#eee'/> : 'Login'}</button>

      <p>Don't Have an Account? <Link href={'/auth/register'}>Sign Up</Link></p>
      {toast.message !== null && <Toast message={toast.message} type={toast.type} closeToast={() => setToast({ message: null, type: null })}/>}
    </form>
  )
}