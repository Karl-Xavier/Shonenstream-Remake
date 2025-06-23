import { api } from '../../utils/context/axiosInstance'

export async function deleteComment(commentId){
  try {
    
    await api.delete(`comment/${commentId}/delete`, { withCredentials: true })

  } catch (err) {
    console.log(err)

    throw new Error(err)
  }
}