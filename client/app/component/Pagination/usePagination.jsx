'use client'

import { useState, useEffect } from "react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"

const usePagination = (totalPages) => {

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const pageParams = searchParams.get('page') || 1

  // check if there is a query param for search page

  const queryParam = searchParams.get('query')

  const [currentPage, setCurrentPage] = useState(pageParams)

  useEffect(() => {

    setCurrentPage(pageParams)

    if(pathname === '/movies'){

      handlePageChange(pageParams, '/movies')

    }else if(pathname === '/genre'){
      handlePageChange(pageParams, '/genre')
    }

  }, [searchParams, pathname])

  const handlePageChange = (page, route) => {

    if(page >= 1 && page <= totalPages && page !== currentPage){
      setCurrentPage(page)
    }

    if(page === 1){

      if(queryParam){
        router.push(`${route}?query=${queryParam}`)
      }else {
        router.push(`${route}`)
      }
    }else {

      if(queryParam){
        router.push(`${route}?query=${queryParam}&page=${page}`)
      }else{
        router.push(`${route}?page=${page}`)
      }
    }
  }

  return {
    currentPage,
    totalPages,
    handlePageChange
  }
}

export default usePagination