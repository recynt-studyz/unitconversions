import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import PairConverterWrapper from '@/components/PairConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'KM to Miles — Convert Kilometers to Miles',
  description:
    'Convert kilometers to miles instantly. Free km to miles converter with quick reference table. 1 km = 0.621371 miles.',
  alternates: { canonical: 'https://unitconversions.app/km-to-miles' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How many miles are in a kilometer?',
    a: '1 kilometer equals approximately 0.621371 miles.',
  },
  {
    q: 'How do I convert km to miles?',
    a: 'Multiply kilometers by 0.621371. For example, 42.195 km (a marathon) × 0.621371 = 26.22 miles.',
  },
  {
    q: 'What is 100 km in miles?',
    a: '100 km = 100 × 0.621371 = 62.1371 miles.',
  },
  {
    q: 'How do I quickly estimate km to miles?',
    a: 'Multiply by 0.6 for a quick estimate. For example, 100 km ≈ 60 miles (actual: 62.1 miles). Alternatively, divide by 1.6 for a close approximation.',
  },
  {
    q: 'What is 5 km in miles?',
    a: '5 km = 5 × 0.621371 = 3.1069 miles. A 5K race is approximately 3.1 miles.',
  },
]

const referenceValues = [1, 5, 10, 20, 42.195, 50, 100, 200, 500, 1000]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function KmToMilesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/herobguc.webp')" }}>
        <div className="absolute inset-0 bg-blue-900/65" />
        <div className="relative z-10 pb-10">
          <ToolHeader />
          <div className="text-center text-white px-4 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">KM to Miles Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert kilometers to miles instantly. 1 km = 0.621371 miles.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <PairConverterWrapper category="length" fromUnit="kilometer" toUnit="mile" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white dark:from-[#0f172a] to-transparent pointer-events-none" />
      </section>
      <section className="bg-white dark:bg-[#0f172a] pt-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="pb-4"><AdBanner slot="2222222222" /></div>
          <div className="rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 px-6 py-5 mb-8">
            <h2 className="text-base font-bold text-blue-900 dark:text-blue-300 mb-2">Conversion Formula</h2>
            <p className="text-sm text-blue-800 dark:text-blue-400 font-mono">miles = km × 0.621371</p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">KM to Miles Reference Table</h2>
            <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 dark:bg-[#1e293b]">
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-600 dark:text-gray-300">Kilometers</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-gray-600 dark:text-gray-300">Miles</th>
                </tr></thead>
                <tbody>
                  {referenceValues.map((km, i) => (
                    <tr key={km} className={`border-t border-gray-50 dark:border-gray-800 ${i % 2 === 0 ? 'bg-white dark:bg-[#0f172a]' : 'bg-gray-50/50 dark:bg-[#1e293b]/50'}`}>
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300">{km} km</td>
                      <td className="px-4 py-2.5 text-right font-mono text-gray-800 dark:text-gray-200">{(km / 1.609344).toFixed(4)} mi</td>
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
