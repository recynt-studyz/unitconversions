import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import PairConverterWrapper from '@/components/PairConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Meters to Feet — Convert Meters to Feet',
  description:
    'Convert meters to feet instantly. Free meters to feet converter with quick reference table. 1 meter = 3.28084 feet.',
  alternates: { canonical: 'https://unitconversions.app/meters-to-feet' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How many feet are in a meter?',
    a: '1 meter equals approximately 3.28084 feet.',
  },
  {
    q: 'How do I convert meters to feet?',
    a: 'Multiply meters by 3.28084. For example, 1.8 m × 3.28084 = 5.905 feet.',
  },
  {
    q: 'What is 1.8 meters in feet?',
    a: '1.8 meters = 1.8 × 3.28084 = 5.905 feet, approximately 5 feet 10.9 inches.',
  },
  {
    q: 'What is 2 meters in feet?',
    a: '2 meters = 2 × 3.28084 = 6.56168 feet, approximately 6 feet 6.7 inches.',
  },
  {
    q: 'How do I convert meters to feet and inches?',
    a: 'First convert meters to total inches: multiply by 39.3701. Then divide by 12 for feet and take the remainder for inches. For example, 1.75 m × 39.3701 = 68.9 inches = 5 ft 8.9 in.',
  },
]

const referenceValues = [0.5, 1, 1.5, 1.7, 1.8, 2, 3, 5, 10, 100]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function MetersToFeetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/herobguc.webp')" }}>
        <div className="absolute inset-0 bg-blue-900/65" />
        <div className="relative z-10 pb-10">
          <ToolHeader />
          <div className="text-center text-white px-4 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Meters to Feet Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert meters to feet instantly. 1 meter = 3.28084 feet.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <PairConverterWrapper category="length" fromUnit="meter" toUnit="foot" />
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
            <p className="text-sm text-blue-800 dark:text-blue-400 font-mono">feet = meters × 3.28084</p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Meters to Feet Reference Table</h2>
            <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 dark:bg-[#1e293b]">
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-600 dark:text-gray-300">Meters</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-gray-600 dark:text-gray-300">Feet</th>
                </tr></thead>
                <tbody>
                  {referenceValues.map((m, i) => (
                    <tr key={m} className={`border-t border-gray-50 dark:border-gray-800 ${i % 2 === 0 ? 'bg-white dark:bg-[#0f172a]' : 'bg-gray-50/50 dark:bg-[#1e293b]/50'}`}>
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300">{m} m</td>
                      <td className="px-4 py-2.5 text-right font-mono text-gray-800 dark:text-gray-200">{(m / 0.3048).toFixed(4)} ft</td>
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
