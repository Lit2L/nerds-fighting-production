'use client'

import React from 'react'
import { InlineWidget } from 'react-calendly'

const Bookings = () => {
  return (
    <div className='my-16 h-full py-16'>
      <InlineWidget url='https://calendly.com/larryly1' />
    </div>
  )
}

export default Bookings
