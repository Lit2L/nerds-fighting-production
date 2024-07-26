'use client'

import { AnimatedJoinBtn } from '@/components/lit2l/AnimatedJoinBtn'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Circle } from 'lucide-react'
import Link from 'next/link'
import { FaYinYang } from 'react-icons/fa'
import {
  GiArmorPunch,
  GiFulguroPunch,
  GiHighPunch,
  GiPunch,
  GiPunchBlast,
  GiPunchingBag
} from 'react-icons/gi'
import { MdOutlineStarRate, MdSportsMartialArts } from 'react-icons/md'
import { SiFacepunch } from 'react-icons/si'

const classes = [
  {
    id: 1,
    title: 'Sundays',
    type: 'Cardio Kickboxing',
    description:
      'Break a sweat and relieve your stress with a fun and interactive Cardio Kickboxing class.',
    level: 'All levels',
    schedule: [{ day: 'Mon', time: '7:30am - 9:30am' }]
  },
  {
    id: 2,
    title: 'Mondays',
    type: 'Group Training',
    description: 'Skills & Conditioning.',
    level: 'All levels',
    schedule: [
      { day: 'Mon', time: '7:30am - 9:00am' },
      { day: 'Mon', time: '9:00am - 10:30pm' }
    ]
  },
  {
    id: 3,
    title: 'Tuesdays',
    level: 'All levels',
    description:
      'Join us for a weekly session focused on technique, conditioning, drills while enjoying the open air.',
    schedule: [{ day: 'Tuesday', time: '6:00pm - 7:00pm' }]
  },
  {
    id: 4,
    title: 'Wednesdays',
    level: 'Intermediate +',
    description:
      'Train your cardio and strength in a group of as a group in a fun but challenging hour of cardio kickboxing.',
    schedule: [
      {
        day: 'Wed',
        time: '9:00am - 10:30am',
        level: 'Intermediate+'
      }
    ]
  },
  {
    id: 5,
    title: 'Saturdays',
    level: 'All levels',
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
          <h2 className='font-logo text-3xl  tracking-tight  sm:text-4xl lg:text-5xl'>
            Class Schedule
          </h2>
          <p className='font-heading text-gray-100'>
            Find the perfect class to fit your fitness goals and schedule.
          </p>
        </div>
        <div className='mt-16 grid grid-cols-1 justify-evenly gap-6 sm:grid-cols-2'>
          {classes &&
            classes.map((item, index) => (
              <Card
                key={item.id}
                className='max-w-96 rounded-xl bg-gray-700/90 p-6 shadow-md transition-all duration-300 hover:scale-105'
              >
                <CardTitle className='font-heading text-2xl'>
                  <div className='flex items-center gap-3'>
                    <Circle className='size-4 ' />
                    <h3 className='tracking-wide text-gray-300'>{item.title}</h3>
                  </div>
                </CardTitle>

                <div className='mt-4 '>
                  <div className='flex w-full flex-col gap-3'>
                    {item.schedule &&
                      item.schedule.map((schedule, index) => (
                        <>
                          <div
                            key={schedule.day}
                            className='flex items-center font-heading tracking-tight'
                          >
                            <Calendar className='w-1/16 mr-4 size-5 dark:text-emerald-500' />
                            <div
                              key={schedule.time}
                              className='flex w-full items-center justify-between '
                            >
                              <span className='w-1/16 text-sm font-bold text-orange-300'>
                                {schedule.day} - {schedule.time}
                              </span>

                              <p className='w-3/16 flex border font-heading text-xs uppercase text-gray-500 dark:text-green-500'>
                                {item.level}
                              </p>
                            </div>
                          </div>
                        </>
                      ))}

                    <Card className='border-none bg-[#181818]/40 p-3'>
                      <p className='font-sans text-sm tracking-wide dark:text-gray-200'>
                        {item.description}
                      </p>
                    </Card>

                    <AnimatedJoinBtn />
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Schedule
