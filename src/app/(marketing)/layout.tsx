import { ThemeToggleButton } from '@/components/lit2l/ThemeToggleButton'
import { MainNav } from '@/components/main-nav'
import { SiteFooter } from '@/components/site-footer'
import { buttonVariants } from '@/components/ui/button'
import { marketingConfig } from '@/config/marketing'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className='relative flex min-h-screen flex-col justify-between overflow-x-hidden'>
      <header className=' via-emerald-400/ fixed inset-x-0 top-0 z-40 h-24 bg-gradient-to-bl from-emerald-500 to-emerald-600/95'>
        <div className='container flex items-center justify-center sm:justify-between'>
          <MainNav items={marketingConfig.mainNav} />
          <nav className='flex items-center'>
            <span className=''>
              <ThemeToggleButton />
            </span>
            {/* <Link
              href='/login'
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'sm' }),
                'px-4'
              )}
            >
              Login
            </Link> */}
          </nav>
        </div>
      </header>
      <div className='mt-24'>{children}</div>
      <SiteFooter />
    </div>
  )
}
