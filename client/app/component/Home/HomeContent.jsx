import React from 'react'
import Slider from './Slider'
import Popular from './Popular'
import { homeData } from '@/app/utils/rawData/homeData'
import RecentCard from './RecentCard'
import './css/homecontent.css'

export default function HomeContent() {

  const slideData = homeData.slice(-3)

  return (
    <div className='container recent-con'>
      <Slider cards={slideData}/>
      <section className="main-content">
        <h2>Recent Update</h2>
        <ul>
          {homeData.map((recent, index) => (
            <RecentCard key={index} recent={recent}/>
          ))}
        </ul>
      </section>
      <Popular/>
    </div>
  )
}
