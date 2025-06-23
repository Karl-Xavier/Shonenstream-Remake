import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_AUTH_URL

export async function verifyResetToken(token, email, password){

  if(!token || !email){
    return {
      error: 'Missing Parameter'
    }
  }else if(!password || password === '' || password.length < 8){
    return {
      error: 'New Password must be at least 8 characters long'
    }
  }

  console.log(token, email, password)

  try {

    const response = await axios.post(`${url}auth/verify-reset?token=${token}&email=${email}`, { password }, { withCredentials: true })

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