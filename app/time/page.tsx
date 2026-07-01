import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import UnitConverterWrapper from '@/components/UnitConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Time Converter — Convert Hours, Minutes, Seconds, Days',
  description:
    'Convert between seconds, minutes, hours, days, weeks, months, years and more. Free time converter with instant results.',
  alternates: { canonical: 'https://unitconversions.app/time' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How many seconds are in an hour?',
    a: 'There are exactly 3,600 seconds in one hour. This is because there are 60 minutes in an hour and 60 seconds in a minute: 60 × 60 = 3,600.',
  },
  {
    q: 'How many days are in a year?',
    a: 'A common year has 365 days. A leap year has 366 days (occurring every 4 years, with some exceptions). For conversions, an average year is approximately 365.2425 days or 31,556,952 seconds.',
  },
  {
    q: 'How many weeks are in a month?',
    a: 'On average, there are approximately 4.348 weeks in a month (52 weeks ÷ 12 months). Since months have different lengths (28–31 days), the exact number varies.',
  },
  {
    q: 'How do I convert hours to minutes?',
    a: 'To convert hours to minutes, multiply by 60. For example, 2.5 hours = 2.5 × 60 = 150 minutes. To convert minutes to hours, divide by 60.',
  },
  {
    q: 'How many milliseconds are in a second?',
    a: 'There are exactly 1,000 milliseconds in one second. A millisecond is one-thousandth of a second, often used in computing, sports timing, and audio engineering.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}
const webAppSchema = {
  '@context': 'https://schema.org', '@type': 'WebApplication',
  name: 'Time Converter', url: 'https://unitconversions.app/time',
  description: 'Free online time converter. Convert between seconds, minutes, hours, days, weeks, months and years.',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}
const howToSchema = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to Convert Time Units',
  step: [
    { '@type': 'HowToStep', name: 'Select your category', text: 'Click the Time category.' },
    { '@type': 'HowToStep', name: 'Enter your value and select the unit to convert from', text: 'Enter your time value and choose hours, minutes, seconds, or another unit.' },
    { '@type': 'HowToStep', name: 'See instant results for all units simultaneously', text: 'All time units are shown instantly in the conversion table.' },
  ],
}

export default function TimePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema).replace(/</g, '\\u003c') }} />
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/herobguc.webp')" }}>
        <div className="absolute inset-0 bg-blue-900/65" />
        <div className="relative z-10 pb-10">
          <ToolHeader />
          <div className="text-center text-white px-4 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Time Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert between nanoseconds, milliseconds, seconds, minutes, hours, days, weeks, months, years and more.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <UnitConverterWrapper category="time" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white dark:from-[#0f172a] to-transparent pointer-events-none" />
      </section>
      <section className="bg-white dark:bg-[#0f172a] pt-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="pb-10"><FAQ questions={faqs} /></div>
          <div className="pb-6"><AdBanner slot="3333333333" /></div>
        </div>
      </section>
      <Footer />
    </>
  )
}
