import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_AUTH_URL

export async function submitEmail(email){

  if(!email || email === ''){
    return {
      error: 'Email is Missing'
    }
  }

  try {
    
    const response = await axios.post(`${url}auth/forgot-password`, { email }, { withCredentials: true })

    const responseData = response.data

    return responseData

  } catch (err) {

    console.log(err)

    let errMsg

    const errType = ['ReferenceError', 'TypeError', 'Error', 'AggregatorError']

    if(err.message === 'Network Error'){
      errMsg = 'Network Error'
    }else if(errType.includes(err.name)){
      errMsg = 'Something Went wrong'
    }else{
      errMsg = err.response.data.error
    }

    return {
      error: errMsg
    }

  }

}