import { type SiteConfig } from '@/types/index.d'

export const siteConfig: SiteConfig = {
  name: 'Nerds Fighting',
  description: 'Martial Artists and Kickboxers',
  url: 'http://localhost:3000',
  ogImage: 'https://tx.shadcn.com/og.jpg',
  links: {
    login: '/login',
    register: '/register',
    home: '/'
  }
}
