'use client'

import { useAuth } from "../utils/context/authContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ProtectedRoute({ children }){

  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {

    if(!user && !loading){
      router.push('/auth/login')
    }else if(user && !loading) {
      router.push('/')
    }

  }, [user, router, loading])

  return children

}