'use client'

import React from 'react'
import './css/searchcomponent.css'
//import { Listdata } from '@/app/utils/rawData/listdata'
import { getDisplayCategoryLink } from '@/app/utils/formatLink'
import Link from 'next/link'
import Image from 'next/image'
import { Television } from 'phosphor-react'
import PaginationWrapper from '../Pagination/PaginationWrapper'

export default function SearchComponent({ queryList, page }) {
  return (
    <div className='container mt-4 p-2 w-full h-auto search-component'>
      <ul className='ul-search w-full h-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-[10px]'>
        {queryList.map((queryItem, index) => {

          const formattedLink = getDisplayCategoryLink(queryItem.link)

          return (
            <li key={index} data-id={index+1} className='w-full h-[300px]'>
              <Link href={{ pathname: formattedLink, query: { og: encodeURIComponent(`${queryItem.link}#ep=1`) } }} className='w-full h-[85%] block mb-[20px] text-[14px]'>
                <Image src={queryItem.imgURL} alt={queryItem.title} width={100} height={100} className='w-full h-[90%] object-cover mb-[5px]' unoptimized/>
                <p>{queryItem.title}</p>
              </Link>
              <div className="botm w-full h-auto flex flex-row justify-between items-center px-[10px] text-[14px] font-light">
                <span className='epi-avail w-max flex flex-row justify-between items-center gap-2 text-orange-500'>{queryItem.episode === '' ? '0' : queryItem.episode} <Television/></span>
                <span className="type">{queryItem.type}</span>
              </div>
            </li>
          )

        })}
      </ul>
      {page > 0 && <PaginationWrapper totalPages={page}/>}
    </div>
  )
}