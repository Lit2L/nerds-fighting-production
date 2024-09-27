import { AnimatedJoinButton } from '../components/lit2l/AnimatedJoinButton'
import { AnimatedMembersButton } from '../components/lit2l/AnimatedMembersButton'
import { FlipWordsComponent } from '../components/lit2l/FlipWordsComponent'
import GradualSpacing from '../components/lit2l/gradual-spacing'
import Logo from '@/components/Logo'
import { Badge } from '@/components/ui/badge'

export const Hero = () => {
  return (
    <section className='relative h-[80dvh] w-full py-12'>
      <div className='container flex h-full flex-col items-center gap-4 text-center'>
        <div className='mt-16 space-y-12'>
          <Badge className='md:text-md rounded-lg bg-gradient-to-r from-gray-500 via-gray-300/70 to-gray-500 font-heading text-xs uppercase tracking-wide text-red-900 shadow-lg shadow-red-900 sm:tracking-wide'>
            Kickboxing & Martial Arts Club
          </Badge>
          <GradualSpacing
            className='text-center font-logo text-3xl tracking-[-0.2em] shadow-gray-500 dark:shadow-gray-200 sm:text-5xl md:text-6xl lg:text-7xl'
            text='Nerds Fighting'
          />
        </div>
        <div className='flex flex-col items-center justify-center gap-0 sm:gap-12'>
          <div className='relative flex h-48 w-64 justify-center'>
            <div className='absolute top-0 -z-0 h-48 w-64 md:h-80 md:w-80'>
              <Logo />
            </div>
          </div>
          <div className='w-full'>
            <FlipWordsComponent />
          </div>
        </div>
        <div className=' mt-6 flex w-full max-w-xl flex-col justify-between gap-3 md:flex-row lg:gap-12'>
          <AnimatedJoinButton />

          <AnimatedMembersButton />
        </div>
      </div>
    </section>
  )
}
