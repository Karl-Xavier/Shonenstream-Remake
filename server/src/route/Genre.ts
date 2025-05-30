import { Request, Response, Router } from "express";
const redisCachedData = require('../middleware/cacheData')
import { scrapePage } from "../utils/scrapePage";
const scrapeAllPage = require('../utils/scrapeAllPage')

const router = Router()


router.get('/genre/:genre', redisCachedData('genre:'), async(req: Request, res: Response): Promise<any> => {

    const pageQuery = req.query.page || '1'

    let page: string | undefined = undefined
 
    if(typeof pageQuery === 'string'){
 
     page = pageQuery
 
    }else{
 
     return res.status(400).json({ error: 'Invalid Page Parameter' })
    }

    const name = req.params.genre

    const type = 'genres'

    try {
        
        const data = await scrapePage(page, name, type)

        // Send data immediately after scraping page 1

        res.status(200).json({ data })

        if(page === '1'){

            scrapeAllPage(data.totalPages, name, type).catch((err: any) => console.log(err))

        }

    } catch (err: any) {
        
        console.log('Scraping Error', err)

        return res.status(500).json({ error: 'Scraping Failed' })

    }


})

module.exports = router