import { createClient } from 'redis'

const client = createClient()

client.on('error', (err: any) => console.log('Redis Client Error', err));

(async () => {
    await client.connect()
})()

module.exports = client