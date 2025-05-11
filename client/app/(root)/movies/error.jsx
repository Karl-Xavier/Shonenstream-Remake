'use client'

import { ArrowClockwise } from 'phosphor-react'
import React from 'react'

export default function error({ error, reset }) {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <h2 className='text-[indianred]'>{error.message}</h2>
      <button onClick={() => reset()} className='cursor-pointer w-[120px] h-[40px] flex flex-row justify-center items-center bg-[#eee] text-[#242424] font-[16px] rounded-[10px] mt-2'>Try Again <ArrowClockwise weight='bold' size={20}/></button>
    </div>
  )
}