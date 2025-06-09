import { Request, Response } from "express";
import client from "../../config/redisConfig";

async function GetUserInfoController(req: Request, res: Response){

  const userId = req.cookies.user_key

  if(!userId) {
    return res.status(401).json({ error: 'Not Authenticated' })
  }

  const cachedUser = await client.get(`user:${userId}`)

  if(!cachedUser){
    return res.status(404).json({ error: 'data not found' })
  }

  return res.status(200).json(JSON.parse(cachedUser))

}

module.exports = GetUserInfoController