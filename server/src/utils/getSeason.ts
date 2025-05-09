export default function getNextSeason(){

  const seasons = ['Winter', 'Spring', 'Summer', 'Fall']

  const month = new Date().getMonth()

  let currentIndex

  // 0 = Winter, 1 = Spring, 2 = Summer, 3 = Fall

  if(month === 11 || month === 0 || month === 1) currentIndex = 0
  else if(month >= 2 && month <= 4) currentIndex = 1
  else if(month >= 5 && month <= 7) currentIndex = 2
  else currentIndex = 3 

  return {
    next: seasons[(currentIndex + 1) % 4]
  }

}