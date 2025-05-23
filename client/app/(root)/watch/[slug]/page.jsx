import WatchComponent from '@/app/component/Watch/WatchComponent'
import React from 'react'

export default async function page({ params, searchParams }) {

  const { slug } = await params

  const search = await searchParams

  const episodeNum = search.episode

  const animeId = search.animeId

  return (
    <div><WatchComponent/></div>
  )
}