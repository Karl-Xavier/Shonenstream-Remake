'use client'

import Link from 'next/link'
import { CaretDown, CaretUp, List, MagnifyingGlass, X } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import { navItem } from '@/app/utils/navItem'
import ProfileList from './ProfileList'
import './css/navbar.css'
import Search from './Search'
import Genredropdown from './dropdowns/Genredropdown'
import Suggestion from './dropdowns/Suggestion'
import ProfileOption from './dropdowns/ProfileOption'
import MobileNav from './dropdowns/MobileNav'
import { handleGlobalDropdown } from '@/app/utils/handleGlobalDropdown'

export default function Navbar() {

  const [isGenreOpen, setIsGenreOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [showSuggestion, setShowSuggestion] = useState(false)
  const [showProfileOption, setShowProfileOption] = useState(false)
  const [showMobileNav, setShowMobileNav] = useState(false)

  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')

  const closeDropdown=()=>{
    setIsGenreOpen(false)
    setShowMobileNav(false)
    setShowProfileOption(false)
  }

  useEffect(() =>{
    const listener=(e)=>{
      handleGlobalDropdown(e, ()=> setQuery(''),closeDropdown)
    }

    document.addEventListener('mousedown', listener)

    return () => document.removeEventListener('mousedown', listener)
  },[])

  useEffect(() => {

    function isTyping(){

      if(query.length > 2){
        setShowSuggestion(true)
      }else{
        setShowSuggestion(false)
      }
    }

    isTyping()

  },[query, showSuggestion])

  return (
    <header className='header relative'>
      <div className="header-content">
        <div className="left-content">
          <button className="mobile-icon outline-none" id='small-nav-btn' onClick={() => setShowMobileNav(!showMobileNav)}>
            <List size={20} weight='bold'/>
          </button>
          <Link href={'/'}>
            <h1 className='header-h1'>Shonenstream</h1>
          </Link>
        </div>
        <nav className="main-nav" aria-label='main-nav'>
          <div className="search-content">
            <button className="mobile-search outline-none" onClick={() => setShowSearch(!showSearch)}>
              {showSearch ? <X size={22} weight='bold' /> : <MagnifyingGlass size={22} weight='bold'/>}
            </button>
            <div className="lg-screen-search">
              <Search query={query} setQuery={setQuery}/>
            </div>
          </div>
          <ul>
            {navItem.map((item, index) => (
              <li key={index}>
                {item.link !== null ? (
                  <Link href={item.link}>
                    <span>{item.name}</span>
                    <span>{item.icon}</span>
                  </Link>
                ): (
                  <span id='genre-drop-btn' onClick={() => setIsGenreOpen(!isGenreOpen)}>
                    <span>{item.name}</span>
                    <span>{isGenreOpen ? <CaretDown weight='fill' size={22}/> : <CaretUp weight='fill' size={22}/>}</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
          <ProfileList toggle={() => setShowProfileOption(!showProfileOption)}/>
        </nav>
      </div>
      {isGenreOpen && <Genredropdown />}
      {showSearch && (
        <div className='mobile-bar flex-row justify-center items-center'>
          <Search query={query} setQuery={setQuery}/>
        </div>
      )}
      {showSuggestion && <Suggestion query={query}/>}
      {showProfileOption && <ProfileOption/>}
      {showMobileNav && <MobileNav/>}
    </header>
  )
}
