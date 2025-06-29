'use client'

import React, { useState, createContext, useEffect, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { getUserInfo } from '@/app/services/user/getUserInfo'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {

  const router = useRouter()

  const [user, setUser] = useState(null)

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const [loading, setLoading] = useState(true)

  useEffect(() => {

      async function getSavedUser(){
        const storedUser = await getUserInfo()

        if(!storedUser.error){
         
          setUser(storedUser)

          setIsAuthenticated(true)
        }
        setLoading(false)
      }

      getSavedUser()

  },[])

  const login = (userData) => {

    setUser(userData)

    setIsAuthenticated(true)

    router.push('/')
  }

  const savedUsername = (username) => {
    localStorage.setItem('username', username)
  }

  const getSavedUsername = () => {
    return localStorage.getItem('username')
  }

  const deleteUserName = () => {
    localStorage.removeItem('username')
  }

  //logout

  const logout = () => {}

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, savedUsername, getSavedUsername, deleteUserName, loading }}>
      {children}
    </AuthContext.Provider>
  )

}