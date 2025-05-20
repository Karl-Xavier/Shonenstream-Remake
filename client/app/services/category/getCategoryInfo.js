import axios from 'axios'

const url = process.env.NEXT_PUBLIC_API_URL

export default async function getCategoryInfo(link){

  console.log(link)

  const response = await axios.get(`${url}api/category/${link}`)

  const responseData = await response.data

  return responseData

}