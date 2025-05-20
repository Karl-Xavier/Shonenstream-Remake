import {Request, Response, Router} from 'express'
import puppeteer from 'puppeteer'
import getCategoryData from '../service/getCategoryData'
const FetchHTML = require('../config/Cheerio')
const redisCachedData = require('../middleware/cacheData')

const router = Router()

router.get('/category/:name', redisCachedData('category:'), async(_req: Request, res: Response): Promise<any> => {

    const name = _req.params.name

    if(!name){
        return res.status(400).json({ error: 'Missing Params' })
    }

    try {

        const categoryItem = await getCategoryData(name)

        return res.status(200).json(categoryItem)

    } catch(err: any) {
        
        console.log(err)

        return res.status(500).json({ error: 'Server Error' })

    }

})

module.exports = router