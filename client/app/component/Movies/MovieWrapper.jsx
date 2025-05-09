'use client'

import React, { useEffect, useState } from 'react'
import MovieComponent from './MovieComponent'
import { useSearchParams } from 'next/navigation'

export default function MovieWrapper() {

  const searchParams = useSearchParams()

  const param = searchParams.get('page') || undefined

  const [pageNum, setPageNum] = useState(param)

  useEffect(() => {

    setPageNum(param)

  }, [param])

  return (
    <div>
      <MovieComponent page={pageNum}/>
    </div>
  )
}