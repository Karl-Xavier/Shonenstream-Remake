'use client'

import Link from 'next/link'
import { CaretDown, CaretUp, List, MagnifyingGlass, X } from 'phosphor-react'
import React, { useEffect, useState, useTransition } from 'react'
import { navItem } from '@/app/utils/navItem'
import ProfileList from './ProfileList'
import './css/navbar.css'
import Search from './Search'
import Genredropdown from './dropdowns/Genredropdown'
import Suggestion from './dropdowns/Suggestion'
import ProfileOption from './dropdowns/ProfileOption'
import MobileNav from './dropdowns/MobileNav'

export default function Navbar() {

  const [isGenreOpen, setIsGenreOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [showSuggestion, setShowSuggestion] = useState(false)
  const [showProfileOption, setShowProfileOption] = useState(false)
  const [showMobileNav, setShowMobileNav] = useState(false)

  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')

  function toggleShowSearch(){
    setShowSearch(!showSearch)
  }

  function toggleGenre(){
    setIsGenreOpen(!isGenreOpen)
  }

  function toggleProfileOption() {
    setShowProfileOption(!showProfileOption)
  }

  function toggleMobileNav(){
    setShowMobileNav(!showMobileNav)
  }

    function isTyping(){

      if(query.length > 2){
        setShowSuggestion(true)
      }else{
        setShowSuggestion(false)
      }
    }

    isTyping()

  return (
    <header className='header relative'>
      <div className="header-content">
        <div className="left-content">
          <button className="mobile-icon outline-none" onClick={toggleMobileNav}>
            <List size={20} weight='bold'/>
          </button>
          <Link href={'/'}>
            <h1 className='header-h1'>Shonenstream</h1>
          </Link>
        </div>
        <nav className="main-nav" aria-label='main-nav'>
          <div className="search-content">
            <button className="mobile-search outline-none" onClick={toggleShowSearch}>
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
                  <span onClick={toggleGenre}>
                    <span>{item.name}</span>
                    <span>{isGenreOpen ? <CaretDown weight='fill' size={22}/> : <CaretUp weight='fill' size={22}/>}</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
          <ProfileList toggle={toggleProfileOption}/>
        </nav>
      </div>
      {isGenreOpen && <Genredropdown/>}
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
