import React from 'react'
import './css/profileoption.css'
import { profileOptData } from '@/app/utils/profileOptionData'
import Link from 'next/link'

export default function ProfileOption() {
  return (
    <div className='profile-option' id='profile-li'>
      <ul>
        {profileOptData.map((option, index) => (
          <li key={index}>
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
