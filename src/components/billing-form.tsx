'use client'

import { type UserSubscriptionPlan } from '../types/index.d'
import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { toast } from '@/components/ui/use-toast'
import { cn, formatDate } from '@/lib/utils'
import * as React from 'react'

interface BillingFormProps extends React.HTMLAttributes<HTMLFormElement> {
  subscriptionPlan: UserSubscriptionPlan & {
    isCanceled: boolean
  }
}

export function BillingForm({
  subscriptionPlan,
  className,
  ...props
}: BillingFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event: { preventDefault: () => void }) {
    event.preventDefault()
    setIsLoading(!isLoading)

    // Get a Stripe session URL.
    const response = await fetch('/api/users/stripe')

    if (!response?.ok) {
      return toast({
        title: 'Something went wrong.',
        description: 'Please refresh the page and try again.',
        variant: 'destructive'
      })
    }

    // Redirect to the Stripe session.
    // This could be a checkout page for initial upgrade.
    // Or portal to manage existing subscription.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const session = await response.json()
    if (session) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      window.location.href = session.url as string
    }
  }

  return (
    <form className={cn(className)} onSubmit={onSubmit} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Subscription Plan</CardTitle>
          <CardDescription>
            You are currently on the <strong>{subscriptionPlan.name}</strong>{' '}
            plan.
          </CardDescription>
        </CardHeader>
        <CardContent>{subscriptionPlan.description}</CardContent>
        <CardFooter className='flex flex-col items-start space-y-2 md:flex-row md:justify-between md:space-x-0'>
          <button
            type='submit'
            className={cn(buttonVariants())}
            disabled={isLoading}
          >
            {isLoading && (
              <Icons.spinner className='mr-2 size-4 animate-spin' />
            )}
            {subscriptionPlan.isPro ? 'Manage Subscription' : 'Upgrade to PRO'}
          </button>
          {subscriptionPlan.isPro ? (
            <p className='rounded-full text-xs font-medium'>
              {subscriptionPlan.isCanceled
                ? 'Your plan will be canceled on '
                : 'Your next charge is scheduled for '}
              {formatDate(subscriptionPlan.stripeCurrentPeriodEnd)}.
            </p>
          ) : null}
        </CardFooter>
      </Card>
    </form>
  )
}
