import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import UnitConverterWrapper from '@/components/UnitConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Unit Converter — Free Online Measurement Converter',
  description:
    'Convert length, weight, temperature, volume and more instantly. Free unit converter with complete conversion tables. No signup required.',
  alternates: { canonical: 'https://unitconversions.app' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How do I convert units online?',
    a: 'Enter your value in the input field, select the unit you are converting from in the dropdown, then select the unit you want to convert to. The result appears instantly. You can also see all unit conversions at once in the table below the main converter.',
  },
  {
    q: 'Is unitconversions.app completely free?',
    a: 'Yes, completely free. No account, no signup, no file size limits, no watermarks. The tool is ad-supported to remain free for everyone.',
  },
  {
    q: 'Are my calculations sent to a server?',
    a: 'No. unitconversions.app is a fully client-side tool. All unit conversions happen entirely in your browser using pure JavaScript math — no data is ever sent to a server. You can disconnect from the internet after the page loads and the tool will still work.',
  },
  {
    q: 'How accurate are the conversions?',
    a: 'All conversions use internationally accepted conversion factors. For example, 1 inch = exactly 2.54 cm, 1 pound = exactly 0.45359237 kg. Results are displayed to up to 6 significant figures, which is more than sufficient for everyday use.',
  },
  {
    q: 'Which unit categories are supported?',
    a: 'unitconversions.app supports 14 categories: Length, Weight/Mass, Temperature, Volume, Area, Speed, Time, Digital Storage, Pressure, Energy, Frequency, Angle, Fuel Economy, and Cooking. Each category page includes a full conversion table showing all units at once.',
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
  name: 'Unit Converter',
  url: 'https://unitconversions.app',
  description: 'Free online unit converter for length, weight, temperature, volume, area, speed, time and more.',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Convert Units Online',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Select your category',
      text: 'Choose a unit category such as length, weight, temperature, or volume using the pill navigation.',
    },
    {
      '@type': 'HowToStep',
      name: 'Enter your value and select the unit to convert from',
      text: 'Type your value into the input field and choose the source unit from the dropdown menu.',
    },
    {
      '@type': 'HowToStep',
      name: 'See instant results for all units simultaneously',
      text: 'The result appears instantly in the output field. The table below shows the value converted to every unit in that category at once.',
    },
  ],
}

const trustSignals = ['⚡ Instant', '🎯 Accurate', '∞ All Units', '✓ Free']

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema).replace(/</g, '\\u003c') }}
      />

      {/* Hero section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-900/65" />
        <div className="relative z-10 pb-10">
          <ToolHeader />
          <div className="text-center text-white px-4 py-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
              Free Unit Converter
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-6 max-w-2xl mx-auto">
              Instant unit conversions for length, weight, temperature, volume and more.
              Complete conversion tables. No signup.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {trustSignals.map((t) => (
                <span key={t} className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-white font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-4 mb-4">
            <AdBanner slot="1111111111" />
          </div>

          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <UnitConverterWrapper category="length" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white dark:from-[#0f172a] to-transparent pointer-events-none" />
      </section>

      {/* Below-hero content */}
      <section className="bg-white dark:bg-[#0f172a] pt-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Trust cards */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-10">
            {[
              { icon: '⚡', label: 'Instant', sub: 'Results as you type' },
              { icon: '🎯', label: 'Accurate', sub: 'Verified conversion factors' },
              { icon: '∞', label: 'All Units', sub: '14 categories, 100+ units' },
              { icon: '✓', label: 'Free', sub: 'No signup needed' },
            ].map((t) => (
              <div
                key={t.label}
                className="flex flex-col items-center rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1e293b] p-4 text-center shadow-sm"
              >
                <span className="text-2xl mb-1">{t.icon}</span>
                <span className="text-sm font-semibold text-gray-800 dark:text-[#e2e8f0]">{t.label}</span>
                <span className="text-xs text-gray-400 mt-0.5">{t.sub}</span>
              </div>
            ))}
          </div>

          {/* SEO blurb */}
          <div className="rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 px-6 py-5 mb-10">
            <h2 className="text-base font-bold text-blue-900 dark:text-blue-300 mb-2">
              Why unitconversions.app?
            </h2>
            <p className="text-sm text-blue-800 dark:text-blue-400 leading-relaxed">
              This unit converter runs entirely in your browser — no data is ever sent to a server. As a
              measurement converter, it covers every common unit from metric to imperial: inches to cm,
              kg to lbs, miles to km, Fahrenheit to Celsius, and much more. The instant conversion table
              below the main converter answers every variant of your unit conversions question on a single page.
            </p>
          </div>

          {/* FAQ */}
          <div className="pb-10">
            <FAQ questions={faqs} />
          </div>

          <div className="pb-6">
            <AdBanner slot="3333333333" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
