'use client'

import React, { useEffect, useState } from 'react'
import CommentList from './CommentList'
import { buildCommentTree } from '@/app/utils/buildComment'

export default function CommentWrapper({ flatComment }) {

  const [tree, setTree] = useState([])

  useEffect(()=> {
    const structured = buildCommentTree(flatComment)

    setTree(structured)
  }, [flatComment])

  return (
    <CommentList comments={tree}/>
  )
}
