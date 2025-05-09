'use client'

import { useState, useEffect } from "react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"

const usePagination = (totalPages) => {

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const pageParams = searchParams.get('page') || 1

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
      router.push(`${route}`)
    }else {
      router.push(`${route}?page=${page}`)
    }
  }

  return {
    currentPage,
    totalPages,
    handlePageChange
  }
}

export default usePagination