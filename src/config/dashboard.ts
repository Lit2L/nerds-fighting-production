import { type DashboardConfig } from '@/types/index.d'

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: 'Documentation',
      href: '/docs',
      disabled: true
    },
    {
      title: '',
      href: '/support',
      disabled: true
    }
  ],
  sidebarNav: [
    {
      title: 'Claim Your Pass',
      href: '/dashboard',
      icon: 'post'
    },
    {
      title: 'Billing',
      href: '/dashboard/billing',
      icon: 'billing'
    },
    {
      title: 'Settings',
      href: '/dashboard/settings',
      icon: 'settings'
    }
  ]
}
