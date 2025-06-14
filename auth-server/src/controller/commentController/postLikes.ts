import { Response, Request } from "express";
const Comment = require('../../model/Comment')

async function PostLikesController(req: Request, res: Response){

  const commentId = req.params.id

  const userId = req.cookies.user_key

  console.log(userId, commentId)

  try {
    
    const currentComment = await Comment.findById(commentId)

    if(!currentComment) return res.status(404).send('Comment Not Found')

    // Check if the user id is found

    const alreadyLiked = currentComment.likes.includes(userId)

    if(alreadyLiked){
      currentComment.likes = currentComment.likes.filter((id: string) => id !== userId)
    }else {
      currentComment.likes.push(userId)
    }

    await currentComment.save()

    return res.status(200)

  } catch (err: any) {
    console.log(err)

    return res.status(500).json({ error: 'Server Error' })
  }

}

module.exports = PostLikesController