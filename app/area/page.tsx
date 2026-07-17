import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import UnitConverterWrapper from '@/components/UnitConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Area Converter — Convert Square Feet, Meters, Acres, Hectares',
  description:
    'Convert between square feet, square meters, acres, hectares, square miles and more. Free area converter with instant results.',
  alternates: { canonical: 'https://unitconversions.app/area' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How many square feet are in an acre?',
    a: 'One acre equals exactly 43,560 square feet. This is a standard measurement used in real estate in the United States. One acre is also approximately 4,047 square meters or 0.405 hectares.',
  },
  {
    q: 'How do I convert square meters to square feet?',
    a: 'To convert square meters to square feet, multiply by 10.7639. For example, 100 square meters = 100 × 10.7639 = 1,076.39 square feet.',
  },
  {
    q: 'How many hectares are in a square kilometer?',
    a: 'There are exactly 100 hectares in one square kilometer. One hectare equals 10,000 square meters, and one square kilometer equals 1,000,000 square meters.',
  },
  {
    q: 'What is the difference between an acre and a hectare?',
    a: 'One hectare equals approximately 2.471 acres. A hectare is 10,000 square meters, while an acre is approximately 4,047 square meters. The hectare is a metric unit, while the acre is primarily used in the US and UK.',
  },
  {
    q: 'How many square meters are in a square mile?',
    a: 'One square mile equals exactly 2,589,988.11 square meters (approximately 2.59 square kilometers). There are 640 acres in one square mile.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}
const webAppSchema = {
  '@context': 'https://schema.org', '@type': 'WebApplication',
  name: 'Area Converter', url: 'https://unitconversions.app/area',
  description: 'Free online area converter. Convert between square feet, meters, acres, hectares and more.',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}
const howToSchema = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to Convert Area Units',
  step: [
    { '@type': 'HowToStep', name: 'Select your category', text: 'Click the Area category.' },
    { '@type': 'HowToStep', name: 'Enter your value and select the unit to convert from', text: 'Enter your area value and choose square feet, meters, acres, or another unit.' },
    { '@type': 'HowToStep', name: 'See instant results for all units simultaneously', text: 'All area units are shown instantly in the conversion table.' },
  ],
}

export default function AreaPage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Area Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert between square feet, square meters, acres, hectares, square miles and more.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <UnitConverterWrapper category="area" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white dark:from-[#0f172a] to-transparent pointer-events-none" />
      </section>
      <section className="bg-white dark:bg-[#0f172a] pt-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* How It Works */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Area Conversion Works</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>Area measures two-dimensional space — the amount of surface a shape covers. Area units are the squares of linear units: a square meter is the area of a 1-meter × 1-meter square, and a square foot is a 1-foot × 1-foot square. This is why area conversions involve squaring the linear conversion factor: there are 10.764 square feet in a square meter because 1 meter = 3.281 feet, and 3.281² ≈ 10.764.</p>
              <p>In the United States, real estate and land area are measured in square feet (for buildings and homes) and acres (for land). One acre equals exactly 43,560 square feet, roughly the size of an American football field without end zones. In most other countries, floor area is listed in square meters and land in hectares (1 hectare = 10,000 square meters = 2.471 acres).</p>
              <p>For geographic and scientific applications, square kilometers and hectares are the metric standards worldwide. Countries report agricultural land, national parks, and urban districts in hectares or square kilometers. The United States uses square miles for geographic areas (1 square mile = 640 acres = 258.999 hectares) and acres for farmland and real estate parcels.</p>
              <p>Area conversions are essential when buying property abroad, interpreting apartment listings from foreign countries (square meters vs. square feet), reading architectural plans from different systems, understanding land-use data from international sources, or comparing city or country sizes across different geographic databases.</p>
            </div>
          </div>

          {/* Key Facts */}
          <div className="rounded-2xl bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-gray-700 px-6 py-5 mb-10">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Key Facts About Area</h2>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <li><strong className="text-gray-800 dark:text-gray-200">The world&apos;s extremes:</strong> Vatican City is the world&apos;s smallest country at about 0.44 km² (44 hectares, or 109 acres). Russia is the largest at 17.1 million km² — over 38 billion acres, or about 1.8 times the size of Antarctica.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">The acre&apos;s origin:</strong> An acre was historically defined as the amount of land a yoke of oxen could plow in one day — roughly a strip 1 furlong (201 m) long and 1 chain (20.1 m) wide, which multiplies to 4,047 m² (close to the exact 4,046.86 m²).</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Sports field areas:</strong> An NBA basketball court is about 4,700 sq ft (437 m²). An American football field including end zones is roughly 1.32 acres (0.535 hectares). A FIFA regulation soccer pitch ranges from 0.62 to 0.82 acres.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">One square mile:</strong> Exactly 640 acres, 2.590 km², or 258.999 hectares. Many western US cities were planned on a 1-mile grid, making square-mile city blocks a common reference.</li>
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
