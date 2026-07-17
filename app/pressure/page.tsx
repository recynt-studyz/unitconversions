import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import UnitConverterWrapper from '@/components/UnitConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Pressure Converter — Convert PSI, Bar, Pascal, Atmosphere',
  description:
    'Convert between PSI, bar, pascal, atmosphere, torr, mmHg and more. Free pressure converter with instant results.',
  alternates: { canonical: 'https://unitconversions.app/pressure' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How do I convert PSI to bar?',
    a: 'To convert PSI (pounds per square inch) to bar, multiply by 0.0689476. For example, 30 PSI = 30 × 0.0689476 = 2.068 bar. To convert bar to PSI, multiply by 14.5038.',
  },
  {
    q: 'What is standard atmospheric pressure?',
    a: 'Standard atmospheric pressure (1 atm) is defined as exactly 101,325 pascals, which equals approximately 14.696 PSI, 1.01325 bar, or 760 mmHg (torr).',
  },
  {
    q: 'What is the difference between PSI and kPa?',
    a: '1 PSI equals approximately 6.89476 kilopascals (kPa). PSI is common in the US (tire pressure, blood pressure equipment), while kPa is used in metric countries for the same applications.',
  },
  {
    q: 'What is mmHg and how does it relate to pressure?',
    a: 'mmHg (millimeters of mercury) measures pressure by how high a column of mercury it can support. It is equivalent to torr. 1 mmHg = 133.322 Pa. Blood pressure is commonly measured in mmHg.',
  },
  {
    q: 'How many pascals are in a bar?',
    a: 'One bar equals exactly 100,000 pascals. The bar is close to (but not exactly) one atmosphere (1 atm = 101,325 Pa). The millibar (mbar) equals 100 pascals and is commonly used in meteorology.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}
const webAppSchema = {
  '@context': 'https://schema.org', '@type': 'WebApplication',
  name: 'Pressure Converter', url: 'https://unitconversions.app/pressure',
  description: 'Free online pressure converter. Convert between PSI, bar, pascal, atmosphere, mmHg and more.',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}
const howToSchema = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to Convert Pressure Units',
  step: [
    { '@type': 'HowToStep', name: 'Select your category', text: 'Click the Pressure category.' },
    { '@type': 'HowToStep', name: 'Enter your value and select the unit to convert from', text: 'Enter your pressure value and choose PSI, bar, pascal, or another unit.' },
    { '@type': 'HowToStep', name: 'See instant results for all units simultaneously', text: 'All pressure units are shown instantly in the conversion table.' },
  ],
}

export default function PressurePage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Pressure Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert between PSI, bar, pascal, atmosphere, torr, mmHg, kilopascal and more.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <UnitConverterWrapper category="pressure" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white dark:from-[#0f172a] to-transparent pointer-events-none" />
      </section>
      <section className="bg-white dark:bg-[#0f172a] pt-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* How It Works */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Pressure Conversion Works</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>Pressure is force applied per unit area. The SI unit is the pascal (Pa), named after mathematician Blaise Pascal, and equals one newton of force per square meter. Since a pascal is a very small amount of pressure — about the weight of a dollar bill resting on a square meter of surface — practical applications use kilopascals (kPa), megapascals (MPa), bar, or atmospheres.</p>
              <p>Standard atmospheric pressure at sea level is defined as exactly 1 atmosphere (atm) = 101,325 pascals ≈ 14.696 PSI ≈ 1.01325 bar. This is the pressure exerted by the entire column of air above a point at sea level. Atmospheric pressure decreases with altitude — at the peak of Everest (8,849 m), the pressure is roughly one-third of sea level, which is why climbers need supplemental oxygen: there are fewer oxygen molecules per breath even at the same fraction of atmospheric composition.</p>
              <p>Different industries use different pressure units by convention. PSI (pounds per square inch) dominates in the United States for tire pressure, hydraulic equipment, and industrial systems. Bar is common in Europe for the same purposes. Blood pressure is measured in mmHg (millimeters of mercury) worldwide — a historical holdover from when mercury manometers were the standard measuring device. Weather forecasts use millibars (mbar) or hectopascals (hPa), which are numerically identical: 1 mbar = 1 hPa = 100 Pa.</p>
              <p>Pressure conversions are needed when inflating tires with a gauge calibrated in different units, reading weather maps from international sources, understanding scuba diving depth limits (every 10 meters of seawater adds roughly 1 atmosphere of pressure), interpreting medical blood pressure readings when comparing systems, and specifying boiler, pipeline, or compressor operating pressures across international engineering standards.</p>
            </div>
          </div>

          {/* Key Facts */}
          <div className="rounded-2xl bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-gray-700 px-6 py-5 mb-10">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Key Facts About Pressure</h2>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <li><strong className="text-gray-800 dark:text-gray-200">Ocean deep pressure:</strong> The Challenger Deep in the Mariana Trench (≈10,935 m) has a pressure of about 1,100 atm (16,000 PSI, or 110 MPa) — enough to crush most submarines and compress water measurably.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Tire pressure range:</strong> A typical car tire is inflated to 30–35 PSI (2.1–2.4 bar). Bicycle tires range from 30 PSI for mountain bikes to 130 PSI for road racing — the same narrow tire width at low pressure would cause pinch flats and poor handling.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Blood pressure units:</strong> The 120/80 mmHg standard comes from mercury manometers where 120 mmHg means the heart creates enough pressure to push mercury 120 mm up a column. 1 mmHg = 133.322 Pa.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Mercury column:</strong> Standard atmospheric pressure supports a mercury column exactly 760 mm tall — which is why 760 mmHg = 1 atm and why early barometers used 1-meter mercury tubes.</li>
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
