import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './css/moviecard.css'

export default function MovieCard({ movie }) {
  return (
    <li className='w-full h-[300px] movie-li'>
      <Link href={movie.link} className='w-full h-[85%] text-[14px] block text-decoration-none'>
        <Image src={movie.imgURL} alt={movie.title} width={100} height={100} className='w-full h-[90%] object-cover mb-[5px]'/>
        <p className='h-[33px] overflow-hidden font-600 text-uppercase'>{movie.title}</p>
      </Link>
    </li>
  )
}
