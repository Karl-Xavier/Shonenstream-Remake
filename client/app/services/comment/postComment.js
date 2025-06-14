import { api } from "@/app/utils/context/axiosInstance";

export async function postComments(content, name){

  try {
    
    await api.post('comment/post-comment', { content, name }, { withCredentials: true })

  } catch (err) {
    console.log(err)

    throw new Error({ error: err })
  }

}