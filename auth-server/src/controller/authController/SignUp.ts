import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { generateOTP } from '../../utils/generateOtp'
const User = require('../../model/User')
const VerificationMail = require('../../service/sendVerification')

async function SignUpController(req: Request, res: Response): Promise<any> {
    const { fullName, username, email, password, profileImage } = req.body

    const requiredData = { fullName, username, email, password }

    const hasEmptyFields = Object.values(requiredData).some((val) => val === undefined || val === '')

    const accessToken: string = process.env.ACCESS_TOKEN_SECRET as string

    try {

        // Safety Check

        if(hasEmptyFields){
            return res.status(400).json({ error: 'Some Fields are missing' })
        }

        const existingUser = await User.findOne({ email })

        const existingUserName = await User.findOne({ username })

        if(existingUser){
            return res.status(400).json({ error: 'User already exists' })
        }

        if(existingUserName){
            return res.status(400).json({ error: 'Username already exists' })
        }

        const saltRounds = 12
        const hashedPassword = await bcrypt.hash(password, saltRounds)

        const token = generateOTP()

        await VerificationMail(email, token)

        const newUser = new User({
            fullName,
            username,
            email,
            password: hashedPassword,
            profileImage,
            isVerified: false,
            verificationToken: token,
            tokenCreatedAt: Date.now()
        })

        await newUser.save()

        return res.status(200).json({ username })

    } catch(err: any) {
        console.log(err)

        if(err.message === 'Failed to send Verification Email'){
            return res.status(500).json({ error: 'Failed to Send Verification Email' })
        }

        return res.status(500).json({ error: 'Server Error' })
    }
}

module.exports = SignUpController