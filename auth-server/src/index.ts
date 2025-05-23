import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from "./config/db";

dotenv.config()

const app = express()

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

app.use('/api/auth', auth)

app.get('/', (req, res)=>{
  res.send('Auth Server')
})

app.listen(port, () => {
  console.log('Auth Server Running')
})