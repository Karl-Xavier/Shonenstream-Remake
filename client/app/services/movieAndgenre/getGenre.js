import axios from "axios"

const url = process.env.NEXT_PUBLIC_API_URL

export default async function getGenre(genre, page){

  const constructedURL = `${url}api/genre/${genre}${page !== undefined ? `?page=${page}` : ''}`

  const response = await axios.get(constructedURL)

  const responseData = await response.data

  return responseData

}