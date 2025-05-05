import express from 'express'
import cors from 'cors'
const connectDb = require('./config/db')
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

const app = express()

const port = process.env.PORT || 5000

// CORS Setup

const allowedOrigin = ['http://localhost:3000', 'https://myanimetv.vercel.app']

const corsOption = {

    origin: function(origin: any, callback: any){
        if(allowedOrigin.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        }else{
            callback(new Error('Not Allowed By CORS'))
        }
    },
    credentials: true

}

app.use(cors(corsOption))
app.use(express.json({ limit: '1gb' }))

app.use('/static', express.static(path.join(__dirname, '..', 'static')))

connectDb()

app.get('/', (req, res) =>{
    res.send('Bonjour')
})

// Import all routes //


const auth = require('./route/Auth')
const home = require('./route/Home')
const search = require('./route/Suggestion')
const genre = require('./route/Genre')
const category = require('./route/Category')
const movie = require('./route/Movie')
const feed = require('./route/News')
const watch = require('./route/Watch')

const img = require('./route/ProfilePicture')

app.use('/api/auth', auth)
app.use('/api', home)
app.use('/api', search)
app.use('/api', genre)
app.use('/api', category)
app.use('/api', movie)
app.use('/api', feed)
//app.use('/api', watch)

app.use(img)

app.listen(port, () => {
    console.log(`App Running on port ${port}`)
})