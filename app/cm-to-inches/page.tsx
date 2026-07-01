import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import PairConverterWrapper from '@/components/PairConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'CM to Inches — Convert Centimeters to Inches',
  description:
    'Convert centimeters to inches instantly. Free cm to inches converter with quick reference table and conversion formula. 1 cm = 0.3937 inches.',
  alternates: { canonical: 'https://unitconversions.app/cm-to-inches' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How many inches are in a centimeter?',
    a: '1 centimeter equals approximately 0.393701 inches. Equivalently, 1 inch = 2.54 cm, so 1 cm = 1 ÷ 2.54 ≈ 0.3937 inches.',
  },
  {
    q: 'How do I convert cm to inches?',
    a: 'To convert centimeters to inches, divide by 2.54 (or multiply by 0.393701). For example, 30 cm ÷ 2.54 = 11.81 inches.',
  },
  {
    q: 'What is 170 cm in feet and inches?',
    a: '170 cm ÷ 2.54 = 66.93 inches. 66 inches ÷ 12 = 5 feet 6 inches (with 6.93 inches remaining ≈ 5\'6.9"). So 170 cm ≈ 5 feet 6.9 inches.',
  },
  {
    q: 'How do I convert cm to feet and inches?',
    a: 'First convert cm to total inches: divide by 2.54. Then divide by 12 to get feet, and the remainder is inches. For example, 180 cm ÷ 2.54 = 70.87 inches = 5 feet 10.87 inches.',
  },
  {
    q: 'What is 100 cm in inches?',
    a: '100 centimeters = 1 meter = 39.3701 inches = 3 feet 3.37 inches.',
  },
]

const referenceValues = [1, 5, 10, 20, 30, 50, 100, 150, 170, 180, 200]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function CmToInchesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-blue-900/65" />
        <div className="relative z-10 pb-10">
          <ToolHeader />
          <div className="text-center text-white px-4 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">CM to Inches Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert centimeters to inches instantly. 1 cm = 0.3937 inches.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <PairConverterWrapper category="length" fromUnit="centimeter" toUnit="inch" />
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
            <p className="text-sm text-blue-800 dark:text-blue-400 font-mono">inches = cm ÷ 2.54</p>
            <p className="text-sm text-blue-800 dark:text-blue-400 mt-2">Divide centimeters by 2.54 to get inches. One inch is exactly 2.54 cm.</p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">CM to Inches Reference Table</h2>
            <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 dark:bg-[#1e293b]">
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-600 dark:text-gray-300">Centimeters</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-gray-600 dark:text-gray-300">Inches</th>
                </tr></thead>
                <tbody>
                  {referenceValues.map((cm, i) => (
                    <tr key={cm} className={`border-t border-gray-50 dark:border-gray-800 ${i % 2 === 0 ? 'bg-white dark:bg-[#0f172a]' : 'bg-gray-50/50 dark:bg-[#1e293b]/50'}`}>
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300">{cm} cm</td>
                      <td className="px-4 py-2.5 text-right font-mono text-gray-800 dark:text-gray-200">{(cm / 2.54).toFixed(4)} in</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
