'use client'

import React from 'react'
import { InlineWidget } from 'react-calendly'

const Bookings = () => {
  return (
    <div className='w-full py-12 md:py-24 lg:py-32'>
      <div className='container px-4 md:px-6'>
        <div className='mx-auto max-w-3xl space-y-4 text-center'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
            Schedule An Appointment
          </h2>
          <p className='leading-relaxed text-muted-foreground md:text-xl'>
            Book your training type and select a date and time that works best for you.
          </p>
        </div>
        <div className='mt-12 rounded-lg border bg-background p-6 md:p-10'>
          <div className='aspect-[4/3] overflow-hidden rounded-lg'>
            <div className='calendly'>
              <InlineWidget url='https://calendly.com/nerdsfighting' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookings
