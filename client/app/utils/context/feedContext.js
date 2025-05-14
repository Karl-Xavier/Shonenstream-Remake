'use client'

import { useState, useContext, createContext } from "react";

const FeedContext = createContext()

export const FeedProvider = ({ children }) => { 

  const [feeds, setFeeds] = useState([]);

  return (
    <FeedContext.Provider value={{ feeds, setFeeds }}>
      {children}
    </FeedContext.Provider>
  )

}

export const useFeed = () => useContext(FeedContext)