const client = require('../config/redisConfig')
import { Response, Request, NextFunction } from "express"

function redisCachedData(keyPrefix: string, ttl = 3600){

    return async (req: Request, res: Response, next: NextFunction) => {

        const key = keyPrefix + req.originalUrl

        try {
            
            const cachedData = await client.get(key)

            if(cachedData){

                const data = JSON.parse(cachedData)

                return res.json({ data })
            }

            // Monkey Patch res.json to cache the response 

            const originalUrl = res.json.bind(res)

            res.json = (body: any) => {
                
                (async () => {

                    try {

                        if(res.statusCode >= 200 && res.statusCode < 300){

                            await client.setEx(key, ttl, JSON.stringify(body.data || body))
                        }

                        return originalUrl(body)

                    } catch(err: any) {
                        
                        console.log('Redis caching failed', err)
                    }
                })()

                return res
            }

            next()

        } catch(err: any) {
            
            console.error('Redis Cache error', err)

            next()
        }

    }

}

module.exports = redisCachedData