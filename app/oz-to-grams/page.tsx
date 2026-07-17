import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import PairConverterWrapper from '@/components/PairConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'OZ to Grams — Convert Ounces to Grams',
  description:
    'Convert ounces to grams instantly. Free oz to grams converter with quick reference table. 1 oz = 28.3495 grams.',
  alternates: { canonical: 'https://unitconversions.app/oz-to-grams' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How many grams are in an ounce?',
    a: '1 ounce (avoirdupois) equals exactly 28.349523125 grams. For everyday use, 28.35 grams per ounce is sufficient.',
  },
  {
    q: 'How do I convert ounces to grams?',
    a: 'Multiply ounces by 28.3495. For example, 8 oz = 8 × 28.3495 = 226.796 grams.',
  },
  {
    q: 'What is 16 oz in grams?',
    a: '16 oz = 16 × 28.3495 = 453.592 grams (approximately 0.454 kg, which is 1 pound).',
  },
  {
    q: 'What is the difference between a fluid ounce and an ounce?',
    a: 'An ounce (oz) measures weight/mass. A fluid ounce (fl oz) measures volume. 1 fl oz ≈ 29.5735 mL. They are different units and should not be confused.',
  },
  {
    q: 'What is 100 grams in ounces?',
    a: '100 grams ÷ 28.3495 = approximately 3.527 ounces.',
  },
]

const referenceValues = [1, 2, 4, 8, 12, 16, 20, 32, 100]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function OzToGramsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/herobguc.webp')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 pb-10">
          <ToolHeader />
          <div className="text-center text-white px-4 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Ounces to Grams Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert oz to grams instantly. 1 oz = 28.3495 grams.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <PairConverterWrapper category="weight" fromUnit="ounce" toUnit="gram" />
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
            <p className="text-sm text-blue-800 dark:text-blue-400 font-mono">grams = oz × 28.3495</p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">OZ to Grams Reference Table</h2>
            <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 dark:bg-[#1e293b]">
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-600 dark:text-gray-300">Ounces</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-gray-600 dark:text-gray-300">Grams</th>
                </tr></thead>
                <tbody>
                  {referenceValues.map((oz, i) => (
                    <tr key={oz} className={`border-t border-gray-50 dark:border-gray-800 ${i % 2 === 0 ? 'bg-white dark:bg-[#0f172a]' : 'bg-gray-50/50 dark:bg-[#1e293b]/50'}`}>
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300">{oz} oz</td>
                      <td className="px-4 py-2.5 text-right font-mono text-gray-800 dark:text-gray-200">{(oz * 28.3495).toFixed(2)} g</td>
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
              <p>The formula grams = oz × 28.3495 is based on the internationally defined avoirdupois ounce: exactly 28.349523125 grams. This definition comes from the 1959 international yard and pound agreement, which fixed 1 pound = exactly 453.59237 grams. Since there are 16 ounces in a pound, 1 oz = 453.59237 ÷ 16 = 28.349523125 grams exactly. The rounded value 28.3495 introduces an error of less than 0.000009 grams per ounce — completely negligible for any use.</p>
              <p>Important: the troy ounce (used for gold, silver, and other precious metals) is different from the avoirdupois ounce. 1 troy oz = 31.1035 grams, not 28.35 grams. If you are buying or selling gold, silver, or gemstones, always use the troy ounce conversion. This converter uses the avoirdupois ounce for everyday weight measurement.</p>
            </div>
          </div>

          {/* Worked Examples */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Real-World Examples</h2>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              <p><strong className="text-gray-800 dark:text-gray-200">Cooking and baking:</strong> US recipes often list ingredients in ounces: 8 oz of chocolate = 226.8 g. 4 oz of butter = 113.4 g (1 stick of US butter = 4 oz = 113.4 g). A can of tuna at 5 oz = 141.8 g. European baking recipes list in grams; converting helps American cooks use a kitchen scale.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Specialty coffee:</strong> Precision coffee recipes use grams. A standard espresso double shot uses 18–20 g (0.63–0.71 oz) of ground coffee. A pour-over recipe might call for 30 g (1.06 oz) of coffee for 500 g (17.6 oz) of water. Baristas frequently need both units for consistent brewing.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Nutrition tracking:</strong> US food labels list serving sizes in ounces and grams. A 1 oz serving of almonds = 28.35 g (about 23 almonds). A 1.5 oz serving of cheese = 42.5 g. Protein bars are often 1.76 oz (50 g) or 2.12 oz (60 g). Both units appear on the same label.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Postal and shipping:</strong> USPS uses ounces for first-class mail under 1 pound. A 2 oz letter = 56.7 g. International postal services use grams. Packages shipped internationally may require weight in grams on customs forms even when measured in ounces domestically.</p>
            </div>
          </div>

          {/* Why This Conversion Matters */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why This Conversion Matters</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Ounces to grams is critical for cooking, baking, nutrition tracking, and international commerce. American recipes use ounces for ingredients that European and Australian recipes measure in grams — anyone cooking across these traditions needs constant conversion. Kitchen scales sold globally may display in either unit; knowing the equivalent helps when a recipe&apos;s unit doesn&apos;t match the scale&apos;s current mode. US nutrition labels list serving sizes in ounces; international nutritional databases and fitness apps (especially European ones) use grams. Online food order platforms from different countries show weights differently. Postal and courier services worldwide calculate weight-based shipping costs in grams, while US domestic shipping uses ounces. Jewelry, spices, precious metals, and specialty ingredients are priced per gram internationally and per ounce domestically, requiring conversion for price comparison.</p>
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
