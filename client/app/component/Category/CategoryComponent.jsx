'use client'

import React from 'react'
//import { categoryData } from '@/app/utils/rawData/categoryData'
//import { episodeList } from '@/app/utils/rawData/episodeList'
import Link from 'next/link'
import { Calendar, Circle, Tag } from 'phosphor-react'
import './css/categorycomponent.css'
import Episode from '../Episode/Episode'

export default function CategoryComponent({ categoryData, episodeList, relatedSeason }) {
  return (
    <div className='mt-4 p-4 w-full h-auto grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-3'>
      <section className="right-content" >
        <img src={categoryData.imgURL} alt={categoryData.title} className='w-[130px] h-[200px] md:w-[200px] md:h-[280px]' />
        <h2 className='text-[18px] md:text-[20px]'>{categoryData.title}</h2>
        <span className="src-from">from Anilist</span>
        <p className='text-[14px] md:text-[16px]'><span className='alt-name'>Alternative Names:&nbsp;&nbsp;</span><span className="others">{categoryData.altName.map((names, index) => ( <small key={index}>{names}, </small> ))}</span></p>
        <p className='genres text-[14px] md:text-[16px]'>
          <span className='first'><Tag size={16} weight='fill'/> Genres:&nbsp;&nbsp;</span>
          <span>
            {categoryData.genre.map((genre, index) => (
              <Link href={`/genre/${genre.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                <small>{genre}, </small>
              </Link>
            ))}
          </span>
        </p>
        <p className='date text-[14px] md:text-[16px]'><span className='first'><Calendar size={16}/> Release Date:&nbsp;&nbsp;</span><small>{categoryData.releaseDate}</small></p>
        <p className='status text-[14px] md:text-[16px]'><span className='first'><Circle size={16} weight='fill' color={categoryData.status.toLowerCase() === 'releasing' ? 'orange' : categoryData.status.toLowerCase() === 'completed' ? 'green' : 'indianred'}/> Current Status:&nbsp;&nbsp;</span><small>{categoryData.status}</small></p>
        <p className="slug-description">{categoryData.description}</p>
        {relatedSeason.length > 0 && (
          <div className="related-seasons flex flex-row overflow-x-auto">
            {relatedSeason.map((related, index) => (
              <Link href={''}>
                //
              </Link>
            ))}
          </div>
        )}
      </section>
      <Episode episodeList={episodeList}/>
    </div>
  )
}