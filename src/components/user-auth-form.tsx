'use client'

import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { signIn } from 'next-auth/react'
import * as React from 'react'

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isDiscordLoading, setIsDiscordLoading] = React.useState<boolean>(false)

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <button
        type='button'
        className={cn(buttonVariants({ variant: 'outline' }))}
        onClick={async () => {
          setIsDiscordLoading(true)
          setIsLoading(true)
          await signIn('discord')
          setIsDiscordLoading(false)
          setIsLoading(false)
        }}
        disabled={isLoading || isDiscordLoading}
      >
        {isDiscordLoading ? (
          <Icons.spinner className='mr-2 size-4 animate-spin' />
        ) : (
          <Icons.discord className='mr-2 size-4' />
        )}{' '}
        Discord
      </button>
    </div>
  )
}
