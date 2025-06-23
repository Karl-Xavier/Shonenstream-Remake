import mongoose from "mongoose";
import nodeEnv from "./nodeEnv";

const prod_url = process.env.MONGO_URI as string

const mongodbURI = nodeEnv === 'production' ? prod_url : 'mongodb://localhost:27017/shonenstream'

const connectDb = async()=>{
  try {
    await mongoose.connect(mongodbURI, {
      connectTimeoutMS: 1200000,
      serverSelectionTimeoutMS: 1200000
    })

    console.log('Connected to Database')
  } catch (err: any) {

    console.log('Connection Failed', err)

    process.exit(1)
  }
}

export default connectDb