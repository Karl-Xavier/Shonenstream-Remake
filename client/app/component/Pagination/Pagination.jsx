'use client'

import './css/pagination.css'
import getPages from '../../utils/getPages'
import { usePathname } from 'next/navigation'
import { CaretRight, CaretLeft } from 'phosphor-react'

export default function Pagination({ totalPages, currentPage, onPageChange }) {

  const pages = getPages(totalPages, Number(currentPage))

  const pathname = usePathname()

  return (
    <div className='pagination'>
      <ul className="pagination-ul">
        {currentPage > 1 && <button className='pagination-prev' onClick={() => onPageChange(Number(currentPage) - 1, pathname)}><CaretLeft size={22} weight='fill'/></button>}
        {pages.map((page, idx) => (
          <button key={idx} disabled={page === '.....' || page === currentPage} className={`${page === '.....' ? 'page-dot' : 'pagination-btn'} ${Number(currentPage) === page && 'active'}`} onClick={() => onPageChange(page, pathname)}>{page}</button>
        ))}
        {currentPage < totalPages && <button className='pagination-next' onClick={() => onPageChange(Number(currentPage) + 1, pathname)}><CaretRight size={22} weight='fill'/></button>}
      </ul>
    </div>
  )
}
