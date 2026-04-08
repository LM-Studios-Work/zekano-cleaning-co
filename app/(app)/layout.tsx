import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import '../globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-sans',
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.zekanocleaningco.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Zenako Cleaning Co. | Professional Cleaning Services in Johannesburg',
    template: '%s | Zenako Cleaning Co.',
  },
  description: 'Zenako Cleaning Co. offers professional cleaning services in Johannesburg and surrounding areas, including Sandton, Randburg, Fourways, Midrand, and Bryanston. Residential cleaning, commercial cleaning, upholstery cleaning, pest control and more. Book today.',
  keywords: [
    'cleaning services Johannesburg',
    'professional cleaners Johannesburg',
    'Zenako Cleaning Co',
    'commercial cleaning Johannesburg',
    'residential cleaning Johannesburg',
    'specialized cleaning services',
    'upholstery and fabric cleaning',
    'house cleaning Johannesburg',
    'office cleaning Johannesburg',
    'deep cleaning Johannesburg',
    'carpet cleaning Johannesburg',
    'pest control Johannesburg',
    'professional cleaners Sandton',
    'cleaning services Randburg',
    'cleaning services Fourways',
    'cleaning services Midrand',
    'cleaning services Bryanston',
    'move in move out cleaning Johannesburg',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: SITE_URL,
    siteName: 'Zenako Cleaning Co.',
    images: [
      {
        url: '/cleaning images/zenako-cleaning-team.webp',
        width: 1200,
        height: 630,
        alt: 'Zenako Cleaning Co. professional cleaning team, Johannesburg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/cleaning images/zenako-cleaning-team.webp'],
  },
  icons: {
    icon: [{ url: '/favicon zenako.png' }],
    apple: '/favicon zenako.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-ZA">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={`${roboto.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
