import { Request, Router, Response } from "express";
const FetchHTML = require('../config/Cheerio')

const router = Router()

// Define URL

const searchURL = 'https://animekai.to/browser'

router.get('/search', async (_req: Request, res: Response): Promise<any> => {

    const name: string = _req.query.name as string

    try {

        const url = `${searchURL}?keyword=${name}`

        const queryList: any = [] as any

        const $ = await FetchHTML(url)
        
        $('.aitem').each((_index: any, element: any) => {

            const title = $(element).find('.title').attr('title')
            const link = $(element).find('.poster').attr('href')
            const imgURL = $(element).find('img').attr('data-src')

            queryList.push({
                title,
                link,
                imgURL
            })

        })

        return res.status(200).json({ queryList })

    } catch(err: any) {
        
        console.log(err)

        return res.status(500).json({ error: 'Server Error' })

    }

})


module.exports = router