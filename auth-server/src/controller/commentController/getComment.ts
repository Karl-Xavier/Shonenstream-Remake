import { Response, Request } from "express";
const Comment = require('../../model/Comment')

async function getComments(req: Request, res: Response){

  const name: string = req.query.name as string

  const userId = req.cookies.user_key

  try{

    if(!name){
      return res.status(400).json({ error: 'Name Parameter is missing' })
    }

    const allComments = await Comment.find({ name }).sort({ _id: -1 })

    const results = allComments.map((comment: any) => ({
      ...comment.toObject(),
      isLikedByCurrentUser: comment.likes.includes(userId),
      isDisLikedByCurrentUser: comment.dislikes.includes(userId),
      isUserComment: comment.userId === userId
    }))

    return res.status(200).json(results)

  }catch(err: any){
    console.log(err)

    return res.status(500).json({ error: "Server Error" })
  }

}

module.exports = getComments