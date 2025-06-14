import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_API_AUTH_URL

export const api = axios.create({
  baseURL,
  withCredentials: true
})

api.interceptors.response.use((response) => response, (error) => {

  return Promise.reject(error)

})