import FeedComponent from '@/app/component/Feed/FeedComponent'
import getFeeds from '@/app/services/feeds/getFeed'
import React from 'react'

export default async function page() {

  try {

    const data = await getFeeds()

    let news = []

    news = data.data ? data.data.newsData : data.newsData
    
    return (
      <div>
        <FeedComponent newsData={news}/>
      </div>
    )

  } catch(err) {
    
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