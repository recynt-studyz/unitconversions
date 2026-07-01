import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import PairConverterWrapper from '@/components/PairConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Inches to CM — Convert Inches to Centimeters',
  description:
    'Convert inches to centimeters instantly. Free inches to cm converter with quick reference table and conversion formula. 1 inch = 2.54 cm.',
  alternates: { canonical: 'https://unitconversions.app/inches-to-cm' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How many centimeters are in an inch?',
    a: 'There are exactly 2.54 centimeters in one inch. This is an internationally defined standard established in 1959.',
  },
  {
    q: 'How do I convert inches to centimeters?',
    a: 'To convert inches to centimeters, multiply the number of inches by 2.54. For example, 5 inches × 2.54 = 12.7 cm.',
  },
  {
    q: 'What is 5 feet 11 inches in centimeters?',
    a: '5 feet 11 inches = 71 inches total. 71 × 2.54 = 180.34 cm. So 5\'11" is approximately 180 cm.',
  },
  {
    q: 'How do I convert decimal inches to cm?',
    a: 'Simply multiply by 2.54, just like with whole numbers. For example, 2.5 inches = 2.5 × 2.54 = 6.35 cm.',
  },
  {
    q: 'Why is 1 inch exactly 2.54 centimeters?',
    a: 'In 1959, the international inch was defined as exactly 25.4 millimeters (2.54 cm) by an agreement between the United States, United Kingdom, Australia, Canada, New Zealand, and South Africa. Before 1959, the exact definitions varied slightly between countries.',
  },
]

const referenceValues = [1, 2, 3, 6, 12, 18, 24, 36, 48, 60, 72]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}
const webAppSchema = {
  '@context': 'https://schema.org', '@type': 'WebApplication',
  name: 'Inches to CM Converter', url: 'https://unitconversions.app/inches-to-cm',
  description: 'Free online inches to centimeters converter.',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}
const howToSchema = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to Convert Inches to Centimeters',
  step: [
    { '@type': 'HowToStep', name: 'Select your category', text: 'Use the inches to cm converter above.' },
    { '@type': 'HowToStep', name: 'Enter your value and select the unit to convert from', text: 'Type your value in inches.' },
    { '@type': 'HowToStep', name: 'See instant results for all units simultaneously', text: 'The centimeter result appears instantly.' },
  ],
}

export default function InchesToCmPage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Inches to Centimeters Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert inches to cm instantly. 1 inch = 2.54 centimeters.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <PairConverterWrapper category="length" fromUnit="inch" toUnit="centimeter" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white dark:from-[#0f172a] to-transparent pointer-events-none" />
      </section>

      <section className="bg-white dark:bg-[#0f172a] pt-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="pb-4"><AdBanner slot="2222222222" /></div>

          {/* Formula */}
          <div className="rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 px-6 py-5 mb-8">
            <h2 className="text-base font-bold text-blue-900 dark:text-blue-300 mb-2">Conversion Formula</h2>
            <p className="text-sm text-blue-800 dark:text-blue-400 font-mono">cm = inches × 2.54</p>
            <p className="text-sm text-blue-800 dark:text-blue-400 mt-2">
              One inch is defined as exactly 2.54 centimeters. To convert inches to cm, simply multiply by 2.54.
            </p>
          </div>

          {/* Quick reference table */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Inches to CM Reference Table</h2>
            <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-[#1e293b]">
                    <th className="px-4 py-2.5 text-left font-semibold text-gray-600 dark:text-gray-300">Inches</th>
                    <th className="px-4 py-2.5 text-right font-semibold text-gray-600 dark:text-gray-300">Centimeters</th>
                  </tr>
                </thead>
                <tbody>
                  {referenceValues.map((inches, i) => (
                    <tr key={inches} className={`border-t border-gray-50 dark:border-gray-800 ${i % 2 === 0 ? 'bg-white dark:bg-[#0f172a]' : 'bg-gray-50/50 dark:bg-[#1e293b]/50'}`}>
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300">{inches} in</td>
                      <td className="px-4 py-2.5 text-right font-mono text-gray-800 dark:text-gray-200">{(inches * 2.54).toFixed(2)} cm</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="pb-10"><FAQ questions={faqs} /></div>

          <div className="pb-4 text-sm text-gray-500 dark:text-gray-400">
            <p>For more length conversions, see the full <a href="/length" className="text-[#2563EB] hover:underline">Length Converter</a>.</p>
          </div>

          <div className="pb-6"><AdBanner slot="3333333333" /></div>
        </div>
      </section>

      <Footer />
    </>
  )
}
