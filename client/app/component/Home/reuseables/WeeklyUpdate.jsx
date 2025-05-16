'use client'

import React, { useState, useMemo } from 'react'
import './css/weeklyupdate.css'

export default function WeeklyUpdate({ weeklyData }) {
  const weekOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  const sortedWeek = useMemo(() => {
    return [...weeklyData.week].sort((a, b) => weekOrder.indexOf(a.day) - weekOrder.indexOf(b.day))
  }, [weeklyData])

  const sortedDate = useMemo(() => {
    return [...weeklyData.dayAndMonth].sort((a, b) => weekOrder.indexOf(a.day) - weekOrder.indexOf(b.day))
  }, [weeklyData])

  const [selectedDay, setSelectedDay] = useState(weeklyData.dayAndMonth[0].day)

  const activeData = sortedWeek.find(day => day.day === selectedDay)
  const activeMonth = sortedDate.find(d => d.day === selectedDay)?.month || ''

  return (
    <div className="weekly-schedule">
      <h2>Weekly Schedule</h2>
      <div className="calendar">
        <nav aria-label='day-month-nav' className='day-month-nav'>
          <ul>
            {sortedDate.map((item, index) => (
              <li
                key={index}
                className={item.day === selectedDay ? 'active' : ''}
                onClick={() => setSelectedDay(item.day)}
              >
                <span className='month'>{item.month}</span>
                <span className='day'>{item.day.slice(0, 3)}</span>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="day-month-ul">
          {activeData?.data.map((item, index) => (
            <li key={index} data-id={item.id}>
              <span className="day-time text-sm text-orange-500">{item.time}</span>
              <div className="day-month-content flex flex-col justify-center items-center pr-2 pl-2">
                <p>{item.title}</p>
              </div>
              <span className='text-green-400'>{item.episode.replace('Ep', '').trim()}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
