'use client'

import { ArrowArcRight, ThumbsUp, ThumbsDown, DotsThreeVertical, Trash } from 'phosphor-react'
import React, { useState } from 'react'
import './css/commentlist.css'
import { postLikes } from '@/app/services/comment/postLikes'
import { postDisLikes } from '@/app/services/comment/postDisLikes'
import { deleteComment } from '@/app/services/comment/deleteComment'
import ReplyModal from '../Modal/ReplyModal'
import { useAuth } from '@/app/utils/context/authContext'

export default function CommentList({ comments }) {

  const [showReplies, setShowReplies] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [replyingTo, setReplyingTo] = useState('')
  const [repliedId, setRepliedId] = useState('')

  const {isAuthenticated} = useAuth()

  function toggleReplies(commentId){
    setShowReplies(prev => ({ ...prev, [commentId]: !prev[commentId] }))
  }

   async function handleLikeComment(commentId){

    try {
      await postLikes(commentId)
    }catch(err){
      console.log(err)
    }

  }

  async function handleDislikeComment(commentId){

    try {
      await postDisLikes(commentId)
    }catch(err){
      console.log(err)
    }

  }

  async function handleDeleteComment(commentId){
    
    try{

      await deleteComment(commentId)

    }catch(err){

      console.log(err)
    }

  }

  function toggleModal(commentId, commentName){
    setShowModal(!showModal)

    setRepliedId(commentId)

    setReplyingTo(commentName)
  }

  return (
    <ul className="comments w-full h-full">
      {comments.map((comment, index) => (
        <li className='relative pt-4 comment-li' key={index} data-comment-id={index+1} id={comment.parentId ? comment.parentId : comment._id} style={{ marginLeft: '10px' }}>
          <div className="head max-w-full md:max-w-[60%] flex flex-row justify-start items-end gap-4">
            <img src={comment.profileImage} alt='Profile Picture' height={100} width={100} className='comment-image w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-cover'/>
            <p className='comment-author text-[14px] md:text-[18px]'>{comment.author}</p>
          </div>
          <div className="other text-[12px] md:text-[14px]">
            <p className='comment-content'>{comment.content}</p>
            {isAuthenticated && <div className="comment-actions flex flex-row w-max h-auto justify-between items-center gap-3 cursor-pointer mt-2">
              <button className='w-max flex flex-row justify-between items-center gap-1' type='button' onClick={() =>  handleLikeComment(comment._id)}><ThumbsUp size={20} color={comment.isLikedByCurrentUser ? '#643c7d' : '#eee'} weight={comment.isLikedByCurrentUser ? 'fill' : 'bold'}/> <span>{comment.likes.length}</span></button>
              <button className='w-max flex flex-row justify-between items-center gap-1' type='button' onClick={() => handleDislikeComment(comment._id)}><ThumbsDown size={20} color={comment.isDisLikedByCurrentUser ? 'indianred' : '#eee'} weight={comment.isDisLikedByCurrentUser ? 'fill' : 'bold'}/> {comment.dislikes.length}</button>
              <button onClick={() => toggleModal(comment._id, comment.author)}><ArrowArcRight size={20} weight='bold'/></button>
              {comment.isUserComment && <button onClick={() => handleDeleteComment(comment._id)}><Trash size={20} weight='fill' color='indianred'/></button>}
            </div>}
          </div>
          {comment.children?.length > 0 && ( <span className='text-[12px] text-[#643c7d] cursor-pointer' onClick={() => toggleReplies(comment._id)}>{showReplies[comment._id] ? 'Hide Replies' : 'Show Replies'}</span> )}
          {showReplies[comment._id] && (
            showReplies &&  <CommentList comments={comment.children}/>
            )}
        </li>
      ))}
      {showModal && <ReplyModal setShowModal={setShowModal} repliedId={repliedId} replyTo={replyingTo}/>}
    </ul>
  )
}