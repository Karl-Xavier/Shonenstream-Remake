import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './css/suggestion.css'
import { suggestionData } from '@/app/utils/rawData/suggestionData'
import getSuggestion from '@/app/services/getSuggestion'

export default async function Suggestion({ query }) {

  const data = await getSuggestion(query)

  console.log(data)

  return (
    <div className='suggestion-box'>
      <ul>
        {suggestionData.map((suggest, index) => (
          <li key={index} data-id={suggest.id} data-shonen-id={suggest.id}>
              <Link href={''}>
              <Image src={suggest.imgURL} width={100} height={100} alt={suggest.title}/>
              <div className="text-content-div">
                <h3>{suggest.title}</h3>
                <span>{suggest.episode}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}