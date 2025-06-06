import React from 'react'
import './css/profileoption.css'
import { profileOptData } from '@/app/utils/profileOptionData'
import Link from 'next/link'
import { useAuth } from '@/app/utils/context/authContext'

export default function ProfileOption() {

  const { isAuthenticated } = useAuth()

  const authMenu = profileOptData.filter(item => isAuthenticated ? item.showOnAuth : !item.showOnAuth)

  return (
    <div className='profile-option' id='profile-li'>
      <ul>
        {authMenu.map((option, index) => (
          <li key={index} >
            <Link href={option.to}>
              <span className="name">{option.name}</span>
              <span>{option.icon}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
