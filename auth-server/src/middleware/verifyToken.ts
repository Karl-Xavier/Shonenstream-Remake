import { Request, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'

export {}

declare global {
    namespace Express {
        interface Request {
            user?: string | JwtPayload
        }
    }
}

const accessToken: string = process.env.ACCESS_TOKEN_SECRETm as string

function verifyToken(req: Request, res: Response, next: NextFunction){
    
    const authHeader: string = req.headers.refresh_secret as string

    if(authHeader){
        
        const token = authHeader.split(' ')[1]

        jwt.verify(token, accessToken, (err: any, user: any) => {

            if(err){
                return res.status(401).json({ error: 'Token Expired' })
            }

            req.user = user
            next()

        })

    }else{
        return res.status(403).json({ error: 'UnAuthorized' })
    }
}

export default verifyToken