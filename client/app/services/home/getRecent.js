import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL

export async function getRecent(){

    const response = await axios.get(`${url}api/home-recent`)

    const responseData = await response.data

    return responseData
}