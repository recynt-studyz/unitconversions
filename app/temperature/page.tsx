import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import UnitConverterWrapper from '@/components/UnitConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Temperature Converter — Celsius, Fahrenheit, Kelvin',
  description:
    'Convert between Celsius, Fahrenheit and Kelvin instantly. Free temperature converter with formulas and complete conversion table.',
  alternates: { canonical: 'https://unitconversions.app/temperature' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How do I convert Celsius to Fahrenheit?',
    a: 'To convert Celsius to Fahrenheit, multiply by 9/5 and then add 32. Formula: °F = (°C × 9/5) + 32. For example, 100°C = (100 × 9/5) + 32 = 180 + 32 = 212°F.',
  },
  {
    q: 'What is the formula for Fahrenheit to Celsius?',
    a: 'To convert Fahrenheit to Celsius, subtract 32 and then multiply by 5/9. Formula: °C = (°F − 32) × 5/9. For example, 98.6°F = (98.6 − 32) × 5/9 = 66.6 × 5/9 = 37°C.',
  },
  {
    q: 'What is absolute zero in Celsius and Fahrenheit?',
    a: 'Absolute zero is 0 Kelvin, which equals −273.15°C or −459.67°F. It is the lowest possible temperature, at which all thermal motion stops.',
  },
  {
    q: 'What temperature is the same in Celsius and Fahrenheit?',
    a: 'The temperature −40 is the same in both Celsius and Fahrenheit: −40°C = −40°F. This is the point where the two scales intersect.',
  },
  {
    q: 'How do I convert Celsius to Kelvin?',
    a: 'To convert Celsius to Kelvin, add 273.15. Formula: K = °C + 273.15. For example, 0°C = 273.15 K (the freezing point of water) and 100°C = 373.15 K (the boiling point of water).',
  },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}
const webAppSchema = {
  '@context': 'https://schema.org', '@type': 'WebApplication',
  name: 'Temperature Converter', url: 'https://unitconversions.app/temperature',
  description: 'Free online temperature converter. Convert between Celsius, Fahrenheit and Kelvin.',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}
const howToSchema = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to Convert Temperature',
  step: [
    { '@type': 'HowToStep', name: 'Select your category', text: 'Click the Temperature category.' },
    { '@type': 'HowToStep', name: 'Enter your value and select the unit to convert from', text: 'Type your temperature and choose Celsius, Fahrenheit, or Kelvin.' },
    { '@type': 'HowToStep', name: 'See instant results for all units simultaneously', text: 'All three temperature scales are shown instantly.' },
  ],
}

export default function TemperaturePage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Temperature Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert between Celsius, Fahrenheit, and Kelvin instantly. Instant results with conversion formulas.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <UnitConverterWrapper category="temperature" />
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
