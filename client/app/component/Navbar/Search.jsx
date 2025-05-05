import React from 'react'
import './css/search.css'

export default function Search({ query, setQuery }) {
  return (
    <div className='search-div'>
      <input type="text" placeholder='Search Anime....' value={query} onChange={(e) => setQuery(e.target.value)}/>
    </div>
  )
}