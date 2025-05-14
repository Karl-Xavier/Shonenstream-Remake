'use client'

import React, { useEffect } from 'react'
import './css/feedcomponent.css'
import { homeData } from '@/app/utils/rawData/homeData'
import Image from 'next/image'
import { useFeed } from '@/app/utils/context/feedContext'
import Link from 'next/link'

export default function FeedComponent() {

  const { feeds, setFeeds } = useFeed()

  useEffect(() => {
    if(homeData.length !== 0){
      setFeeds(homeData)
    }
  }, [])

  return (
    <div className='feed-content'>
      <h2>Latest Anime Related News</h2>
      <ul className='grid-cols-1 md:grid-cols-4'>
        {homeData.map((feed, index) => (
          <li key={index} data-id={feed.id} className='feed-li'>
            <Link href={`/feed/${feed.id}`}>
              <Image src={feed.imgURL} alt={feed.title} width={100} height={100} unoptimized={true} />
              <div className="bottom-content-data">
                <div className='specified-date'>
                  <span>29 NOV 2022</span>
                  <span className='tag'>NEWS</span>
                </div>
                <p>{feed.title}</p>
                <span className="author">Author's Name</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}