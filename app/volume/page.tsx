import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import UnitConverterWrapper from '@/components/UnitConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Volume Converter — Convert Gallons, Liters, ML, Cups',
  description:
    'Convert between gallons, liters, milliliters, cups, pints, fluid ounces and more. Free volume converter with instant results.',
  alternates: { canonical: 'https://unitconversions.app/volume' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How many liters are in a gallon?',
    a: 'One US gallon equals approximately 3.78541 liters. One imperial gallon equals approximately 4.54609 liters. The US gallon is the more commonly used gallon in everyday conversation.',
  },
  {
    q: 'How many cups are in a liter?',
    a: 'There are approximately 4.227 US cups in one liter. One US cup equals 236.588 milliliters, so 1000 mL ÷ 236.588 mL per cup ≈ 4.227 cups.',
  },
  {
    q: 'How do I convert fluid ounces to milliliters?',
    a: 'To convert US fluid ounces to milliliters, multiply by 29.5735. For example, 8 fl oz = 8 × 29.5735 = 236.588 mL (approximately 1 US cup).',
  },
  {
    q: 'What is the difference between a US gallon and an imperial gallon?',
    a: 'A US gallon is 3.78541 liters, while an imperial gallon (used in the UK) is 4.54609 liters. The imperial gallon is about 20% larger than the US gallon.',
  },
  {
    q: 'How many milliliters are in a tablespoon?',
    a: 'One US tablespoon equals approximately 14.7868 milliliters. One metric tablespoon equals exactly 15 milliliters.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}
const webAppSchema = {
  '@context': 'https://schema.org', '@type': 'WebApplication',
  name: 'Volume Converter', url: 'https://unitconversions.app/volume',
  description: 'Free online volume converter. Convert between gallons, liters, cups, pints, fluid ounces and more.',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}
const howToSchema = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to Convert Volume Units',
  step: [
    { '@type': 'HowToStep', name: 'Select your category', text: 'Click the Volume category.' },
    { '@type': 'HowToStep', name: 'Enter your value and select the unit to convert from', text: 'Enter your volume and choose gallons, liters, or another unit.' },
    { '@type': 'HowToStep', name: 'See instant results for all units simultaneously', text: 'All volume units are shown instantly in the conversion table.' },
  ],
}

export default function VolumePage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Volume Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert between gallons, liters, cups, pints, fluid ounces, tablespoons and more. Instant results.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <UnitConverterWrapper category="volume" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white dark:from-[#0f172a] to-transparent pointer-events-none" />
      </section>
      <section className="bg-white dark:bg-[#0f172a] pt-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* How It Works */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Volume Conversion Works</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>Volume measures three-dimensional space — the amount of space a substance occupies. Liquid volume and dry volume are sometimes measured differently, especially in cooking. The US uses customary units (gallons, quarts, pints, cups, fluid ounces, tablespoons, teaspoons) for both cooking and everyday liquid measurement. Most of the world uses liters and milliliters.</p>
              <p>The liter is the primary metric unit of volume and equals exactly 1,000 cubic centimeters (one cubic decimeter). One milliliter equals exactly 1 cubic centimeter. A US gallon is 3.785 liters; a UK imperial gallon is 4.546 liters — about 20% larger. This difference matters in practice: a UK car that achieves &quot;30 mpg&quot; is actually getting better fuel economy than a US car also rated at 30 mpg, because the UK gallon is bigger.</p>
              <p>In cooking, volume measurements are standard in American recipes — cups, tablespoons, and teaspoons — while European and professional recipes use weight (grams) because it is more precise and consistent. A cup of flour can weigh anywhere from 120 to 150 grams depending on how it is scooped, sifted, or settled, which is why weight-based baking yields more reliable results.</p>
              <p>Volume conversions arise when buying beverages abroad (500 mL vs. 16 oz), filling a car with gas in a liter-based country, following a metric recipe, calculating medication dosages in mL or fluid ounces, sizing an aquarium, or buying paint for a home project where containers are labeled in different unit systems.</p>
            </div>
          </div>

          {/* Key Facts */}
          <div className="rounded-2xl bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-gray-700 px-6 py-5 mb-10">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Key Facts About Volume</h2>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <li><strong className="text-gray-800 dark:text-gray-200">Two different fluid ounces:</strong> The US fluid ounce is 29.574 mL. The UK fluid ounce is 28.413 mL — about 4% smaller. Always verify which is meant when following a recipe from the other country, especially for cocktails and beverages.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">A cubic foot of liquid:</strong> One cubic foot equals approximately 7.48 US gallons or 28.32 liters — a useful conversion when calculating aquarium volumes, concrete mixing water, or tank capacity.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">The human stomach:</strong> The stomach holds about 1 liter when empty and can expand to roughly 4 liters (approximately 1 US gallon) after a very large meal — giving a tangible reference for these abstract volumes.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Wine bottle standard:</strong> A standard 750 mL wine bottle is exactly 0.75 liters, equivalent to about 25.4 US fluid ounces or approximately five standard 5-oz pours.</li>
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
