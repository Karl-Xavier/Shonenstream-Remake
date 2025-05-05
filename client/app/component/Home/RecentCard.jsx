'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Eye } from 'phosphor-react'
import React from 'react'
import './css/recentcard.css'

export default function RecentCard({ recent }) {
  return (
    <li data-id={recent.id} className='recent-li'>
      <Link href={recent.link}>
        <div className="img-title">
          <Image src={recent.imgURL} alt={recent.title} width={100} height={100} className='img-poster'/>
          <p className="title">{recent.title}</p>
        </div>
      </Link>
      <div className="below">
        <span>{recent.epiNum}</span>
        <span className='below-icon'><Eye weight='fill'/> 33</span>
      </div>
    </li>
  )
}