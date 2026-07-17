import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import PairConverterWrapper from '@/components/PairConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Liters to Gallons — Convert Liters to US Gallons',
  description:
    'Convert liters to gallons instantly. Free liters to gallons converter with quick reference table. 1 liter = 0.264172 US gallons.',
  alternates: { canonical: 'https://unitconversions.app/liters-to-gallons' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How many US gallons are in a liter?',
    a: '1 liter equals approximately 0.264172 US gallons.',
  },
  {
    q: 'How do I convert liters to gallons?',
    a: 'Divide liters by 3.78541 (or multiply by 0.264172). For example, 10 liters ÷ 3.78541 = 2.6417 US gallons.',
  },
  {
    q: 'What is 20 liters in gallons?',
    a: '20 liters = 20 × 0.264172 = 5.283 US gallons.',
  },
  {
    q: 'What is 50 liters in gallons?',
    a: '50 liters = 50 × 0.264172 = 13.209 US gallons.',
  },
  {
    q: 'How many liters in a gallon of gas?',
    a: '1 US gallon of gas = 3.78541 liters. When traveling internationally, remember that fuel prices are often listed per liter, so multiply by ~3.785 to compare with per-gallon prices.',
  },
]

const referenceValues = [1, 2, 5, 10, 20, 40, 50, 75, 100]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function LitersToGallonsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/herobguc.webp')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 pb-10">
          <ToolHeader />
          <div className="text-center text-white px-4 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Liters to Gallons Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert liters to US gallons instantly. 1 liter = 0.264172 gallons.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <PairConverterWrapper category="volume" fromUnit="liter" toUnit="usGallon" />
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
            <p className="text-sm text-blue-800 dark:text-blue-400 font-mono">US gallons = liters ÷ 3.78541</p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Liters to Gallons Reference Table</h2>
            <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 dark:bg-[#1e293b]">
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-600 dark:text-gray-300">Liters</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-gray-600 dark:text-gray-300">US Gallons</th>
                </tr></thead>
                <tbody>
                  {referenceValues.map((l, i) => (
                    <tr key={l} className={`border-t border-gray-50 dark:border-gray-800 ${i % 2 === 0 ? 'bg-white dark:bg-[#0f172a]' : 'bg-gray-50/50 dark:bg-[#1e293b]/50'}`}>
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300">{l} L</td>
                      <td className="px-4 py-2.5 text-right font-mono text-gray-800 dark:text-gray-200">{(l / 3.78541).toFixed(4)} gal</td>
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
              <p>The formula US gallons = liters ÷ 3.78541 is the inverse of the gallons-to-liters definition. Since 1 US gallon = 3.785411784 liters exactly, 1 liter = 1/3.785411784 = 0.264172052... US gallons. The approximation 0.264172 is accurate to 6 significant figures. A quick mental estimate: 1 liter ≈ 0.26 gallons (about a quarter of a gallon). 4 liters ≈ 1.057 gallons — slightly more than 1 gallon. To convert to Imperial (UK) gallons instead, divide by 4.54609.</p>
            </div>
          </div>

          {/* Worked Examples */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Real-World Examples</h2>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              <p><strong className="text-gray-800 dark:text-gray-200">Bottled water and beverages:</strong> A standard 2-liter soda bottle = 0.528 gallons (slightly more than half a gallon). A 500 mL bottle = 0.132 gallons. A 1.5-liter water bottle = 0.396 gallons. US grocery stores sell juice in 64 oz (half gallon = 1.89 L) and 128 oz (gallon = 3.785 L) containers — knowing the liter equivalent helps when comparing imported products.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">European car fuel tanks:</strong> A European compact car with a 45-liter tank has 11.9 gallons of capacity. A midsize SUV with an 80-liter tank holds 21.1 gallons. American buyers considering European-market vehicles need these conversions for fuel planning, range estimation, and cost comparison.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Cooking and recipes:</strong> A recipe calling for 2 liters of chicken stock = 0.528 gallons = 2.11 US quarts = 8.45 cups. Large batch cooking (soups, stews, fermentation) often encounters liter quantities that must be converted to US liquid measures for standard kitchen equipment.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Water usage and efficiency:</strong> A 10-minute shower uses about 60–80 liters (15.9–21.1 gallons). A standard bath uses about 150 liters (39.6 gallons). European water appliance efficiency ratings cite liters per cycle; US appliances cite gallons. Comparing dishwashers or washing machines across markets requires this conversion.</p>
            </div>
          </div>

          {/* Why This Conversion Matters */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why This Conversion Matters</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Liters to gallons conversion is needed whenever metric liquid volumes must be understood in US terms. The global standard for liquid measurement is liters — fuel, beverages, industrial chemicals, pharmaceutical liquids, and cooking quantities outside the US are all measured in liters. American consumers importing products, travelers bringing liquids from metric countries, and engineers specifying liquid systems from international sources all need to convert liters to gallons for comparison with US standards. International appliance efficiency ratings, water heater capacities, swimming pool volumes, and industrial tank sizes are in liters; US buyers selecting and installing these need gallon equivalents. Vineyards, breweries, and distilleries following international production standards report volumes in liters; distributors serving the US market must convert. Gardeners and farmers using internationally sourced fertilizer or pesticide recommendations may encounter liter-based dosing rates.</p>
          </div>

          <div className="pb-10"><FAQ questions={faqs} /></div>
          <div className="pb-4 text-sm text-gray-500 dark:text-gray-400">
            <p>For more volume conversions, see the full <a href="/volume" className="text-[#2563EB] hover:underline">Volume Converter</a>.</p>
          </div>
          <div className="pb-6"><AdBanner slot="3333333333" /></div>
        </div>
      </section>
      <Footer />
    </>
  )
}
