import React from 'react'
import Slider from './Slider'
import Popular from './Popular'
import { getRecent } from '@/app/services/home/getRecent'
import RecentCard from './RecentCard'
import './css/homecontent.css'

export default async function HomeContent() {

  try{

    const data = await getRecent()

    let homeData = []

    homeData = data.data ? data.data.trimmedArray : data.trimmedArray

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
  }catch(err){
    const errType = ['ReferenceError', 'TypeError', 'Error', 'AggregatorError']

    if(err.message === 'Network Error' || err.message === 'Request failed with status code 500'){
      throw new Error('Network Error')
    }else if(errType.includes(err.name)){
      throw new Error('Something Went Wrong with the Application')
    }else{
      throw new Error(err.data.error)
    }
  }
}
