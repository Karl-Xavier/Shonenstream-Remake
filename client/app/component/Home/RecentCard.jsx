'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Eye, Television } from 'phosphor-react'
import React from 'react'
import './css/recentcard.css'
import { getDisplayCategoryLink } from '@/app/utils/formatLink'

export default function RecentCard({ recent }) {

  const formattedLink = getDisplayCategoryLink(recent.link)

  return (
    <li data-id={recent.id} className='recent-li'>
      <Link href={{pathname: formattedLink, query: { og: encodeURIComponent(recent.link) }}} data-og-link={recent.link}>
        <div className="img-title">
          <Image src={recent.imgURL} alt={recent.title} width={100} height={100} className='img-poster' unoptimized/>
          <p className="title">{recent.title}</p>
        </div>
      </Link>
      <div className="below">
        <span className='text-orange-500 flex flex-row justify-between items-center gap-2'>Ep {recent.epiNum} <Television weight='fill'/></span>
        <span className='below-icon'><Eye weight='fill'/> 33</span>
      </div>
    </li>
  )
}