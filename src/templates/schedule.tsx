import { AnimatedJoinButton } from '@/components/lit2l/AnimatedJoinButton'
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
    description: 'Beginner Kickboxing',
    level: 'All levels',
    schedule: [
      { id: 1, day: 'Sun', time: '8:00am - 9:00am' },
      { id: 2, day: 'Sun', time: '9:00am - 9:30am' }
    ]
  },
  {
    id: 2,
    title: 'Mondays',
    description: 'Improving and Developing Skill. ',
    level: 'All levels',
    schedule: [
      { id: 1, day: 'Mon', time: '7:00 - 8:30am' },
      { id: 2, day: 'Mon', time: '8:30 - 10:00pm' }
    ]
  },

  {
    id: 3,
    title: 'Wednesdays',
    level: 'All levels',
    description: 'Improving and Developing Skill. ',
    schedule: [
      {
        id: 1,
        day: 'Wed',
        time: '8:00 - 9:00am'
      },
      {
        id: 2,
        day: 'Wed',
        time: '9:00 - 10:30am'
      }
    ]
  },
  {
    id: 4,
    title: 'Saturdays',
    level: 'All levels',
    description: 'Beginner Kickboxing.',
    schedule: [
      { id: 1, day: 'Sat', time: '7:45am - 9:00am' },
      { id: 2, day: 'Sat', time: '9:00 - 10:30am' }
    ]
  }
]

const Schedule: React.FC = () => {
  return (
    <section
      id='schedule'
      className=' relative min-h-full w-full bg-[radial-gradient(circle_300px_at_50%_350px,#10b98133,transparent)] py-36'
    >
      <div className='mx-auto flex flex-col items-center justify-center sm:container'>
        <div className='space-y-9 text-center'>
          <h2 className='font-logo text-3xl tracking-wide lg:text-6xl'>Class Schedule</h2>
          <p className='font-heading text-gray-100'>
            Find the perfect class to fit your fitness goals and schedule.
          </p>
        </div>
        <div className='mt-16 grid grid-cols-1 justify-center gap-6 sm:grid-cols-2'>
          {classes &&
            classes.map((item) => (
              <Card
                key={item.id}
                className='h-72 w-80 rounded-xl border-zinc-700 bg-zinc-900/90 p-6 shadow-md transition-all duration-300 hover:scale-105'
              >
                <CardTitle className='font-heading text-2xl'>
                  <div className='flex items-center gap-3'>
                    <MdSportsMartialArts className='size-6' />
                    <h3 className='tracking-wide text-gray-300'>{item.title}</h3>
                  </div>
                </CardTitle>
                <Separator className='my-6' />

                <div className='flex flex-col items-center justify-between gap-3'>
                  {item.schedule.map((schedule) => (
                    <div
                      key={schedule.id}
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
                  ))}
                </div>
                <div className='my-6 flex w-full flex-col items-start justify-between gap-6 '>
                  <span className='ml-3 flex items-center gap-1'>
                    <GiPunchingBag className='size-6 text-red-500' />
                    <p className='ml-3 font-heading text-sm tracking-tighter text-white/60 dark:text-gray-200'>
                      {item.description}
                    </p>
                  </span>
                  <AnimatedJoinButton />
                </div>
              </Card>
            ))}
        </div>
        <Card className='my-12'>
          <CardContent className='p-6'>
            <h3 className='font-heading text-2xl'>Location: Williams MMA</h3>
            <Separator className='my-3' />
            Address: 8780 Warner Ave, Suite 7 Fountain Valley, CA 92708
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Schedule
