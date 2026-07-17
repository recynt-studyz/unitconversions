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
        style={{ backgroundImage: "url('/herobguc.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
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

          {/* How It Works */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How Unit Conversion Works</h2>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              <p>Every unit of measurement belongs to a system — and most of the world uses two competing systems simultaneously. The International System of Units (SI), commonly called the metric system, is the global standard used by science, medicine, engineering, and everyday life in nearly every country. The United States, along with Myanmar and Liberia, primarily uses the US customary system, which traces its roots to English units that date back centuries. The result is a world where the same physical quantity — a person&apos;s weight, a road distance, a recipe measurement — is expressed differently depending on where you are.</p>
              <p>Unit conversion bridges this gap by applying mathematically exact relationships between units. Many of these relationships are defined by international agreement: 1 inch is defined as exactly 2.54 centimeters, 1 pound is exactly 453.59237 grams, 1 US gallon is exactly 3.785411784 liters. These definitions are not approximations — they are fixed by treaty and maintained by international standards organizations including the International Bureau of Weights and Measures (BIPM) and the US National Institute of Standards and Technology (NIST). Converting between units within the same category is a matter of multiplying by the correct ratio, which this tool does instantly as you type.</p>
              <p>Temperature is a special case because the Celsius and Fahrenheit scales are offset, not just scaled — they use different zero points. Converting between them requires both a multiplication and an addition: °F = (°C × 9/5) + 32. Fuel economy is another special case: miles per gallon (MPG) and liters per 100 kilometers (L/100km) are inversely related, meaning better efficiency means a higher MPG but a lower L/100km number. This converter handles both special cases automatically.</p>
              <p>The converter covers 14 categories and over 100 individual units. The full conversion table below the input field shows your value converted to every unit in the selected category simultaneously — so you can see, for example, that 5 feet equals 60 inches, 1.524 meters, and 152.4 centimeters all at once, without switching between pages or doing multiple lookups.</p>
            </div>
          </div>

          {/* Key Facts */}
          <div className="rounded-2xl bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-gray-700 px-6 py-5 mb-10">
            <h2 className="text-base font-bold text-gray-900 dark:text-white mb-3">Key Facts About Measurement</h2>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><strong className="text-gray-800 dark:text-gray-200">Only three countries don&apos;t use metric:</strong> The United States, Myanmar, and Liberia are the only countries that have not adopted the metric system as their primary system of measurement. Every other country uses SI units for official purposes, road signs, science, and trade.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">The metric system was born from the French Revolution:</strong> France adopted the metric system in 1795 as part of a push to replace the chaotic patchwork of regional units that made trade and science difficult. The meter was originally defined as one ten-millionth of the distance from the North Pole to the equator along the Paris meridian.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">The kilogram was redefined in 2019:</strong> For 130 years, the kilogram was defined by a physical platinum-iridium cylinder stored in a vault in France. In 2019, the definition was changed to be based on Planck&apos;s constant, a fundamental constant of nature — making it more stable and reproducible than any physical object could be.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">The second is the most precisely defined unit:</strong> One second is defined as exactly 9,192,631,770 cycles of radiation from a cesium-133 atom. Atomic clocks based on this definition are accurate to within 1 second per 300 million years — far more precise than any other base unit measurement.</li>
            </ul>
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
