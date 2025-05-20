import axios from 'axios'

const url = process.env.NEXT_PUBLIC_API_URL

export default async function getEpisodeList(name) {
  
  const response = await axios.get(`${url}api/episodes?name=${name}`)

  const responseData = await response.data

  return responseData
}