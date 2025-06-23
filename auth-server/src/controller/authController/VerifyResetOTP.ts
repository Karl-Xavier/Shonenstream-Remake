import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
const User = require('../../model/User')
import { isTokenExpired } from '../../utils/isTokenExpired'

async function VerifyResetOTPController(req: Request, res: Response){

  const token = req.query.token
  const email = req.query.email
  const { password } = req.body

  try {

    if(!token || !email || !password){
      return res.status(400).json({ error: 'Missing Parameter' })
    }

    const existingUser = await User.findOne({ email })

    if(!existingUser){
      return res.status(404).json({ error: 'User not found' })
    }

    const createdTime = existingUser.tokenCreatedAt
    const verificationToken = existingUser.verificationToken

    if(token !== verificationToken){
      return res.status(401).json({ error: 'Invalid Token' })
    }

    const hasExpired = isTokenExpired(createdTime)

    if(hasExpired){
      return res.status(401).json({ error: 'Token Expired' })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    existingUser.password = hashedPassword
    existingUser.tokenCreatedAt = null
    existingUser.verificationToken = ''

    await existingUser.save()

    return res.status(200).json({ message: 'Password Changed' })
    
  } catch (err: any) {
    console.log(err)

    res.status(500).json({ error: 'Server Error' })
  }

}

module.exports = VerifyResetOTPController