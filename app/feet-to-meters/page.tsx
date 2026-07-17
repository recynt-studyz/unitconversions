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
        <div className="absolute inset-0 bg-black/50" />
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
          {/* Formula Explained */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why the Formula Works</h2>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              <p>The formula meters = feet × 0.3048 is exact by international definition. In 1959, the international yard was fixed at exactly 0.9144 meters. Since 1 foot = 1/3 yard, then 1 foot = 0.9144 ÷ 3 = 0.3048 meters exactly — no rounding involved. This can also be verified through the inch definition: 1 inch = 2.54 cm = 0.0254 m, and 12 inches = 12 × 0.0254 = 0.3048 m exactly. Both paths produce the same result, confirming the consistency of the international measurement definitions adopted in 1959.</p>
            </div>
          </div>

          {/* Worked Examples */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Real-World Examples</h2>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              <p><strong className="text-gray-800 dark:text-gray-200">Height for international documents:</strong> Heights on passports, visa applications, and international medical forms are required in meters and centimeters in most countries. 5 feet = 1.524 m. 5′6″ = 5.5 feet = 1.676 m. 5′10″ = 1.778 m. 6 feet = 1.829 m. 6′2″ = 1.880 m.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Building heights and ceilings:</strong> Architects and builders working internationally must convert ceiling heights. A standard 8-foot ceiling = 2.438 m. A 9-foot ceiling (premium residential) = 2.743 m. A 10-foot ceiling = 3.048 m. The Empire State Building is 1,454 feet = 443.1 meters tall (to antenna tip).</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Aviation altitude:</strong> Aircraft altitude worldwide is specified in feet by international aviation agreement (ICAO), even in metric countries. A cruising altitude of 35,000 feet = 10,668 meters. Oxygen is required above approximately 14,000 feet = 4,267 meters. Terrain elevation on international maps may show meters while the pilot uses feet for altitude.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Swimming pools:</strong> An Olympic pool is 50 meters = 164.04 feet long, 25 meters wide, and 2 meters deep. A standard US pool is often 25 yards (75 feet = 22.86 meters). Swimmers from different countries need to know both to calculate pace and distance correctly.</p>
            </div>
          </div>

          {/* Common Heights Quick Reference */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Common Heights Quick Reference</h2>
            <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 dark:bg-[#1e293b]">
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-600 dark:text-gray-300">Feet</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-gray-600 dark:text-gray-300">Meters</th>
                </tr></thead>
                <tbody>
                  {[[5,1.524],[5.5,1.676],[6,1.829],[6.5,1.981],[7,2.134],[8,2.438],[9,2.743],[10,3.048],[100,30.48],[1000,304.8]].map(([ft,m],idx) => (
                    <tr key={ft} className={`border-t border-gray-50 dark:border-gray-800 ${idx % 2 === 0 ? 'bg-white dark:bg-[#0f172a]' : 'bg-gray-50/50 dark:bg-[#1e293b]/50'}`}>
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300">{ft} ft</td>
                      <td className="px-4 py-2.5 text-right font-mono text-gray-800 dark:text-gray-200">{m} m</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Why This Conversion Matters */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why This Conversion Matters</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Feet and meters are the two dominant units for human height, building dimensions, altitude, and depth measurement worldwide. Since the US measures in feet while virtually all other countries use meters, conversion is a constant need for engineers, travelers, architects, and healthcare workers. International medical forms and health apps require height in meters and centimeters; US residents need to convert. Building codes, structural engineering specifications, and architectural plans from non-US countries are in meters; US firms working internationally must convert all dimensions. Real estate listings from European, Asian, and Australian markets list ceiling heights in meters and room dimensions in square meters — potential buyers need feet for comparison. Aviation uses feet for altitude globally by agreement, but terrain databases and weather reports may use meters, creating daily conversion needs for pilots.</p>
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
