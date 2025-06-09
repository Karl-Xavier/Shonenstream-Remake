import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_AUTH_URL

export async function verifyToken(username, token){

  try {

   switch (true) {
    case !username:
      return { error: 'Application Error' };
    case !token:
      return { error: 'Please Enter your Token' };
    default:
      break;
   }

   const response = await axios.post(`${url}auth/verify-token?token=${token}&username=${username}`, { withCredentials: true })

   const responseData = await response.data

   return responseData.message
    
  } catch (err) {

    console.log(err)
    return {
      error: err.response.data.error || 'Network Error'
    }
  }

}