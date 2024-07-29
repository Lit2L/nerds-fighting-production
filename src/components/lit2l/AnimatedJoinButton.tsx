import AnimatedShinyText from '@/components/lit2l/animated-shiny-text'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export async function AnimatedJoinButton() {
  return (
    <div className='z-10 flex items-center justify-center'>
      <Link
        href='https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
        className={cn(
          'group  w-44 scale-100 rounded-xl border-2 border-black/5 bg-neutral-600 transition-all ease-in hover:scale-95 hover:cursor-pointer hover:border-double hover:border-orange-900 hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
        )}
      >
        <AnimatedShinyText className=' inline-flex  items-center justify-center px-3 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
          <span className='mr-2 scale-50 scale-x-[-.6] transition-transform ease-in-out group-hover:translate-x-2'>
            🥊
          </span>
          <span className='font-sans text-xs font-bold uppercase tracking-tighter'>
            Get Free Class
          </span>

          <span className='ml-2 scale-50 transition-transform ease-in-out group-hover:-translate-x-2 sm:scale-75'>
            🥊
          </span>
        </AnimatedShinyText>
      </Link>
    </div>
  )
}
