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
    <div className='relative flex min-h-screen flex-col justify-between overflow-x-hidden pt-20'>
      <header className='container fixed inset-x-0 top-0 z-40 border-b bg-background/80 '>
        <div className='flex h-24 items-center justify-between py-1'>
          <MainNav items={marketingConfig.mainNav} />
          <nav className='flex items-center'>
            <span className='mx-6'>
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
      {children}
      <SiteFooter />
    </div>
  )
}
