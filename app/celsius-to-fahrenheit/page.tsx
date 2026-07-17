import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import PairConverterWrapper from '@/components/PairConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Celsius to Fahrenheit — Convert °C to °F',
  description:
    'Convert Celsius to Fahrenheit instantly. Free °C to °F converter with quick reference table and formula. 0°C = 32°F, 100°C = 212°F.',
  alternates: { canonical: 'https://unitconversions.app/celsius-to-fahrenheit' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'What is the formula to convert Celsius to Fahrenheit?',
    a: '°F = (°C × 9/5) + 32. Multiply the Celsius value by 9/5 (or 1.8), then add 32.',
  },
  {
    q: 'What is 37°C in Fahrenheit?',
    a: '37°C = (37 × 9/5) + 32 = 66.6 + 32 = 98.6°F. This is normal human body temperature.',
  },
  {
    q: 'What is 100°C in Fahrenheit?',
    a: '100°C = (100 × 9/5) + 32 = 180 + 32 = 212°F. This is the boiling point of water at sea level.',
  },
  {
    q: 'What is 0°C in Fahrenheit?',
    a: '0°C = (0 × 9/5) + 32 = 32°F. This is the freezing point of water.',
  },
  {
    q: 'How do I quickly convert Celsius to Fahrenheit?',
    a: 'A common rough estimate: multiply by 2 and add 30. For example, 20°C ≈ 40 + 30 = 70°F (actual: 68°F). For more precision, use the full formula: °F = (°C × 1.8) + 32.',
  },
]

const referenceRows = [
  { c: -40, f: -40 }, { c: -20, f: -4 }, { c: -10, f: 14 }, { c: 0, f: 32 },
  { c: 10, f: 50 }, { c: 20, f: 68 }, { c: 25, f: 77 }, { c: 37, f: 98.6 },
  { c: 100, f: 212 }, { c: 180, f: 356 },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function CelsiusToFahrenheitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/herobguc.webp')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 pb-10">
          <ToolHeader />
          <div className="text-center text-white px-4 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Celsius to Fahrenheit Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert °C to °F instantly. Formula: °F = (°C × 9/5) + 32.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <PairConverterWrapper category="temperature" fromUnit="celsius" toUnit="fahrenheit" />
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
            <p className="text-sm text-blue-800 dark:text-blue-400 font-mono">°F = (°C × 9/5) + 32</p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Celsius to Fahrenheit Reference Table</h2>
            <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 dark:bg-[#1e293b]">
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-600 dark:text-gray-300">Celsius</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-gray-600 dark:text-gray-300">Fahrenheit</th>
                </tr></thead>
                <tbody>
                  {referenceRows.map(({ c, f }, i) => (
                    <tr key={c} className={`border-t border-gray-50 dark:border-gray-800 ${i % 2 === 0 ? 'bg-white dark:bg-[#0f172a]' : 'bg-gray-50/50 dark:bg-[#1e293b]/50'}`}>
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300">{c}°C</td>
                      <td className="px-4 py-2.5 text-right font-mono text-gray-800 dark:text-gray-200">{f.toFixed(1)}°F</td>
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
              <p>The formula °F = (°C × 9/5) + 32 is the algebraic inverse of the Fahrenheit-to-Celsius formula. Multiplying by 9/5 (or 1.8) accounts for the different interval sizes between the two scales: there are 180 Fahrenheit degrees between water&apos;s freezing and boiling points but only 100 Celsius degrees, so each Celsius degree = 1.8 Fahrenheit degrees. Adding 32 then shifts the zero point to align with the Fahrenheit scale, where water freezes at 32°F rather than 0°F.</p>
              <p>A widely used mental approximation: multiply Celsius by 2 and add 30. This is faster but less accurate. At 20°C: exact = 68°F, approximate = 70°F (close). At 0°C: exact = 32°F, approximate = 30°F (off by 2°). At 100°C: exact = 212°F, approximate = 230°F (off by 18°). Use this shortcut only for rough weather estimates; for cooking or medical temperatures, use the precise formula.</p>
            </div>
          </div>

          {/* Worked Examples */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Real-World Examples</h2>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              <p><strong className="text-gray-800 dark:text-gray-200">Weather temperatures:</strong> A European forecast of 25°C is a warm summer day = 77°F. A cold 5°C autumn day = 41°F (light jacket weather). A heatwave of 40°C = 104°F (dangerously hot). Freezing at 0°C = 32°F. A pleasant spring day of 15°C = 59°F.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Oven temperatures for baking:</strong> European and most international recipes list oven temperatures in Celsius. 160°C = 320°F (slow bake). 180°C = 356°F (standard — set oven to 350°F). 200°C = 392°F (hot oven — set to 400°F). 220°C = 428°F (very hot, bread crust). 240°C = 464°F (pizza oven temperature).</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Refrigerator and freezer settings:</strong> A refrigerator should be kept at 1–4°C = 33.8–39.2°F. Freezers should maintain −18°C = 0°F or below. European appliances display Celsius; if set with US expectations in mind, the wrong setting can lead to food safety issues.</p>
              <p><strong className="text-gray-800 dark:text-gray-200">Medical and body temperature:</strong> 37°C = 98.6°F (normal). 38°C = 100.4°F (low fever). 39°C = 102.2°F (moderate fever). 40°C = 104°F (high fever, seek care). European hospitals and thermometers display Celsius; Americans need to know these Fahrenheit equivalents.</p>
            </div>
          </div>

          {/* Temperature Quick Reference */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Common Temperature Quick Reference</h2>
            <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 dark:bg-[#1e293b]">
                  <th className="px-4 py-2.5 text-left font-semibold text-gray-600 dark:text-gray-300">Celsius</th>
                  <th className="px-4 py-2.5 text-center font-semibold text-gray-600 dark:text-gray-300">Fahrenheit</th>
                  <th className="px-4 py-2.5 text-right font-semibold text-gray-600 dark:text-gray-300">Context</th>
                </tr></thead>
                <tbody>
                  {[[-20,-4,"Very cold winter"],[0,32,"Water freezes"],[10,50,"Cool day"],[15,59,"Spring weather"],[20,68,"Comfortable"],[25,77,"Warm summer"],[37,98.6,"Body temperature"],[40,104,"Heatwave / high fever"],[100,212,"Water boils"],[180,356,"Baking (≈350°F)"]].map(([c,f,ctx],idx) => (
                    <tr key={String(c)} className={`border-t border-gray-50 dark:border-gray-800 ${idx % 2 === 0 ? 'bg-white dark:bg-[#0f172a]' : 'bg-gray-50/50 dark:bg-[#1e293b]/50'}`}>
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300">{c}°C</td>
                      <td className="px-4 py-2.5 text-center font-mono text-gray-800 dark:text-gray-200">{f}°F</td>
                      <td className="px-4 py-2.5 text-right text-gray-500 dark:text-gray-400 text-xs">{ctx}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Why This Conversion Matters */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why This Conversion Matters</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Celsius to Fahrenheit is essential for anyone from a metric country living in or visiting the United States. The US is the only major country that uses Fahrenheit for everyday weather, appliance temperatures, and medical readings — which means every immigrant, expat, international student, and visitor must learn to interpret Fahrenheit from a Celsius baseline. American weather apps, TV forecasts, thermostats, ovens, and medical thermometers all display Fahrenheit. A European cooking a recipe on a US oven encounters Fahrenheit immediately. International medical records show Celsius; US healthcare providers need Fahrenheit equivalents. Anyone relocating to the US needs to internalize key Fahrenheit benchmarks — 32°F = freezing, 72°F = comfortable room, 98.6°F = healthy body, 350°F = baking — which requires converting from familiar Celsius references.</p>
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
