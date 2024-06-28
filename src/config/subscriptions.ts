import { env } from '@/env.js'
import { type SubscriptionPlan } from '@/types'

export const freePlan: SubscriptionPlan = {
  name: 'Free',
  description:
    'The free plan is limited to 3 posts. Upgrade to the PRO plan for unlimited posts.',
  stripePriceId: ''
}

export const proPlan: SubscriptionPlan = {
  name: 'TigerClub Membership',
  description: 'Unlimited Kickboxing classes.',
  stripePriceId: env.STRIPE_PRO_MONTHLY_PLAN_ID || ''
}
