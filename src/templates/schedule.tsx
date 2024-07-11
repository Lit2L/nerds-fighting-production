'use client'

import { Calendar, Circle } from 'lucide-react'
import Link from 'next/link'

const classes = [
  {
    id: 1,
    title: 'Mondays',
    description: 'Focus on basics and fundamentals',
    level: 'Beginner level and All levels welcome',
    schedule: [
      {
        day: 'Mon',
        time: '8:00am - 9:30am',
        level: 'Beginners, All levels welcome'
      },
      { day: 'Mon', time: '9:00am - 10:30am', level: 'Intermediate++' }
    ]
  },
  {
    id: 2,
    title: 'Tuesdays',
    level: 'Intermediate Level and Experienced',
    description:
      'Join us for a weekly Technique, conditioning, drills, pads, mitts, everything. Join a group of easy going martial artists focused on health, skill and longevity.',
    schedule: [{ day: 'Mon', time: '9:00am - 10:30am', level: 'All levels' }]
  },
  {
    id: 3,
    title: 'Wednesdays',
    description:
      'Train your cardio and strength in a group of as a group in a fun but challenging hour of cardio kickboxing.',
    schedule: [
      {
        day: 'Wed',
        time: '9:00am - 10:30am',
        level: 'Intermediate or Experienced++'
      }
    ]
  },
  {
    id: 4,
    title: 'Saturdays',
    description:
      'Train your cardio and strength in a group of as a group in a fun but challenging hour of cardio kickboxing.',
    schedule: [{ day: 'Sat', time: '8:00AM', level: 'All levels' }]
  }
]

const Schedule: React.FC = () => {
  return (
    <section
      id='schedule'
      className=' relative min-h-full w-full bg-[radial-gradient(circle_300px_at_50%_350px,#AA8822,transparent)] py-36'
    >
      <div className='container mx-auto flex flex-col items-center justify-center'>
        <div className='space-y-9 text-center'>
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
        <div className='mt-16 grid grid-cols-1 justify-evenly gap-6 sm:grid-cols-2'>
          {classes &&
            classes.map((item, index) => (
              <div
                key={item.id}
                className='max-w-96 rounded-xl bg-background p-6 shadow-md transition-all duration-300 hover:scale-105'
              >
                <div className='flex items-center gap-4'>
                  <Circle className='size-6 text-orange-500' />
                  <h3 className='text-md font-semibold'>{item.title}</h3>
                </div>
                <p className='mt-2 text-sm text-gray-500'>{item.description}</p>
                <div className='mt-4 flex items-center justify-between'>
                  <div className='flex flex-col gap-6'>
                    {item.schedule &&
                      item.schedule.map((schedule, index) => (
                        <>
                          <div key={index} className='flex items-center gap-3'>
                            <Calendar className='size-5 text-orange-300' />
                            <span className='text-sm text-orange-300'>
                              {schedule.day} - {schedule.time}
                            </span>
                          </div>
                          <p className='text-sm text-gray-500'>{item.level}</p>
                        </>
                      ))}
                  </div>
                  <Link href='/dashboard/billing'>Join Class</Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Schedule
