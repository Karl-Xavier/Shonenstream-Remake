import jwt from 'jsonwebtoken'

const accessKey: string = process.env.ACCESS_TOKEN_SECRET as string
const refreshKey: string = process.env.REFRESH_TOKEN_SECRET as string

const AccessToken = (user: any) => {
    return jwt.sign({ email: user.email, username: user.username }, accessKey, { expiresIn: '15m' })
}

const RefreshToken = (user: any) => {
    return jwt.sign({ email: user.email, username: user.username }, refreshKey, { expiresIn: '7d' })
}

module.exports = { AccessToken, RefreshToken }