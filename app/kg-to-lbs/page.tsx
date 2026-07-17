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
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/herobguc.webp')" }}>
        <div className="absolute inset-0 bg-black/50" />
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
          {/* Formula Explained */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why the Formula Works</h2>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              <p>The formula lbs = kg × 2.20462 comes from the internationally agreed definition of the pound. Since 1959, one pound has been defined as exactly 0.45359237 kilograms. To convert in the opposite direction: 1 kg = 1 ÷ 0.45359237 = 2.20462262185... pounds. The common rounded value 2.20462 is accurate to 6 significant figures — an error of less than 0.0001% for any practical weight measurement.</p>
              <p>A quick mental estimate: multiply kilograms by 2.2 (slight underestimate, off by 0.2%). For body weight, a rough shortcut is to multiply by 2 and add 10% of the original kg value. For example, 70 kg: 70 × 2 = 140, plus 7 (10% of 70) = 147 — close to the exact 154.3 lbs but note this specific shortcut underestimates. The most reliable quick estimate: kg × 2.2 + (kg × 0.005) for better precision.</p>
            </div>
          </div>

          {/* Worked Examples */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Real-World Examples</h2>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              <p><strong className="text-gray-800 dark:text-gray-200">Body weight:</strong> A person weighing 70 kg weighs 154.3 lbs. Someone at 80 kg is 176.4 lbs. Fitness apps, gym equipment in the US, and doctor&apos;s office scales typically use pounds; international apps and European healthcare use kilograms. Converting between them is a daily need for people who travel or relocate internationally.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Airline baggage limits:</strong> International airlines specify baggage limits in kilograms; US carriers often state pounds. A 23 kg checked bag limit (common on international flights) equals 50.7 lbs. A 32 kg limit (business class on many carriers) is 70.5 lbs. Understanding both prevents costly overweight fees at check-in.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Groceries and food:</strong> European food is sold in grams and kilograms. A 2 kg bag of flour is 4.41 lbs. A 500 g pack of pasta is 17.6 oz (just over 1 lb). Meat at a European butcher is priced per kilogram; US buyers comparing prices need the per-pound equivalent.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Olympic and competitive sports:</strong> Olympic weightlifting, boxing, wrestling, and UFC use kg weight classes internationally. The 100 kg clean-and-jerk world record (220.5 lbs) and 93 kg powerlifting divisions (205 lbs) are reported in both units depending on media source.</p>
            </div>
          </div>

          {/* Body Weight Quick Reference */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Body Weight Quick Reference</h2>
            <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 dark:bg-[#1e293b]">
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-600 dark:text-gray-300">Kilograms</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-gray-600 dark:text-gray-300">Pounds</th>
                </tr></thead>
                <tbody>
                  {[[50,110.2],[55,121.3],[60,132.3],[65,143.3],[70,154.3],[75,165.3],[80,176.4],[90,198.4],[100,220.5],[120,264.6]].map(([kg,lbs],idx) => (
                    <tr key={kg} className={`border-t border-gray-50 dark:border-gray-800 ${idx % 2 === 0 ? 'bg-white dark:bg-[#0f172a]' : 'bg-gray-50/50 dark:bg-[#1e293b]/50'}`}>
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300">{kg} kg</td>
                      <td className="px-4 py-2.5 text-right font-mono text-gray-800 dark:text-gray-200">{lbs} lbs</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Why This Conversion Matters */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why This Conversion Matters</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">The kilogram-to-pound conversion is among the most frequently searched unit conversions globally because body weight is the single most common measurement people need to convert. Most of the world records and communicates weight in kilograms; the United States and, informally, the United Kingdom use pounds. This creates constant conversion needs: medical records travel between countries with different systems; fitness tracking apps may use one system while gym equipment uses another; international shipping and postal limits are in kilograms while US-based services quote pounds. Medication dosing in clinical settings always uses kilograms, so healthcare providers need to convert patient weight from pounds. Athletes competing internationally, coaches comparing performance statistics, and sports journalists covering global events all regularly need this conversion.</p>
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
