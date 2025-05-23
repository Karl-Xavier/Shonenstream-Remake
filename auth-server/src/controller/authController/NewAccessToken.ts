import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
const { AccessToken } = require('../../utils/CreateToken')
const nodeEnv = require('../../config/nodeEnv')


const refreshKey: string = process.env.REFRESH_TOKEN_SECRET as string

const frontendURL = nodeEnv === 'production' ? 'myanimetv.vercel.app' : 'localhost'

async function NewAccessTokenController(req: Request, res: Response): Promise<any>{

    const refreshToken = req.cookies.refresh_secret

    // Check if there is a refresh token

    if(!refreshToken){
        return res.status(401).json({ error: 'No Refresh Token' })
    }


    // Verify Tokens

    jwt.verify(refreshToken, refreshKey, (err: any, user: any) => {

        if(err) return res.status(403).json({ error: 'Not Valid' })

        const newAccessToken = AccessToken(user)

        return res.cookie('access_secret', newAccessToken, {
            httpOnly: false,
            path: '/',
            sameSite: 'lax',
            domain: frontendURL,
            secure: nodeEnv === 'production' ? true : false
        })
    })

}

module.exports = NewAccessTokenController