import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import UnitConverterWrapper from '@/components/UnitConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Fuel Economy Converter — Convert MPG, L/100km, km/L',
  description:
    'Convert between MPG (US), MPG (Imperial), L/100km, and km/L. Free fuel economy converter with instant results.',
  alternates: { canonical: 'https://unitconversions.app/fuel' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How do I convert MPG to L/100km?',
    a: 'To convert US MPG to L/100km, use the formula: L/100km = 235.214 ÷ MPG. For example, 30 MPG = 235.214 ÷ 30 = 7.84 L/100km. Note: these are reciprocal relationships, so better fuel economy means lower L/100km but higher MPG.',
  },
  {
    q: 'What is the difference between US MPG and Imperial MPG?',
    a: 'US MPG uses the US gallon (3.785 L), while Imperial MPG uses the Imperial gallon (4.546 L). A car rated at 30 US MPG gets approximately 36 Imperial MPG. This is why UK and US fuel economy ratings differ for the same vehicle.',
  },
  {
    q: 'What is km/L?',
    a: 'Kilometers per liter (km/L) is a fuel economy metric used in some countries. It is the distance traveled per liter of fuel. Higher km/L means better fuel efficiency. 1 km/L ≈ 2.35 US MPG.',
  },
  {
    q: 'How do I convert L/100km to km/L?',
    a: 'To convert L/100km to km/L, divide 100 by the L/100km value. For example, 8 L/100km = 100 ÷ 8 = 12.5 km/L. These are reciprocal — better efficiency is higher km/L but lower L/100km.',
  },
  {
    q: 'What is a good fuel economy?',
    a: 'A good fuel economy is typically 35+ US MPG (6.7 L/100km or less) for a conventional gasoline car. Hybrid vehicles often achieve 50+ MPG. Electric vehicles are rated in MPGe (miles per gallon equivalent) for comparison purposes.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}
const webAppSchema = {
  '@context': 'https://schema.org', '@type': 'WebApplication',
  name: 'Fuel Economy Converter', url: 'https://unitconversions.app/fuel',
  description: 'Free online fuel economy converter. Convert between MPG (US/Imperial), L/100km, and km/L.',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}
const howToSchema = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to Convert Fuel Economy Units',
  step: [
    { '@type': 'HowToStep', name: 'Select your category', text: 'Click the Fuel Economy category.' },
    { '@type': 'HowToStep', name: 'Enter your value and select the unit to convert from', text: 'Enter your fuel economy rating and choose MPG, L/100km, or km/L.' },
    { '@type': 'HowToStep', name: 'See instant results for all units simultaneously', text: 'All fuel economy units are shown instantly in the conversion table.' },
  ],
}

export default function FuelPage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Fuel Economy Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert between MPG (US), MPG (Imperial), L/100km, and km/L. Instant results.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <UnitConverterWrapper category="fuel" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white dark:from-[#0f172a] to-transparent pointer-events-none" />
      </section>
      <section className="bg-white dark:bg-[#0f172a] pt-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* How It Works */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Fuel Economy Conversion Works</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>Fuel economy measures how efficiently a vehicle converts fuel into distance. Two fundamentally different approaches exist: the United States uses miles per gallon (MPG) — a higher number means better efficiency. Most of the world uses liters per 100 kilometers (L/100km) — a lower number means better efficiency. These are inverse (reciprocal) measures, so comparing them requires a formula, not simple multiplication.</p>
              <p>The relationship between MPG and L/100km is not linear, which creates a common misconception. Improving from 20 MPG to 25 MPG saves more fuel over the same distance than improving from 40 MPG to 50 MPG. In L/100km terms this is clear: 20 MPG ≈ 11.76 L/100km; 25 MPG ≈ 9.41 L/100km (saving 2.35 L per 100km). Meanwhile, 40 MPG ≈ 5.88 and 50 MPG ≈ 4.70 (saving only 1.18 L per 100km). The L/100km system makes these tradeoffs visible; the MPG system obscures them.</p>
              <p>UK Imperial MPG uses the Imperial gallon (4.546 liters), which is 20% larger than the US gallon (3.785 liters). A car rated at 40 UK MPG achieves only about 33 US MPG — the same distance, but measured against a larger gallon. When reading reviews of cars sold in both markets, always check which gallon standard applies. European reviews of UK cars often show both UK MPG and L/100km; American reviews show only US MPG.</p>
              <p>Electric vehicles are rated in different units: the US uses MPGe (miles per gallon equivalent) or kWh/100mi, while most other countries use kWh/100km. The EPA defines 1 MPGe as the efficiency equivalent of a car achieving 1 US MPG on gasoline, where 33.7 kWh equals the energy content of 1 US gallon. A Tesla Model 3 rated at 134 MPGe uses approximately 25 kWh per 100 miles, or about 15.5 kWh per 100 km.</p>
            </div>
          </div>

          {/* Key Facts */}
          <div className="rounded-2xl bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-gray-700 px-6 py-5 mb-10">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Key Facts About Fuel Economy</h2>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <li><strong className="text-gray-800 dark:text-gray-200">The conversion constant:</strong> The formula for US MPG to L/100km is: L/100km = 235.214 ÷ MPG. The constant 235.214 comes from converting 100 miles to km (160.934 km) and multiplying by the liters per gallon (3.785 L/gal): 100 × 3.785 ÷ 1.609 = 235.2.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Aviation efficiency:</strong> Modern wide-body jets achieve 30–35 passenger-km per liter of jet fuel — roughly equivalent to a fuel-efficient car carrying one person, but at 900 km/h and 35,000 feet.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">The two gallons problem:</strong> A car achieving &quot;30 MPG&quot; in UK advertising gets only about 25 US MPG. The Imperial gallon is 1.201 times larger than the US gallon, so all direct MPG comparisons between UK and US vehicles require this adjustment.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Energy content of gasoline:</strong> One US gallon of gasoline contains about 33.7 kWh of chemical energy. An internal combustion engine converts roughly 25% to motion; an electric motor converts about 90%, explaining most of the fuel economy difference between ICE and EV vehicles.</li>
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
