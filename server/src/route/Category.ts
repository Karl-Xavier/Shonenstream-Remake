import {Request, Response, Router} from 'express'
import puppeteer from 'puppeteer'
const FetchHTML = require('../config/Cheerio')
const redisCachedData = require('../middleware/cacheData')

const router = Router()

router.get('/category/:name', async(_req: Request, res: Response): Promise<any> => {

    const name = _req.params.name

    if(!name){
        return res.status(400).json({ error: 'Missing Params' })
    }

    const url = `https://animekai.to/watch/${name}`

    const $ = await FetchHTML(url)

    try {

        interface Episode {
            title?: string;
            link?: string;
        }
    
        interface CategoryItem {
            title?: string;
            description?: string;
            imgURL?: string;
            altName?: string[];
            genre?: string[];
            status?: string;
            releaseDate?: string;
            episode?: Episode[];
        }
    
        const categoryItem: CategoryItem = {}
    
        let genres: string[] = []
        let released = ''
        let status = ''
        
        $('.entity-section').each((index: any, element: any) => {

            const title = $(element).find('.title').text().trim()
            const description = $(element).find('.desc').text()
    
            const imgURL = $(element).find('.poster img').attr('src')
            const altTitle = $(element).find('.al-title').text()
    
            const altTitleArray = altTitle.split(';').map((item: any) => item.trim()).filter((item: any) => item !== "")
    
            categoryItem.title = title
            categoryItem.imgURL = imgURL
            categoryItem.description = description
            categoryItem.altName = altTitleArray
    
        })
    
        // Get the Details
    
        $('.entity-section .entity-scroll .detail div').each((_: any, element: any) => {
    
            const label = $(element).text().trim().toLowerCase()
    
            if(label.includes('genres')){
    
                // Collect all <a> text inside the span
                genres = $(element).find('span a').map((i: any, a: any) => $(a).text().trim()).get()
    
            }else if(label.includes('premiered')){
    
                released = $(element).find('span a').text().trim()
    
            }else if(label.includes('status')){
    
                status = $(element).find('span').text().trim()
                
            }
    
            categoryItem.genre = genres
            categoryItem.releaseDate = released
            categoryItem.status = status
    
        })

        return res.status(200).json(categoryItem)

    } catch(err: any) {
        
        console.log(err)

        return res.status(500).json({ error: 'Server Error' })

    }

})

module.exports = router