import React from 'react'
import Image from 'next/image'
import { dayAndMonth } from '@/app/utils/rankColors'
import './css/weeklyupdate.css'

export default function WeeklyUpdate({ popularData }) {
  return (
    <div className="weekly-schedule">
      <h2>Weekly Schedule</h2>
      <div className="calendar">
        <nav aria-label='day-month-nav' className='day-month-nav'>
          <ul>
            {dayAndMonth.map((daymon, index) => (
              <li key={index} className={`${index === 0 && 'active'}`} data-day={daymon.day}>
                <span className='month' data-month={daymon.month}>{daymon.month}</span>
                <span className='day' data-day={daymon.day}>{daymon.day}</span>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="day-month-ul">
          {popularData.map((daymonData, index) => (
            <li key={index} data-id={daymonData.id}>
              <span className="day-time text-sm text-orange-500">12:00</span>
              <div className="day-month-content flex flex-col justify-center items-center pr-2 pl-2">
                  <p>{daymonData.title}</p>
              </div>
              <span className='text-green-400'>1208</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
