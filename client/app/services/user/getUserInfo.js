import { api } from "@/app/utils/context/axiosInstance";

export async function getUserInfo(){

  try {

    const response = await api.get('user/user-info', { withCredentials: true })

    const responseData = await response.data

    return responseData
    
  } catch (err) {

    console.log(err)

    return {
      error: 'An Error Occurred'
    }
  }

}