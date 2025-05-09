'use client'

import React from 'react'
import Pagination from './Pagination'
import usePagination from './usePagination'

export default function PaginationWrapper({ totalPages }) {

  const { currentPage, handlePageChange } = usePagination(totalPages)

  return (
    <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange}/>
  )
}
