import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL

export default async function getFeeds(){

  const response = await axios.get(`${url}api/feeds`)

  const responseData = await response.data

  return responseData

}