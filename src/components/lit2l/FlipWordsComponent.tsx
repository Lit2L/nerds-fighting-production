'use client'

import { FlipWords } from './flip-words'
import React from 'react'

export function FlipWordsComponent() {
  // const words = ['Cool', 'New', 'Now', 'You']
  const words = ['Kickboxing..', 'Martial Arts..', 'you.']

  return (
    <div className='flex h-48 w-full items-center justify-center px-4'>
      <div className='font- mx-auto w-full text-center text-[2em] font-extrabold tracking-tight text-nerdblue dark:text-[#F23030] md:text-[2.5em]'>
        Be
        <FlipWords words={words} />
      </div>
    </div>
  )
}
