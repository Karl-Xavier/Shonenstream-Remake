import SearchComponent from '@/app/component/Search/SearchComponent'
import getSuggestion from '@/app/services/getSuggestion'
import React from 'react'

export default async function page({ searchParams }) {

  const param = await searchParams

  const queryParams = param.query

  const pageParams = param.page || undefined

  try {
    
    const data = await getSuggestion(queryParams, pageParams)

    const queryList = data.results
    const page = data.page || 0

    return (
      <div>
        <SearchComponent queryList={queryList} page={page}/>
      </div>
    )

  } catch (err) {
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