import React from 'react'

export const metadata = {
  title: 'Watch and Download Latest Movies on Shonenstream for free in HD quality',
  description: 'Stream and Download HD anime for free on Shonenstream',
  keywords: 'anime movies, stream anime, free anime, download anime, shonen stream, shounen'
}

export default function layout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}