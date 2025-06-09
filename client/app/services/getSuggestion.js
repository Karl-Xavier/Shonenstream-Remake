import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL

export default async function getSuggestion(query, page){

  const constructedURL = `${url}api/search${query === undefined ? '' : `?name=${query}`}${page === undefined ? '' : page && query === undefined ? `?page=${page}` : `&page=${page}`}`

  console.log(constructedURL)

  const response = await axios.get(constructedURL)

  const responseData = await response.data

  return responseData

}