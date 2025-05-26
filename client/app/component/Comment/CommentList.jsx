'use client'

import { ArrowArcRight, ThumbsUp, ThumbsDown, DotsThreeVertical } from 'phosphor-react'
import React, { useState } from 'react'
import './css/commentlist.css'

export default function CommentList({ comments }) {

  const [showReplies, setShowReplies] = useState({})

  function toggleReplies(commentId){
    setShowReplies(prev => ({ ...prev, [commentId]: !prev[commentId] }))
  }

  return (
    <ul className="comments w-full h-full">
      {comments.map((comment, index) => (
        <li className='relative pt-2 comment-li' key={index} data-comment-id={index+1} id={comment.parentId} style={{ marginLeft: '10px' }}>
          <div className="head max-w-full md:max-w-[60%] flex flex-row justify-start items-end gap-4">
            <img src={comment.profileImage} alt='Profile Picture' height={100} width={100} className='comment-image w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-cover'/>
            <p className='comment-author text-[14px] md:text-[18px]'>{comment.author}</p>
          </div>
          <div className="other text-[12px] md:text-[14px]">
            <p className='comment-content'>{comment.content}</p>
            <div className="comment-actions flex flex-row w-max h-auto justify-between items-center gap-3 cursor-pointer my-2">
              <button><ThumbsUp/></button>
              <button><ThumbsDown/></button>
              <button><ArrowArcRight/></button>
              <button><DotsThreeVertical/></button>
            </div>
          </div>
          {comment.children?.length > 0 && ( <span className='text-[12px] text-[#643c7d] cursor-pointer' onClick={() => toggleReplies(comment.id)}>{showReplies[comment.id] ? 'Hide Replies' : 'Show Replies'}</span> )}
          {showReplies[comment.id] && (
            showReplies &&  <CommentList comments={comment.children}/>
            )}
        </li>
      ))}
    </ul>
  )
}