import { FlipWords } from './flip-words'
import React from 'react'

export function FlipWordsComponent() {
  const words = [
    'Program-Updating...',
    'Debug-Limits.exe',
    'Upgrade-body.go',
    'Hack-self-confidence.push',
    'Optimize.Mental.Health'
  ]

  return (
    <div className='flex w-full flex-col items-center justify-center gap-6 px-4 pt-6'>
      <div className='mx-auto w-full text-center font-heading text-3xl font-bold tracking-tight text-emerald-950 dark:text-white'>
        Run start...
      </div>
      <div className=''>
        <FlipWords words={words} />
      </div>
    </div>
  )
}
