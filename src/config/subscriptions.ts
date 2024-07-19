import { type SubscriptionPlan } from '../types/index.d'

export const freePlan: SubscriptionPlan = {
  name: 'Free',
  description: 'The free plan is limited to 3 posts. Upgrade to the PRO plan for unlimited posts.',
  stripePriceId: ''
}

export const proPlan: SubscriptionPlan = {
  name: 'Pro',
  description: 'Pro Plan includes access to all available training classes.',
  stripePriceId: process.env.STRIPE_PRO_MONTHLY_PLAN_ID || ''
}
