import { api } from "@/app/utils/context/axiosInstance";

export async function postLikes(commentId){
  try {
    
    await api.post(`comment/${commentId}/likes`, { withCredentials: true })

    console.log('Sent')

  } catch (err) {
    throw new Error(err)
  }
}