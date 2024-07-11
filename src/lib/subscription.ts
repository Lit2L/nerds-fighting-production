// TODO: Fix this when we turn strict mode on.

import { UserSubscriptionPlan } from '../types/index.d'
import { freePlan, proPlan } from '@/config/subscriptions'
import { db } from '@/server/db'
import { redirect } from 'next/navigation'

export async function getUserSubscriptionPlan(
  userId: string
): Promise<UserSubscriptionPlan> {
  const user = await db.user.findFirst({
    where: {
      id: userId
    },
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true
    }
  })

  if (!user) {
    redirect('/login')
  }

  // Check if user is on a pro plan.
  const isPro =
    user.stripePriceId &&
    // @ts-expect-error time assignment
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    user.stripeCurrentPeriodEnd?.getTime() + 86_400_000 > Date.now()

  const plan = isPro ? proPlan : freePlan

  return {
    ...plan,
    ...user,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    stripeCurrentPeriodEnd: user.stripeCurrentPeriodEnd?.getTime(),
    isPro
  }
}
