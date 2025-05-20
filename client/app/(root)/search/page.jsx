import SearchComponent from '@/app/component/Search/SearchComponent'
import getSuggestion from '@/app/services/getSuggestion'
import React from 'react'

export default async function page({ searchParams }) {

  const param = await searchParams

  const queryParams = param.query

  const pageParams = param.page || undefined

  const data = await getSuggestion(queryParams, pageParams)

  const queryList = data.results
  const page = data.page || 0

  return (
    <div>
      <SearchComponent queryList={queryList} page={page}/>
    </div>
  )
}