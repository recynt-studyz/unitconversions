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
        <div className="absolute inset-0 bg-black/50" />
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
          {/* How It Works */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Time Conversion Works</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>Time is the one dimension that moves in only one direction, and converting between time units is fundamental to scheduling, science, engineering, and computing. The base SI unit of time is the second, defined since 1967 by the vibrations of cesium-133 atoms: exactly 9,192,631,770 oscillations per second. This definition is stable to within one second per 300 million years, making atomic clocks far more accurate than any astronomical observation.</p>
              <p>A minute is 60 seconds, an hour is 60 minutes (3,600 seconds), a day is 24 hours (86,400 seconds). These groupings trace back to ancient Babylonian mathematics, which used a base-60 (sexagesimal) number system. The Babylonians chose 60 partly because it is divisible by 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, and 30 — more divisors than any smaller number — making fractions and subdivisions convenient without decimal notation.</p>
              <p>Longer time units become less precise. A calendar year is 365 days, but Earth&apos;s actual orbital period (the tropical year) is approximately 365.2425 days. The Gregorian calendar accounts for this with leap years every four years, except century years not divisible by 400. For scientific calculations, a Julian year is standardized as exactly 365.25 days, which slightly overestimates the tropical year.</p>
              <p>Time conversions are critical in computing (milliseconds and nanoseconds for processor cycles and network latency), physics (femtoseconds for laser pulses, light-travel-time for cosmic distances), finance (daily compound interest requires converting annual rates to per-second rates), and any global coordination across time zones where the same moment must be expressed in different local times.</p>
            </div>
          </div>

          {/* Key Facts */}
          <div className="rounded-2xl bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-gray-700 px-6 py-5 mb-10">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Key Facts About Time</h2>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <li><strong className="text-gray-800 dark:text-gray-200">Sunlight travel time:</strong> Light takes approximately 8 minutes 20 seconds to travel from the Sun to Earth (about 149.6 million km). A signal to a Mars rover can take 3 to 22 minutes depending on the planets&apos; orbital positions.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Leap seconds:</strong> Earth&apos;s rotation is gradually slowing due to tidal friction from the Moon. Leap seconds are occasionally added to Coordinated Universal Time (UTC) to keep atomic clock time aligned with astronomical time — 27 have been added since 1972.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">CPU speeds:</strong> A 3 GHz processor completes one clock cycle in about 0.33 nanoseconds — one-third of a billionth of a second. Light travels about 10 centimeters (4 inches) in that time, which limits how physically large a processor can be.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Age of the universe:</strong> The universe is approximately 13.8 billion years old, or roughly 4.35 × 10¹⁷ seconds — a number that illustrates why scientific notation exists.</li>
            </ul>
          </div>

          <div className="pb-10"><FAQ questions={faqs} /></div>
          <div className="pb-6"><AdBanner slot="3333333333" /></div>
        </div>
      </section>
      <Footer />
    </>
  )
}
