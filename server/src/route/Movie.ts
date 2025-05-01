import { Request, Response, Router } from "express";
import { scrapePage } from "../utils/scrapePage";
const scrapeAllPage = require('../utils/scrapeAllPage')
const redisCachedData = require('../middleware/cacheData')

const router = Router()


router.get('/movies', redisCachedData('movie:'), async (req: Request, res: Response): Promise<any> => {

    const pageQuery = req.query.page || '1'

   let page: string | undefined = undefined

   if(typeof pageQuery === 'string'){

    page = pageQuery

   }else{

    return res.status(400).json({ error: 'Invalid Page Parameter' })
   }
    
    const name = null

    const type: string = 'movie'

    try{

        const data = await scrapePage(page, name, type)

        res.json(data)

        if(page === '1'){

            scrapeAllPage(data.totalPages, name, type).catch((err: any) => console.log(err))

        }

    }catch(err: any){

        console.log(err)

        return res.status(500).json({ error: 'Server Error' })

    }

})


module.exports = router