import React from 'react'
import { popularData } from '@/app/utils/rawData/popularData'
import { getPopular } from '@/app/services/home/getPopular'
import './css/popular.css'
import TodayPopular from './reuseables/TodayPopular'
import RecentComp from './reuseables/RecentComp'
import WeeklyUpdate from './reuseables/WeeklyUpdate'

export default async function Popular() {

  try {

    const popular_data = await getPopular()

    console.log(popular_data)
    
    return (
      <section className='popular-content-section'>
        <TodayPopular popularData={popularData}/>
        <RecentComp popularData={popularData}/>
        <WeeklyUpdate popularData={popularData}/>
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