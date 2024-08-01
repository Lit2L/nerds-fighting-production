import { Inter as FontSans, Krona_One } from 'next/font/google'
import localFont from 'next/font/local'
import megrim from 'next/font/local'
import '@/styles/globals.css'
import { Analytics } from '@/components/analytics'
import SmoothScrolling from '@/components/lit2l/SmoothScrolling'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { TRPCReactProvider } from '@/trpc/react'
import type { Metadata, Viewport } from 'next'
import { cookies } from 'next/headers'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const kronaOne = Krona_One({
  subsets: ['latin', 'latin-ext'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-krona-one'
})

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: '../assets/fonts/BlackOpsOne-Regular.ttf',
  variable: '--font-heading'
})

const logoFont = localFont({
  src: '../assets/fonts/northstar-font/Northstar3D-4D3x.otf',
  variable: '--font-logo'
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: ['Beginner Kickboxing', 'Advanced Kickboxing', 'Boxing', 'Muay Thai'],
  authors: [
    {
      name: 'lit2l',
      url: 'https://lit2l.com'
    }
  ],
  creator: 'lit2l',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: '@lit2l'
  },
  icons: {
    icon: '/Group10.png',
    shortcut: '/Group10.png',
    // shortcut: '/assets/TigerLogo.png',
    apple: '/Group10.png'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen max-w-full overflow-x-hidden bg-background/60 font-sans antialiased ',
          fontSans.variable,
          fontHeading.variable,
          kronaOne.variable,
          logoFont.variable
        )}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
            <SmoothScrolling>{children}</SmoothScrolling>
            <Analytics />
            <Toaster />
            <TailwindIndicator />
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  )
}
