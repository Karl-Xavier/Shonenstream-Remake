import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_AUTH_URL

export async function loginForm(formData){

  try {
    
    const isEmpty = Object.entries(formData).filter(([key, value]) => value === '').map(([key]) => key)

    if(isEmpty.length > 0){
      if(isEmpty.length === 1){
        return {
          error: `${isEmpty[0]} field is required`
        }
      }else if(isEmpty.length > 1){
        const lastField = isEmpty.pop()
        const fieldStr = `${isEmpty.join(', ')} and ${lastField}`
  
        return {
          error: `${fieldStr} fields are required`
        }
      }
    }

    if(formData.password.length < 8){
      return {
        error: 'Password must be at least 8 characters long'
      }
    }

    const response = await axios.post(`${url}/login`, formData, { withCredentials: true })

    const responseData = await response.data

    return {message: responseData.message, data: responseData.userData}

  } catch (err) {
    console.log(err)
    if(err.message === 'Network Error'){
      return {
        error: 'Network Error'
      }
    }else {
      return {
        error: err.response.data.error
      }
    }
  }

}