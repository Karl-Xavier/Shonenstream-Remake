import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL

export default async function getSuggestion(query){

  const response = await axios.get(`${url}api/search?name=${query}`)

  const responseData = await response.data

  return responseData

}