'use client'

import HeroImg from '../../public/assets/hero.png'
import { AnimatedMembersButton } from '../components/lit2l/AnimatedMembersButton'
import { AnimatedPassButton } from '../components/lit2l/AnimatedPassButton'
import { FlipWordsComponent } from '../components/lit2l/FlipWordsComponent'
import GradualSpacing from '../components/lit2l/gradual-spacing'
import Image from 'next/image'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section className='relative h-[70dvh] w-full '>
      <div className='zoom-effect absolute inset-10 left-0 top-0 -z-10 w-full bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] blur-[2px]'>
        <Image
          src={HeroImg}
          alt='gym'
          className='opacity-70 dark:opacity-60'
          fill
        />
      </div>

      <div className='container z-10 flex h-full max-w-5xl flex-col items-center justify-center gap-4  text-center'>
        <div className='space-y-12'>
          {/* <Link
            href={siteConfig.links.twitter}
            className='rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium'
            target='_blank'
          >
            Follow along on Discord
          </Link> */}
          <GradualSpacing
            className='text-center font-heading text-3xl tracking-tighter text-orange-500/80 drop-shadow-2xl dark:text-orange-400 dark:shadow-gray-200 sm:text-5xl md:text-7xl'
            text='TigerClub Kickboxing'
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
