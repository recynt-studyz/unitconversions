import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import UnitConverterWrapper from '@/components/UnitConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Area Converter — Convert Square Feet, Meters, Acres, Hectares',
  description:
    'Convert between square feet, square meters, acres, hectares, square miles and more. Free area converter with instant results.',
  alternates: { canonical: 'https://unitconversions.app/area' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How many square feet are in an acre?',
    a: 'One acre equals exactly 43,560 square feet. This is a standard measurement used in real estate in the United States. One acre is also approximately 4,047 square meters or 0.405 hectares.',
  },
  {
    q: 'How do I convert square meters to square feet?',
    a: 'To convert square meters to square feet, multiply by 10.7639. For example, 100 square meters = 100 × 10.7639 = 1,076.39 square feet.',
  },
  {
    q: 'How many hectares are in a square kilometer?',
    a: 'There are exactly 100 hectares in one square kilometer. One hectare equals 10,000 square meters, and one square kilometer equals 1,000,000 square meters.',
  },
  {
    q: 'What is the difference between an acre and a hectare?',
    a: 'One hectare equals approximately 2.471 acres. A hectare is 10,000 square meters, while an acre is approximately 4,047 square meters. The hectare is a metric unit, while the acre is primarily used in the US and UK.',
  },
  {
    q: 'How many square meters are in a square mile?',
    a: 'One square mile equals exactly 2,589,988.11 square meters (approximately 2.59 square kilometers). There are 640 acres in one square mile.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}
const webAppSchema = {
  '@context': 'https://schema.org', '@type': 'WebApplication',
  name: 'Area Converter', url: 'https://unitconversions.app/area',
  description: 'Free online area converter. Convert between square feet, meters, acres, hectares and more.',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}
const howToSchema = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to Convert Area Units',
  step: [
    { '@type': 'HowToStep', name: 'Select your category', text: 'Click the Area category.' },
    { '@type': 'HowToStep', name: 'Enter your value and select the unit to convert from', text: 'Enter your area value and choose square feet, meters, acres, or another unit.' },
    { '@type': 'HowToStep', name: 'See instant results for all units simultaneously', text: 'All area units are shown instantly in the conversion table.' },
  ],
}

export default function AreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema).replace(/</g, '\\u003c') }} />
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-blue-900/65" />
        <div className="relative z-10 pb-10">
          <ToolHeader />
          <div className="text-center text-white px-4 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Area Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert between square feet, square meters, acres, hectares, square miles and more.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <UnitConverterWrapper category="area" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white dark:from-[#0f172a] to-transparent pointer-events-none" />
      </section>
      <section className="bg-white dark:bg-[#0f172a] pt-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="pb-4"><AdBanner slot="2222222222" /></div>
          <div className="pb-10"><FAQ questions={faqs} /></div>
          <div className="pb-6"><AdBanner slot="3333333333" /></div>
        </div>
      </section>
      <Footer />
    </>
  )
}
