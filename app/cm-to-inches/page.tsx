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
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/herobguc.webp')" }}>
        <div className="absolute inset-0 bg-black/50" />
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
          {/* Formula Explained */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why the Formula Works</h2>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              <p>The formula inches = cm ÷ 2.54 is simply the inverse of the standard inches-to-centimeters definition. Since 1959, one inch has been defined as exactly 2.54 centimeters, so 1 cm = 1/2.54 inches = 0.393701... inches. You can also multiply by 0.393701 instead of dividing by 2.54 — both methods give the same result. The decimal 0.39370078740157... is a non-terminating repeating decimal because 2.54 does not divide evenly into 1, but for practical purposes, 0.3937 introduces an error of less than 0.003%.</p>
              <p>A common mental shortcut: 1 cm ≈ 0.4 inches (slightly overestimates). For a closer estimate, multiply by 0.39 — off by only 1%. For quick height estimation, divide centimeters by 30.48 (centimeters per foot) to get feet, or divide by 2.54 and then convert total inches to feet and inches by dividing by 12.</p>
            </div>
          </div>

          {/* Worked Examples */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Real-World Examples</h2>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              <p><strong className="text-gray-800 dark:text-gray-200">European clothing and shoe sizes:</strong> European shoe sizes reference inner foot length in millimeters. A EU size 42 corresponds to about 27 cm = 10.6 inches (US men&apos;s 9). A size 38 is about 24.3 cm = 9.6 inches (US women&apos;s 7.5). European jean waist sizes are in centimeters: size 82 cm = 32.3 inches.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Apartment and room dimensions:</strong> European apartments list room dimensions in meters and centimeters. A 4.2 m × 3.6 m living room is 165 cm × 142 cm, or about 13.8 ft × 11.8 ft. An 80 m² apartment has about 861 sq ft — helpful for Americans comparing property abroad.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Medical measurements:</strong> Wound sizes, tumor dimensions, and infant head circumference measurements are reported in centimeters internationally. A 5 cm wound is approximately 2 inches. Newborn head circumference of 34 cm ≈ 13.4 inches. US parents often want these converted to inches for intuitive understanding.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Screen and display sizes:</strong> European retailers list TV screen sizes in centimeters: a &quot;140 cm TV&quot; is 55.1 inches diagonally. A 100 cm screen is 39.4 inches. Laptop screen sizes are listed in centimeters in some European catalogs but inches in the US.</p>
            </div>
          </div>

          {/* Common Centimeter Heights Quick Reference */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Height Quick Reference</h2>
            <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 dark:bg-[#1e293b]">
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-600 dark:text-gray-300">Centimeters</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-gray-600 dark:text-gray-300">Feet &amp; Inches</th>
                </tr></thead>
                <tbody>
                  {[["152 cm","4′ 12″ (5′0″)"],["160 cm","5′ 3.0″"],["165 cm","5′ 5.0″"],["170 cm","5′ 6.9″"],["175 cm","5′ 8.9″"],["180 cm","5′ 10.9″"],["185 cm","6′ 0.9″"],["190 cm","6′ 2.8″"]].map(([cm,ft],idx) => (
                    <tr key={cm} className={`border-t border-gray-50 dark:border-gray-800 ${idx % 2 === 0 ? 'bg-white dark:bg-[#0f172a]' : 'bg-gray-50/50 dark:bg-[#1e293b]/50'}`}>
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300">{cm}</td>
                      <td className="px-4 py-2.5 text-right font-mono text-gray-800 dark:text-gray-200">{ft}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Why This Conversion Matters */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why This Conversion Matters</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Converting centimeters to inches is essential for anyone navigating between metric and imperial measurement systems — which happens constantly in international shopping, travel, medical contexts, and professional work. Height is listed in centimeters on European, Asian, and most international documents; someone born in a metric country filling out a US form needs to convert. European clothing manufacturers list dimensions in centimeters; American buyers need inches. Medical records from most of the world use centimeters for height, wound size, and body measurements; US healthcare providers need to interpret these in familiar units. Architects, engineers, and product designers working across international standards frequently need centimeter measurements converted to inches to comply with US specifications or communicate with American clients.</p>
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
