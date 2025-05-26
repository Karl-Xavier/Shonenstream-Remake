import axios from "axios";
const ProxyManager = require('../utils/proxyManager')

const FetchHTML = require('../config/Cheerio')

const proxy = new ProxyManager('./proxies.txt', 10 * 60 * 1000, 'https')

interface UpcomingItem {
  imgURL: string;
  title: string;
}

async function getUpComing(){

  try {

    const query = `
      query {
        Page(perPage: 10) {
          media(type: ANIME, sort: START_DATE, status: NOT_YET_RELEASED){
            title {
              romaji
            }
            coverImage {
              large
            }
          }
        }
      }
    `

    let upComingList: UpcomingItem[] = []

    const response = await axios.post('https://graphql.anilist.co', { query }, { 
      headers: {
        'Content-Type': 'application/json'
      },
      httpsAgent: proxy.getAgent(),
      timeout: 10000,
    })

    const simplified = response.data.data.Page.media.map((anime: any) => ({

      title: anime.title.romaji,
      imgURL: anime.coverImage.large

    }))


    upComingList.push(...simplified)

    return upComingList

  } catch(err: any) {
    throw new Error(err)
  }

}

module.exports = getUpComing