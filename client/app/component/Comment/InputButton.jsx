'use client'

import React from 'react'
import './css/inputbutton.css'

export default function InputButton() {
  return (
    <div className='comment-input w-full h-auto flex flex-row justify-between items-center bg-[#292929] p-2 rounded-lg gap-2'>
      <textarea name="comment-input" id="comment_input" placeholder='Write Something....' className='w-full outline-none'></textarea>
      <button className='w-[75px] h-max p-2 bg-[#643c7d] rounded-lg outline-none cursor-pointer'>Send</button>
    </div>
  )
}