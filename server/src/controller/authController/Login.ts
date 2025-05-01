import {Request, Response} from 'express'
import bcrypt from 'bcrypt'
const User = require('../../model/User')
const { AccessToken, RefreshToken } = require('../../utils/CreateToken')
const nodeEnv = require('../../config/nodeEnv')
import jwt from 'jsonwebtoken'

// Define Frontend URL

const frontendURL = nodeEnv === 'production' ? 'myanimetv.vercel.app' : 'localhost'

console.log(frontendURL)

const jwt_secret: string = process.env.ACCESS_TOKEN_SECRET as string

async function LoginController(req: Request, res: Response): Promise<any>{

    const { username, password } = req.body
    const token: string = req.query.token as string

    const existingUser = await User.findOne({ username })

    try {
        
        // Check if user exists

        if(!existingUser){
            return res.status(401).json({ error: 'Account does not exists' })
        }

         // Check if there is a verification token

        if(token){
            try {
                const decode = jwt.verify(token, jwt_secret)

                // check if token matches stored token in database

                if(existingUser.verificationToken !== token){
                    return res.status(403).json({ error: 'Invalid Verification token' })
                }

                // Mark User as Verified and clear token

                if(existingUser.isVerified === false){
                    existingUser.isVerified = true
                    existingUser.verificationToken = null

                    await existingUser.save()
                }
            } catch(err: any) {

                if(err.name === 'TokenExpiredError'){
                    return res.status(401).json({ error: 'Verification Token Expired' })
                }

                return res.status(401).json({ error: 'Invalid Verification Token' })
            }
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password)

        // Check if password is valid

        if(!isPasswordValid){
            return res.status(401).json({ error: 'Wrong Password' })
        }

        // Check if user is verified

        if(existingUser.isVerified === false){
            return res.status(401).json({ error: 'Please Verify your account to Login' })
        }

        const access_token = AccessToken(existingUser)
        const refresh_token = RefreshToken(existingUser)

        res.cookie('access_secret', access_token, {
            httpOnly: false,
            secure: nodeEnv === 'production',
            domain: frontendURL,
            sameSite: 'lax',
            path: '/'
        })

        res.cookie('refresh_secret', refresh_token, {
            httpOnly: true,
            secure: nodeEnv === 'production',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.cookie('user_key', existingUser.userId, {
            httpOnly: false,
            secure: nodeEnv === 'production',
            domain: frontendURL,
            sameSite: 'lax',
            path: '/'
        })

        return res.status(201).json({ message: 'Login Successful', userData: existingUser })

    } catch(err) {
        console.log(err)

        return res.status(500).json({ error: 'Server Error' })
    }

}

module.exports = LoginController