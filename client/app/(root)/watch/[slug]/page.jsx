import WatchComponent from '@/app/component/Watch/WatchComponent'
import getEpisodeList from '@/app/services/getEpisodes'
import { getWatchSource } from '@/app/services/watch/getSources'
import React from 'react'

export default async function page({ params, searchParams }) {

  try{

    const { slug } = await params

    const ogName = slug.split('-').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ')
   // const linkParams = url.replace('/watch/', '')
  
    const search = await searchParams
  
    const episodeNum = search.episode
  
    const animeId = search.animeId
  
    const episodeId = search.episodeId

    const watchSource = await getWatchSource(episodeNum, animeId, episodeId)

    console.log(watchSource)

    const episode = await getEpisodeList(ogName)

    const title = `${ogName} Episode ${episodeNum}`
  
    return (
      <div><WatchComponent episodeList={episode} watchData={watchSource} title={title}/></div>
    )

  }catch(err){
    console.log(err)
  }

}