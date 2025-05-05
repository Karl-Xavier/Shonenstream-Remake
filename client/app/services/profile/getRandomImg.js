import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL

export default async function getProfileImg(){

  try{
    const response = await axios.get(`${url}images/profile`)

    const imgURL = response.data.picture

    return `${url}${imgURL}`
  }catch(err){
    console.log(err)
  }

}