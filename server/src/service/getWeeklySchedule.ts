const FetchHTML = require('../config/Cheerio')
import getISOWeek from "../utils/getISOWeek";
import { v4 } from "uuid"

interface DayMonthItem {
  month: string;
  day: string;
}

interface WeekItem {
  id: string;
  title: string;
  time: string;
  episode: string;
}

interface WeeklyScheduleItem {
  dayAndMonth: DayMonthItem[];
  week: { day: string; data: WeekItem[] }[]
}

async function getWeeklySchedule(): Promise<WeeklyScheduleItem>{

  const now = new Date()

  const year = now.getFullYear()
  const week = getISOWeek(now)

  const url = `https://animeschedule.net/?year=${year}&week=${week}`

  try{

    const $ = await FetchHTML(url)

    const dayAndMonth: DayMonthItem[] = []
    const week: { day: string; data: WeekItem[] }[] = []

    $('#timetable .timetable-column').each((index: any, el: any) => {

      const month = $(el).find('h1 .timetable-column-date-format').text().trim()
      const day = $(el).find('h1 .timetable-column-day').text().trim()

      dayAndMonth.push({ month, day })

      const dayItems: WeekItem[] = []

      $(el).find('.timetable-column-show').each((i: any, element: any) => {

        const title = $(element).find('a.show-link h2').text().trim()
        const episode = $(element).find('.time-bar .show-episode').text().trim()
        const time = $(element).find('.time-bar .show-air-time').text().trim()

        dayItems.push({ id: v4(), title, time, episode })

      })

      week.push({ day, data: dayItems})

    })

    return { dayAndMonth, week } 

  }catch(err: any){
    
    throw new Error(err)

  }

}

module.exports = getWeeklySchedule