'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import {
  Home,
  LayoutDashboard,
  LineChart,
  Package,
  Package2,
  Settings,
  Users
} from 'lucide-react'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <>
      <nav className='flex flex-col items-center gap-4 px-2 sm:py-5'>
        <TooltipProvider>
          <Link
            href='#'
            className='group flex size-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:size-8 md:text-base'
            prefetch={false}
          >
            <Package2 className='size-4 transition-all group-hover:scale-110' />
            <span className='sr-only'>Acme Inc</span>
          </Link>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href='/'
                className='flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:size-8'
                prefetch={false}
              >
                <Home className='size-5' />
                <span className='sr-only'>Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>Dashboard</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href='/dashboard'
                className='flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:size-8'
                prefetch={false}
              >
                <LayoutDashboard className='size-5' />
                <span className='sr-only'>Orders</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>Orders</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href='#'
                className='flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:size-8'
                prefetch={false}
              >
                <Package className='size-5' />
                <span className='sr-only'>Products</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>Products</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href='#'
                className='flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:size-8'
                prefetch={false}
              >
                <Users className='size-5' />
                <span className='sr-only'>Customers</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>Customers</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href='#'
                className='flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:size-8'
                prefetch={false}
              >
                <LineChart className='size-5' />
                <span className='sr-only'>Analytics</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>Analytics</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className='mt-auto flex flex-col items-center gap-4 px-2 sm:py-5'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href='#'
                className='flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:size-8'
                prefetch={false}
              >
                <Settings className='size-5' />
                <span className='sr-only'>Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </>
  )
}
