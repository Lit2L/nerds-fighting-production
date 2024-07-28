'use client'

import { AnimatedJoinBtn } from '@/components/lit2l/AnimatedJoinBtn'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
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
    description: 'Beginner Noob Kickboxing',
    level: 'All levels',
    schedule: [
      { day: 'Sun', time: '7:45am - 9:00am' },
      { day: 'Sun', time: '9:00am - 10:30am' }
    ]
  },
  {
    id: 2,
    title: 'Mondays',
    type: 'Group Training',
    description: 'Improving and Developing Skill. ',
    level: 'All levels',
    schedule: [
      { day: 'Mon', time: '7:30 - 9:00am' },
      { day: 'Mon', time: '9:00 - 10:30pm' }
    ]
  },

  {
    id: 3,
    title: 'Wednesdays',
    type: 'Group Training',
    level: 'Intermediate+',
    description: 'Improving and Developing Skill. ',
    schedule: [
      {
        day: 'Wed',
        time: '7:45 - 9:00am'
      },
      {
        day: 'Wed',
        time: '9:00 - 10:30am'
      }
    ]
  },
  {
    id: 4,
    title: 'Saturdays',
    level: 'All levels',
    description: 'Noobie Kickboxing.',
    schedule: [
      { day: 'Sat', time: '7:45am - 9:00am', level: 'All levels' },
      { day: '', time: '' }
    ]
  }
]

const Schedule: React.FC = () => {
  return (
    <section
      id='schedule'
      className=' relative min-h-full w-full bg-[radial-gradient(circle_300px_at_50%_350px,#10b98133,transparent)] py-36'
    >
      <div className='container mx-auto flex flex-col items-center justify-center'>
        <div className='space-y-9 text-center'>
          <h2 className='font-logo text-6xl  tracking-tight  '>Class Schedule</h2>
          <p className='font-heading text-gray-100'>
            Find the perfect class to fit your fitness goals and schedule.
          </p>
        </div>
        <div className='mt-16 grid grid-cols-1 justify-evenly gap-6 sm:grid-cols-2'>
          {classes &&
            classes.map((item, index) => (
              <Card
                key={item.id}
                className='h-72 w-96 rounded-xl border-zinc-700 bg-zinc-900/90 p-6 shadow-md transition-all duration-300 hover:scale-105'
              >
                <CardTitle className='font-heading text-2xl'>
                  <div className='flex items-center gap-3'>
                    <Circle className='size-4 ' />
                    <h3 className='tracking-wide text-gray-300'>{item.title}</h3>
                  </div>
                </CardTitle>
                <Separator className='my-3' />

                <div className='flex flex-col items-center justify-between '>
                  {item.schedule &&
                    item.schedule.map((schedule, index) => (
                      <>
                        <div
                          key={schedule.time}
                          className='flex w-full items-center font-heading tracking-tighter'
                        >
                          <Calendar className='w-1/16 mx-2 size-5 dark:text-emerald-500' />
                          <div
                            key={schedule.time}
                            className='flex w-full items-center justify-between '
                          >
                            <span className='w-1/16 text-xs font-bold text-stone-200'>
                              {schedule.day} - {schedule.time}
                            </span>

                            <p className='w-3/16 flex font-heading text-xs uppercase text-emerald-500 dark:text-green-500'>
                              {item.level}
                            </p>
                          </div>
                        </div>
                      </>
                    ))}

                  <div className=''>
                    <p className='text-left font-heading text-sm tracking-tighter text-white/60 dark:text-gray-200'>
                      {item.description}
                    </p>
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
