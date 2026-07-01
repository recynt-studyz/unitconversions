import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import PairConverterWrapper from '@/components/PairConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'MPH to KPH — Convert Miles Per Hour to Km Per Hour',
  description:
    'Convert mph to kph instantly. Free mph to km/h converter with quick reference table. 1 mph = 1.60934 km/h.',
  alternates: { canonical: 'https://unitconversions.app/mph-to-kph' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How do I convert mph to km/h?',
    a: 'Multiply mph by 1.60934. For example, 60 mph = 60 × 1.60934 = 96.56 km/h.',
  },
  {
    q: 'How fast is 100 mph in km/h?',
    a: '100 mph = 100 × 1.60934 = 160.934 km/h.',
  },
  {
    q: 'What is the speed limit of 65 mph in km/h?',
    a: '65 mph = 65 × 1.60934 = 104.61 km/h.',
  },
  {
    q: 'What is 30 mph in km/h?',
    a: '30 mph = 30 × 1.60934 = 48.28 km/h.',
  },
  {
    q: 'What is the speed of light in mph and km/h?',
    a: 'The speed of light is approximately 670,616,629 mph or 1,079,252,848 km/h.',
  },
]

const referenceValues = [10, 20, 30, 40, 50, 60, 65, 70, 80, 100, 120]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function MphToKphPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/herobguc.webp')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 pb-10">
          <ToolHeader />
          <div className="text-center text-white px-4 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">MPH to KPH Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert miles per hour to kilometers per hour instantly. 1 mph = 1.60934 km/h.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <PairConverterWrapper category="speed" fromUnit="milePerHour" toUnit="kilometerPerHour" />
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
            <p className="text-sm text-blue-800 dark:text-blue-400 font-mono">km/h = mph × 1.60934</p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">MPH to KPH Reference Table</h2>
            <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 dark:bg-[#1e293b]">
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-600 dark:text-gray-300">MPH</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-gray-600 dark:text-gray-300">KPH</th>
                </tr></thead>
                <tbody>
                  {referenceValues.map((mph, i) => (
                    <tr key={mph} className={`border-t border-gray-50 dark:border-gray-800 ${i % 2 === 0 ? 'bg-white dark:bg-[#0f172a]' : 'bg-gray-50/50 dark:bg-[#1e293b]/50'}`}>
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300">{mph} mph</td>
                      <td className="px-4 py-2.5 text-right font-mono text-gray-800 dark:text-gray-200">{(mph * 1.60934).toFixed(2)} km/h</td>
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
