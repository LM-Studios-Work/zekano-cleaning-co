import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Zenako Cleaning Co. | Professional Cleaning Services in Johannesburg',
  description: 'Zenako Cleaning Co. offers professional cleaning services in Johannesburg and surrounding areas — Sandton, Randburg, Fourways, Midrand, Bryanston. Residential cleaning, commercial cleaning, upholstery cleaning, pest control & more. Book today!',
  keywords: [
    'cleaning services Johannesburg',
    'house cleaning Johannesburg',
    'office cleaning Johannesburg',
    'deep cleaning Johannesburg',
    'carpet cleaning Johannesburg',
    'upholstery cleaning Johannesburg',
    'pest control Johannesburg',
    'professional cleaners Sandton',
    'cleaning services Randburg',
    'cleaning services Fourways',
    'cleaning services Midrand',
    'cleaning services Bryanston',
    'move in move out cleaning Johannesburg',
    'commercial cleaning Johannesburg',
    'residential cleaning Johannesburg',
    'eco-friendly cleaning Johannesburg',
    'Zenako Cleaning Co',
  ],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
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
