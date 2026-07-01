import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import UnitConverterWrapper from '@/components/UnitConverterWrapper'
import AdBanner from '@/components/AdBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import type { FaqItem } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Data Storage Converter — Convert GB, MB, TB, Bytes',
  description:
    'Convert between bytes, kilobytes, megabytes, gigabytes, terabytes, petabytes and more. Free digital storage converter with instant results.',
  alternates: { canonical: 'https://unitconversions.app/data' },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    q: 'How many megabytes are in a gigabyte?',
    a: 'In computing, 1 gigabyte equals 1,024 megabytes (using binary prefixes). However, storage manufacturers often use 1 GB = 1,000 MB (decimal). This tool uses binary (1 GB = 1,024 MB).',
  },
  {
    q: 'How many bytes are in a kilobyte?',
    a: '1 kilobyte equals 1,024 bytes in the binary system used by computers. In the decimal system, 1 kilobyte = 1,000 bytes. Most operating systems display file sizes using binary kilobytes.',
  },
  {
    q: 'What is the difference between GB and GiB?',
    a: 'GB (gigabyte) in marketing context often means 1,000,000,000 bytes (decimal). GiB (gibibyte) is the precise binary term for 1,073,741,824 bytes (2^30). Operating systems typically report storage in GiB but label it GB.',
  },
  {
    q: 'How many bits are in a byte?',
    a: 'There are exactly 8 bits in one byte. This is a fundamental definition in computing. A single bit is the smallest unit of data (0 or 1), and a byte can represent 256 different values.',
  },
  {
    q: 'How large is a petabyte?',
    a: 'One petabyte equals 1,024 terabytes, 1,048,576 gigabytes, or approximately 1.13 billion gigabytes. To put it in perspective, 1 petabyte could store about 11 years of continuously recorded HD video.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}
const webAppSchema = {
  '@context': 'https://schema.org', '@type': 'WebApplication',
  name: 'Data Storage Converter', url: 'https://unitconversions.app/data',
  description: 'Free online data storage converter. Convert between bytes, KB, MB, GB, TB, and more.',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}
const howToSchema = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to Convert Data Storage Units',
  step: [
    { '@type': 'HowToStep', name: 'Select your category', text: 'Click the Data category.' },
    { '@type': 'HowToStep', name: 'Enter your value and select the unit to convert from', text: 'Enter your data size and choose GB, MB, TB, or another unit.' },
    { '@type': 'HowToStep', name: 'See instant results for all units simultaneously', text: 'All data storage units are shown instantly in the conversion table.' },
  ],
}

export default function DataPage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Data Storage Converter</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Convert between bits, bytes, kilobytes, megabytes, gigabytes, terabytes, petabytes and more.</p>
          </div>
          <div className="max-w-3xl mx-auto px-4 mb-4"><AdBanner slot="1111111111" /></div>
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
              <UnitConverterWrapper category="data" />
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
