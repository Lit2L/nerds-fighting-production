'use client'

import { ModeToggle } from '@/components/mode-toggle'
import { useClickAway } from '@/hooks/use-click-away'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useScrollspy } from 'use-scrollspy'

const navVariants: Variants = {
  hidden: {
    x: '100%',
    transition: {
      duration: 0.2,
      ease: [0.9, 0.1, 0.3, 0.96],
      when: 'afterChildren'
    }
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.9, 0.1, 0.3, 0.96],
      when: 'beforeChildren',
      staggerChildren: 0.05
    }
  }
}

const linkVariants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'circOut'
    }
  }
}

const MotionLink = motion(Link)

export function MobileNav() {
  const navRef = useRef<HTMLElement>(null)
  const navToggleRef = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen((open) => !open)
  useClickAway([navRef, navToggleRef], () => setIsOpen(false))

  useScrollspy({
    ids: ['intro', 'resume', 'applications', 'contact'],
    hrefs: ['/#intro', '/#resume', '/#applications', '/#applications'],
    offset: 'topCenter',
    activeClass: 'active-nav-link'
  })

  const pathname = usePathname()

  useEffect(() => setIsOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'visible'
  }, [isOpen])
  return (
    <>
      <button
        ref={navToggleRef}
        type='button'
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        onClick={toggle}
        className='text-dark-100 fixed right-4 top-8 z-30 dark:text-black md:hidden'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='h-8 w-8'
        >
          <AnimatePresence>
            {isOpen ? (
              <motion.path
                key='close'
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                exit={{ pathOffset: 1 }}
                transition={{ duration: 1, ease: 'circOut' }}
                strokeLinecap='square'
                strokeWidth={1.5}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <motion.path
                key='open'
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                exit={{ pathOffset: 1 }}
                transition={{ duration: 1, ease: 'circOut' }}
                strokeLinecap='square'
                strokeWidth={1.5}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            )}
          </AnimatePresence>
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            ref={navRef}
            variants={navVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            className='fixed  inset-y-0 right-0 z-20 flex h-full w-9/12 flex-col flex-wrap items-start justify-center gap-y-14 bg-emerald-950/95 px-12 font-kronaOne text-xl transition-colors md:hidden'
          >
            <MotionLink href='/#intro' variants={linkVariants} className='mobile-nav-link'>
              Home
            </MotionLink>
            <MotionLink href='/#projects' variants={linkVariants} className='mobile-nav-link'>
              Schedule
            </MotionLink>
            <MotionLink href='/#about' variants={linkVariants} className='mobile-nav-link'>
              About
            </MotionLink>
            <MotionLink href='/#contact' variants={linkVariants} className='mobile-nav-link'>
              Book
            </MotionLink>
            <motion.div variants={linkVariants}>
              <ModeToggle />
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
