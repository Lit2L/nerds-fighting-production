import { FlipWords } from './flip-words'
import React from 'react'

export function FlipWordsComponent() {
  const words = ['New..', 'Now..', 'You.']

  return (
    <div className='flex h-16 w-full items-center justify-center px-4'>
      <div className='mx-auto w-full text-center font-logo text-3xl font-bold tracking-tight text-white'>
        Be
        <FlipWords words={words} />
      </div>
    </div>
  )
}
