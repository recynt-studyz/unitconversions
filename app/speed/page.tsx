import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import UnitConverterWrapper from '@/components/UnitConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Speed Converter — Convert MPH, KPH, Knots, Mach',
  description:
    'Convert between miles per hour, kilometers per hour, knots, meters per second, Mach and more. Free speed converter with instant results.',
  alternates: { canonical: 'https://unitconversions.app/speed' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How do I convert mph to km/h?',
    a: 'To convert miles per hour to kilometers per hour, multiply by 1.60934. For example, 60 mph = 60 × 1.60934 = 96.56 km/h. To go the other way, multiply by 0.621371.',
  },
  {
    q: 'What is Mach 1 in mph?',
    a: 'Mach 1 (the speed of sound in air) is approximately 767 mph or 1,235 km/h at sea level at 15°C. It varies with temperature and altitude.',
  },
  {
    q: 'How many knots is 100 mph?',
    a: '100 mph equals approximately 86.9 knots. One knot equals 1 nautical mile per hour, which is approximately 1.15078 mph or 1.852 km/h.',
  },
  {
    q: 'What is the difference between mph and km/h?',
    a: 'MPH (miles per hour) is used primarily in the United States and United Kingdom. KPH or km/h (kilometers per hour) is used in most other countries. 1 mph = 1.60934 km/h.',
  },
  {
    q: 'How fast is 100 km/h in mph?',
    a: '100 km/h equals approximately 62.14 mph. This is a common highway speed limit in many countries, equivalent to about 62 mph.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}
const webAppSchema = {
  '@context': 'https://schema.org', '@type': 'WebApplication',
  name: 'Speed Converter', url: 'https://unitconversions.app/speed',
  description: 'Free online speed converter. Convert between mph, km/h, knots, m/s, and Mach.',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}
const howToSchema = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to Convert Speed Units',
  step: [
    { '@type': 'HowToStep', name: 'Select your category', text: 'Click the Speed category.' },
    { '@type': 'HowToStep', name: 'Enter your value and select the unit to convert from', text: 'Enter your speed and choose mph, km/h, or another unit.' },
    { '@type': 'HowToStep', name: 'See instant results for all units simultaneously', text: 'All speed units are shown instantly in the conversion table.' },
  ],
}

export default function SpeedPage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Speed Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert between mph, km/h, knots, meters per second, and Mach. Instant results.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <UnitConverterWrapper category="speed" />
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
