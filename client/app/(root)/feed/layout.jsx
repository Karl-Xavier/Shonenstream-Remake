import { FeedProvider } from '@/app/utils/context/feedContext'
import React from 'react'

export const metadata = {
  title: 'Latest Anime, Manga and Light Novel News on Shonenstream',
  description: 'Get Latest anime news on Shonenstream'
}

export default function layout({ children }) {
  return (
    <body>
      <FeedProvider>
        {children}
      </FeedProvider>
    </body>
  )
}