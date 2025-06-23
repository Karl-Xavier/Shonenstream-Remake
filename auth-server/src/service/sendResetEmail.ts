import nodemailer, { SendMailOptions } from 'nodemailer'
const nodeEnv = require('../config/nodeEnv')

const frontendURL = nodeEnv === 'production' ? 'https://myanimetv.vercel.app/' : 'http://localhost:3000/'

const senderEmail: string = process.env.SMTP_EMAIL as string
const senderPass: string = process.env.SMTP_PASS as string

async function ResetEmail(email: string, token: string): Promise<any>{

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
            subject: 'Account Recovery',
            html: `
                <p>Click on the link below if it doesn't open, copy it and paste in your browser</p>
                <a href='${frontendURL}auth/change-password?token=${token}&for=${email}'></a>
            `
        }

        await transporter.sendMail(mailOptions)

    } catch(err) {
        console.log(err)
        throw new Error('Failed to send Reset Email')
    }

}

module.exports = ResetEmail