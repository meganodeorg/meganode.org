import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  preload: true,
})

export const metadata: Metadata = {
  title: 'MegaNode | Professional Web3 Validator',
  description: 'Enterprise-grade validation services ensuring network security and reliability for next-generation blockchain networks. 5+ years of experience with 99.9% uptime.',
  keywords: ['blockchain validator', 'web3', 'node operator', 'proof of stake', 'blockchain infrastructure', 'network security'],
  metadataBase: new URL('https://meganode.org'),
  openGraph: {
    title: 'MegaNode | Professional Web3 Validator',
    description: 'Enterprise-grade validation services ensuring network security and reliability for next-generation blockchain networks.',
    url: 'https://meganode.org',
    siteName: 'MegaNode',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/api/og',
      width: 1200,
      height: 630,
      alt: 'MegaNode - Professional Web3 Validator'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MegaNode | Professional Web3 Validator',
    description: 'Enterprise-grade validation services ensuring network security and reliability.',
    images: ['/api/og']
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
  verification: {
    google: 'po02JDQUWVh0ZK4MefJg8QmNaiKBWtL9Nxp6rbPbkUI'
  },
  alternates: {
    canonical: 'https://meganode.org'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${spaceGrotesk.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="hero-pattern fixed inset-0 opacity-50" />
        <main className="relative">
          {children}
        </main>
        <SpeedInsights />
      </body>
    </html>
  )
}
