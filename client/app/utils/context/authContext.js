'use client'

import React, { useState, createContext, useEffect, useContext } from 'react'
import { useRouter } from 'next/navigation'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {

  const router = useRouter()

  const [user, setUser] = useState(null)

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {

    const storedUser = localStorage.getItem('currentUser')
    
    if(storedUser){

      setUser(JSON.parse(storedUser))

      setIsAuthenticated(true)

    }
  },[])

  const login = (userData) => {
    localStorage.setItem('currentUser', JSON.stringify(userData))

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
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, savedUsername, getSavedUsername, deleteUserName }}>
      {children}
    </AuthContext.Provider>
  )

}