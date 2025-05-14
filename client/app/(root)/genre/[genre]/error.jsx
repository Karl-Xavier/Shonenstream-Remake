'use client'

import React from 'react'
import { ArrowClockwise } from 'phosphor-react'

export default function Error({ error, reset }) {

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <h2 className='text-[indianred] font-bold'>{error.message}</h2>
      <button onClick={() => reset()} className='cursor-pointer w-[120px] h-[40px] flex flex-row justify-center items-center bg-[#eee] text-[#242424] font-[16px] rounded-[10px] mt-2'>Try Again <ArrowClockwise size={20} weight='bold'/></button>
    </div>
  )
} 