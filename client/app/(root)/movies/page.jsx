import React from 'react'
import MovieComponent from '@/app/component/Movies/MovieComponent'

export default async function page({ searchParams }) {

  const pageParam = await searchParams

  const page = pageParam?.page || undefined

  return (
    <div>
      <MovieComponent page={page}/>
    </div>
  )
}