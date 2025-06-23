'use client'

import { useAuth } from "../utils/context/authContext"
import { useRouter, usePathname } from "next/navigation"
import { useEffect } from "react"

export default function ProtectedRoute({ children }){

  const { user, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  const authRoutes = ['/auth/login', '/auth/forgot-password', '/auth/register', '/auth/verify', '/auth/verify-reset', '/auth/change-password']

  useEffect(() => {

    const currentPath = pathname

    console.log(currentPath)

    const isPublic = authRoutes.includes(currentPath)

    if(!user && !loading && !isPublic){
      router.push('/auth/login')
    }else if(user && !loading) {
      router.push('/')
    }

  }, [user, router, loading])

  return children

}