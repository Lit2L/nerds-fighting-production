'use client'

import Link from 'next/link'

export const Menu = () => {
  const menulist = [
    {
      id: 1,
      type: 'monthly',
      name: 'Membership',
      price: '$125 per month',
      description: 'Unlimited classes',
      link: '/service1'
    },
    {
      type: 'single',
      name: 'Private Sessions',
      price: '$100 per session',
      description: '1 hr private sessions',
      link: '/service2'
    },

    {
      type: 'monthly package',
      name: 'Private One-On-One Sessions (monthly 4 pack)',
      description: '1 hr private sessions per week',
      price: '$350',
      link: '/service4'
    },
    {
      type: 'single',
      name: 'Private Group Session',
      price: '$125 per session',
      link: '/service3'
    }
  ]
  return (
    <div className='h-full w-full'>
      <div className='container px-4 md:px-12'>
        <div className='mx-auto max-w-3xl space-y-4 text-center'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>Menu</h2>
          <p className='leading-relaxed text-muted-foreground md:text-xl'>
            Check out what we offer and ask us about our specials!
          </p>
        </div>
        <div className='mt-12 rounded-lg border bg-background p-6 md:p-10'>
          <div className='aspect-[4/3] rounded-lg'>
            {menulist.map((item, index) => (
              <>
                <div key={item.id} className='flex justify-between border-b py-12'>
                  <div className='flex w-1/3 flex-col gap-3'>
                    <h3 className='md:text-md text-sm font-semibold'>{item.name}</h3>
                    <p className='text-xs sm:text-sm '>{item.description}</p>
                  </div>
                  <p className='md:text-md w-1/3 text-end text-sm'>{item.price}</p>
                  {/* <Link href={item.link} className='w-1/3 text-end text-lg'>
                    Book now
                  </Link> */}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
