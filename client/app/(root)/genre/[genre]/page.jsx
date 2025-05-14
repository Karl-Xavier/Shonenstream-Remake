import GenreComponent from '@/app/component/Genre/GenreComponent'
import React from 'react'

export default async function page({ searchParams, params }) {

  const pageParam = await searchParams

  const page = pageParam?.page || undefined

  const { genre } = await params

  return (
    <div>
      <GenreComponent page={page} genre={genre}/>
    </div>
  )
}