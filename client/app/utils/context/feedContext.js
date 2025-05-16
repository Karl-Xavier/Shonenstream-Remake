'use client'

import { useState, useContext, createContext, useEffect } from "react";
import { usePathname } from "next/navigation";

const FeedContext = createContext()

export const FeedProvider = ({ children }) => { 

  const isPresent = JSON.parse(localStorage.getItem('selectedFeed')) || null

  const [feeds, setFeeds] = useState([]);
  const [selectedFeed, setSelectedFeed] = useState(isPresent)

  const pathname = usePathname()

  // Save selected feed to localstorage when updated

  useEffect(() => {

    if(selectedFeed) localStorage.setItem('selectedFeed', JSON.stringify(selectedFeed))

  }, [selectedFeed])

  useEffect(() => {

    if(pathname === '/feed'){

      localStorage.removeItem('selectedFeed')
    }

  }, [pathname])

  return (
    <FeedContext.Provider value={{ feeds, setFeeds, selectedFeed, setSelectedFeed }}>
      {children}
    </FeedContext.Provider>
  )

}

export const useFeed = () => useContext(FeedContext)