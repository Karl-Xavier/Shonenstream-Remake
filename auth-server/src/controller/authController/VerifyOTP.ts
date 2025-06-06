const User = require('../../model/User')
import { Request, Response } from 'express'
import { isTokenExpired } from '../../utils/isTokenExpired'

async function VerifyTokenController(req: Request, res: Response): Promise<any>{
  const token = req.query.token
  const user = req.query.username

  try {
    
    if(!token || !user){
      return res.status(400).json({ error: 'Token or User is Invalid' })
    }

    const existingUser = await User.findOne({ username: user })

    if(!existingUser){
      return res.status(401).json({ error: 'Please Create an Account' })
    }

    const createdTime = existingUser.tokenCreatedAt
    const verificationToken = existingUser.verificationToken

    if(token !== verificationToken){
      return res.status(400).json({ error: 'Invalid Token' })
    }

    const hasExpired = isTokenExpired(createdTime)

    if(hasExpired){
      return res.status(401).json({ error: 'Token Expired Request new Token' })
    }

    existingUser.verificationToken = ''
    existingUser.tokenCreatedAt = null
    existingUser.isVerified = true

    await existingUser.save()

    return res.status(200).json({ message: 'Verification Successful' })

  } catch (err: any) {
    
  }
}

module.exports = VerifyTokenController