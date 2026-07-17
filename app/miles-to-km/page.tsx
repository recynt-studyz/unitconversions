import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import PairConverterWrapper from '@/components/PairConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Miles to KM — Convert Miles to Kilometers',
  description:
    'Convert miles to kilometers instantly. Free miles to km converter with quick reference table. 1 mile = 1.60934 km.',
  alternates: { canonical: 'https://unitconversions.app/miles-to-km' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How many kilometers are in a mile?',
    a: '1 mile equals exactly 1.609344 kilometers. This is based on the international definition of the mile.',
  },
  {
    q: 'How do I convert miles to km?',
    a: 'Multiply miles by 1.60934. For example, 26.2 miles (a marathon) = 26.2 × 1.60934 = 42.16 km.',
  },
  {
    q: 'What is 100 miles in km?',
    a: '100 miles = 100 × 1.60934 = 160.934 km.',
  },
  {
    q: 'Is a mile longer than a kilometer?',
    a: 'Yes. One mile is approximately 1.609 km, so a mile is about 61% longer than a kilometer.',
  },
  {
    q: 'How do I quickly estimate miles to km?',
    a: 'A quick approximation: multiply miles by 1.6. This gives results within 0.4% of the exact conversion, which is close enough for most everyday purposes.',
  },
]

const referenceValues = [1, 5, 10, 26.2, 50, 100, 200, 500, 1000]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function MilesToKmPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/herobguc.webp')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 pb-10">
          <ToolHeader />
          <div className="text-center text-white px-4 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Miles to Kilometers Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert miles to km instantly. 1 mile = 1.60934 km.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <PairConverterWrapper category="length" fromUnit="mile" toUnit="kilometer" />
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
            <p className="text-sm text-blue-800 dark:text-blue-400 font-mono">km = miles × 1.60934</p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Miles to KM Reference Table</h2>
            <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 dark:bg-[#1e293b]">
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-600 dark:text-gray-300">Miles</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-gray-600 dark:text-gray-300">Kilometers</th>
                </tr></thead>
                <tbody>
                  {referenceValues.map((mi, i) => (
                    <tr key={mi} className={`border-t border-gray-50 dark:border-gray-800 ${i % 2 === 0 ? 'bg-white dark:bg-[#0f172a]' : 'bg-gray-50/50 dark:bg-[#1e293b]/50'}`}>
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300">{mi} mi</td>
                      <td className="px-4 py-2.5 text-right font-mono text-gray-800 dark:text-gray-200">{(mi * 1.609344).toFixed(3)} km</td>
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
              <p>The formula km = miles × 1.60934 is based on the international definition of the mile. One mile equals exactly 1,760 yards. Since 1959, one yard has been defined as exactly 0.9144 meters. Therefore: 1 mile = 1,760 × 0.9144 = 1,609.344 meters = 1.609344 km exactly. The value 1.60934 rounds this to 6 significant figures, which introduces an error of only 0.0000004 km per mile — completely negligible.</p>
              <p>A useful mental approximation: multiply miles by 1.6 (off by 0.58%). Or multiply by 8 and divide by 5 — this gives exactly 1.6, still slightly below the true 1.60934. For a quicker rough check, simply add 60% of the miles value to itself (100 miles + 60 miles = 160, close to 160.9).</p>
            </div>
          </div>

          {/* Worked Examples */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Real-World Examples</h2>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              <p><strong className="text-gray-800 dark:text-gray-200">Cross-border driving:</strong> Driving from the US into Canada means instant unit change: speed limits and highway distances switch from miles to kilometers. The 300 miles from New York to Boston is about 483 km. A 65 mph US highway speed limit = 104.6 km/h — knowing this helps drivers adapt immediately without doing mental math at the border.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Running distances:</strong> A 5K race is 5 km = 3.107 miles. A 10K is 6.214 miles. A half marathon (21.097 km) is 13.1 miles. A full marathon is exactly 42.195 km = 26.219 miles. International running events and local races may list distances in different units depending on country.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Vehicle range:</strong> A car with a 300-mile range has approximately 483 km of range. European car reviews and EV range ratings use km; American buyers need to convert. An EV rated at 500 km of range gets about 310 miles — relevant for anyone importing or considering a European-market vehicle.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Air travel:</strong> The great circle distance from New York to London is about 5,570 km (3,459 miles). From Los Angeles to Tokyo: 8,815 km (5,478 miles). Flight trackers and international booking platforms may show distances in either unit depending on the country setting.</p>
            </div>
          </div>

          {/* Why This Conversion Matters */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why This Conversion Matters</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">The miles-to-kilometers conversion is fundamental for international travel, cross-border driving, and any comparison of distances between US and non-US sources. Every country except the United States uses kilometers for road distances and speed limits. Travelers crossing into Canada or Mexico encounter kilometer-based signs immediately; understanding the conversion prevents dangerous misreading of speed limits. Athletic distances in running, cycling, and triathlons are specified in kilometers for international events — marathons, Tour de France stages, Tour de Mont Blanc hiking routes — while American events use miles. Car manufacturers outside the US rate fuel efficiency and range in km. Satellite navigation apps, international maps, and GPS tools may display distance in km by default, requiring this conversion for American users.</p>
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
