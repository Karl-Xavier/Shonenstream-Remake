export default function parsedAnimeString(string){
  
  // Split string into parts
  const parts = string.trim().split(' ')

  // remove first element

  parts.shift()

  // remove the last parts of the string

  const type = parts.pop()

  // Check how many numerical values are at the end

  let option2 = null
  let option1 = null

  // Try popping one of the two numbers if there are present

  if(!isNaN(parts[parts.length - 1])){

    option2 = parts.pop()

  }

  if(!isNaN(parts[parts.length - 1])){

    option1 = parts.pop()

  }

  const title = parts.join(' ')

  return {
    title, sub: option1, option: option2
  }

}