'use client'

import React, { useEffect, useState } from 'react'
import getProfileImg from '@/app/services/profile/getRandomImg'
import { useAuth } from '@/app/utils/context/authContext'

export default function ProfileList({ toggle }) {

 const [profileImg, setProfileImg] = useState(null)

 const {isAuthenticated, user} = useAuth()

 useEffect(() => {
  const getProfilePic = async () => {
    const profilePhoto = await getProfileImg()
    setProfileImg(profilePhoto)
  }

  if(isAuthenticated){
    const img = user.avatar

    setProfileImg(img)
  }else {
    getProfilePic()
  }

 },[isAuthenticated, user])

  return (
    <div className="profile-li cursor-pointer" onClick={toggle} id='profile-li-btn'>
      {profileImg === null || profileImg === undefined ? (
        <div className="loading-blank"></div>
      ): (
      <img src={profileImg} alt="Profile Picture" />
      )}
    </div>
  )
}
