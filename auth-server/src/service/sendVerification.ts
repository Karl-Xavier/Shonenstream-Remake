import nodemailer, { SendMailOptions } from 'nodemailer'
const nodeEnv = require('../config/nodeEnv')

const frontendURL = nodeEnv === 'production' ? 'https://myanimetv.vercel.app/' : 'http://localhost:3000/'

const senderEmail: string = process.env.SMTP_EMAIL as string
const senderPass: string = process.env.SMTP_PASS as string

async function VerificationMail(email: string, token: string): Promise<any>{

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: senderEmail,
            pass: senderPass
        }
    })

    try {
        const mailOptions: SendMailOptions = {
            from: senderEmail,
            to: email,
            subject: 'Verify your Account',
            html: `
                <h2>Welcome, Copy the Token Below to Verify your account</h2>
                <p>Your Verification Token is ${token}</p>
            `
        }

        await transporter.sendMail(mailOptions)

    } catch(err) {
        console.log(err)
        throw new Error('Failed to send Verification Email')
    }

}

module.exports = VerificationMail