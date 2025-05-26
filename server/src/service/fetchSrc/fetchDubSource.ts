import axios from "axios";
const ProxyManager = require('../../utils/proxyManager')

const proxy = new ProxyManager('./proxies.txt', 10 * 60 * 1000, 'https')

export async function fetchDubSource(episodeId: string){

  console.log(episodeId)

  const url = `https://miruro.tv/api/sources?episodeId=${episodeId}&provider=zoro&fetchType=embedded&category=dub`

  console.log(url)

  try {

    const response = await axios.get(url, {
      httpAgent: proxy.getAgent(),
      timeout: 10000
    })

    const responseData = await response.data

    let stream = ''
    
    if(responseData.error){

      return null
    }

    stream = responseData.streams[0].url

    return stream
    
  } catch (err: any) {
    throw new Error(err)
  }
}