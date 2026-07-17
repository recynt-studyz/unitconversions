import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import UnitConverterWrapper from '@/components/UnitConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Temperature Converter — Celsius, Fahrenheit, Kelvin',
  description:
    'Convert between Celsius, Fahrenheit and Kelvin instantly. Free temperature converter with formulas and complete conversion table.',
  alternates: { canonical: 'https://unitconversions.app/temperature' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How do I convert Celsius to Fahrenheit?',
    a: 'To convert Celsius to Fahrenheit, multiply by 9/5 and then add 32. Formula: °F = (°C × 9/5) + 32. For example, 100°C = (100 × 9/5) + 32 = 180 + 32 = 212°F.',
  },
  {
    q: 'What is the formula for Fahrenheit to Celsius?',
    a: 'To convert Fahrenheit to Celsius, subtract 32 and then multiply by 5/9. Formula: °C = (°F − 32) × 5/9. For example, 98.6°F = (98.6 − 32) × 5/9 = 66.6 × 5/9 = 37°C.',
  },
  {
    q: 'What is absolute zero in Celsius and Fahrenheit?',
    a: 'Absolute zero is 0 Kelvin, which equals −273.15°C or −459.67°F. It is the lowest possible temperature, at which all thermal motion stops.',
  },
  {
    q: 'What temperature is the same in Celsius and Fahrenheit?',
    a: 'The temperature −40 is the same in both Celsius and Fahrenheit: −40°C = −40°F. This is the point where the two scales intersect.',
  },
  {
    q: 'How do I convert Celsius to Kelvin?',
    a: 'To convert Celsius to Kelvin, add 273.15. Formula: K = °C + 273.15. For example, 0°C = 273.15 K (the freezing point of water) and 100°C = 373.15 K (the boiling point of water).',
  },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}
const webAppSchema = {
  '@context': 'https://schema.org', '@type': 'WebApplication',
  name: 'Temperature Converter', url: 'https://unitconversions.app/temperature',
  description: 'Free online temperature converter. Convert between Celsius, Fahrenheit and Kelvin.',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}
const howToSchema = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to Convert Temperature',
  step: [
    { '@type': 'HowToStep', name: 'Select your category', text: 'Click the Temperature category.' },
    { '@type': 'HowToStep', name: 'Enter your value and select the unit to convert from', text: 'Type your temperature and choose Celsius, Fahrenheit, or Kelvin.' },
    { '@type': 'HowToStep', name: 'See instant results for all units simultaneously', text: 'All three temperature scales are shown instantly.' },
  ],
}

export default function TemperaturePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema).replace(/</g, '\\u003c') }} />
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/herobguc.webp')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 pb-10">
          <ToolHeader />
          <div className="text-center text-white px-4 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Temperature Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert between Celsius, Fahrenheit, and Kelvin instantly. Instant results with conversion formulas.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <UnitConverterWrapper category="temperature" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white dark:from-[#0f172a] to-transparent pointer-events-none" />
      </section>
      <section className="bg-white dark:bg-[#0f172a] pt-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* How It Works */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Temperature Conversion Works</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>Temperature measures the average kinetic energy of particles in a substance. Three scales are in common use: Fahrenheit, Celsius, and Kelvin. Each was developed for different purposes, and understanding all three is essential for science, cooking, weather, and medicine.</p>
              <p>Fahrenheit was developed by Daniel Gabriel Fahrenheit in 1724. He set 0°F as the coldest temperature achievable in his laboratory (a brine solution of ice, water, and ammonium chloride) and 96°F as approximate human body temperature. The reference points were later adjusted, landing on 32°F for water&apos;s freezing point and 212°F for boiling. The United States and its territories are now the only places that use Fahrenheit for everyday weather and home appliances.</p>
              <p>Celsius (formerly centigrade) was designed around water: 0°C is the freezing point and 100°C is the boiling point at sea level. This makes it intuitive for everyday use and universal for science. It is used by virtually every country in the world for weather reporting, medical measurements, and cooking.</p>
              <p>Kelvin is the SI base unit of temperature and starts at absolute zero — the lowest theoretically possible temperature, where all molecular motion stops at −273.15°C. Scientists always use Kelvin for thermodynamic calculations because it starts at true zero, making formulas involving temperature ratios valid. The kelvin has the same interval size as Celsius, so converting between them requires only adding or subtracting 273.15.</p>
            </div>
          </div>

          {/* Key Facts */}
          <div className="rounded-2xl bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-gray-700 px-6 py-5 mb-10">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Key Facts About Temperature</h2>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <li><strong className="text-gray-800 dark:text-gray-200">Absolute zero:</strong> 0 K (−273.15°C / −459.67°F) is the coldest theoretically possible temperature. It has never been fully achieved; researchers have reached within billionths of a kelvin using laser cooling techniques.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Body temperature:</strong> Normal human body temperature is 37°C (98.6°F), but it varies by person, time of day, and measurement site. Oral readings average slightly lower; rectal readings slightly higher. A fever is generally defined as above 38°C (100.4°F).</li>
              <li><strong className="text-gray-800 dark:text-gray-200">The Sun&apos;s surface:</strong> The photosphere (visible surface) of the Sun is approximately 5,500°C (9,932°F). The core reaches about 15 million °C — hot enough for nuclear fusion.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">The crossover point:</strong> −40° is the only temperature where Fahrenheit and Celsius scales are numerically equal: −40°F = −40°C. This is the algebraic intersection of the two scale equations.</li>
            </ul>
          </div>

          <div className="pb-10"><FAQ questions={faqs} /></div>
          <div className="pb-6"><AdBanner slot="3333333333" /></div>
        </div>
      </section>
      <Footer />
    </>
  )
}
