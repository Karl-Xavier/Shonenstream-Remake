import axios from "axios";
import * as cheerio from "cheerio";
const ProxyManager = require('../utils/proxyManager')

const proxy = new ProxyManager('./proxies.txt', 10 * 60 * 1000, 'https')

async function FetchHTML(url: string): Promise<any>{

    try {
        
        const { data } = await axios.get(url, {
            httpAgent: proxy.getAgent(),
            timeout: 10000,
        })

        return cheerio.load(data)

    } catch(err: any) {

        console.log(err.message)

        console.log(err)

        return null
    }

}

module.exports = FetchHTML