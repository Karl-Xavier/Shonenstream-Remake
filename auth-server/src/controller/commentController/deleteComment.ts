import { Request, Response } from 'express'
const Comment = require('../../model/Comment')

async function DeleteCommentController(req: Request, res: Response){

  const documentId = req.params.id
  const userId = req.cookies.user_key

  try {
    
    const item = await Comment.findById(documentId)

    if(!item){
      return res.status(404).json({ error: 'Item not found' })
    }

    if(item.userId !== userId){
      return res.status(403).json({ error: 'UnAuthorized' })
    }

    await item.deleteOne()

    return res.status(200)

  } catch (err: any) {
    
    console.log(err)

    return res.status(500).json({ error: 'Server Error' })

  }

}

module.exports = DeleteCommentController