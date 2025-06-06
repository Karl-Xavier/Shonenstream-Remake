'use client'

import { SignIn, User, UserPlus } from "phosphor-react"

export const profileOptData = [
  { name: 'Register', to: '/auth/register', icon: <UserPlus size={20} weight="bold"/>, showOnAuth: false },
  { name: 'Login', to: '/auth/login', icon: <SignIn size={20} weight="bold"/>, showOnAuth: false },
  { name: 'Profile', to: '/profile', icon: <User size={20} weight="fill"/>, showOnAuth: true },
]