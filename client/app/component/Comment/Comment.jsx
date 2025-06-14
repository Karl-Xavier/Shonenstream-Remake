import React, { useEffect, useState } from 'react'
import { commentArray } from '@/app/utils/rawData/commentJson'
import CommentWrapper from './CommentWrapper'
import { useParams, useSearchParams } from 'next/navigation'
import { getComments } from '@/app/services/comment/getComments'

export default function Comment() {

  const [comment, setComment] = useState([])

  const params = useParams()
  const searchParams = useSearchParams()

  const pathname = params.slug

  const episode = searchParams.get('episode')

  const name = `${pathname}-episode-${episode}`

  useEffect(() => {
    async function getCommentsList(){
      const data = await getComments(name)

      setComment(data)

      console.log(data)
    }

    getCommentsList()
  }, [])

  return (
    <div className='w-full h-auto mt-3'>
      <h2 className='text-[16px] font-bold'>COMMENTS</h2>
      <CommentWrapper flatComment={comment}/>
    </div>
  )
}