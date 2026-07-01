import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import PairConverterWrapper from '@/components/PairConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Fahrenheit to Celsius — Convert °F to °C',
  description:
    'Convert Fahrenheit to Celsius instantly. Free °F to °C converter with quick reference table and formula. 32°F = 0°C, 212°F = 100°C.',
  alternates: { canonical: 'https://unitconversions.app/fahrenheit-to-celsius' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'What is the formula to convert Fahrenheit to Celsius?',
    a: '°C = (°F − 32) × 5/9. Subtract 32 from the Fahrenheit value, then multiply by 5/9 (or divide by 1.8).',
  },
  {
    q: 'What is 98.6°F in Celsius?',
    a: '98.6°F is exactly 37°C, which is normal human body temperature.',
  },
  {
    q: 'What is 72°F in Celsius?',
    a: '72°F = (72 − 32) × 5/9 = 40 × 5/9 = 22.22°C. This is a comfortable room temperature.',
  },
  {
    q: 'At what temperature are Fahrenheit and Celsius equal?',
    a: '−40°F = −40°C. This is the only temperature where both scales have the same value.',
  },
  {
    q: 'What is 32°F in Celsius?',
    a: '32°F = 0°C. This is the freezing point of water.',
  },
]

const referenceRows = [
  { f: -40, c: -40 }, { f: 0, c: -17.78 }, { f: 32, c: 0 }, { f: 50, c: 10 },
  { f: 72, c: 22.22 }, { f: 98.6, c: 37 }, { f: 100, c: 37.78 }, { f: 212, c: 100 },
  { f: 350, c: 176.67 }, { f: 400, c: 204.44 },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function FahrenheitToCelsiusPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/herobguc.webp')" }}>
        <div className="absolute inset-0 bg-blue-900/65" />
        <div className="relative z-10 pb-10">
          <ToolHeader />
          <div className="text-center text-white px-4 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Fahrenheit to Celsius Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert °F to °C instantly. Formula: °C = (°F − 32) × 5/9.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <PairConverterWrapper category="temperature" fromUnit="fahrenheit" toUnit="celsius" />
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
            <p className="text-sm text-blue-800 dark:text-blue-400 font-mono">°C = (°F − 32) × 5/9</p>
            <p className="text-sm text-blue-800 dark:text-blue-400 mt-2">Subtract 32, then multiply by 5/9 (or divide by 1.8).</p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Fahrenheit to Celsius Reference Table</h2>
            <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 dark:bg-[#1e293b]">
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-600 dark:text-gray-300">Fahrenheit</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-gray-600 dark:text-gray-300">Celsius</th>
                </tr></thead>
                <tbody>
                  {referenceRows.map(({ f, c }, i) => (
                    <tr key={f} className={`border-t border-gray-50 dark:border-gray-800 ${i % 2 === 0 ? 'bg-white dark:bg-[#0f172a]' : 'bg-gray-50/50 dark:bg-[#1e293b]/50'}`}>
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300">{f}°F</td>
                      <td className="px-4 py-2.5 text-right font-mono text-gray-800 dark:text-gray-200">{c.toFixed(2)}°C</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="pb-10"><FAQ questions={faqs} /></div>
          <div className="pb-4 text-sm text-gray-500 dark:text-gray-400">
            <p>For all temperature conversions, see the full <a href="/temperature" className="text-[#2563EB] hover:underline">Temperature Converter</a>.</p>
          </div>
          <div className="pb-6"><AdBanner slot="3333333333" /></div>
        </div>
      </section>
      <Footer />
    </>
  )
}
