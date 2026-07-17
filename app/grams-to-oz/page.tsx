import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import PairConverterWrapper from '@/components/PairConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Grams to OZ — Convert Grams to Ounces',
  description:
    'Convert grams to ounces instantly. Free grams to oz converter with quick reference table. 1 gram = 0.035274 oz.',
  alternates: { canonical: 'https://unitconversions.app/grams-to-oz' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How many ounces are in a gram?',
    a: '1 gram equals approximately 0.035274 ounces. To convert grams to ounces, divide by 28.3495 (or multiply by 0.035274).',
  },
  {
    q: 'How do I convert grams to ounces?',
    a: 'Divide grams by 28.3495. For example, 100 grams ÷ 28.3495 = 3.527 ounces.',
  },
  {
    q: 'What is 250 grams in ounces?',
    a: '250 grams ÷ 28.3495 = approximately 8.818 ounces.',
  },
  {
    q: 'What is 500 grams in oz?',
    a: '500 grams ÷ 28.3495 = approximately 17.637 ounces, which is just over 1 pound (16 oz).',
  },
  {
    q: 'What is 1000 grams in ounces?',
    a: '1000 grams = 1 kilogram = approximately 35.274 ounces or 2.205 pounds.',
  },
]

const referenceValues = [1, 10, 25, 50, 100, 200, 250, 454, 500, 1000]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function GramsToOzPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/herobguc.webp')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 pb-10">
          <ToolHeader />
          <div className="text-center text-white px-4 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Grams to Ounces Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert grams to oz instantly. 1 gram = 0.035274 oz.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <PairConverterWrapper category="weight" fromUnit="gram" toUnit="ounce" />
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
            <p className="text-sm text-blue-800 dark:text-blue-400 font-mono">oz = grams ÷ 28.3495</p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Grams to OZ Reference Table</h2>
            <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 dark:bg-[#1e293b]">
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-600 dark:text-gray-300">Grams</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-gray-600 dark:text-gray-300">Ounces</th>
                </tr></thead>
                <tbody>
                  {referenceValues.map((g, i) => (
                    <tr key={g} className={`border-t border-gray-50 dark:border-gray-800 ${i % 2 === 0 ? 'bg-white dark:bg-[#0f172a]' : 'bg-gray-50/50 dark:bg-[#1e293b]/50'}`}>
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300">{g} g</td>
                      <td className="px-4 py-2.5 text-right font-mono text-gray-800 dark:text-gray-200">{(g / 28.3495).toFixed(4)} oz</td>
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
              <p>The formula oz = grams ÷ 28.3495 is the inverse of the ounce-to-gram definition. Since 1 oz = 28.349523125 grams exactly, 1 gram = 1/28.349523125 oz = 0.035273961... oz. The common shorthand 0.035274 oz per gram is accurate to 6 significant figures. A practical mental shortcut: 100 grams ≈ 3.53 oz. This makes estimating common package sizes easy — 200 g ≈ 7 oz, 500 g ≈ 17.6 oz (just over 1 lb), 1,000 g = 1 kg ≈ 35.3 oz (2.2 lbs).</p>
            </div>
          </div>

          {/* Worked Examples */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Real-World Examples</h2>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              <p><strong className="text-gray-800 dark:text-gray-200">European grocery shopping:</strong> Imported cheese, deli meat, and specialty foods are often sold in grams at European-style markets. A 200 g wedge of Parmesan = 7.05 oz. A 300 g package of smoked salmon = 10.58 oz. Comparing prices per gram to prices per ounce requires this conversion.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Protein and nutrition tracking:</strong> International nutrition databases list food composition per 100 grams. 100 g of chicken breast contains about 31 g protein = 3.53 oz of food. Converting portion sizes from grams (as shown on international labels) to ounces (as used in US food logging apps) is a daily need for fitness-conscious users.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Chocolate and confectionery:</strong> European and premium chocolate bars come in 100 g (3.53 oz) and 200 g (7.05 oz) sizes. Cocoa powder for baking is often sold in 250 g (8.82 oz) or 500 g (17.64 oz) packages. US bakers adapting European recipes need gram-to-ounce conversions for shopping.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Postal small packages:</strong> Many international postal services charge by weight in grams. A small package of 500 g = 17.64 oz = 1.10 lbs. Understanding both helps when choosing between domestic (ounces/lbs) and international (grams/kg) shipping services for the most cost-effective option.</p>
            </div>
          </div>

          {/* Why This Conversion Matters */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why This Conversion Matters</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Grams to ounces is needed whenever European or international measurements must be understood in US terms. European food products, including dairy, meat, bread, and packaged goods, list weight exclusively in grams; American consumers comparing prices or portioning these products need ounce equivalents. Fitness and nutrition tracking apps from different countries display food portions in different units — a European app may show 150 g of yogurt while a US app expects ounces. Recipes from the UK, Germany, France, and Australia list ingredient quantities in grams; US cooks measuring with US measuring cups and ounce-marked scales need this conversion. International shipping forms from US postal services sometimes accept grams for small packages going abroad; understanding the gram weight of a package originally measured in ounces prevents form errors.</p>
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
