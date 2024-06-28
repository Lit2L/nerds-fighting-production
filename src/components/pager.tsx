import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

// interface DocsPagerProps {}

export function DocsPager() {
  return (
    <div className='flex flex-row items-center justify-between'>
      <Link href='/' className={cn(buttonVariants({ variant: 'ghost' }))}>
        <Icons.chevronLeft className='mr-2 size-4' />
        title
      </Link>

      <Link
        href='/'
        className={cn(buttonVariants({ variant: 'ghost' }), 'ml-auto')}
      >
        title
        <Icons.chevronRight className='ml-2 size-4' />
      </Link>
    </div>
  )
}
