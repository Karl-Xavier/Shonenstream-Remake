'use client'

import { ArrowArcRight, ThumbsUp, ThumbsDown } from 'phosphor-react'
import React, { useState } from 'react'
import './css/commentlist.css'

export default function CommentList({ comments }) {

  const [showReplies, setShowReplies] = useState(false)

  return (
    <ul className="comments">
      {comments.map((comment, index) => (
        <li className='relative pt-2 comment-li' key={index} data-comment-id={index+1} id={comment.parentId} style={{ marginLeft: '10px' }}>
          <div className="head max-w-full md:max-w-[60%] flex flex-row justify-start items-end gap-4">
            <img src={comment.profileImage} alt='Profile Picture' height={100} width={100} className='comment-image w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-cover'/>
            <p className='comment-author text-[14px] md:text-[18px]'>{comment.author}</p>
          </div>
          <div className="other text-[12px] md:text-[14px]">
            <p className='comment-content'>{comment.content}</p>
            <div className="comment-actions">
              <button><ThumbsUp/></button>
              <button><ThumbsDown/></button>
              <button><ArrowArcRight/></button>
              <button>more</button>
            </div>
          </div>
          {console.log(comment.children.forEach(parent => parent.parentId))}
          {comment.children?.length && <span>Show Replies</span>}
          {comment.children?.length > 0 && (
            showReplies &&  <CommentList comments={comment.children}/>
            )}
        </li>
      ))}
    </ul>
  )
}