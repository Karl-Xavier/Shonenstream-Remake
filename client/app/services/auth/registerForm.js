import { validateInput } from '@/app/utils/formValidation'
import axios from 'axios'

const url = process.env.NEXT_PUBLIC_API_AUTH_URL

export async function submitForm(formData){

  // check is the formData is empty

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

  // Validate email and password before proceeding

  const { isValid, errors } = validateInput(formData.email, formData.password)

  if(isValid){

    try {
      
      const response = await axios.post(`${url}auth/sign-up`, formData, { withCredentials: true })

      const responseData = response.data

      return responseData

    } catch (err) {

      return {
        error: err.response.data.error || 'Network Error'
      }
    }

  }else{
    
    let errorMsg = ''

    if(errors.email === '' || errors.email === undefined){
      errorMsg = errors.password
    }else if(errors.password === '' || errors.password === undefined){
      errorMsg = errors.email
    }else{
      errorMsg = `${errors.email} and ${errors.password}`
    }

    return {
      error: errorMsg
    }
  }

}