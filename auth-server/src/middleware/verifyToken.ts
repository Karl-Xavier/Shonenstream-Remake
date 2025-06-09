import { Request, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import nodeEnv from '../config/nodeEnv'
const User = require('../model/User')
const { AccessToken } = require('../utils/CreateToken')

export {}

declare global {
    namespace Express {
        interface Request {
            user?: string | JwtPayload
        }
    }
}

const accessToken: string = process.env.ACCESS_TOKEN_SECRET as string

async function verifyToken(req: Request, res: Response, next: NextFunction){
    
    const token: string = req.cookies.access_secret as string
    const refreshToken: string = req.cookies.refresh_secret as string
    const id: string = req.cookies.user_key as string

    if(token){

        try{

            const decoded = jwt.verify(token, accessToken) as JwtPayload

            req.user = decoded

            return next()

        }catch(err){
            return res.status(401).json({ error: 'Token Expired' })
        }

    }

    if(!refreshToken || !id){
        return res.status(401)
    }

    try{

        const existingUser = await User.findOne({ userId: id })

        if(!existingUser) return res.status(401)

        const newAccessToken = AccessToken(existingUser)

        const frontendURL = nodeEnv === 'production' ? 'myanimetv.vercel.app' : 'localhost'

        res.cookie('access_secret', newAccessToken, {
            httpOnly: true,
            secure: nodeEnv === 'production',
            domain: frontendURL,
            sameSite: 'lax',
            maxAge: 15 * 60 * 1000
        })

        req.user = jwt.decode(newAccessToken) as JwtPayload

        next()

    }catch(err){
        return res.status(401).json({ error: 'Token refresh Failed' })
    }
}

module.exports = verifyToken