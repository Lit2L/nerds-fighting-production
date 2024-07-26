'use client'

import { FlipWords } from './flip-words'
import React from 'react'

export function FlipWordsComponent() {
  // const words = ['Cool', 'New', 'Now', 'You']
  const words = ['New..', 'Now..', 'you.']

  return (
    <div className='flex h-48 w-full items-center justify-center px-4'>
      <div className='mx-auto w-full text-center font-logo text-[2em] tracking-tight  dark:text-[#F23030] md:text-[2.2em]'>
        Be
        <FlipWords words={words} />
      </div>
    </div>
  )
}
