'use client'

import React, { useState } from 'react'
import './css/inputbutton.css'
import { useParams, useSearchParams } from 'next/navigation'
import { postComments } from '@/app/services/comment/postComment'

export default function InputButton() {

  const [content, setContent] = useState('')

  const params = useParams()
  const searchParams = useSearchParams()

  const pathname = params.slug
  const episode = searchParams.get('episode')

  const name = `${pathname}-episode-${episode}`

  async function handleSubmitComment(){

    try{
      await postComments(content, name)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='comment-input w-full h-auto flex flex-row justify-between items-center bg-[#292929] p-2 rounded-lg gap-2'>
      <textarea name="comment-input" id="comment_input" placeholder='Write Something....' className='w-full outline-none' onChange={(e) => setContent(e.target.value)} value={content}></textarea>
      <button className='w-[75px] h-max p-2 bg-[#643c7d] rounded-lg outline-none cursor-pointer' onClick={() => {
        handleSubmitComment()
        setContent('')
      }}>Send</button>
    </div>
  )
}