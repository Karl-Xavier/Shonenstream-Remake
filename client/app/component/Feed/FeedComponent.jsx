'use client'

import React, { useEffect } from 'react'
import './css/feedcomponent.css'
import Image from 'next/image'
import { useFeed } from '@/app/utils/context/feedContext'
import Link from 'next/link'

export default function FeedComponent({ newsData }) {

  const { setFeeds, setSelectedFeed } = useFeed()

  useEffect(() => {
    if(newsData.length !== 0){
      setFeeds(newsData)
    }
  }, [])

  function setItem(data){
    setSelectedFeed(data)
  }

  return (
    <div className='feed-content'>
      <h2>Latest Anime Related News</h2>
      <ul className='grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {newsData.map((feed, index) => (
          <li key={index} data-id={feed.id} className='feed-li' onClick={() => setItem(feed)}>
            <Link href={`/feed/${feed.id}`}>
              <Image src={feed.image} alt={feed.title} width={100} height={100} unoptimized={true}/>
              <div className="bottom-content-data">
                <div className='specified-date'>
                  <span>{feed.date}</span>
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