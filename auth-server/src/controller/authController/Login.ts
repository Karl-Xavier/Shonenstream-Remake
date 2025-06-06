import {Request, Response} from 'express'
import bcrypt from 'bcrypt'
const User = require('../../model/User')
const { AccessToken, RefreshToken } = require('../../utils/CreateToken')
const nodeEnv = require('../../config/nodeEnv')
import jwt from 'jsonwebtoken'

// Define Frontend URL

const frontendURL = nodeEnv === 'production' ? 'myanimetv.vercel.app' : 'localhost'

const jwt_secret: string = process.env.ACCESS_TOKEN_SECRET as string

async function LoginController(req: Request, res: Response): Promise<any>{

    const { username, password } = req.body

    const existingUser = await User.findOne({ username })

    try {
        
        // Check if user exists

        if(!existingUser){
            return res.status(404).json({ error: 'Account does not exists' })
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password)

        if(!isPasswordValid){
            return res.status(401).json({ error: 'Wrong Password' })
        }

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