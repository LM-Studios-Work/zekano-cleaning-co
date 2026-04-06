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

export const metadata: Metadata = {
  title: 'Zenako Cleaning Co. | Professional Cleaning Services in Johannesburg',
  description: 'Zenako Cleaning Co. offers professional cleaning services in Johannesburg and surrounding areas, including Sandton, Randburg, Fourways, Midrand, and Bryanston. Residential cleaning, commercial cleaning, upholstery cleaning, pest control and more. Book today.',
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
        url: '/logo.png',
      },
    ],
    apple: '/logo.png',
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
