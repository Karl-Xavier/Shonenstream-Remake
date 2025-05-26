import axios from 'axios'

const url = process.env.NEXT_PUBLIC_API_URL
const auth_url = process.env.NEXT_PUBLIC_API_AUTH_URL

export async function getWatchSource(episodeNum, animeId, episodeId){

  console.log(episodeNum, animeId, episodeId)

  const response = await axios.get(`${url}api/watch?animeId=${animeId}&num=${episodeNum}&episodeId=${episodeId}`)

  const responseData = await response.data

  return responseData

}