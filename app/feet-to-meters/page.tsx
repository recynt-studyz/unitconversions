import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import PairConverterWrapper from '@/components/PairConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Feet to Meters — Convert Feet to Meters',
  description:
    'Convert feet to meters instantly. Free feet to meters converter with quick reference table. 1 foot = 0.3048 meters.',
  alternates: { canonical: 'https://unitconversions.app/feet-to-meters' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How many meters are in a foot?',
    a: '1 foot is exactly 0.3048 meters. This is an internationally defined standard.',
  },
  {
    q: 'How do I convert feet to meters?',
    a: 'Multiply feet by 0.3048. For example, 10 feet = 10 × 0.3048 = 3.048 meters.',
  },
  {
    q: 'What is 6 feet in meters?',
    a: '6 feet = 6 × 0.3048 = 1.8288 meters, approximately 1.83 meters.',
  },
  {
    q: 'What is 5 feet in meters?',
    a: '5 feet = 5 × 0.3048 = 1.524 meters.',
  },
  {
    q: 'How tall is 6 feet in cm?',
    a: '6 feet = 6 × 0.3048 = 1.8288 meters = 182.88 cm.',
  },
]

const referenceValues = [1, 2, 3, 4, 5, 6, 7, 8, 10, 20, 100]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function FeetToMetersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/herobguc.webp')" }}>
        <div className="absolute inset-0 bg-blue-900/65" />
        <div className="relative z-10 pb-10">
          <ToolHeader />
          <div className="text-center text-white px-4 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Feet to Meters Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert feet to meters instantly. 1 foot = 0.3048 meters.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <PairConverterWrapper category="length" fromUnit="foot" toUnit="meter" />
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
            <p className="text-sm text-blue-800 dark:text-blue-400 font-mono">meters = feet × 0.3048</p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Feet to Meters Reference Table</h2>
            <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 dark:bg-[#1e293b]">
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-600 dark:text-gray-300">Feet</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-gray-600 dark:text-gray-300">Meters</th>
                </tr></thead>
                <tbody>
                  {referenceValues.map((ft, i) => (
                    <tr key={ft} className={`border-t border-gray-50 dark:border-gray-800 ${i % 2 === 0 ? 'bg-white dark:bg-[#0f172a]' : 'bg-gray-50/50 dark:bg-[#1e293b]/50'}`}>
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300">{ft} ft</td>
                      <td className="px-4 py-2.5 text-right font-mono text-gray-800 dark:text-gray-200">{(ft * 0.3048).toFixed(4)} m</td>
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
