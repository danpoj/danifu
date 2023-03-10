import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { AnalyticsWrapper } from './(components)/analytics'

export const metadata: Metadata = {
  title: {
    default: 'Danifu',
    template: '%s | Danifu',
  },
  description: 'Get, Waifu images',
  openGraph: {
    title: 'Danifu',
    description: 'Get, Waifu images.',
    url: 'https://danifu.vercel.app/',
    siteName: 'Danifu',
    images: [
      {
        url: 'https://danifu.vercel.app/_next/image?url=https%3A%2F%2Fcdn.waifu.im%2F6733.jpg&w=1920&q=75',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Danifu',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  // verification: {
  //   google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
  //   yandex: '14d2e73487fa6c71',
  // },
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head />
      <body className={inter.className}>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
