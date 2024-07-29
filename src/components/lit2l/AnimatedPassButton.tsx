import AnimatedShinyText from '@/components/lit2l/animated-shiny-text'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export async function AnimatedPassButton() {
  return (
    <div className='z-10 flex  items-center justify-center'>
      <Link
        href='https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
        className={cn(
          'group rounded-xl border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
        )}
      >
        <AnimatedShinyText className='inline-flex items-center justify-center px-4 py-2 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
          <span className='mr-3 scale-75 scale-x-[-.8] transition-transform  hover:translate-x-3'>
            🥊
          </span>
          <span className='uppercase'>Get Your Free Class</span>

          <span className='ml-2 transition-transform ease-in-out group-hover:-translate-x-2'>
            🥊
          </span>
        </AnimatedShinyText>
      </Link>
    </div>
  )
}
