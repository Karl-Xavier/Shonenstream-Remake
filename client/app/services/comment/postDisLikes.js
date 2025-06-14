import { api } from "@/app/utils/context/axiosInstance";

export async function postDisLikes(commentId){
  try {
    
    await api.post(`comment/${commentId}/dislikes`, { withCredentials: true })

    console.log('Sent')

  } catch (err) {
    throw new Error(err)
  }
}