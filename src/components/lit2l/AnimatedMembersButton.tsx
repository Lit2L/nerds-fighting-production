import AnimatedShinyText from '@/components/lit2l/animated-shiny-text'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export async function AnimatedMembersButton() {
  return (
    <div className='z-10 flex items-center justify-center'>
      <Link
        href='/dashboard'
        className={cn(
          'group scale-100 rounded-lg border-4 border-black/5 bg-neutral-600 transition-all ease-in hover:scale-95 hover:cursor-pointer hover:border-double hover:border-green-600 hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
        )}
      >
        <AnimatedShinyText className='inline-flex h-9 w-56 items-center justify-center text-white/50 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
          <span className='mr-3 scale-x-[-1] transition-transform ease-in-out group-hover:translate-x-3'>
            🔔
          </span>
          <span className='font-garamond text-sm font-bold uppercase  '>
            Members Only
          </span>
          {/* <ArrowRightIcon className='ml-1 size-3 transition-transform duration-200 ease-in-out group-hover:translate-x-1' /> */}
          <span className='rotate-10 ml-3  transition-transform ease-in-out group-hover:-translate-x-3'>
            📍
          </span>
        </AnimatedShinyText>
      </Link>
    </div>
  )
}
