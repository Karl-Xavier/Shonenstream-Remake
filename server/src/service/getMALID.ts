import axios from 'axios'
const ProxyManager = require('../utils/proxyManager')

const proxy = new ProxyManager('./proxies.txt', 10 * 60 * 1000, 'https')

export default async function getMALID(animeName: string): Promise<any> {

  const url = `https://api.jikan.moe/v4/anime?q=${animeName}`

  try {

    const response = await axios.get(url, {
      httpsAgent: proxy.getAgent(),
      timeout: 10000
    })

    const animeData = response.data.data[0]

    const malId = animeData.mal_id

    return malId

  }catch(err: any){

    throw new Error(err)

  }
}