import { Request, Response, Router } from "express";
const FetchHTML = require('../config/Cheerio')
const scrapeNewsPage = require('../utils/getFeedById')
const redisCachedData = require('../middleware/cacheData')

const router = Router()

const url = 'https://myanimelist.net/news'

interface FeedItem {
    id: string;
    title?: string;
    description?: string;
    image?: string;
    date?: string;
}

router.get('/feeds', redisCachedData('news:'), async(req: Request, res: Response): Promise<any> => {

    try {
        
        const $ = await FetchHTML(url)

        let links: string[] = []

        $('.news-list').find('.news-unit a.image-link').each((i: any, element: any) => {

            const href = $(element).attr('href')

            links.push(href)
        })

        // Scrape each page link

        const newsDataPromise = links.map(async (link): Promise<FeedItem | null> =>{

            try{

                return await scrapeNewsPage(link)

            }catch(err: any) {
                console.log(`Error Scraping ${link}`)
                return null
            }

        })

        const newsData: (FeedItem | null)[] = await Promise.all(newsDataPromise)

        return res.status(200).json({ newsData })

    } catch(err: any) {
        console.log(err)
    }

})


module.exports = router