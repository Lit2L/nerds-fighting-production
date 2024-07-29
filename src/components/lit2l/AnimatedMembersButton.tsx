import AnimatedShinyText from '@/components/lit2l/animated-shiny-text'
import { cn } from '@/lib/utils'
import { CalendarHeart, Pencil } from 'lucide-react'
import Link from 'next/link'

export async function AnimatedMembersButton() {
  return (
    <div className='z-10 flex items-center justify-evenly'>
      <Link
        href='https://calendly.com/nerdsfighting'
        className={cn(
          'group w-40 rounded-xl border-2 border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
        )}
      >
        <AnimatedShinyText className='inline-flex items-center justify-center px-4 py-2 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
          <CalendarHeart className='mr-2 size-4 scale-75 scale-x-[-.8] text-blue-300 transition-transform ease-in-out group-hover:translate-x-2 sm:size-5' />
          <span className='text-balance font-sans text-xs font-bold uppercase tracking-tighter'>
            Book
          </span>

          <Pencil className='ml-2 size-3 text-yellow-600 transition-transform ease-in-out group-hover:-translate-x-2 sm:ml-3 sm:size-4' />
        </AnimatedShinyText>
      </Link>
    </div>
  )
}
