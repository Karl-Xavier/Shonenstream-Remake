import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from "./config/db"
import cookieParser from "cookie-parser"

dotenv.config()

const app = express()

app.use(cookieParser())

app.use(express.json({ limit: '1gb' }))

const allowedOrigin = ['http://localhost:3000', 'https://myanimetv.vercel.app']

const corsOption = {
  origin: function (origin: any, callback: any){
    if(allowedOrigin.indexOf(origin) !== -1 || !origin){
      callback(null, true)
    }else{
      callback(new Error('Not Allowed by CORS'))
    }
  },
  credentials: true
}

app.use(cors(corsOption))
connectDb()

const port = process.env.PORT || 5001

const auth = require('./routes/Auth')
const user = require('./routes/Users')
const comment = require('./routes/Comments')

app.use('/api/auth', auth)
app.use('/api/user', user)
app.use('/api/comment', comment)

app.get('/', (req, res)=>{
  res.send('Auth Server')
})

app.listen(port, () => {
  console.log('Auth Server Running')
})