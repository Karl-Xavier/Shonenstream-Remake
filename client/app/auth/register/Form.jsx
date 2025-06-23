'use client'

import React, { useState } from 'react'
import { Eye, EyeClosed, PlusCircle } from 'phosphor-react'
import './register.css'
import Link from 'next/link'
import avatar from '../../../public/avatar.jpg'
import { submitForm } from '@/app/services/auth/registerForm'
import Toast from '@/app/component/Toast/Toast'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/utils/context/authContext'
import { PacmanLoader } from 'react-spinners'

export default function Form() {

  const router = useRouter()

  const { savedUsername } = useAuth()

  const [ showPassword, setShowpassword ] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    profileImage: ''
  })

  const [img, setImg] = useState(null)
  const [toast, setToast] = useState({
    message: null,
    type: null
  })
  const [loading, setLoading] = useState(false)

  function inputChange(e){
    const { name, value } = e.target

    setFormData({
      ...formData, [name]: value
    })
  }

  function handleImageChange(e){
    const file = e.target.files[0]

    if(file && file.type.startsWith('image/')){

      const maxSize = 600 * 1024

      if(file.size < maxSize){

        const url = URL.createObjectURL(file)
        setImg(url)

      }else{
        setImg(null)
      }
      
    }else {
      setImg(null)
    }
  }

  function convertToBase64(e){
    const file = e.target.files[0]

    if(file && file.type.startsWith('image/')){

      const maxSize = 600 * 1024

      if(file.size < maxSize){
        const reader = new FileReader()

        reader.onloadend = () => {
          setFormData({ ...formData, profileImage: reader.result })
        }

        reader.readAsDataURL(file)
      }else {
        setToast({
          message: 'Image Size Exceeds 500kb',
          type: 'error'
        })
      }
    }
  }

  function imgFileInput(e){
    handleImageChange(e)
    convertToBase64(e)
  }

  async function handleRegister(e){
    e.preventDefault()

    setLoading(true)
    const info = await submitForm(formData)

    setLoading(false)
    
    if(info.error){
      setToast({
        message: info.error,
        type: 'error'
      })
    } else {
      setToast({ message: 'Registration Successful', type: 'success' })

      savedUsername(info.username)

      router.push('/auth/verify')
    }
  }

  return (
    <>
      <form className='register-form w-full md:w-[450px] p-[10px]' onSubmit={(e) => handleRegister(e)}>
        <div className='form-div'>
          <input type="file" name="file" id="file" className='hidden' onChange={(e) => imgFileInput(e)}/>
          <label htmlFor="file" className='cursor-pointer img-option'>
            <img src={img !== null ? img : avatar.src} alt="profile-picture"/>
            <span><PlusCircle weight='fill' size={25}/></span>
          </label>

          <div className='form-area mt-[90px]'>
            <input type="text" placeholder='Full Name' className='outline-none' name='fullName' onChange={inputChange} value={formData.fullName}/>
            <input type="text" placeholder='username' className='outline-none' name='username' onChange={inputChange} value={formData.username}/>
            <input type="email" placeholder='Email' className='outline-none' name='email' onChange={inputChange} value={formData.email}/>
            <div className="password-area">
              <input type={showPassword ? 'text' : 'password'} placeholder='Password' className='outline-none' name='password' onChange={inputChange} value={formData.password}/>
              <button className='outline-none cursor-pointer' onClick={() => setShowpassword(!showPassword)} type='button'>{showPassword ? <Eye weight='fill' size={22}/> : <EyeClosed weight='fill' size={22}/>}</button>
            </div>
            <button className='outline-none cursor-pointer submit-btn' disabled={loading}>{ loading ? <PacmanLoader size={12} color='#eee'/> : 'Register'}</button>
          </div>

          <p className='text-center font-medium'>Already Have an Account? <Link href={'/auth/login'} className='text-[#643c7d] font-semibold'>Sign In</Link></p>
        </div>
      </form>
      {toast.message && <Toast message={toast.message} type={toast.type} closeToast={() => setToast({ message: null, type: null })}/>}
    </>
  )
}