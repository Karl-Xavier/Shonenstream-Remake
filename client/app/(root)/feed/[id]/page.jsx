'use client'

import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useFeed } from '@/app/utils/context/feedContext'
import { ArrowLeft } from 'phosphor-react'
import './css/pageId.css'
import Link from 'next/link'

export default function page() {

  const { id } = useParams()
  const { feeds, selectedFeed, setSelectedFeed } = useFeed()

  useEffect(() => {

    if(feeds.length > 0){

      const match = feeds.find(feed => String(feed.id) === id)

      if(match) setSelectedFeed(match)
    }

  }, [feeds, id, selectedFeed])

  if(!selectedFeed || String(selectedFeed.id) !== id) throw new Error('News Content Not Found')

  return (
    <div className='w-full h-auto mt-4 p-2 md:py-2 md:px-[10%] feed-id-container'>
      <Link href={'/feed'} className='back-btn'><ArrowLeft size={22} weight='bold'/></Link>
      <h2 className='text-[18px] md:text-[22px]'>{selectedFeed.title}</h2>
      <div className="author-time">
      <span className='time'>{selectedFeed.date},</span>
      <span className='author'> <span className="by">Author:</span> Nnaemeka</span>  
      </div>  
      <img src={selectedFeed.image} alt={selectedFeed.title} width={100} height={100} className='h-[300px] md:h-[500px]'/>
      <div className="description my-3">
        <p>{selectedFeed.description}</p>
      </div>
    </div>
  )
}