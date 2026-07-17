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
          {/* How It Works */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Frequency Conversion Works</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>Frequency measures how many complete cycles of a repeating event occur per second. The SI unit is the hertz (Hz), named after physicist Heinrich Hertz, who first experimentally demonstrated the existence of electromagnetic waves in 1888. One hertz equals one cycle per second. Frequency is fundamental to audio engineering, radio communications, electrical power systems, computing, and physics.</p>
              <p>Human hearing spans approximately 20 Hz to 20,000 Hz (20 kHz), though this range narrows with age — most adults over 40 cannot clearly hear above 15 kHz. Musical instruments produce complex waveforms combining many frequencies simultaneously. The international tuning standard sets middle A (A4) at exactly 440 Hz. Bass frequencies below 250 Hz give music depth; midrange (250 Hz–4 kHz) carries voice intelligibility; high frequencies above 4 kHz provide brightness and air.</p>
              <p>Radio waves span an enormous range. AM radio broadcasts between 530 kHz and 1,700 kHz; FM radio between 87.5 MHz and 108 MHz; cellular networks operate from 700 MHz to 39 GHz (for 5G mmWave). Wi-Fi operates at 2.4 GHz and 5 GHz bands. Computer CPUs are measured in GHz — a 3 GHz processor completes 3 billion clock cycles per second, with each cycle taking 0.33 nanoseconds.</p>
              <p>Frequency conversions are needed when working with radio equipment, tuning instruments, designing audio systems, evaluating processor performance, analyzing electrical grid specifications (60 Hz in North America, 50 Hz in Europe — a difference that affects motor speed and affects which appliances work internationally without adapters), and in scientific instruments like mass spectrometers and NMR machines.</p>
            </div>
          </div>

          {/* Key Facts */}
          <div className="rounded-2xl bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-gray-700 px-6 py-5 mb-10">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Key Facts About Frequency</h2>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <li><strong className="text-gray-800 dark:text-gray-200">Infrasound and ultrasound:</strong> Below 20 Hz lies infrasound, inaudible but perceptible as vibration, produced by earthquakes, wind turbines, and some large animals (elephants use infrasound for long-range communication). Above 20 kHz is ultrasound, used in medical imaging, sonar, and distance sensors.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">The cesium clock:</strong> The second is defined by the cesium-133 atom, which oscillates at exactly 9,192,631,770 Hz. Atomic clocks using this frequency drift less than one second in 300 million years — far more stable than Earth&apos;s rotation.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Visible light frequencies:</strong> Visible light is electromagnetic radiation from about 430 THz (red) to 750 THz (violet) — in the trillions of hertz. These frequencies are so high that wavelength (nanometers) is more practical than frequency for everyday optical work.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Power grid difference:</strong> North America uses 60 Hz AC power; Europe, Asia, and most of the world use 50 Hz. This makes some appliances incompatible across regions without voltage and frequency converters — electric motors run at different speeds, and quartz clock mechanisms may gain or lose time.</li>
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
