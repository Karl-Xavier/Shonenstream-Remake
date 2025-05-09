import mongoose from "mongoose"
const nodeEnv = require('./nodeEnv')

const mongoURL = nodeEnv === 'production' ? process.env.MONGO_URL as string : 'mongodb://localhost:27017/shonenstream'

const connectDb = async () => {
    try {
        await mongoose.connect(mongoURL,{
            connectTimeoutMS: 120000,
            serverSelectionTimeoutMS: 120000
        })
        console.log('Connect to Database Established')
    } catch(err) {
        console.log('Error Connecting to database', err)
        process.exit(1)
    }
}

module.exports = connectDb