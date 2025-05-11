import React from 'react'
import { getPopular } from '@/app/services/home/getPopular'
import './css/popular.css'
import TodayPopular from './reuseables/TodayPopular'
import RecentComp from './reuseables/RecentComp'
import WeeklyUpdate from './reuseables/WeeklyUpdate'

export default async function Popular() {

  try {

    const data = await getPopular()

    const popularData = data.data ? data.data.popularAnime : data.popularAnime

    const upcomingData =  data.data ? data.data.upcoming : data.upcoming

    const weeklyData =  data.data ? data.data.weeklyScheduleData : data.weeklyScheduleData
    
    return (
      <section className='popular-content-section'>
        <TodayPopular popularData={popularData}/>
        <RecentComp upcomingData={upcomingData}/>
        <WeeklyUpdate weeklyData={weeklyData}/>
      </section>
    )

  } catch (err) {
    
    const errType = ['ReferenceError', 'TypeError', 'Error', 'AggregatorError']

    if(err.message === 'Network Error'){
      throw new Error('Network Error')
    }else if(errType.includes(err.name)){
      throw new Error('Something Went Wrong with the Application')
    }else{
      throw new Error(err.data.error)
    }

  }
}