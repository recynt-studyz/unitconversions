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
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/herobguc.webp')" }}>
        <div className="absolute inset-0 bg-black/50" />
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
          {/* Formula Explained */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why the Formula Works</h2>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              <p>The formula mph = km/h × 0.621371 is the exact inverse of the km/h-to-mph direction. Since 1 mile = 1.609344 km exactly (from the 1959 international definition of the yard), 1 km = 1/1.609344 miles = 0.621371192... miles. Speed is distance per time, so converting km/h to mph requires only the distance conversion — the &quot;per hour&quot; part stays the same. The rounded factor 0.621371 is accurate to 6 significant figures. A practical mental shortcut: multiply by 0.6, which gives a result about 3.5% low (100 km/h ≈ 60 mph vs. the true 62.14 mph). A more accurate mental method: divide by 1.6, or use the fraction 5/8 = 0.625 (within 0.6% of the true value).</p>
            </div>
          </div>

          {/* Worked Examples */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Real-World Examples</h2>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              <p><strong className="text-gray-800 dark:text-gray-200">International road trips:</strong> Canadian highway speed limits are 100–110 km/h (62.1–68.4 mph). Mexico City urban zones post 50 km/h (31.1 mph). European motorways typically allow 130 km/h (80.8 mph) in France and Germany (with no limit on some Autobahn sections). When an American rents a car abroad or watches a foreign-shot film with visible speed limit signs, knowing these km/h equivalents in mph provides instant calibration.</p>
              <p><strong className="text-gray-800 dark:text-gray-200\">Train and rail speeds:</strong> Japan&apos;s Shinkansen bullet trains operate at up to 320 km/h = 198.8 mph. France&apos;s TGV holds the rail speed record at 574.8 km/h = 357.2 mph. Eurostar London–Paris service averages about 300 km/h = 186.4 mph in the high-speed segment. European rail timetables and passenger information displays use km/h; American travelers benefit from understanding these speeds in familiar mph terms.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Cycling and amateur sports:</strong> Professional road cyclists average around 40–50 km/h (24.9–31.1 mph) in a race. Sprint finishes reach 70+ km/h (43.5+ mph). Competitive marathon runners pace at about 20 km/h (12.4 mph). European cycling race broadcasts (Tour de France, Giro d&apos;Italia, Vuelta a España) report all speeds in km/h; fans in the US need to convert to appreciate these speeds relative to familiar running and driving speeds.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Vehicle specifications and imports:</strong> European, Japanese, and Korean car brochures list top speed and performance figures in km/h. A sports car with a 250 km/h top speed = 155.3 mph. 0–100 km/h acceleration (the European equivalent of 0–60 mph) ends at 62.1 mph. Buyers comparing imported vehicles to US-spec cars must convert these figures. Speedometers in metric-market cars show km/h as the primary scale, requiring familiarity with the conversion.</p>
            </div>
          </div>

          {/* Speed Quick Reference */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">International Speed Limits Quick Reference</h2>
            <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 dark:bg-[#1e293b]">
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-600 dark:text-gray-300">KM/H</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-gray-600 dark:text-gray-300">MPH</th>
                </tr></thead>
                <tbody>
                  {[[30,18.6],[40,24.9],[50,31.1],[60,37.3],[70,43.5],[80,49.7],[90,55.9],[100,62.1],[110,68.4],[120,74.6],[130,80.8],[140,87.0]].map(([kph,mph],idx) => (
                    <tr key={kph} className={`border-t border-gray-50 dark:border-gray-800 ${idx % 2 === 0 ? 'bg-white dark:bg-[#0f172a]' : 'bg-gray-50/50 dark:bg-[#1e293b]/50'}`}>
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300">{kph} km/h</td>
                      <td className="px-4 py-2.5 text-right font-mono text-gray-800 dark:text-gray-200">{mph} mph</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Why This Conversion Matters */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why This Conversion Matters</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">KPH to MPH conversion is essential for Americans encountering speed data from virtually every country outside the United States. Speed limits throughout Canada, Mexico, Europe, Asia, Africa, Australia, and Latin America are posted in km/h; US drivers crossing into Canada or Mexico must instantly interpret posted limits they&apos;ve never seen at home. Foreign vehicle manufacturers — including all European, Japanese, and Korean automakers — publish performance specifications in km/h. Car reviews, motorsport coverage, and automotive journalism from outside the US cite top speed, 0–100 km/h, and track data in km/h; US readers need this conversion to compare. International cycling, track and field, and motorsport events broadcast speed data in km/h throughout. Weather systems and tropical storm advisories from international agencies report wind speed in km/h; US citizens following foreign disaster news need mph equivalents. Train travel in Europe, Japan, and China involves speeds posted and announced in km/h that US visitors must interpret for safety and scheduling purposes.</p>
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
