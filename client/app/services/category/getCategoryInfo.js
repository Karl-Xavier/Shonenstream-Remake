import axios from 'axios'

const url = process.env.NEXT_PUBLIC_API_URL

export default async function getCategoryInfo(link){

  const response = await axios.get(`${url}api/category/${link}#ep=1`)

  const responseData = response.data

  return responseData

}