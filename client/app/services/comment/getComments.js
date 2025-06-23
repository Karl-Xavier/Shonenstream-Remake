import axios from 'axios'

const url = process.env.NEXT_PUBLIC_API_AUTH_URL

export async function getComments(name){

  try{

    const response = await axios.get(`${url}comment/get-comments?name=${name}`, { withCredentials: true })

    const responseData = await response.data

    return responseData

  }catch(err){

    console.log(err)

    throw new Error({ error: err })
  }

}