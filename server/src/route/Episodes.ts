import {Request, Response, Router} from 'express'
import puppeteer, { Browser, Page } from 'puppeteer'

const router = Router()

interface EpisodeItem {
    title?: string;
    link?: string;
    number?: string;
}

interface AjaxRes {
    url?: string;
    body?: any;
}

router.get('/episodes', async(req: Request, res: Response) => {

    const episodeName: string = req.query.name as string

    const episodes: EpisodeItem[] = []

    const ajaxResponse: AjaxRes[] = []

    let capturedLink: boolean = false

    try {
        
        // launch puppeteer

        const browser: Browser = await puppeteer.launch({
            headless: true,
            timeout: 0,
        })

        const page: Page = await browser.newPage()

        page.on('response', async (response) => {

            const request = response.request()
            const url = request.url()

            if(url.includes('ajax/episodes/list') && !capturedLink){

                if(request.resourceType() === 'xhr' || request.resourceType() === 'fetch'){

                    try {
                        
                        const responseBody = await response.json()

                        ajaxResponse.push({
                            url,
                            body: responseBody
                        })

                        if(url.includes('ajax/episodes/list')){

                            capturedLink = true
                        }

                    } catch(err: any) {
                        
                        try {
                            
                            const responseText = await response.text()

                            ajaxResponse.push({
                                url,
                                body: responseText
                            })

                            if(url.includes('ajax/episodes/list')){

                                capturedLink = true
                            }

                        } catch(textErr: any) {
                            console.warn('Failed to parse ajax response as JSON or Text:', url, response.status())
                        }
                    }

                    if(capturedLink){

                        console.log('Already caught the link')

                        await browser.close()
                        return
                    }
                }
            }

        })

        await page.goto(`https://animekai.to/watch/${episodeName}`)

        console.log(JSON.stringify(ajaxResponse))

        await browser.close()

    } catch(err: any) {
        console.log(err)
    }

})


module.exports = router