import { createClient } from 'redis'
const nodeEnv = require('./nodeEnv')

const redisURL = nodeEnv === 'production' ? process.env.REDIS_URL as string : 'redis://localhost:6379'

const client = createClient({
    url: redisURL,
    socket: {
        connectTimeout: 10000
    }
})

client.on('connect', ()=> console.log('Connected to Redis'))

client.on('error', (err: any) => console.log('Redis Client Error', err));

(async () => {
    await client.connect()
})()

module.exports = client