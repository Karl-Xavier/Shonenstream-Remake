import { Request, Response } from "express";
const Comment = require('../../model/Comment')
const User = require('../../model/User')

async function PostCommentController(req: Request, res: Response){

  const id = req.cookies.user_key
  const { content, name, replyTo } = req.body
  
  try {

    if(!id) return res.status(401)

    if(content === undefined || name === undefined){
      return res.status(400).json({ error: 'Missing Parameter' })
    }

    const existingUser = await User.findOne({ userId: id })

    if(!existingUser){
      return res.status(404).json({ error: 'No User Found' })
    }

    const newComment = new Comment({
      userId: id,
      author: existingUser.username,
      content,
      profileImage: existingUser.profileImage,
      parentId: replyTo === undefined ? null : replyTo,
      name
    })

    await newComment.save()

    return res.status(201)
    
  } catch (err: any) {
    console.log(err)

    return res.status(500).json({ error: 'Server Error' })
  }

}

module.exports = PostCommentController