import axios from 'axios'
import getMALID from './getMALID'
const ProxyManager = require('../utils/proxyManager')

const proxy = new ProxyManager('./proxies.txt', 10 * 60 * 1000, 'http')

interface RecentIdItems {
  animeId: string | null;
  zoroId: string;
}

export async function getRecentId(title: string, episode: string): Promise<RecentIdItems>{

  try {
    
    const malID = await getMALID(title)

    const response = await axios.get(`https://miruro.tv/api/episodes?malId=${malID}`, {
      httpAgent: proxy.getAgent(),
      timeout: 10000
    })

    const responseData = await response.data

    console.log(responseData)

    let animeId: string | null = null;

    if (responseData?.ANIMEPAHE && typeof responseData.ANIMEPAHE === 'object') {
      animeId = Object.keys(responseData.ANIMEPAHE)[0] || null;
    }

    const ZORO: any = Object.values(responseData.ZORO)[0]

    const ZoroID = ZORO.episodeList.episodes.find((item: any) => String(item.number) === episode)

    return {
      animeId,
      zoroId: ZoroID
    }

  } catch (err: any) {
    console.log(err)
    throw new Error(err.message)
  }

}