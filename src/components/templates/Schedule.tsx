import { Calendar, Circle } from 'lucide-react'
import Link from 'next/link'

export const Schedule = () => {
  return (
    <div>
      <section
        id='schedule'
        className=' relative min-h-screen w-full  bg-[radial-gradient(circle_300px_at_50%_350px,#AA8822,transparent)] py-20'
      >
        <div className='container mx-auto flex flex-col items-center justify-center '>
          <div className='space-y-9 text-center '>
            <div className='inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-500'>
              Class Schedule
            </div>
            <h2 className='text-3xl font-bold tracking-tight text-orange-100 sm:text-4xl lg:text-5xl'>
              Class Schedule
            </h2>
            <p className='font-heading text-gray-100'>
              Find the perfect class to fit your fitness goals and schedule.
            </p>
          </div>
          <div className='mt-16 flex flex-col justify-evenly gap-6 md:flex-row'>
            <div className='max-w-96 rounded-xl bg-background p-6 shadow-md transition-all duration-300 hover:scale-105'>
              <div className='flex items-center gap-4'>
                <Circle className='h-8 w-8 text-orange-500' />
                <h3 className='text-xl font-semibold'>Cardio Kickboxing</h3>
              </div>
              <p className='mt-2 text-gray-500'>
                Learn the fundamentals of kickboxing in a supportive learning
                environment.
              </p>
              <div className='mt-4 flex items-center justify-between'>
                <div className='flex flex-col gap-6'>
                  <div className='flex items-center gap-3'>
                    <Calendar className='h-5 w-5 text-orange-500' />
                    <span className='text-sm text-orange-500'>
                      Mon - 9:00AM - 10:30AM
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Calendar className='h-5 w-5 text-orange-500' />
                    <span className='text-sm text-orange-500'>
                      Wed - 9:00AM - 10:30AM
                    </span>
                  </div>
                </div>
                {/* <Link href='/dashboard/billing'>Join Class</Link> */}
              </div>
            </div>

            <div className='max-w-96 rounded-xl bg-white/80 p-6 shadow-md transition-all duration-300 hover:scale-105'>
              <div className='flex items-center gap-6'>
                <Circle className='h-8 w-8 text-orange-500' />
                <h3 className='text-xl font-semibold text-orange-950/90'>
                  Flow State Kickboxing
                </h3>
              </div>
              <p className='mt-2 text-sm font-medium text-slate-900'>
                Train your cardio and strength in a group of as a group in a fun
                but challenging hour of cardio kickboxing.
              </p>
              <div className='mt-4 flex items-center justify-between'>
                <div className='flex flex-col gap-3'>
                  {/* <div className='flex items-center gap-3'>
                    <Calendar className='h-5 w-5 text-gray-900' />
                    <span className='font-heading text-sm text-gray-500'>
                      Tue - 12:00 AM
                    </span>
                  </div> */}
                  <div className='flex items-center gap-3'>
                    <Calendar className='h-5 w-5 text-gray-500' />
                    <span className='font-heading text-sm text-gray-500'>
                      Sat - 8:00 AM
                    </span>
                  </div>
                </div>
                {/* <Link
                  href='/dashboard/billing'
                  className='text-slate-900'
                  aria-disabled='true'
                ></Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
