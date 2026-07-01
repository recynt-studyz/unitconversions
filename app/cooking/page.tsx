import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import UnitConverterWrapper from '@/components/UnitConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Cooking Converter — Convert Cups, Tablespoons, Teaspoons, ML',
  description:
    'Convert between cups, tablespoons, teaspoons, milliliters, fluid ounces and more. Free cooking measurement converter with instant results.',
  alternates: { canonical: 'https://unitconversions.app/cooking' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How many tablespoons are in a cup?',
    a: 'There are 16 US tablespoons in one US cup. One US cup = 16 tablespoons = 48 teaspoons = 236.588 milliliters.',
  },
  {
    q: 'How many teaspoons are in a tablespoon?',
    a: 'There are exactly 3 teaspoons in one tablespoon (US and metric). So 1 tablespoon = 3 teaspoons, and 1 cup = 48 teaspoons.',
  },
  {
    q: 'How do I convert cups to milliliters?',
    a: 'One US cup equals approximately 236.588 milliliters. One metric cup equals exactly 250 milliliters. To convert US cups to mL, multiply by 236.588.',
  },
  {
    q: 'How many milliliters are in a teaspoon?',
    a: 'One US teaspoon equals approximately 4.929 milliliters. One metric teaspoon equals exactly 5 milliliters. Most medications use the metric teaspoon (5 mL).',
  },
  {
    q: 'What is the difference between US and metric tablespoon?',
    a: 'A US tablespoon is approximately 14.787 mL, while a metric tablespoon is exactly 15 mL. The difference is small but matters in precise recipes. Australian tablespoons are 20 mL.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}
const webAppSchema = {
  '@context': 'https://schema.org', '@type': 'WebApplication',
  name: 'Cooking Converter', url: 'https://unitconversions.app/cooking',
  description: 'Free online cooking converter. Convert between cups, tablespoons, teaspoons, milliliters and more.',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}
const howToSchema = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to Convert Cooking Measurements',
  step: [
    { '@type': 'HowToStep', name: 'Select your category', text: 'Click the Cooking category.' },
    { '@type': 'HowToStep', name: 'Enter your value and select the unit to convert from', text: 'Enter your measurement and choose cups, tablespoons, teaspoons, or milliliters.' },
    { '@type': 'HowToStep', name: 'See instant results for all units simultaneously', text: 'All cooking measurement units are shown instantly in the conversion table.' },
  ],
}

export default function CookingPage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Cooking Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert between cups, tablespoons, teaspoons, milliliters, fluid ounces and pints. Instant results.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <UnitConverterWrapper category="cooking" />
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
