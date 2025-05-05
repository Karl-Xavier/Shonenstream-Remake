import React, { useState } from 'react'
import { mobileNavData } from '@/app/utils/mobileNavData'
import { genreData } from '@/app/utils/genreData'
import Link from 'next/link'
import { CaretDown, CaretUp } from 'phosphor-react'
import './css/mobilenav.css'

export default function MobileNav() {
 
  const [showGenre, setShowGenre] = useState(false)

  function toggleGenre() {
    setShowGenre(!showGenre)
  }

  return (
    <div className='mobile-nav'>
      <ul>
        {mobileNavData.map((data, index) => (
          <li key={index}>
            {data.to !== null ? (
              <Link href={data.to}>
                {data.name}
              </Link>
            ): (
              <>
                <span className='genre-drop' onClick={toggleGenre}>
                  <span>{data.name}</span>
                  <span>{showGenre ? <CaretDown weight='fill'/> : <CaretUp weight='fill'/>}</span>
                </span>
                {showGenre && <ul className='genre-drop-ul'>
                  {genreData.map((genre, index) => (
                    <li key={index}>
                      <Link href={genre.link}>
                        <span>{genre.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
