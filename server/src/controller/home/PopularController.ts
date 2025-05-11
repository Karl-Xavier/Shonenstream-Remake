import { Request, Response } from "express";
const FetchHTML = require('../../config/Cheerio')
import { v4 } from "uuid";
const getWeeklySchedule = require('../../service/getWeeklySchedule')
const getUpComing = require('../../service/getUpcoming')

const url = 'https://animekai.to/home'

async function PopularController(req: Request, res: Response): Promise<any> {

    interface PopularItem {
        id: string;
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
                id: v4(),
                title,
                imgURL
            })

        })

        const weeklyScheduleData = await getWeeklySchedule()

        const upcoming = await getUpComing()

        return res.status(200).json({ popularAnime, weeklyScheduleData, upcoming })

    } catch(err: any) {
        
        console.log(err)

        return res.status(500).json({ error: 'Internal Server Error' })
    }

}

module.exports = PopularController