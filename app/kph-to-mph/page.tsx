import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import PairConverterWrapper from '@/components/PairConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'KPH to MPH — Convert Km Per Hour to Miles Per Hour',
  description:
    'Convert kph to mph instantly. Free km/h to mph converter with quick reference table. 1 km/h = 0.621371 mph.',
  alternates: { canonical: 'https://unitconversions.app/kph-to-mph' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How do I convert km/h to mph?',
    a: 'Multiply km/h by 0.621371. For example, 100 km/h = 100 × 0.621371 = 62.14 mph.',
  },
  {
    q: 'What is 120 km/h in mph?',
    a: '120 km/h = 120 × 0.621371 = 74.56 mph.',
  },
  {
    q: 'What is 100 km/h in mph?',
    a: '100 km/h = 62.14 mph. This is a common highway speed limit in many countries.',
  },
  {
    q: 'What is 50 km/h in mph?',
    a: '50 km/h = 50 × 0.621371 = 31.07 mph. This is a typical urban speed limit.',
  },
  {
    q: 'How do I quickly estimate km/h to mph?',
    a: 'Multiply by 0.6 for a quick estimate. For example, 100 km/h ≈ 60 mph (actual: 62.1 mph). Alternatively, divide by 1.6.',
  },
]

const referenceValues = [10, 20, 30, 50, 60, 80, 100, 110, 120, 130, 160]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function KphToMphPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-blue-900/65" />
        <div className="relative z-10 pb-10">
          <ToolHeader />
          <div className="text-center text-white px-4 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">KPH to MPH Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert kilometers per hour to miles per hour instantly. 1 km/h = 0.621371 mph.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <PairConverterWrapper category="speed" fromUnit="kilometerPerHour" toUnit="milePerHour" />
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
            <p className="text-sm text-blue-800 dark:text-blue-400 font-mono">mph = km/h × 0.621371</p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">KPH to MPH Reference Table</h2>
            <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 dark:bg-[#1e293b]">
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-600 dark:text-gray-300">KPH</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-gray-600 dark:text-gray-300">MPH</th>
                </tr></thead>
                <tbody>
                  {referenceValues.map((kph, i) => (
                    <tr key={kph} className={`border-t border-gray-50 dark:border-gray-800 ${i % 2 === 0 ? 'bg-white dark:bg-[#0f172a]' : 'bg-gray-50/50 dark:bg-[#1e293b]/50'}`}>
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300">{kph} km/h</td>
                      <td className="px-4 py-2.5 text-right font-mono text-gray-800 dark:text-gray-200">{(kph * 0.621371).toFixed(3)} mph</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="pb-10"><FAQ questions={faqs} /></div>
          <div className="pb-4 text-sm text-gray-500 dark:text-gray-400">
            <p>For more speed conversions, see the full <a href="/speed" className="text-[#2563EB] hover:underline">Speed Converter</a>.</p>
          </div>
          <div className="pb-6"><AdBanner slot="3333333333" /></div>
        </div>
      </section>
      <Footer />
    </>
  )
}
