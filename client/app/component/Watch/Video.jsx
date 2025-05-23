'use client'

import React, { useEffect, useRef, useState } from 'react'
import Hls from 'hls.js'
import './css/video.css'
import { Rewind, FastForward, Play, Pause, Gear, SpeakerHigh, ArrowsOut, ArrowsIn, Check, SpeakerSlash } from 'phosphor-react'
import { playBack } from '@/app/utils/playbackSpeed'
import { formatTime, playPauseVideo, togglePlayBackDiv } from '@/app/utils/videoFunctions'

const backendURL = process.env.NEXT_PUBLIC_API_URL

export default function Video({ src }) {

  const [ activeSpeed, setActiveSpeed ] = useState('1')
  const [ isPlaying, setIsPlaying ] = useState(false)
  const [progress, setProgress] = useState(0)
  const [ currentTime, setCurrentTime ] = useState(0)
  const [duration, setDuration] = useState(0)
  const [ showPlayBackDiv, setShowPlayBackDiv ] = useState(false)
  const [ volumeValue, setVolumeValue ] = useState(1)
  const [isFullscreen, setFullScreen] = useState(false)

  const videoRef = useRef(null)

  // useEffect(() => {

  //   const video = videoRef.current

  //   console.log(video, null)

  //   const hls = new Hls()

  //   const streamURL = `${backendURL}proxy?url=${src}`

  //   hls.loadSource(`${backendURL}static/vid.mp4`)

  //   hls.attachMedia(video)

  //   hls.on(Hls.Events.MANIFEST_PARSED, () => {
  //     video.play()
  //     console.log('video is playing....')
  //   })

  //   return () => {
  //     hls.destroy()
  //   }

  // }, [])

  useEffect(() => {

    const video = videoRef.current

    function handleTimeUpdate(){
    
      setProgress((video.currentTime / video.duration) * 100)
    
      setCurrentTime(video.currentTime)
    }
    
    function loadMeta(){
    
      setDuration(video.duration)
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('loadedmetadata', loadMeta)

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('loadedmetadata', loadMeta)
    }
  }, [])

  function handleSeek(e){
    const video = videoRef.current
    
    const bar = e.currentTarget
    const clickPosition = e.nativeEvent.offsetX
    const barWidth = bar.offsetWidth
    const time = (clickPosition / barWidth) * video.duration
    video.currentTime = time
    setProgress((time / video.duration) * 100)
  }

  function handlePlayBackSpeed(speed){
    const video = videoRef.current
    video.playbackRate = speed
  }

  function handlePlayBackFunction(speed){
    handlePlayBackSpeed(speed)
    setActiveSpeed(speed)
  }

  function fastForward(){
    const video = videoRef.current
    video.currentTime = Math.min(video.duration, video.currentTime + 10)
  }

  function rewind(){
    const video = videoRef.current
    video.currentTime = Math.max(0, video.currentTime - 10)
  }

  function changeVolume(e){
    const newVolume = parseFloat(e.target.value)

    setVolumeValue(newVolume)

    if(videoRef.current){
      videoRef.current.volume = newVolume
    }

    console.log(newVolume, volumeValue)
  }

  function fullScreen(){
    const video = videoRef.current

    if(!document.fullscreenElement){
      video?.requestFullscreen()
    }else{
      video.exitFullscreen()
    }
  }

  return (
    <div className="video_player mt-3 w-full h-[300px] md:h-[400px] relative outline-none bg-black">
      <video ref={videoRef} controls={false} onContextMenu={(e) => e.preventDefault()} className='video w-full relative h-full' src={`${backendURL}static/vid.mp4`}></video>
      <div className="progressArea">
        <div className="controls cursor-pointer">
          <div className="progress-area" onClick={handleSeek}>
            <div className='progress-bar' style={{ width: `${progress}%` }}>
              <span></span>
            </div>
          </div>
          <div className="controls-list flex w-full flex-row justify-between items-center p-[10px]">
            <div className="controls-left flex flex-row w-max h-auto justify-between items-center gap-4">
              <span className='icons' onClick={rewind}><Rewind weight='fill' size={20}/></span>
              <span className='icons' onClick={() => playPauseVideo(videoRef, isPlaying, setIsPlaying)}>{isPlaying ? <Pause weight='fill' size={20}/> :<Play weight='fill' size={20}/>}</span>
              <span className='icons' onClick={fastForward}><FastForward weight='fill' size={20}/></span>
              <span className='icons md:flex w-max flex-row justify-between items-center gap-2 hidden'>
               {volumeValue === 0 ? <SpeakerSlash weight='fill' size={20}/> : <SpeakerHigh weight='fill' size={20} className='volume'/>}
                <input type="range" name="volume_range" id="volume-range" min={'0'} max={'1'} step={'0.01'} value={volumeValue} onChange={changeVolume}/>
              </span>
              <p className="timer text-[13px]">
                <span className="current-time">{formatTime(currentTime)}&nbsp;</span>/
                <span className="total-time">&nbsp;{formatTime(duration)}</span>
              </p>
            </div>
            <div className="controls-right flex flex-row justify-between items-center w-max gap-3">
              <span className='icons' onClick={() => togglePlayBackDiv(showPlayBackDiv, setShowPlayBackDiv)}><Gear weight='fill' size={20}/></span>
              <span className='icons' onClick={fullScreen}><ArrowsOut weight='fill' size={20}/></span>
            </div>
          </div>
          {showPlayBackDiv && <div className="settings h-[200px] md:h-[250px]">
            <span className='playback-span'>Playback Speed</span>
            <ul>
              {playBack.map((playbackSpeed, index) => (
                <li key={index} data-speed={playbackSpeed.speed} onClick={() => handlePlayBackFunction(playbackSpeed.speed)}><span className="tick w-full flex justify-start items-center gap-2">{activeSpeed === playbackSpeed.speed && <Check weight='bold' style={{ fontStyle: 'italic' }}/>} {playbackSpeed.title}</span></li>
              ))}
            </ul>
          </div>}
        </div>
      </div>
    </div>
  )
}
