import { api } from "@/app/utils/context/axiosInstance";

export async function postComments(content, name, replyTo){

  try {

    if(content === ''){
      return
    }
    
    await api.post('comment/post-comment', { content, name, replyTo }, { withCredentials: true })

  } catch (err) {
    console.log(err)

    throw new Error({ error: err })
  }

}