import { Response, Request } from "express";
const Comment = require('../../model/Comment')

async function PostDisLikesController(req: Request, res: Response){

  const commentId = req.params.id

  const userId = req.cookies.user_key

  console.log(userId, commentId)

  try {
    
    const currentComment = await Comment.findById(commentId)

    if(!currentComment) return res.status(404).send('Comment Not Found')

    // Check if the user id is found

    const alreadyDisLiked = currentComment.dislikes.includes(userId)

    const alreadyLiked = currentComment.likes.includes(userId)

    if(alreadyDisLiked){
      currentComment.dislikes = currentComment.dislikes.filter((id: string) => id !== userId)
    }else if(alreadyLiked){
      currentComment.likes = currentComment.likes.filter((id: string) => id !== userId)

      currentComment.dislikes.push(userId)
    }else {
      currentComment.dislikes.push(userId)
    }

    await currentComment.save()

    return res.status(200)

  } catch (err: any) {
    console.log(err)

    return res.status(500).json({ error: 'Server Error' })
  }

}

module.exports = PostDisLikesController