import React from 'react'
import { commentArray } from '@/app/utils/rawData/commentJson'
import CommentWrapper from './CommentWrapper'

export default function Comment() {
  return (
    <div className='w-full h-auto mt-3'>
      <h2 className='text-[16px] font-bold'>COMMENTS</h2>
      <CommentWrapper flatComment={commentArray}/>
    </div>
  )
}