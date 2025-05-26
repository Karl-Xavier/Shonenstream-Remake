import axios from 'axios'
const ProxyManager = require('../../utils/proxyManager')

const proxy = new ProxyManager('./proxies.txt', 10 * 60 * 1000, 'https')

export async function fetchSubSource(srcId: string, num: string, episodeId: string){

  const url = `https://miruro.tv/api/sources?episodeId=${srcId}%2Fep-${num}&provider=animepahe&category=sub`

  const fallbackURL = `https://miruro.tv/api/sources?episodeId=${episodeId}&provider=zoro&fetchType=embedded&category=sub`

  console.log(url, 'at line 11', srcId)

  try{

    let stream = ''

    const response = await axios.get(url, {
      httpAgent: proxy.getAgent(),
      timeout: 10000
    })

    const responseData = await response.data

    stream = responseData.streams[0].url
    
    if(stream === ''){

      const response = await axios.get(fallbackURL, {
        httpAgent: proxy.getAgent(),
        timeout: 10000
      })

      const responseData = response.data

      stream = responseData.streams[0].url

      return stream

    }

    return stream

  }catch(err: any){
    throw new Error(err)
  }


}