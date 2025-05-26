import { Request, Response } from "express";
const FetchHTML = require('../../config/Cheerio')
import { v4 } from 'uuid'
import { getRecentId } from "../../service/getRecentIds";

const homeURL = 'https://animekai.to/home'

interface AnimeListItem {
    id: string;
    title: string;
    link: string;
    imgURL: string;
    epiNum: string;
}

async function RecentController(req: Request, res: Response): Promise<any> {
    
    try {
        
        const $ = await FetchHTML(homeURL)

        const animeList: AnimeListItem[] = []

        $('.aitem').each((index: any, element: any) => {

            const link = $(element).find('a.poster').attr('href')
            const title = $(element).find('.title').attr('title')
            const imgURL = $(element).find('img').attr('data-src')
            const episode = $(element).find('.info span.sub').text().trim()


            // Push Data in to animeList array

            animeList.push({
                id: v4(),
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