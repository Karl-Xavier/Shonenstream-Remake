import { Request, Router, Response } from "express";
const FetchHTML = require('../config/Cheerio')
import { v4 } from "uuid";

const router = Router()

// Define URL

const searchURL = 'https://animekai.to/browser'

interface SearchItem {
    id: string;
    title: string;
    link: string;
    imgURL: string;
    episode: string;
    type: string;
}

router.get('/search', async (_req: Request, res: Response): Promise<any> => {

    const name: string = _req.query.name as string

    const pagequery: string = _req.query.page as string || ''

    try {

        let url: string = ''

       if (!name && name === undefined) {
            url = searchURL;
        } else if(name && name !== undefined) {
            url = `${searchURL}?keyword=${name}`
            
            if (pagequery && pagequery.trim() !== '') {
                url += `&page=${pagequery}`;
            }
        }

        const queryList: SearchItem[] = []

        const $ = await FetchHTML(url)
        
        $('.aitem').each((_index: any, element: any) => {

            const title = $(element).find('.title').attr('title')
            const link = $(element).find('.poster').attr('href')
            const imgURL = $(element).find('img').attr('data-src')
            const episode = $(element).find('.info .sub').text().trim()
            const type = $(element).find('.info span:last-child').text().trim()

            queryList.push({
                id: v4(),
                title,
                link: `${link}#ep=1`,
                imgURL,
                episode,
                type
            })

        })

        let page: string | null = null

       const isPagination = $('nav.navigation ul.pagination')

       if(isPagination){

        isPagination.each((index: any, element: any) => {
            const pageHref = $(element).find('li.page-item:last-child a').attr('href')

            const url = new URL(pageHref)

            const pageNumber = url.searchParams.get('page')

            page = pageNumber
        })

       }else{
            page = null
       }

        return res.status(200).json({ results: queryList, page})

    } catch(err: any) {
        
        console.log(err)

        return res.status(500).json({ error: 'Server Error' })

    }

})


module.exports = router