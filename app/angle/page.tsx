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
        <div className="absolute inset-0 bg-blue-900/65" />
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
          <div className="pb-10"><FAQ questions={faqs} /></div>
          <div className="pb-6"><AdBanner slot="3333333333" /></div>
        </div>
      </section>
      <Footer />
    </>
  )
}
