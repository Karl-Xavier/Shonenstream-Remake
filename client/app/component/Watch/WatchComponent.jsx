'use client'

import { watchData } from '@/app/utils/rawData/watchData'
import { episodeList } from '@/app/utils/rawData/episodeList'
import Episode from '../Episode/Episode'
import Comment from '../Comment/Comment'
import './css/watchcomponent.css'
import Video from './Video'
import { Bookmark, FastForward, Rewind } from 'phosphor-react'

export default function WatchComponent() {
  return (
    <div className='container p-2 w-full h-auto'>
      <section className="player-section grid w-full h-auto grid-cols-1 lg:grid-cols-[4fr_2fr]">
        <div className="vid-section w-full p-3">
          <h2>{watchData.title}</h2>
          <Video src={watchData.vidSRC}/>
        </div>
        <Episode episodeList={episodeList}/>
      </section>
     {/*  <Comment/> */}
    </div>
  )
}