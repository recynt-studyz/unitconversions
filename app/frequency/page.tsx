import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import UnitConverterWrapper from '@/components/UnitConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Frequency Converter — Convert Hz, kHz, MHz, GHz, RPM',
  description:
    'Convert between hertz, kilohertz, megahertz, gigahertz, RPM and more. Free frequency converter with instant results.',
  alternates: { canonical: 'https://unitconversions.app/frequency' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'What is a hertz?',
    a: 'A hertz (Hz) is the unit of frequency equal to one cycle per second. It is named after Heinrich Hertz. Everyday examples: mains electricity is 50 or 60 Hz; middle A on a piano is 440 Hz; FM radio is in the MHz range.',
  },
  {
    q: 'How do I convert MHz to GHz?',
    a: 'To convert megahertz (MHz) to gigahertz (GHz), divide by 1,000. For example, 2,400 MHz = 2.4 GHz. Wi-Fi operates at 2.4 GHz and 5 GHz frequency bands.',
  },
  {
    q: 'What is RPM in frequency?',
    a: 'RPM (revolutions per minute) measures rotational frequency. To convert RPM to hertz, divide by 60. For example, 3,000 RPM = 3,000 ÷ 60 = 50 Hz. Car engines typically operate between 600 and 8,000 RPM.',
  },
  {
    q: 'What frequency is human hearing?',
    a: 'Humans can typically hear frequencies between 20 Hz and 20,000 Hz (20 kHz). Young people can hear closer to 20 kHz; this range narrows with age. Most music sits in the 80 Hz to 8 kHz range.',
  },
  {
    q: 'How many kilohertz are in a megahertz?',
    a: '1 megahertz (MHz) equals exactly 1,000 kilohertz (kHz). AM radio broadcasts in the kHz range (530–1700 kHz), while FM radio broadcasts in the MHz range (87.5–108 MHz).',
  },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}
const webAppSchema = {
  '@context': 'https://schema.org', '@type': 'WebApplication',
  name: 'Frequency Converter', url: 'https://unitconversions.app/frequency',
  description: 'Free online frequency converter. Convert between Hz, kHz, MHz, GHz, and RPM.',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}
const howToSchema = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to Convert Frequency Units',
  step: [
    { '@type': 'HowToStep', name: 'Select your category', text: 'Click the Frequency category.' },
    { '@type': 'HowToStep', name: 'Enter your value and select the unit to convert from', text: 'Enter your frequency and choose Hz, kHz, MHz, GHz, or RPM.' },
    { '@type': 'HowToStep', name: 'See instant results for all units simultaneously', text: 'All frequency units are shown instantly in the conversion table.' },
  ],
}

export default function FrequencyPage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Frequency Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert between hertz, kilohertz, megahertz, gigahertz, and RPM. Instant results.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <UnitConverterWrapper category="frequency" />
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
