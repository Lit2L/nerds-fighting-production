'use client'

import Logo from './Logo'
import { Icons } from '@/components/icons'
import { MobileNav } from '@/components/mobile-nav'
import { cn } from '@/lib/utils'
import { type MainNavItem } from '@/types/index.d'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import * as React from 'react'

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className='flex h-24 w-7/12 justify-between'>
      <Link href='/' className='flex size-28 h-24 items-center '>
        <Logo />
      </Link>

      {items?.length ? (
        <nav className='hidden gap-6 md:flex'>
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className={cn(
                'flex items-center text-lg font-medium tracking-widest transition-colors hover:text-foreground/80 sm:text-sm',
                item.href.startsWith(`/${segment}`) ? 'text-foreground' : 'text-foreground/60',
                item.disabled && 'cursor-not-allowed opacity-80'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}

      <button
        className='flex size-24 flex-col items-center justify-center  rounded-full bg-gradient-to-b from-gray-500 via-gray-300/70 to-emerald-950 text-center font-logo text-xs font-bold uppercase text-stone-950 shadow-lg shadow-emerald-500 md:hidden'
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? (
          <Icons.close />
        ) : (
          <span className='text-center font-heading text-2xl font-bold text-red-950'>NF</span>
        )}
        <span className='text-center font-heading text-lg font-bold'>Menu</span>
      </button>
      {showMobileMenu && items && <MobileNav items={items}>{children}</MobileNav>}
    </div>
  )
}
