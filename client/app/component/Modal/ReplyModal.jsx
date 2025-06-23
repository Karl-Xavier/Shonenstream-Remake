'use client'

import React, { useState } from 'react'
import './css/replymodal.css'
import { X } from 'phosphor-react'
import { postComments } from '@/app/services/comment/postComment'
import { useParams, useSearchParams } from 'next/navigation'

export default function ReplyModal({ replyTo, repliedId, setShowModal }) {

  const params = useParams()
  const searchParams = useSearchParams()

  const pathname = params.slug
  const episode = searchParams.get('episode')

  const name = `${pathname}-episode-${episode}`

  const [reply, setReply] = useState('')

  async function handleSubmitResponse(){
    try {
      
      await postComments(reply, name, repliedId)

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='w-screen h-screen modal-div'>
      <div className="reply-box">
        <section className='flex flex-row justify-between items-center'>
          <h3>Replying to {replyTo}</h3>
          <button className='outline-none cursor-pointer' onClick={() => setShowModal(false)}><X size={22} weight='bold'/></button>
        </section>

        <div className="reply-input">
          <input name="reply-textarea" id="reply-textarea" placeholder='Reply....' value={reply} onChange={(e) => setReply(e.target.value)}/>
          <button className='outline-none cursor-pointer' onClick={() => {
            handleSubmitResponse()
            setShowModal(false)
          }}>Reply</button>
        </div>
      </div>
    </div>
  )
}