import React from 'react'

const Bookings = () => {
  return (
    <div className='py-16'>
      <div
        className='calendly-inline-widget h-[700px] min-w-[320px]'
        data-url='https://calendly.com/larryly1'
        style={{ minWidth: '320px', height: '700px' }}
      ></div>
      <script
        type='text/javascript'
        src='https://assets.calendly.com/assets/external/widget.js'
        async
      ></script>
    </div>
  )
}

export default Bookings
