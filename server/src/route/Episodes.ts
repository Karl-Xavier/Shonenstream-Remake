import {Request, Response, Router} from 'express'
import axios from 'axios';
import getMALID from '../service/getMALID';
const ProxyManager = require('../utils/proxyManager')
import { v4 } from 'uuid';

const router = Router()

interface EpisodeItem {
    id: string;
    title?: string;
    link?: string;
    number?: string;
    animeId: string;
}

const proxy = new ProxyManager('./proxies.txt', 10 * 60 * 1000, 'https')

router.get('/api/episodes', async(req: Request, res: Response): Promise<any> => {

    const episodeName: string = req.query.name as string

    const episodesList: EpisodeItem[] = []

    try {

        const malID = await getMALID(episodeName)

       const url = `https://miruro.tv/api/episodes?malId=${malID}`

       const response = await axios.get(url, {
        httpAgent: proxy.getAgent(),
        timeout: 10000
       })

       const responseData = await response.data

       const dataEpisode: any = Object.values(responseData.TMDB)[0]
       const animeId = Object.keys(responseData.ANIMEPAHE)[0]
       const kaiId = Object.keys(responseData.ANIMEKAI)[0]

       const linkURL = `/watch/${episodeName.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-')}-${kaiId}`

       dataEpisode.metadata.episodes.forEach((episode: any) => {

        episodesList.push({ id: v4(), title: episode.title, link: `${linkURL}#ep=${episode.number}`, number: episode.number, animeId })

       })

       return res.status(200).json(episodesList)

    } catch(err: any) {
        console.log(err)
    }

})


module.exports = router