'use client'

//import { watchData } from '@/app/utils/rawData/watchData'
//import { episodeList } from '@/app/utils/rawData/episodeList'
import Episode from '../Episode/Episode'
import Comment from '../Comment/Comment'
import './css/watchcomponent.css'
import Video from './Video'
import { Bookmark, Download } from 'phosphor-react'
import { useState } from 'react'
import Toast from '../Toast/Toast'

//episodeList, watchData, title

export default function WatchComponent({ episodeList, watchData, title }) {

  const [ activeSelection, setActiveSelection ] = useState('sub')
  const [currentSource, setCurrentSource] = useState(watchData.subSource)
  const [toast, setToast] = useState({
    message: null,
    type: null
  })

  function changeCurrentSource(source){

    if(source === 'sub'){
      setActiveSelection('sub')
      setCurrentSource(watchData.subSource)
    } else {

      if(watchData.dubSource === ''){
        setActiveSelection('sub')
        setCurrentSource(watchData.subSource)

        setToast({
          message: 'No DUBBED video source available',
          type: 'info'
        })

      }

      setActiveSelection('dub')
      setCurrentSource(watchData.dubSource)
    }

  }

  return (
    <div className='container p-2 w-full h-auto'>
      <section className="player-section grid w-full h-auto grid-cols-1 lg:grid-cols-[4fr_2fr]">
        <div className="vid-section w-full p-3">
          <h2 className='text-[lightslategrey] watch-title'>{title}</h2>
          <Video src={currentSource}/>
          <section className="act-btn flex flex-row justify-end items-center w-full h-auto gap-4 mt-2">
            <span className={`sub-option ${activeSelection === 'sub' ? 'bg-orange-400 text-[#eee]' : 'text-orange-400'} text-[12px] rounded w-max h-[20px] p-1 flex justify-center items-center cursor-pointer`} onClick={() => changeCurrentSource('sub')}>SUB</span>
            <span className={`dub-option ${activeSelection === 'dub' ? 'bg-purple-600 text-[#eee]' : 'text-purple-600'} text-[12px] rounded w-max h-[20px] p-1 flex justify-center items-center cursor-pointer`} onClick={() => changeCurrentSource('dub')}>DUB</span>
            <span className="bookmark-btn w-max h-max p-2 bg-[#643c7d] rounded cursor-point"><Bookmark size={20}/></span>
            <span className="download-btn w-[120x] h-max rounded p-2 flex flex-row justify-between items-center gap-2 cursor-pointer bg-[#643c7d]"> Download <Download/></span>
          </section>
        </div>
        <Episode episodeList={episodeList}/>
      </section>
      <Comment />
      {toast.message && <Toast message={toast.message} type={toast.type} closeToast={() => setToast({ message: null, type: null })}/>}
    </div>
  )
}