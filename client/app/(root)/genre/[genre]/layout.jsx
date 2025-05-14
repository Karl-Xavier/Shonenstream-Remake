import React from 'react'

export async function generateMetadata({ params }) {
  
  const { genre } = await params

  const formattedText = genre.split('-').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ')

  return {
    title: `Watch ${formattedText} Anime for Free on Shonenstream`,
    description: `Watch Free ${formattedText} anime on shonenstream`
  }

}

export default function layout({ children }) {
  return (
    <body>
      {children}
    </body>
  )
}