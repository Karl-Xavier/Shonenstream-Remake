import { createClient } from "redis";
import nodeEnv from "./nodeEnv";

const redisURL = nodeEnv === 'production' ? process.env.REDIS_URL as string : 'redis://localhost:6379'

const client = createClient(
  {
    url: redisURL,
    socket: {
      connectTimeout: 10000
    }
  }
)

client.on('connect', () => console.log('Connected to Redis'))

async function connectClient(){
  await client.connect()
}

connectClient()

export default client