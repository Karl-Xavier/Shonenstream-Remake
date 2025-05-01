import puppeteer, { Browser, Page } from "puppeteer"
import { spawn } from "child_process"
import path = require("path")

async function getIframeSRC(){

    let chromeProcess
    let browser: Browser

   try{

        console.log('Launching....')

        const chromeExecutablePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
        const chromeArgs = [
            `--remote-debugging-port=9222`,
            `--user-data-dir=${path.join(__dirname, 'chrome_debug_profile')}`
        ]

        chromeProcess = spawn(chromeExecutablePath, chromeArgs, {
            detached: true,
            stdio: 'ignore'
        })

        console.log('Launched Chrome for remote debugging....')

        await new Promise(resolve => setInterval(resolve, 2000))

        browser = await puppeteer.connect({
            browserURL: 'http://localhost:9222'
        })

        const page: Page = await browser.newPage()

        page.on('request', request => {
            console.log(request.method(), request.url())
        })

        page.on('console', msg => {
            console.log(msg.text())
        })

        await page.goto('https://animekai.to/watch/solo-leveling-93rg#ep=1', { waitUntil: 'networkidle2', timeout: 0 })

        await page.screenshot({ path: './screenshots/animeWatch.png', fullPage: true })

        console.log('Screenshot Taken')

        await browser.disconnect()

    } catch(err: any){

        console.log(err)

    }

}

//getIframeSRC()