import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import UnitConverterWrapper from '@/components/UnitConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Weight Converter — Convert KG, LBS, Grams, Ounces',
  description:
    'Convert between kilograms, pounds, grams, ounces, stones and more. Free weight converter with instant results and complete conversion table.',
  alternates: { canonical: 'https://unitconversions.app/weight' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How many pounds are in a kilogram?',
    a: 'There are approximately 2.20462 pounds in one kilogram. To convert kg to lbs, multiply by 2.20462. For example, 70 kg = 70 × 2.20462 = 154.32 lbs.',
  },
  {
    q: 'How do I convert ounces to grams?',
    a: 'To convert ounces to grams, multiply by 28.3495. For example, 8 ounces = 8 × 28.3495 = 226.796 grams. One ounce is defined as exactly 28.349523125 grams.',
  },
  {
    q: 'What is a stone in pounds?',
    a: 'One stone equals 14 pounds. The stone is a unit of weight primarily used in the UK and Ireland for body weight. So 10 stone = 140 pounds = approximately 63.5 kilograms.',
  },
  {
    q: 'How many grams are in an ounce?',
    a: 'There are exactly 28.349523125 grams in one ounce (avoirdupois). For everyday use, 28.35 grams per ounce is sufficient.',
  },
  {
    q: 'How do I convert metric tons to pounds?',
    a: 'One metric ton equals 1,000 kilograms, which equals approximately 2,204.62 pounds. To convert metric tons to pounds, multiply by 2204.62.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}
const webAppSchema = {
  '@context': 'https://schema.org', '@type': 'WebApplication',
  name: 'Weight Converter', url: 'https://unitconversions.app/weight',
  description: 'Free online weight converter. Convert between kg, lbs, grams, ounces, stones and more.',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}
const howToSchema = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to Convert Weight Units',
  step: [
    { '@type': 'HowToStep', name: 'Select your category', text: 'Click the Weight category in the navigation.' },
    { '@type': 'HowToStep', name: 'Enter your value and select the unit to convert from', text: 'Type your weight value and choose the source unit such as kilograms or pounds.' },
    { '@type': 'HowToStep', name: 'See instant results for all units simultaneously', text: 'The result appears instantly. The table below shows the value in every weight unit at once.' },
  ],
}

export default function WeightPage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Weight Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert between kilograms, pounds, grams, ounces, stones and more. Instant results.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <UnitConverterWrapper category="weight" />
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
