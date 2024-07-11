import AnimatedShinyText from '@/components/lit2l/animated-shiny-text'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export async function AnimatedPassButton() {
  return (
    <div className='z-10'>
      <Link
        href='/pricing'
        className={cn(
          'group w-36 scale-100 rounded-lg border-4 border-black/5 bg-neutral-600 transition-all ease-in hover:scale-95 hover:cursor-pointer hover:border-double hover:border-orange-900 hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 md:w-56'
        )}
      >
        <AnimatedShinyText className='inline-flex h-6 w-44 items-center justify-center text-white/50 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 md:h-9 md:w-60'>
          <span className='mr-3 scale-75 scale-x-[-.8] transition-transform ease-in-out group-hover:translate-x-3'>
            🥊
          </span>
          <span className='font-garamond text-xs font-bold uppercase  '>
            Free 2-Day Pass
          </span>
          {/* <ArrowRightIcon className='ml-1 size-3 transition-transform duration-200 ease-in-out group-hover:translate-x-1' /> */}
          <span className='ml-3 scale-75 transition-transform ease-in-out group-hover:-translate-x-3'>
            🥊
          </span>
        </AnimatedShinyText>
      </Link>
    </div>
  )
}
