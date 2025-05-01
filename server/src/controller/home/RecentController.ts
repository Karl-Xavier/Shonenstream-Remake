import { Request, Response } from "express";
const FetchHTML = require('../../config/Cheerio')

const homeURL = 'https://animekai.to/home'

async function RecentController(req: Request, res: Response): Promise<any> {
    
    try {
        
        const $ = await FetchHTML(homeURL)

        const animeList: any = [] as any

        $('.aitem').each((_index: any, element: any) => {

            const link = $(element).find('a.poster').attr('href')
            const title = $(element).find('.title').attr('title')
            const imgURL = $(element).find('img').attr('data-src')
            const episode = $(element).find('.info span.sub').text().trim()


            // Push Data in to animeList array

            animeList.push({
                title,
                link,
                imgURL,
                epiNum: episode
            })

        })
        
        const trimmedArray = animeList.slice(0, 12)

        return res.status(200).json({trimmedArray})

    } catch(err: any) {
        
        console.log(err)

        return res.status(500).json({ error: 'Internal Server Error' })

    }

}

module.exports = RecentController