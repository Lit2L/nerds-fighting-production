import AnimatedShinyText from '@/components/lit2l/animated-shiny-text'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export async function AnimatedJoinBtn() {
  return (
    <div className='z-10'>
      <Link
        href='https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
        className={cn(
          'group w-36 scale-100 rounded-lg border-4 border-black/5 bg-neutral-600 transition-all ease-in hover:scale-95 hover:cursor-pointer hover:border-double hover:border-orange-900 hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 md:w-56'
        )}
      >
        <AnimatedShinyText className='text-nerdred inline-flex h-6 w-48 items-center justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 md:h-9 md:w-60'>
          <span className='mr-3 scale-75 scale-x-[-.8] transition-transform ease-in-out group-hover:translate-x-3'>
            🥊
          </span>
          <span className='font-heading text-xs font-bold uppercase'>Claim Free Pass</span>

          <span className='ml-3 scale-75 transition-transform ease-in-out group-hover:-translate-x-3'>
            🥊
          </span>
        </AnimatedShinyText>
      </Link>
    </div>
  )
}
