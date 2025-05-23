export function playPauseVideo(videoRef, isPlaying, setIsPlaying){
  
  const video = videoRef.current

  if(!isPlaying){
    video.play()
  }else {
    video.pause()
  }

  setIsPlaying(!isPlaying)

}

export function togglePlayBackDiv(showPlayBackDiv, setShowPlayBackDiv){
  setShowPlayBackDiv(!showPlayBackDiv)
}

export function selectCurrentActive(name, setActiveSpeed){

  setActiveSpeed(name)

}

export function formatTime(sec){

  const min = Math.floor(sec / 60)
  const seconds = Math.floor(sec % 60)

  return `${min}:${seconds < 10 ? `0${seconds}` : seconds}`

}