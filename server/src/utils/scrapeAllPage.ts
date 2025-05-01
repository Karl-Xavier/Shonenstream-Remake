import { scrapePage } from "./scrapePage"
const client = require('../config/redisConfig')

async function scrapeAllPage(totalPage: number, genre: string, type: string){

    for (let i = 2; i <= totalPage; i++){

        const result = await scrapePage(String(i), genre, type)

        // check if it is genre or movie route

        let key = ''

        if(type === 'genres' && name !== null){

            key = `genre:/api/genre/${genre}?page=${i}`

        }else {

            key = `movie:/api/movies?page=${i}`

        }

        await client.setEx(key, 3600, JSON.stringify(result))

    }

}

module.exports = scrapeAllPage