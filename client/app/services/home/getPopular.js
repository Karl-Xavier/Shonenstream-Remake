import axios from 'axios'

const url = process.env.NEXT_PUBLIC_API_URL

export async function getPopular(){
    
    const response = await axios.get(`${url}api/top-airing`)

    const responseData = await response.data

    return responseData

}