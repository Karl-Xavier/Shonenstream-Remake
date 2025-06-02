import axios from 'axios'
import getMALID from './getMALID'
const ProxyManager = require('../utils/proxyManager')
const FetchHTML = require('../config/Cheerio')

const proxy = new ProxyManager('./proxies.txt', 10 * 60 * 1000, 'http')

interface RelatedSeason {
  imgURL: string;
  title: string;
  link: string;
}
export async function getSeasons(name: string) {

  /* 
  1. name
  2. other name
  */
  
  try{

    const url = `https://animekai.to/watch/${name}`

    const $ = await FetchHTML(url)

    const relatedSeason: RelatedSeason[] = []

    $('.player-section .player-bottom #seasons .aitem-wrapper .aitem').each((index: any, element: any) => {
      const imgURL = $(element).find('.inner .poster div img').attr('src')
      const title = $(element).find('.inner .detail span').text().trim()
      const link = $(element).find('.inner .poster').attr('href')

      relatedSeason.push({ imgURL, title, link })
    })

    return relatedSeason

  }catch(err: any){
    throw new Error(err)
  }

}