import { Request, Response } from 'express'
import { generateOTP } from '../../utils/generateOtp'
const User = require('../../model/User')
const sendResetEmail = require('../../service/sendResetEmail')

async function ForgotPasswordController(req: Request, res: Response){

  const { email } = req.body

  try {
    
    const existingUser = await User.findOne({ email })

    if(!existingUser){
      return res.status(404).json({ error: 'Email is not registered' })
    }

    const token = generateOTP()

    await sendResetEmail(email, token)

    existingUser.verificationToken = token
    existingUser.tokenCreatedAt = Date.now()

    await existingUser.save()

    return res.status(200).json({ message: 'Reset Email sent' })

  } catch (err: any) {
    
    console.log(err)

    return res.status(500).json({ error: 'Server Error' })

  }

}

module.exports = ForgotPasswordController