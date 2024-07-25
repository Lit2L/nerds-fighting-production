import { AnimatedMembersButton } from '../components/lit2l/AnimatedMembersButton'
import { AnimatedPassButton } from '../components/lit2l/AnimatedPassButton'
import { FlipWordsComponent } from '../components/lit2l/FlipWordsComponent'
import GradualSpacing from '../components/lit2l/gradual-spacing'
import { siteConfig } from '@/config/site'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section className='relative h-[70dvh] w-full '>
      <div className='container z-10 flex h-full max-w-5xl flex-col items-center justify-center gap-4 text-center'>
        <div className='space-y-12'>
          <Link
            href={siteConfig.links.twitter}
            className='rounded-2xl bg-[#F23030]/50 px-4 py-1.5 text-sm font-medium'
            target='_blank'
          >
            Kickboxing & Martial Arts Club
          </Link>
          <GradualSpacing
            className='text-center font-logo text-3xl tracking-[-0.2em] text-nerdblue-foreground drop-shadow-2xl dark:shadow-gray-200 sm:text-5xl md:text-7xl'
            text='Nerds Fighting'
          />
        </div>
        <FlipWordsComponent />

        <div className='flex translate-y-3 gap-3 md:space-x-12'>
          <AnimatedPassButton />

          <AnimatedMembersButton />
        </div>
      </div>
    </section>
  )
}

// dark:text-[#29ADFF]
