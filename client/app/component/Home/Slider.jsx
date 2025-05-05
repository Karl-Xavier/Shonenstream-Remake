'use client'

import React, { useState, useEffect } from 'react'
import './css/slider.css'

export default function Slider({ cards }){

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {

    if(!cards || cards.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length)
    }, 3000)

    return () => clearInterval(interval)
  },[])

  return (
    <div className='slider-card-stack'>
      {cards.map((card, index) => {
        
        const diff = index - currentIndex

        let translateX = diff * 30
        let scale = 1 - Math.abs(diff) * 0.05
        let zIndex = cards.length - Math.abs(diff)
        let opacity = Math.abs(diff) > 3 ? 0 : 1

        return (
          <div key={index} className='card-stack' style={{ 
            transform: `translateX(${translateX}px) scale(${scale})`,
            zIndex,
            opacity
          }}>
            <img src={card.imgURL} alt={card.title} width={100} height={100}/>
          </div>
        )
      })}
    </div>
  )
} 