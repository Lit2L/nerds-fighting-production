'use client'

import Logo from './Logo'
import { Button } from './ui/button'
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
    <div className='flex h-24 w-full items-center justify-center sm:justify-between'>
      <div className='h-20 w-28'>
        <Logo />
      </div>

      {items?.length ? (
        <nav className='hidden gap-6 md:flex '>
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
      <div className='flex h-20 w-20 translate-y-3 flex-col items-center justify-center '>
        <button
          className='flex size-16 translate-x-3 flex-col items-center justify-center  rounded-full bg-gradient-to-b from-gray-500 via-gray-300/70 to-emerald-950 text-center font-logo text-xs font-bold uppercase text-stone-950 shadow-lg shadow-emerald-500 md:hidden'
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? (
            <Icons.close />
          ) : (
            <span className='text-center font-heading text-lg font-bold text-red-950'>NF</span>
          )}
          <span className='text-md text-center font-heading font-bold'>Menu</span>
        </button>
        {showMobileMenu && items && <MobileNav items={items}>{children}</MobileNav>}
      </div>
    </div>
  )
}
