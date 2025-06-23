import '../globals.css'

import React from 'react'
import { AuthProvider } from '../utils/context/authContext'

export const metadata = {
  openGraph: {
    title: 'Watch and Download anime for free on Shonenstream | HD Anime for free',
    description: 'Watch HD Anime for free on Shonenstream',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Watch and Download Anime for free on Shonenstream'
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Watch and Download anime for free on Shonenstream | HD Anime for free',
    description: 'Watch HD Anime for free on Shonenstream',
    images: ['/og-image.jpg']
  }
}

export default function layout({ children }) {
  return (
    <html>
      <body>
        <AuthProvider>
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  )
}