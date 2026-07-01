import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import PairConverterWrapper from '@/components/PairConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'KG to LBS — Convert Kilograms to Pounds',
  description:
    'Convert kilograms to pounds instantly. Free kg to lbs converter with quick reference table. 1 kg = 2.20462 lbs.',
  alternates: { canonical: 'https://unitconversions.app/kg-to-lbs' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How many pounds are in a kilogram?',
    a: '1 kilogram equals approximately 2.20462 pounds. To convert kg to lbs, multiply by 2.20462.',
  },
  {
    q: 'How do I convert kg to lbs?',
    a: 'Multiply the number of kilograms by 2.20462. For example, 70 kg × 2.20462 = 154.32 lbs.',
  },
  {
    q: 'What is 100 kg in pounds?',
    a: '100 kg = 100 × 2.20462 = 220.462 pounds. That is approximately 220.5 lbs.',
  },
  {
    q: 'What is 50 kg in pounds?',
    a: '50 kg = 50 × 2.20462 = 110.231 pounds, approximately 110.2 lbs.',
  },
  {
    q: 'Is a kilogram heavier than a pound?',
    a: 'Yes. 1 kilogram is heavier than 1 pound. One kilogram equals approximately 2.20462 pounds, so a kilogram is about 2.2 times heavier than a pound.',
  },
]

const referenceValues = [1, 5, 10, 20, 50, 60, 70, 80, 90, 100, 120]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function KgToLbsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-blue-900/65" />
        <div className="relative z-10 pb-10">
          <ToolHeader />
          <div className="text-center text-white px-4 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">KG to LBS Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert kilograms to pounds instantly. 1 kg = 2.20462 lbs.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <PairConverterWrapper category="weight" fromUnit="kilogram" toUnit="pound" />
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
            <p className="text-sm text-blue-800 dark:text-blue-400 font-mono">lbs = kg × 2.20462</p>
            <p className="text-sm text-blue-800 dark:text-blue-400 mt-2">Multiply kilograms by 2.20462 to get pounds.</p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">KG to LBS Reference Table</h2>
            <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 dark:bg-[#1e293b]">
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-600 dark:text-gray-300">Kilograms</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-gray-600 dark:text-gray-300">Pounds</th>
                </tr></thead>
                <tbody>
                  {referenceValues.map((kg, i) => (
                    <tr key={kg} className={`border-t border-gray-50 dark:border-gray-800 ${i % 2 === 0 ? 'bg-white dark:bg-[#0f172a]' : 'bg-gray-50/50 dark:bg-[#1e293b]/50'}`}>
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300">{kg} kg</td>
                      <td className="px-4 py-2.5 text-right font-mono text-gray-800 dark:text-gray-200">{(kg * 2.20462).toFixed(3)} lbs</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="pb-10"><FAQ questions={faqs} /></div>
          <div className="pb-4 text-sm text-gray-500 dark:text-gray-400">
            <p>For more weight conversions, see the full <a href="/weight" className="text-[#2563EB] hover:underline">Weight Converter</a>.</p>
          </div>
          <div className="pb-6"><AdBanner slot="3333333333" /></div>
        </div>
      </section>
      <Footer />
    </>
  )
}
