import { Request, Response } from "express";
const FetchHTML = require('../../config/Cheerio')

const url = 'https://animekai.to/home'

async function PopularController(req: Request, res: Response): Promise<any> {

    interface PopularItem {
        title?: string;
        imgURL?: string;
    }

    try {
        
        const $ = await FetchHTML(url)

        const popularAnime: PopularItem[] = []

        const dailyAnime = $('#trending-anime .aitem-col.top-anime.tab-body[data-id="day"]')

        dailyAnime.find('a').each((i: any, element: any) =>{

            const title = $(element).text().trim()
            
            const styleAttr = $(element).attr('style')

            const match = styleAttr && styleAttr.match(/url\((.*?)\)/)

            const imgURL = match ? match[1].trim().replace(/['"]/g, '') : null

            popularAnime.push({
                title,
                imgURL
            })

        })

        return res.status(200).json({ popularAnime })

    } catch(err: any) {
        
        console.log(err)

        return res.status(500).json({ error: 'Internal Server Error' })
    }

}

module.exports = PopularController