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
        <div className="absolute inset-0 bg-black/50" />
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
          {/* How It Works */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Cooking Measurement Conversion Works</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>Cooking measurements present a unique challenge: the same ingredient can be measured by volume (cups, tablespoons) or by weight (grams, ounces), and converting between the two requires knowing the ingredient&apos;s density. A cup of water and a cup of flour weigh very differently — water is about 236 grams per cup, while flour ranges from 120 to 150 grams per cup depending on how it is scooped, sifted, or compacted. American and British home recipes typically measure by volume; European, professional, and precision baking recipes measure by weight.</p>
              <p>Volume measurements vary by country even when using the same words. A US cup is 236.588 mL. A metric cup (used in Australia, Canada, and South Africa) is 250 mL — about 5.6% larger. A US tablespoon is 14.787 mL; a UK tablespoon is 15 mL; an Australian tablespoon is 20 mL — one-third larger than US. A US teaspoon is 4.929 mL; a metric teaspoon is 5 mL. These differences are small in savory cooking but can affect baking results significantly when multiplied across many uses.</p>
              <p>Baking professionals almost never measure by volume because weight is consistent and reproducible. The density of flour varies with humidity, altitude, milling grade, and scooping technique. King Arthur Flour specifies 120 grams per cup (lightly spooned); other bakers use up to 150 grams. A 25% variance in the most important baking ingredient explains why some people struggle with volume-based recipes. A kitchen scale is the solution, and it requires knowing gram equivalents for all ingredients.</p>
              <p>Cooking conversions are essential when following a recipe from a different country (a British recipe calling for 1 tablespoon = 15 mL vs. US 14.8 mL), scaling recipes up or down (multiplying by 3 is easier in grams than in fractions of cups), adapting recipes for different dietary requirements that specify precise ingredient weights, and using measuring tools calibrated in a different system than the recipe requires.</p>
            </div>
          </div>

          {/* Key Facts */}
          <div className="rounded-2xl bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-gray-700 px-6 py-5 mb-10">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Key Facts About Cooking Measurements</h2>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <li><strong className="text-gray-800 dark:text-gray-200">The Australian tablespoon problem:</strong> Australian tablespoons are 20 mL — one-third larger than the US tablespoon (14.8 mL) and a third larger than the metric tablespoon (15 mL). A recipe from Australia using &quot;2 tablespoons&quot; of baking powder would call for about 40 mL vs. 30 mL in a US recipe, a 33% difference that can significantly affect leavening.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Water is the baseline:</strong> Water is exactly 1 gram per milliliter at room temperature, making it the universal reference for liquid cooking conversions. 1 US cup of water = 236.588 g. 1 metric cup = 250 g. 1 tablespoon of water = 14.787 g (US) or 15 g (metric).</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Pinch, dash, smidgen:</strong> A &quot;pinch&quot; is conventionally 1/16 teaspoon (about 0.3 mL). A &quot;dash&quot; is 1/8 teaspoon (about 0.6 mL). A &quot;smidgen&quot; is 1/32 teaspoon. These informal units vary by cook and are not standardized on any measuring spoon.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">FDA serving size:</strong> The FDA defines a standard serving of most condiments, sauces, and spreads as 2 tablespoons (about 30 mL) for US nutrition label purposes — the same amount used in most recipe dressing and sauce instructions.</li>
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
