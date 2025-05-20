import React from 'react'
import './css/genred.css'
import { genreData } from '@/app/utils/genreData'
import Link from 'next/link'

export default function Genredropdown() {

  return (
    <div className='drop-down-genre' id='genre-drop'>
      <ul>
        {genreData.map((genre, index) => (
          <li key={index} data-num={index+1} data-genre-name={genre.name} className={`genre ${genre.name}`}>
            <Link href={genre.link}>
              <span>{genre.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
