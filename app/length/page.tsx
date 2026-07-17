import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import UnitConverterWrapper from '@/components/UnitConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Length Converter — Convert Inches, CM, Feet, Meters',
  description:
    'Convert between inches, centimeters, feet, meters, miles, kilometers and more. Free length converter with instant results and complete conversion table.',
  alternates: { canonical: 'https://unitconversions.app/length' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How many centimeters are in an inch?',
    a: 'There are exactly 2.54 centimeters in one inch. This is an internationally defined standard since 1959. So to convert inches to centimeters, multiply by 2.54.',
  },
  {
    q: 'How do I convert feet to meters?',
    a: 'To convert feet to meters, multiply the number of feet by 0.3048. For example, 5 feet = 5 × 0.3048 = 1.524 meters. One foot is exactly 0.3048 meters.',
  },
  {
    q: 'What is the difference between a mile and a kilometer?',
    a: 'One mile equals approximately 1.609344 kilometers. So a mile is about 60% longer than a kilometer. To convert miles to km, multiply by 1.609344. To convert km to miles, multiply by 0.621371.',
  },
  {
    q: 'How many inches are in a foot?',
    a: 'There are exactly 12 inches in one foot. This is a fixed definition in the imperial and US customary systems.',
  },
  {
    q: 'How do I convert meters to yards?',
    a: 'To convert meters to yards, multiply by 1.09361. For example, 10 meters = 10 × 1.09361 = 10.9361 yards. One yard equals 0.9144 meters.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Length Converter',
  url: 'https://unitconversions.app/length',
  description: 'Free online length converter. Convert between inches, cm, feet, meters, miles, km and more.',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Convert Length Units',
  step: [
    { '@type': 'HowToStep', name: 'Select your category', text: 'Click the Length category in the navigation.' },
    { '@type': 'HowToStep', name: 'Enter your value and select the unit to convert from', text: 'Type your length value and choose the source unit, for example inches or meters.' },
    { '@type': 'HowToStep', name: 'See instant results for all units simultaneously', text: 'The result appears instantly. The table below shows the value in every length unit at once.' },
  ],
}

export default function LengthPage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Length Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Convert between inches, centimeters, feet, meters, miles, kilometers and more. Instant results.
            </p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <UnitConverterWrapper category="length" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white dark:from-[#0f172a] to-transparent pointer-events-none" />
      </section>

      <section className="bg-white dark:bg-[#0f172a] pt-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* How It Works */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Length Conversion Works</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>Length is one of humanity&apos;s oldest measurement challenges. Ancient civilizations measured with body parts — the Egyptian cubit ran from elbow to fingertip, the Roman foot defined roads and buildings, and the English inch was reputedly the width of a thumb. These inconsistencies created genuine problems in trade and engineering, making standardization essential.</p>
              <p>The metric system was created during the French Revolution in the 1790s, designed around base-10 arithmetic for simplicity. The original meter was defined as one ten-millionth of the distance from the equator to the North Pole. Today it is defined by the speed of light — the distance light travels in exactly 1/299,792,458 of a second, making it one of the most precisely defined units in existence.</p>
              <p>Most of the world uses the metric system (kilometers, meters, centimeters, millimeters). The United States, Liberia, and Myanmar are the only countries that have not officially adopted it as their primary measurement system. The US uses miles, yards, feet, and inches for everyday life, while using metric in scientific, pharmaceutical, and military contexts. Congress actually passed the Metric Conversion Act in 1975, but because adoption was voluntary, it never took hold.</p>
              <p>You will need length conversions when buying international furniture (European dimensions are always in centimeters), checking TV or monitor screen sizes (universally listed in diagonal inches even in metric countries), converting your height for a visa application or medical form, reading European construction specifications, or following athletic distances from international competitions where distances are in kilometers.</p>
            </div>
          </div>

          {/* Key Facts */}
          <div className="rounded-2xl bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-gray-700 px-6 py-5 mb-10">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Key Facts About Length</h2>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <li><strong className="text-gray-800 dark:text-gray-200">Defined by the speed of light:</strong> The meter was redefined in 1983 as the distance light travels in a vacuum in exactly 1/299,792,458 of a second — independent of any physical artifact and reproducible in any laboratory in the world.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">The three holdout nations:</strong> The US is one of only three countries that has not officially made the metric system its primary standard. The other two are Liberia and Myanmar. In practice, the US uses metric extensively in science, medicine, and the military.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">The marathon&apos;s exact length:</strong> A marathon is exactly 42.195 km (26 miles 385 yards). This precise distance was standardized at the 1908 London Olympics when the course was extended so it could start beneath the royal nursery window at Windsor Castle and finish in front of the royal box.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Light-year is a distance:</strong> A light-year is a unit of length, not time — equal to approximately 9.461 trillion kilometers (5.879 trillion miles), the distance light travels through a vacuum in one Julian year.</li>
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
