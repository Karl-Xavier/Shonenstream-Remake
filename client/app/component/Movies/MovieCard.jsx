import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './css/moviecard.css'
import { getDisplayCategoryLink } from '@/app/utils/formatLink'

export default function MovieCard({ movie }) {

  const formattedLink = getDisplayCategoryLink(movie.link)

  return (
    <li className='w-full h-[300px] movie-li'>
      <Link href={formattedLink} data-og-link={movie.link} className='w-full h-[85%] text-[14px] block text-decoration-none'>
        <Image src={movie.imgURL} alt={movie.title} width={100} height={100} className='w-full h-[90%] object-cover mb-[5px]' unoptimized/>
        <p className='h-[33px] overflow-hidden font-600 text-uppercase'>{movie.title}</p>
      </Link>
    </li>
  )
}
