import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import UnitConverterWrapper from '@/components/UnitConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Volume Converter — Convert Gallons, Liters, ML, Cups',
  description:
    'Convert between gallons, liters, milliliters, cups, pints, fluid ounces and more. Free volume converter with instant results.',
  alternates: { canonical: 'https://unitconversions.app/volume' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How many liters are in a gallon?',
    a: 'One US gallon equals approximately 3.78541 liters. One imperial gallon equals approximately 4.54609 liters. The US gallon is the more commonly used gallon in everyday conversation.',
  },
  {
    q: 'How many cups are in a liter?',
    a: 'There are approximately 4.227 US cups in one liter. One US cup equals 236.588 milliliters, so 1000 mL ÷ 236.588 mL per cup ≈ 4.227 cups.',
  },
  {
    q: 'How do I convert fluid ounces to milliliters?',
    a: 'To convert US fluid ounces to milliliters, multiply by 29.5735. For example, 8 fl oz = 8 × 29.5735 = 236.588 mL (approximately 1 US cup).',
  },
  {
    q: 'What is the difference between a US gallon and an imperial gallon?',
    a: 'A US gallon is 3.78541 liters, while an imperial gallon (used in the UK) is 4.54609 liters. The imperial gallon is about 20% larger than the US gallon.',
  },
  {
    q: 'How many milliliters are in a tablespoon?',
    a: 'One US tablespoon equals approximately 14.7868 milliliters. One metric tablespoon equals exactly 15 milliliters.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}
const webAppSchema = {
  '@context': 'https://schema.org', '@type': 'WebApplication',
  name: 'Volume Converter', url: 'https://unitconversions.app/volume',
  description: 'Free online volume converter. Convert between gallons, liters, cups, pints, fluid ounces and more.',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}
const howToSchema = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to Convert Volume Units',
  step: [
    { '@type': 'HowToStep', name: 'Select your category', text: 'Click the Volume category.' },
    { '@type': 'HowToStep', name: 'Enter your value and select the unit to convert from', text: 'Enter your volume and choose gallons, liters, or another unit.' },
    { '@type': 'HowToStep', name: 'See instant results for all units simultaneously', text: 'All volume units are shown instantly in the conversion table.' },
  ],
}

export default function VolumePage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Volume Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert between gallons, liters, cups, pints, fluid ounces, tablespoons and more. Instant results.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <UnitConverterWrapper category="volume" />
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
