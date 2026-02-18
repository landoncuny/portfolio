import type { Metadata } from 'next'
import './globals.css'
import { ClientScripts } from './ClientScripts'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'Landon Cuny | Marketing Student & Content Creator',
  description: 'Marketing student at SDSU with 25,000+ followers and 130M+ views specializing in social media growth, content creation, and data-driven marketing.',
  keywords: 'Landon Cuny, Marketing Student, Content Creator, Social Media Marketing, SDSU Marketing, Digital Marketing, Growth Marketing, Brand Partnerships',
  openGraph: {
    title: 'Landon Cuny | Marketing Student & Content Creator',
    description: 'Marketing student at SDSU with 25,000+ followers and 130M+ views specializing in social media growth, content creation, and data-driven marketing.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Satoshi:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <ClientScripts />
        <SpeedInsights />
      </body>
    </html>
  )
}
