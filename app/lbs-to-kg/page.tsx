import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import PairConverterWrapper from '@/components/PairConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'LBS to KG — Convert Pounds to Kilograms',
  description:
    'Convert pounds to kilograms instantly. Free lbs to kg converter with quick reference table. 1 lb = 0.453592 kg.',
  alternates: { canonical: 'https://unitconversions.app/lbs-to-kg' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How many kilograms are in a pound?',
    a: '1 pound equals exactly 0.45359237 kilograms. For everyday use, 1 lb ≈ 0.4536 kg.',
  },
  {
    q: 'How do I convert lbs to kg?',
    a: 'Multiply the number of pounds by 0.453592. For example, 150 lbs × 0.453592 = 68.04 kg.',
  },
  {
    q: 'What is 200 lbs in kg?',
    a: '200 lbs = 200 × 0.453592 = 90.72 kg.',
  },
  {
    q: 'What is 150 lbs in kg?',
    a: '150 lbs = 150 × 0.453592 = 68.04 kg.',
  },
  {
    q: 'Which is heavier, a pound or a kilogram?',
    a: 'A kilogram is heavier than a pound. 1 kg = 2.20462 lbs. So 1 kilogram weighs more than twice as much as 1 pound.',
  },
]

const referenceValues = [1, 10, 50, 100, 120, 130, 140, 150, 160, 175, 200]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function LbsToKgPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/herobguc.webp')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 pb-10">
          <ToolHeader />
          <div className="text-center text-white px-4 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">LBS to KG Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert pounds to kilograms instantly. 1 lb = 0.453592 kg.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <PairConverterWrapper category="weight" fromUnit="pound" toUnit="kilogram" />
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
            <p className="text-sm text-blue-800 dark:text-blue-400 font-mono">kg = lbs × 0.453592</p>
            <p className="text-sm text-blue-800 dark:text-blue-400 mt-2">Multiply pounds by 0.453592 to get kilograms.</p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">LBS to KG Reference Table</h2>
            <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 dark:bg-[#1e293b]">
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-600 dark:text-gray-300">Pounds</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-gray-600 dark:text-gray-300">Kilograms</th>
                </tr></thead>
                <tbody>
                  {referenceValues.map((lbs, i) => (
                    <tr key={lbs} className={`border-t border-gray-50 dark:border-gray-800 ${i % 2 === 0 ? 'bg-white dark:bg-[#0f172a]' : 'bg-gray-50/50 dark:bg-[#1e293b]/50'}`}>
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300">{lbs} lbs</td>
                      <td className="px-4 py-2.5 text-right font-mono text-gray-800 dark:text-gray-200">{(lbs * 0.453592).toFixed(3)} kg</td>
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
