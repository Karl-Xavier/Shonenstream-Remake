'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import './css/episode.css'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { getDisplayWatchLink } from '../../utils/formatLink'

export default function Episode({ episodeList }) {

  const [currentData, setCurrentData] = useState(1)
  const dataPerView = 48

  const startIndex = (currentData - 1) * dataPerView

  const endIndex = startIndex + dataPerView

  const paginatedData = episodeList.slice(startIndex, endIndex)

  const totalPages = Math.ceil(episodeList.length / dataPerView)

  const pageCount = totalPages === 1 ? `1 - ${episodeList.length}` : totalPages > 1 && currentData === 1 ? `1 - ${dataPerView}` : totalPages > 1 && currentData !== 1 ? `${dataPerView * (currentData - 1) + 1} - ${dataPerView * currentData}` : ''

  return (
    <section className="episodes">
      <div className="category-pagination w-full h-[40px] flex flex-row justify-between items-center bg-[#242424] mb-2 rounded">
        <button  className={`cursor-pointer outline-none ${currentData === 1 && 'disabled'}`} onClick={() => setCurrentData(currentData - 1)} disabled={currentData === 1}><CaretLeft size={20} weight='fill'/></button>
        <span>{pageCount}</span>
        <button className={`cursor-pointer outline-none ${currentData === totalPages || totalPages === 1 ? 'disabled' : ''}`}  onClick={() => setCurrentData(currentData + 1)} disabled={currentData === totalPages || totalPages === 1}><CaretRight size={20} weight='fill'/></button>
      </div>
      <div className="episode-list">
        <ul className='block md:grid md:grid-cols-10 lg:grid-cols-6 gap-2'>
          {paginatedData.map((episode, index) => {

            const formattedLink = getDisplayWatchLink(episode.link)

            //`${formattedLink}&animeId=${episode.animeId}&episodeId=${episode.episodeId}`

            return(
            <li key={index} data-id={episode.id} data-ani-id={episode.animeId} className='w-full md:w-[60px] h:w-[60px]' title={episode.title} id={paginatedData.id}>
              <Link href={{ pathname: `/watch/${formattedLink.title}`, query: { episode: formattedLink.episode, animeId: episode.animeId, episodeId: episode.episodeId } }} data-og-link={episode.link} className='justify-start md:justify-center lg:justify-center'>
                <span>{episode.number}</span>
                <span className='title block md:hidden lg:hidden'>{episode.title}</span>
              </Link>
            </li>
          )})}
        </ul>
      </div>
    </section>
  )
}