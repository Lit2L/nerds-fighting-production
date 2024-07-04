import { Inter as FontSans } from 'next/font/google'
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

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading'
})

const logoFont = megrim({
  src: '../assets/fonts/Megrim-Regular.ttf',
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
  keywords: [
    'Beginner Kickboxing',
    'Advanced Kickboxing',
    'Boxing',
    'Muay Thai'
  ],
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
    icon: '/assets/Tiger',
    shortcut: '/favicon-16x16.png',
    // shortcut: '/assets/TigerLogo.png',
    apple: '/apple-touch-icon.png'
  },
  manifest: `${siteConfig.url}/site.webmanifest`
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head />
      <body
        className={cn(
          'min-h-screen max-w-full overflow-x-hidden bg-background/60 font-sans antialiased bg-dot-black/[0.1] dark:bg-dot-gray-400/[0.1]',
          fontSans.variable,
          fontHeading.variable,
          logoFont.variable
        )}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
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
