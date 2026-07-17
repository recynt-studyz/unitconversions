import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import UnitConverterWrapper from '@/components/UnitConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Angle Converter — Convert Degrees, Radians, Gradians',
  description:
    'Convert between degrees, radians, gradians, arcminutes, arcseconds and turns. Free angle converter with instant results.',
  alternates: { canonical: 'https://unitconversions.app/angle' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How do I convert degrees to radians?',
    a: 'To convert degrees to radians, multiply by π/180 (approximately 0.017453). For example, 180° = π radians ≈ 3.14159 radians, and 90° = π/2 radians ≈ 1.5708 radians.',
  },
  {
    q: 'How do I convert radians to degrees?',
    a: 'To convert radians to degrees, multiply by 180/π (approximately 57.2958). For example, 1 radian = 57.2958°, and π radians = 180°.',
  },
  {
    q: 'What is a gradian?',
    a: 'A gradian (also called grad or gon) divides a right angle into 100 parts, so a full circle = 400 gradians. Gradians are used in surveying and civil engineering. 1 gradian = 0.9 degrees = π/200 radians.',
  },
  {
    q: 'What is an arcminute?',
    a: 'An arcminute (or minute of arc) is 1/60 of a degree. It is used in navigation, astronomy, and optics. The symbol is ′. 1° = 60 arcminutes. The angular diameter of the full moon is about 30 arcminutes.',
  },
  {
    q: 'How many degrees are in a full turn?',
    a: 'A full turn (one full rotation) equals exactly 360 degrees, 2π radians (≈6.2832 rad), 400 gradians, or 21,600 arcminutes.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}
const webAppSchema = {
  '@context': 'https://schema.org', '@type': 'WebApplication',
  name: 'Angle Converter', url: 'https://unitconversions.app/angle',
  description: 'Free online angle converter. Convert between degrees, radians, gradians, arcminutes and arcseconds.',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}
const howToSchema = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to Convert Angle Units',
  step: [
    { '@type': 'HowToStep', name: 'Select your category', text: 'Click the Angle category.' },
    { '@type': 'HowToStep', name: 'Enter your value and select the unit to convert from', text: 'Enter your angle and choose degrees, radians, gradians, or another unit.' },
    { '@type': 'HowToStep', name: 'See instant results for all units simultaneously', text: 'All angle units are shown instantly in the conversion table.' },
  ],
}

export default function AnglePage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Angle Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert between degrees, radians, gradians, arcminutes, arcseconds and turns. Instant results.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <UnitConverterWrapper category="angle" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white dark:from-[#0f172a] to-transparent pointer-events-none" />
      </section>
      <section className="bg-white dark:bg-[#0f172a] pt-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* How It Works */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Angle Conversion Works</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>Angles measure the amount of rotation between two lines meeting at a point. The most familiar unit is the degree (°), where a full circle is divided into 360 equal parts. The number 360 was chosen by ancient Babylonians — it is close to the number of days in a year, and it has an unusually large number of integer divisors (24 of them), making it easy to divide a circle into halves, thirds, quarters, sixths, eighths, and more with whole numbers.</p>
              <p>Radians are the SI unit of angle measurement and are used universally in mathematics and physics. One radian is defined as the angle where the arc length equals the radius of the circle. Since a circle&apos;s circumference is 2πr, a full circle equals exactly 2π radians ≈ 6.2832 radians. Radians make trigonometric formulas far simpler: the Taylor series for sin(x) is x − x³/6 + x⁵/120 − ..., but only when x is in radians. Using degrees would require a conversion factor in every formula, which is why pure mathematics and physics always use radians.</p>
              <p>Gradians (also called gon or grad) divide a right angle into 100 parts, making a full circle exactly 400 gradians. They were introduced during the French Revolution alongside the metric system and are still used in surveying, geodesy, and civil engineering in parts of Europe. A slope of 1% corresponds to 1 gradian, making them practical for gradient measurements.</p>
              <p>Arcminutes (1/60 of a degree) and arcseconds (1/3,600 of a degree) are used in astronomy, navigation, and optometry. Latitude and longitude coordinates are specified in degrees, minutes, and seconds. A GPS receiver provides position to within a few meters, corresponding to milliarcseconds of accuracy. The angular diameter of the full Moon as seen from Earth is approximately 31 arcminutes.</p>
            </div>
          </div>

          {/* Key Facts */}
          <div className="rounded-2xl bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-gray-700 px-6 py-5 mb-10">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Key Facts About Angles</h2>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <li><strong className="text-gray-800 dark:text-gray-200">Pinky finger trick:</strong> Your pinky finger held at arm&apos;s length subtends approximately 1 degree of arc — a useful rough measuring tool for astronomy and navigation when no instruments are available.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Navigation bearings:</strong> Compass bearings are measured clockwise from north in degrees: 0°/360° = north, 90° = east, 180° = south, 270° = west. Aviation uses the same system; a &quot;heading of 270&quot; means flying due west.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Eye resolution limit:</strong> The angular resolution of the human eye is approximately 1 arcminute (1/60°). Two objects closer than 1 arcminute apart appear merged to the unaided eye. This is why standard eye charts are designed for 20-foot (6-meter) distances — the letters are sized to be 5 arcminutes tall for 20/20 vision.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Why π appears everywhere:</strong> The radian is a natural unit because it comes directly from the definition of a circle (circumference = 2πr). Using radians eliminates conversion factors from all formulas involving circular motion, making physics equations cleaner and more fundamental.</li>
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
