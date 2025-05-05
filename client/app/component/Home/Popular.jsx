import React from 'react'
import { popularData } from '@/app/utils/rawData/popularData'
import './css/popular.css'
import TodayPopular from './reuseables/TodayPopular'
import RecentComp from './reuseables/RecentComp'
import WeeklyUpdate from './reuseables/WeeklyUpdate'

export default function Popular() {
  return (
    <section className='popular-content-section'>
      <TodayPopular popularData={popularData}/>
      <RecentComp popularData={popularData}/>
      <WeeklyUpdate popularData={popularData}/>
    </section>
  )
}