import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL

export default async function getSuggestion(query, page){

  const constructedURL = `${url}api/search?name=${query}${page === undefined ? '' : `&page=${page}`}`

  const response = await axios.get(constructedURL)

  const responseData = await response.data

  return responseData

}