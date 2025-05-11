import React from 'react'
import './css/recentcomp.css'
import Image from 'next/image'

export default function RecentComp({ upcomingData }) {
  return (
    <div className="recent-top">
        <h2>Upcoming Series</h2>
        <ul className="recent-top-ul">
          {upcomingData.map((recent, index) => (
            <li key={index} data-id={recent.id}>
              <div className="recent-content">
                <div className="img-today">
                  <Image src={recent.imgURL} alt={recent.title} width={100} height={100}/>
                </div>
                <div className="text-today">
                  <p>{recent.title}</p>
                  <span>SOURCE: <span className='src'>AniList</span></span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
  )
}