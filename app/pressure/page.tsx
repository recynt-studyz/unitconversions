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
        <div className="absolute inset-0 bg-blue-900/65" />
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
          <div className="pb-10"><FAQ questions={faqs} /></div>
          <div className="pb-6"><AdBanner slot="3333333333" /></div>
        </div>
      </section>
      <Footer />
    </>
  )
}
