import axios from "axios"

const url = process.env.NEXT_PUBLIC_API_URL

export default async function getMovies(page){

    const constructedUrl = `${url}api/movies${page !== undefined ? `?page=${page}`: ''}`
        
    const response = await axios.get(constructedUrl)

    const responseData = await response.data

    return responseData
}