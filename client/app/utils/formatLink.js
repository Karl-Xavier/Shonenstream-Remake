 export function getDisplayWatchLink(url){

  const match = url.match(/\/watch\/(.+?)(?:-[^/-]+)?#ep=(\d+)/)

  if(!match) return url

  return {
    title: match[1],
    episode: match[2]
  }

 }

 
 export function getDisplayCategoryLink(url){

  const match = url.match(/\/watch\/(.+?)(?:-[^/-]+)?#/)

  if(!match) return url

  return `/category/${match[1]}`

 }