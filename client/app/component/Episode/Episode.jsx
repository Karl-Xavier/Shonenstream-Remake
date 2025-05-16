'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import './css/episode.css'
import { CaretLeft, CaretRight } from 'phosphor-react'

export default function Episode({ episodeList }) {

  const [currentData, setCurrentData] = useState(1)
  const dataPerView = 25

  console.log(currentData)

  const startIndex = (currentData - 1) * dataPerView

  const endIndex = startIndex + dataPerView

  const paginatedData = episodeList.slice(startIndex, endIndex)

  const totalPages = Math.ceil(episodeList.length / dataPerView)

  return (
    <section className="episodes">
      <div className="category-pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setCurrentData(i + 1)} className={`${currentData === i +1 ? 'text-[#ee49fd]' : 'text-[lightslategrey]'} mr-2 cursor-pointer`}>Page {i + 1}</button>
        ))}
      </div>
      <div className="episode-list">
        <ul className='block md:grid md:grid-cols-4 md:gap-2 lg:block'>
          {paginatedData.map((episode, index) => (
            <li key={index} data-id={index+1} className='' title={episode.title}>
              <Link href={''} className=''>
                <span>{episode.episode}</span>
                <span className='title'>{episode.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}