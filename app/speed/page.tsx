import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import UnitConverterWrapper from '@/components/UnitConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Speed Converter — Convert MPH, KPH, Knots, Mach',
  description:
    'Convert between miles per hour, kilometers per hour, knots, meters per second, Mach and more. Free speed converter with instant results.',
  alternates: { canonical: 'https://unitconversions.app/speed' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How do I convert mph to km/h?',
    a: 'To convert miles per hour to kilometers per hour, multiply by 1.60934. For example, 60 mph = 60 × 1.60934 = 96.56 km/h. To go the other way, multiply by 0.621371.',
  },
  {
    q: 'What is Mach 1 in mph?',
    a: 'Mach 1 (the speed of sound in air) is approximately 767 mph or 1,235 km/h at sea level at 15°C. It varies with temperature and altitude.',
  },
  {
    q: 'How many knots is 100 mph?',
    a: '100 mph equals approximately 86.9 knots. One knot equals 1 nautical mile per hour, which is approximately 1.15078 mph or 1.852 km/h.',
  },
  {
    q: 'What is the difference between mph and km/h?',
    a: 'MPH (miles per hour) is used primarily in the United States and United Kingdom. KPH or km/h (kilometers per hour) is used in most other countries. 1 mph = 1.60934 km/h.',
  },
  {
    q: 'How fast is 100 km/h in mph?',
    a: '100 km/h equals approximately 62.14 mph. This is a common highway speed limit in many countries, equivalent to about 62 mph.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}
const webAppSchema = {
  '@context': 'https://schema.org', '@type': 'WebApplication',
  name: 'Speed Converter', url: 'https://unitconversions.app/speed',
  description: 'Free online speed converter. Convert between mph, km/h, knots, m/s, and Mach.',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}
const howToSchema = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to Convert Speed Units',
  step: [
    { '@type': 'HowToStep', name: 'Select your category', text: 'Click the Speed category.' },
    { '@type': 'HowToStep', name: 'Enter your value and select the unit to convert from', text: 'Enter your speed and choose mph, km/h, or another unit.' },
    { '@type': 'HowToStep', name: 'See instant results for all units simultaneously', text: 'All speed units are shown instantly in the conversion table.' },
  ],
}

export default function SpeedPage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Speed Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert between mph, km/h, knots, meters per second, and Mach. Instant results.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <UnitConverterWrapper category="speed" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white dark:from-[#0f172a] to-transparent pointer-events-none" />
      </section>
      <section className="bg-white dark:bg-[#0f172a] pt-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* How It Works */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Speed Conversion Works</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>Speed measures distance traveled per unit of time. Most countries use kilometers per hour (km/h) for road travel, but the United States and the United Kingdom use miles per hour (mph). This creates a constant need for conversion when driving internationally, reading foreign vehicle specifications, following motorsport from another country, or interpreting weather reports that reference wind speeds in different units.</p>
              <p>Knots are used in aviation and maritime navigation worldwide, and this has not changed despite metrication elsewhere. One knot equals exactly one nautical mile per hour. A nautical mile is defined as 1/60 of a degree of latitude, approximately 1.852 kilometers or 1.151 miles. This ties directly to navigation on a geographic coordinate grid, which is why pilots and ship captains have always used knots — the unit is built into how latitude and longitude work.</p>
              <p>Scientists use meters per second (m/s) as the SI unit for speed. Mach number expresses speed relative to the speed of sound, which varies with altitude and temperature: at sea level and 15°C, Mach 1 equals approximately 340 m/s (1,225 km/h, or 761 mph). The speed of light in a vacuum, exactly 299,792,458 m/s, is used as a fundamental constant in physics.</p>
              <p>Speed conversions matter for international drivers renting cars abroad, pilots monitoring airspeed in knots while altimeters read in feet, engineers comparing vehicle specs from foreign manufacturers, athletes and coaches comparing performance data from competitions held under different measurement conventions, and anyone following Formula 1, Tour de France, or other international sports where speeds are reported in metric.</p>
            </div>
          </div>

          {/* Key Facts */}
          <div className="rounded-2xl bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-gray-700 px-6 py-5 mb-10">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Key Facts About Speed</h2>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <li><strong className="text-gray-800 dark:text-gray-200">Land speed record:</strong> The fastest recorded speed for a land vehicle is 1,227.985 km/h (763.035 mph), set by the ThrustSSC jet car driven by Andy Green in 1997 — the only land vehicle ever to break the sound barrier.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Human speeds:</strong> Average walking pace is about 5 km/h (3.1 mph). A competitive marathon runner averages around 20 km/h (12.4 mph). Usain Bolt&apos;s peak recorded sprint speed was 44.72 km/h (27.79 mph) during the 2009 Berlin World Championships.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Commercial aviation:</strong> Airliners typically cruise at 850–950 km/h (530–590 mph), or around Mach 0.82–0.85. The Concorde flew at Mach 2.02 (2,179 km/h, 1,354 mph) until its retirement in 2003.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Orbital velocity:</strong> The International Space Station orbits Earth at approximately 27,600 km/h (17,150 mph) — fast enough to circle the entire planet in about 90 minutes.</li>
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
