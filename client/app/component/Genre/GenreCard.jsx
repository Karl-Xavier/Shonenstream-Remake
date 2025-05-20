'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './css/genrecard.css'
import { getDisplayWatchLink } from '@/app/utils/formatLink'

export default function GenreCard({ card }) {

  const formattedLink = getDisplayWatchLink(card.link)

  return (
    <li className='w-full h-[300px] genre-li'>
      <Link href={formattedLink} data-og-link={card.link} className='w-full h-[85%] text-[14px] block text-decoration-none'>
        <Image src={card.imgURL} alt={card.title} width={100} height={100} className='w-full h-[90%] object-cover mb-[5px]' unoptimized={true}/>
        <p className='h-[33px] overflow-hidden font-600 text-uppercase'>{card.title}</p>
      </Link>
    </li>
  )
}