import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import UnitConverterWrapper from '@/components/UnitConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Energy Converter — Convert Joules, Calories, kWh, BTU',
  description:
    'Convert between joules, kilojoules, calories, kilocalories, kilowatt-hours, BTU and more. Free energy converter with instant results.',
  alternates: { canonical: 'https://unitconversions.app/energy' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How many joules are in a calorie?',
    a: 'One calorie (small calorie, cal) equals exactly 4.184 joules. Note: the "Calorie" used in food nutrition (with a capital C) is actually a kilocalorie (kcal), which equals 4,184 joules.',
  },
  {
    q: 'How do I convert kilowatt-hours to joules?',
    a: 'To convert kilowatt-hours (kWh) to joules, multiply by 3,600,000. For example, 1 kWh = 3,600,000 joules = 3.6 megajoules. This is because 1 watt = 1 joule/second, and 1 hour = 3,600 seconds.',
  },
  {
    q: 'What is a BTU?',
    a: 'A BTU (British Thermal Unit) is the amount of heat needed to raise the temperature of 1 pound of water by 1°F. 1 BTU equals approximately 1,055 joules or 0.293 watt-hours. BTUs are commonly used for air conditioning and heating ratings.',
  },
  {
    q: 'What is the difference between a calorie and a kilocalorie?',
    a: 'A kilocalorie (kcal) equals 1,000 small calories (cal). Food energy is measured in kilocalories, but they are often labeled as "Calories" (capital C) on nutrition labels. So "200 Calories" on a food label means 200 kcal or 200,000 cal.',
  },
  {
    q: 'How many watt-hours are in a kilowatt-hour?',
    a: '1 kilowatt-hour (kWh) equals exactly 1,000 watt-hours (Wh). Your electricity bill is measured in kWh — one kWh is the energy used by a 1,000-watt appliance running for 1 hour.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}
const webAppSchema = {
  '@context': 'https://schema.org', '@type': 'WebApplication',
  name: 'Energy Converter', url: 'https://unitconversions.app/energy',
  description: 'Free online energy converter. Convert between joules, calories, kilowatt-hours, BTU and more.',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}
const howToSchema = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to Convert Energy Units',
  step: [
    { '@type': 'HowToStep', name: 'Select your category', text: 'Click the Energy category.' },
    { '@type': 'HowToStep', name: 'Enter your value and select the unit to convert from', text: 'Enter your energy value and choose joules, calories, kWh, or another unit.' },
    { '@type': 'HowToStep', name: 'See instant results for all units simultaneously', text: 'All energy units are shown instantly in the conversion table.' },
  ],
}

export default function EnergyPage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Energy Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert between joules, calories, kilocalories, kilowatt-hours, BTU and more. Instant results.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <UnitConverterWrapper category="energy" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white dark:from-[#0f172a] to-transparent pointer-events-none" />
      </section>
      <section className="bg-white dark:bg-[#0f172a] pt-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* How It Works */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Energy Conversion Works</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>Energy is the capacity to do work or produce heat. The SI unit is the joule (J), named after physicist James Prescott Joule. One joule is approximately the energy needed to lift a 102-gram object (about the weight of a large egg) by one meter. Because the joule is small for most real-world applications, practical energy measurement uses kilojoules (kJ), megajoules (MJ), kilowatt-hours (kWh), and other larger units.</p>
              <p>The calorie creates significant confusion because two different units share the name. The small calorie (cal) is the heat needed to raise 1 gram of water by 1°C, equal to 4.184 joules. The food calorie (Cal, or kcal — kilocalorie) is 1,000 small calories, or 4,184 joules. Nutrition labels in the United States list &quot;Calories&quot; (with a capital C) — these are kilocalories. European labels often show both kilocalories and kilojoules. A 200 Calorie food item contains 200 kcal = 836,800 joules.</p>
              <p>Electricity is measured and sold in kilowatt-hours (kWh). One kWh equals the energy consumed by a 1,000-watt device running for one hour, which equals 3.6 megajoules. Your electricity bill is denominated in kWh. A kilowatt-hour also equals 3,412 BTU. The BTU (British Thermal Unit) is used extensively in the United States for air conditioner output, furnace capacity, and natural gas billing — 1 BTU is the energy needed to raise 1 pound of water by 1°F.</p>
              <p>Energy conversions matter when comparing food labels from different countries, understanding electricity bills, sizing HVAC equipment (air conditioners are rated in BTU/hour), evaluating solar panel output, calculating fuel costs across different fuel types, and comparing the energy density of batteries, gasoline, and other energy storage systems.</p>
            </div>
          </div>

          {/* Key Facts */}
          <div className="rounded-2xl bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-gray-700 px-6 py-5 mb-10">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Key Facts About Energy</h2>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <li><strong className="text-gray-800 dark:text-gray-200">Human body power:</strong> A resting human body burns roughly 80 watts of power (basal metabolic rate), consuming approximately 1,920 watt-hours (1.92 kWh) per day — similar to leaving a 80-watt light bulb on continuously.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Gasoline energy density:</strong> One liter of gasoline contains about 34 megajoules (MJ) of chemical energy. An internal combustion engine converts only 20–30% of that into motion; an electric motor converts about 90%, which is why EVs use far less energy per kilometer.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Nuclear energy scale:</strong> The bomb dropped on Hiroshima released approximately 63 terajoules (TJ) of energy — equivalent to about 15 kilotons of TNT, or roughly 17.5 million kWh, enough to power 1,500 average US homes for a year.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">AA battery:</strong> A single AA battery stores about 3–4 watt-hours (10,800–14,400 joules). At 100% theoretical efficiency, that energy could lift a 1 kg weight to over 1,000 meters altitude.</li>
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
