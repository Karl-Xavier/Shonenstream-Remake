'use client'

import Link from 'next/link'
import { ArrowLeft } from 'phosphor-react'
import React from 'react'

export default function error({ error }) {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <h2 className='text-[indianred] font-bold'>{error.message}</h2>
      <Link href={'/feed'} className='cursor-pointer w-[120px] h-[40px] flex flex-row justify-center items-center bg-[#eee] text-[#242424] font-[16px] rounded-[10px] mt-2'>Go Back <ArrowLeft size={20} weight='bold'/></Link>
    </div>
  )
}