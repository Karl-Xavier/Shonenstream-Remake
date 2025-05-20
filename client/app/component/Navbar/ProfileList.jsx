'use client'

import React, { useEffect, useState } from 'react'
import getProfileImg from '@/app/services/profile/getRandomImg'

export default function ProfileList({ toggle }) {

 const [profileImg, setProfileImg] = useState(null)

 useEffect(() => {
  const getProfilePic = async () => {
    const profilePhoto = await getProfileImg()
    setProfileImg(profilePhoto)
  }

  getProfilePic()
 },[])

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
