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
          {/* Formula Explained */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why the Formula Works</h2>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              <p>The formula kg = lbs × 0.453592 comes directly from the 1959 international definition of the avoirdupois pound as exactly 0.45359237 kilograms. This makes the conversion exact, not approximate. The commonly used 0.453592 rounds to 6 significant figures, introducing an error of less than 0.0001 grams per pound — negligible for any practical application.</p>
              <p>A quick mental shortcut: divide pounds by 2.2. This gives results within 0.2% of the precise answer for most body weight values (150 lbs ÷ 2.2 = 68.18 kg, vs. exact 68.04 kg). For a closer estimate, divide by 2.205 instead, which is accurate to within 0.02%.</p>
            </div>
          </div>

          {/* Worked Examples */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Real-World Examples</h2>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              <p><strong className="text-gray-800 dark:text-gray-200">Clinical medication dosing:</strong> Drug doses in hospitals are calculated per kilogram of body weight. A 160 lb patient weighs 72.6 kg. Dosing at 15 mg/kg would require 72.6 × 15 = 1,089 mg. US healthcare providers must convert patient weights reported in pounds to kilograms for all clinical dosing calculations.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">International shipping:</strong> US domestic shipping uses pounds; international carriers and customs use kilograms. A 30 lb package = 13.6 kg. A 50 lb package = 22.7 kg. USPS customs forms require weight in kilograms for international shipments, even though domestic handling uses pounds.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Combat sports weight classes:</strong> UFC, boxing, and wrestling weight classes are defined in pounds in the US but kilograms internationally. UFC lightweight is 155 lbs = 70.3 kg. UFC heavyweight is up to 265 lbs = 120.2 kg. International broadcasts and records use kilograms.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Newborn and pediatric weights:</strong> Hospitals in the US record birth weights in pounds and ounces; international records use kilograms. An 8 lb 6 oz baby = 8.375 lbs = 3.80 kg. A 7 lb baby = 3.18 kg. Parents comparing their baby&apos;s weight to international growth charts need this conversion.</p>
            </div>
          </div>

          {/* Body Weight Quick Reference */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Body Weight Quick Reference</h2>
            <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 dark:bg-[#1e293b]">
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-600 dark:text-gray-300">Pounds</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-gray-600 dark:text-gray-300">Kilograms</th>
                </tr></thead>
                <tbody>
                  {[[100,45.4],[120,54.4],[130,59.0],[140,63.5],[150,68.0],[160,72.6],[175,79.4],[185,83.9],[200,90.7],[220,99.8]].map(([lbs,kg],idx) => (
                    <tr key={lbs} className={`border-t border-gray-50 dark:border-gray-800 ${idx % 2 === 0 ? 'bg-white dark:bg-[#0f172a]' : 'bg-gray-50/50 dark:bg-[#1e293b]/50'}`}>
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300">{lbs} lbs</td>
                      <td className="px-4 py-2.5 text-right font-mono text-gray-800 dark:text-gray-200">{kg} kg</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Why This Conversion Matters */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why This Conversion Matters</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Converting pounds to kilograms is essential for Americans working with international systems — including healthcare, science, shipping, and nutrition. Clinical settings worldwide use kilograms for all weight-based medication dosing; a US patient&apos;s pound-based weight must be converted before calculating drug doses, anesthesia, or chemotherapy. International nutrition guidelines and research studies always report weight in kilograms — anyone following a metric-based diet plan (protein per kg of body weight) needs this conversion. Online fitness communities, wearables, and apps may display weight in either unit depending on the user&apos;s region settings. Travelers carrying checked luggage from the US to metric countries need to know their bag&apos;s kilogram weight before reaching the airport. Scientists and engineers working in the US but publishing internationally must always convert to SI units.</p>
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
