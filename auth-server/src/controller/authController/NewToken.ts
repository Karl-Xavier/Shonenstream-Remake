import { Request, Response } from 'express'
import { generateOTP } from '../../utils/generateOtp'
const User = require('../../model/User')
const VerificationMail = require('../../service/sendVerification')

const accessToken: string = process.env.ACCESS_TOKEN_SECRET as string

async function NewTokenController(req: Request, res: Response): Promise<any>{
    const { email } = req.body

    const existingUser = await User.findOne({ email })

    try {
        
        if(!existingUser){
            return res.status(400).json({ error: 'This Email Account does not Exists' })
        }

        const token = generateOTP()

        await VerificationMail(email, token)

        existingUser.verificationToken = token
        existingUser.tokenCreatedAt = Date.now()

        await existingUser.save()

        return res.status(200).json({ message: 'Verification Email has been sent' })

    } catch(err: any) {
        
        if(err.message === 'Failed to send Verification Email'){
            return res.status(500).json({ error: 'Failed to Send Verification Email' })
        }

        return res.status(500).json({ error: 'Server Error' })
    }
}

module.exports = NewTokenController