import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Unit Conversions — Free Online Unit Converter',
  description:
    'Free online unit converter for length, weight, temperature, volume, area, speed, time and more. Instant conversions with complete unit tables. No signup.',
  keywords: [
    'unit converter',
    'unit conversion',
    'length converter',
    'weight converter',
    'temperature converter',
    'metric converter',
    'inches to cm',
    'kg to lbs',
    'miles to km',
    'fahrenheit to celsius',
    'measurement converter',
    'online converter',
  ],
  metadataBase: new URL('https://unitconversions.app'),
  alternates: { canonical: 'https://unitconversions.app' },
  openGraph: {
    title: 'Unit Conversions — Free Online Unit Converter',
    description:
      'Free online unit converter for length, weight, temperature, volume, area, speed, time and more. Instant conversions with complete unit tables. No signup.',
    url: 'https://unitconversions.app',
    siteName: 'unitconversions.app',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Unit Conversions — Free Instant Converter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unit Conversions — Free Online Unit Converter',
    description:
      'Free online unit converter for length, weight, temperature, volume and more. Instant results, no signup.',
    images: ['/twitter-image.png'],
  },
  robots: { index: true, follow: true },
  verification: { google: 'PLACEHOLDER_GOOGLE_SITE_VERIFICATION' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-5035661017594256" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('unitconversions-theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-[#0f172a] text-gray-900 dark:text-[#e2e8f0]">
        {children}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5035661017594256"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6YZPEXQKHV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6YZPEXQKHV');
          `}
        </Script>
      </body>
    </html>
  )
}
