import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import UnitConverterWrapper from '@/components/UnitConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Fuel Economy Converter — Convert MPG, L/100km, km/L',
  description:
    'Convert between MPG (US), MPG (Imperial), L/100km, and km/L. Free fuel economy converter with instant results.',
  alternates: { canonical: 'https://unitconversions.app/fuel' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How do I convert MPG to L/100km?',
    a: 'To convert US MPG to L/100km, use the formula: L/100km = 235.214 ÷ MPG. For example, 30 MPG = 235.214 ÷ 30 = 7.84 L/100km. Note: these are reciprocal relationships, so better fuel economy means lower L/100km but higher MPG.',
  },
  {
    q: 'What is the difference between US MPG and Imperial MPG?',
    a: 'US MPG uses the US gallon (3.785 L), while Imperial MPG uses the Imperial gallon (4.546 L). A car rated at 30 US MPG gets approximately 36 Imperial MPG. This is why UK and US fuel economy ratings differ for the same vehicle.',
  },
  {
    q: 'What is km/L?',
    a: 'Kilometers per liter (km/L) is a fuel economy metric used in some countries. It is the distance traveled per liter of fuel. Higher km/L means better fuel efficiency. 1 km/L ≈ 2.35 US MPG.',
  },
  {
    q: 'How do I convert L/100km to km/L?',
    a: 'To convert L/100km to km/L, divide 100 by the L/100km value. For example, 8 L/100km = 100 ÷ 8 = 12.5 km/L. These are reciprocal — better efficiency is higher km/L but lower L/100km.',
  },
  {
    q: 'What is a good fuel economy?',
    a: 'A good fuel economy is typically 35+ US MPG (6.7 L/100km or less) for a conventional gasoline car. Hybrid vehicles often achieve 50+ MPG. Electric vehicles are rated in MPGe (miles per gallon equivalent) for comparison purposes.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}
const webAppSchema = {
  '@context': 'https://schema.org', '@type': 'WebApplication',
  name: 'Fuel Economy Converter', url: 'https://unitconversions.app/fuel',
  description: 'Free online fuel economy converter. Convert between MPG (US/Imperial), L/100km, and km/L.',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}
const howToSchema = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to Convert Fuel Economy Units',
  step: [
    { '@type': 'HowToStep', name: 'Select your category', text: 'Click the Fuel Economy category.' },
    { '@type': 'HowToStep', name: 'Enter your value and select the unit to convert from', text: 'Enter your fuel economy rating and choose MPG, L/100km, or km/L.' },
    { '@type': 'HowToStep', name: 'See instant results for all units simultaneously', text: 'All fuel economy units are shown instantly in the conversion table.' },
  ],
}

export default function FuelPage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Fuel Economy Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert between MPG (US), MPG (Imperial), L/100km, and km/L. Instant results.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <UnitConverterWrapper category="fuel" />
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
