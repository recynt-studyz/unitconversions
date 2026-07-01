import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import PairConverterWrapper from '@/components/PairConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Gallons to Liters — Convert US Gallons to Liters',
  description:
    'Convert gallons to liters instantly. Free gallons to liters converter with quick reference table. 1 US gallon = 3.78541 liters.',
  alternates: { canonical: 'https://unitconversions.app/gallons-to-liters' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How many liters are in a US gallon?',
    a: '1 US gallon equals exactly 3.785411784 liters.',
  },
  {
    q: 'How do I convert gallons to liters?',
    a: 'Multiply US gallons by 3.78541. For example, 5 gallons = 5 × 3.78541 = 18.927 liters.',
  },
  {
    q: 'What is the difference between a US gallon and an imperial gallon?',
    a: 'A US gallon equals 3.78541 liters. An imperial (UK) gallon equals 4.54609 liters. The imperial gallon is about 20% larger.',
  },
  {
    q: 'How many liters is a full gas tank (15 gallons)?',
    a: '15 US gallons = 15 × 3.78541 = 56.78 liters.',
  },
  {
    q: 'What is 1 liter in gallons?',
    a: '1 liter = 1 ÷ 3.78541 = approximately 0.2642 US gallons.',
  },
]

const referenceValues = [0.5, 1, 2, 5, 10, 15, 20, 50, 100]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function GallonsToLitersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-blue-900/65" />
        <div className="relative z-10 pb-10">
          <ToolHeader />
          <div className="text-center text-white px-4 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Gallons to Liters Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert US gallons to liters instantly. 1 US gallon = 3.78541 liters.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <PairConverterWrapper category="volume" fromUnit="usGallon" toUnit="liter" />
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
            <p className="text-sm text-blue-800 dark:text-blue-400 font-mono">liters = US gallons × 3.78541</p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Gallons to Liters Reference Table</h2>
            <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 dark:bg-[#1e293b]">
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-600 dark:text-gray-300">US Gallons</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-gray-600 dark:text-gray-300">Liters</th>
                </tr></thead>
                <tbody>
                  {referenceValues.map((gal, i) => (
                    <tr key={gal} className={`border-t border-gray-50 dark:border-gray-800 ${i % 2 === 0 ? 'bg-white dark:bg-[#0f172a]' : 'bg-gray-50/50 dark:bg-[#1e293b]/50'}`}>
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300">{gal} gal</td>
                      <td className="px-4 py-2.5 text-right font-mono text-gray-800 dark:text-gray-200">{(gal * 3.78541).toFixed(3)} L</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
