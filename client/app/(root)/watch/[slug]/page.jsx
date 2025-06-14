import WatchComponent from '@/app/component/Watch/WatchComponent'
import getEpisodeList from '@/app/services/getEpisodes'
import { getWatchSource } from '@/app/services/watch/getSources'
import React from 'react'

export async function generateMetadata({ params, searchParams }){

  const { slug } = await params

  const originalName = slug.split('-').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ')

  const searchParameter = await searchParams

  const episodeNumber = searchParameter.episode

  return {
    title: `Watch ${originalName} Episode ${episodeNumber} for free on Shonenstream`
  }
}

export default async function page({ params, searchParams }) {

  try{

    const { slug } = await params

    const ogName = slug.split('-').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ')
   // const linkParams = url.replace('/watch/', '')
  
    const search = await searchParams
  
    const episodeNum = search.episode
  
    const animeId = search.animeId
  
    const episodeId = search.episodeId

  //   const watchSource = await getWatchSource(episodeNum, animeId, episodeId)

  //   console.log(watchSource)

  //   const episode = await getEpisodeList(ogName)

  //   const title = `${ogName} Episode ${episodeNum}`

  // episodeList={episode} watchData={watchSource} title={title}
  
    return (
      <div><WatchComponent /></div>
    )

  }catch(err){
    console.log(err)
  }

}