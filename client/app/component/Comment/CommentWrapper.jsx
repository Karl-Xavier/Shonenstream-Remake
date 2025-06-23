'use client'

import React, { useEffect, useState } from 'react'
import CommentList from './CommentList'
import { buildCommentTree } from '@/app/utils/buildComment'
import InputButton from './InputButton'
import './css/commentwrapper.css'
import { useAuth } from '@/app/utils/context/authContext'

export default function CommentWrapper({ flatComment }) {

  const [tree, setTree] = useState([])

  const { isAuthenticated } = useAuth()

  useEffect(()=> {
    const structured = buildCommentTree(flatComment)

    setTree(structured)
  }, [flatComment])

  return (
   <div className="w-full mt-3 flex flex-col-reverse justify-between gap-3 md:p-4">
     <section className="w-full h-[500px] overflow-auto comments-wrapper">
       <CommentList comments={tree}/>
     </section>
     {isAuthenticated ? <InputButton /> : <p className=''>Login to Comment</p>}
   </div>
  )
}
