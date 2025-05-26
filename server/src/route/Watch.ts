import { Router, Request, Response } from "express";
import { fetchSubSource } from "../service/fetchSrc/fetchSubSource";
import { fetchDubSource } from "../service/fetchSrc/fetchDubSource";

const router = Router()

interface WatchItem{
    subSource: string | null;
    dubSource: string | null;
}

router.get('/watch', async (req: Request, res: Response): Promise<any> => {

    const animeId: string = req.query.animeId as string
    const episodeId: string = req.query.episodeId as string
    const epiNum: string = req.query.num as string

    try{

        const subSource = await fetchSubSource(animeId, epiNum, episodeId)

        const dubSource = await fetchDubSource(episodeId)

        return res.status(200).json({ subSource, dubSource })

    }catch(err: any){
        console.log(err)

        return res.status(500).json({ error: 'Server Error' })
    }

})

module.exports = router