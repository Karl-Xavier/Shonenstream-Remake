'use client'

import { CheckCircle, Info, X, XCircle } from 'phosphor-react'
import React, { useEffect } from 'react'
import './css/toast.css'

export default function Toast({ message='Nothing Here', type='info', closeToast }) {

  useEffect(() => {
    const timer = setTimeout(()=>{
      closeToast()
    }, 3000)

    return ()=> clearTimeout(timer)
  }, [closeToast])

  return (
    <div className='toast-container' style={{ background: `${type === 'error' ? 'indianred' : type === 'success' ? '#4caf50' : 'lightslategrey'}` }}>
      <span className="toast">{message} {type === 'success' ? <CheckCircle size={22} weight='fill'/> : type === 'error' ? <XCircle size={22} weight='fill'/> : <Info size={22} weight='fill'/>}</span>
    </div>
  )
}