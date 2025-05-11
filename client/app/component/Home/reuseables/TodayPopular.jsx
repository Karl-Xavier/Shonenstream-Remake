import React from 'react'
import './css/todaypopular.css'
import { rankColors } from '@/app/utils/rankColors'
import Image from 'next/image'
import parsedAnimeString from '@/app/utils/parsedString'

export default function TodayPopular({ popularData }) {
  return (
    <div className="top-today">
        <h2>Today Top Anime</h2>
        <ul className="top-today-ul">
          {popularData.map((today, index) => {

            const parsed = parsedAnimeString(today.title)
            return (
            <li key={index} data-id={today.id}>
              <div className="today-content">
                <div className="img-today">
                  <div className={`ani-num outlined-text ${rankColors[index] || 'bg-gray-500'}`}>{index+1}</div>
                  <Image src={today.imgURL} alt={today.title} width={100} height={100} unoptimized={true}/>
                </div>
                <div className="text-today">
                  <p>{parsed?.title}</p>
                  <span>SUB {parsed.sub !== '' ? parsed?.sub : parsed?.option}</span>
                </div>
              </div>
            </li>
          )
          })}
        </ul>
      </div>
  )
}
