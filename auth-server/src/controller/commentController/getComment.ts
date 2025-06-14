import { Response, Request } from "express";
const Comment = require('../../model/Comment')

async function getComments(req: Request, res: Response){

  const name: string = req.query.name as string

  try{

    if(!name){
      return res.status(400).json({ error: 'Name Parameter is missing' })
    }

    const allComments = await Comment.find({ name }).sort({ _id: -1 })

    return res.status(200).json(allComments)

  }catch(err: any){
    console.log(err)

    return res.status(500).json({ error: "Server Error" })
  }

}

module.exports = getComments