export default function getISOWeek(date: Date){

  const tempDate = new Date(date.getTime())
  tempDate.setHours(0, 0, 0, 0)

  tempDate.setDate(tempDate.getDate() + 3 - ((tempDate.getDay() + 6) % 7))

  const week1 = new Date(tempDate.getFullYear(), 0, 4)

  return (
    1 + Math.round((( tempDate.getTime() - week1.getTime() ) / 86400000 - 3 + (( week1.getDay() + 6) % 7 )) / 7)
  )

}