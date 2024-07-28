import { AnimatedMembersButton } from '../components/lit2l/AnimatedMembersButton'
import { AnimatedPassButton } from '../components/lit2l/AnimatedPassButton'
import { FlipWordsComponent } from '../components/lit2l/FlipWordsComponent'
import GradualSpacing from '../components/lit2l/gradual-spacing'
import Logo from '@/components/Logo'
import { Badge } from '@/components/ui/badge'

export const Hero = () => {
  return (
    <section className='relative h-[80dvh] w-full '>
      <div className='container z-10 flex h-full max-w-5xl flex-col items-center justify-center gap-4 text-center'>
        <div className='m-12 space-y-12'>
          <Badge className='rounded-lg bg-gradient-to-r from-gray-500 via-gray-300/70 to-gray-500 font-heading text-xs uppercase tracking-wide text-red-900 shadow-lg shadow-red-900'>
            Kickboxing & Martial Arts Club
          </Badge>
          <GradualSpacing
            className='text-center font-logo text-3xl tracking-[-0.2em] shadow-gray-500 dark:shadow-gray-200 sm:text-5xl md:text-6xl'
            text='Nerds Fighting'
          />
        </div>

        <div className='relative flex h-80 w-full flex-col items-center'>
          <div className='absolute top-0 -z-0 h-80 w-80'>
            <Logo />
          </div>
        </div>
        <div className='w-full -translate-y-12'>
          <FlipWordsComponent />
        </div>
        <div className='flex -translate-y-12 gap-3 md:space-x-12'>
          <AnimatedPassButton />

          <AnimatedMembersButton />
        </div>
      </div>
    </section>
  )
}
