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
          {/* How It Works */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Digital Storage Conversion Works</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>Digital storage and data transfer are measured using units based on binary (base-2) mathematics. A bit is the smallest unit of digital data — a single 0 or 1, representing the two states of a transistor. Eight bits make one byte, which can represent 256 different values (2⁸). All files, messages, photos, videos, and programs are ultimately sequences of bits stored in memory or on disk.</p>
              <p>A persistent source of confusion is the difference between decimal and binary prefixes. Hard drive manufacturers use decimal: 1 TB = 1,000,000,000,000 bytes. Operating systems use binary: 1 TiB (tebibyte) = 2⁴⁰ bytes = 1,099,511,627,776 bytes. This discrepancy is why a &quot;1 TB&quot; drive shows as about 931 GB in Windows or macOS — the OS uses binary measurement while reporting the label from the decimal-defined drive. The IEC introduced official binary prefixes (kibibyte, mebibyte, gibibyte, tebibyte) in 1998 to resolve this, but consumer products rarely use them.</p>
              <p>Internet connection speeds are measured in bits per second, not bytes — and this is not an accident. Dividing by 8 converts from bits to bytes. A &quot;100 Mbps&quot; broadband connection downloads at a maximum of 12.5 megabytes per second (MB/s). This distinction between megabits (Mb) and megabytes (MB) is important when comparing advertised speeds to actual file download times.</p>
              <p>Data storage conversions matter when comparing cloud storage plans, understanding why a drive shows less space than advertised, calculating how many photos or videos fit on a memory card, estimating file transfer times, planning server storage for backup systems, or understanding the difference between download speed (bits) and file size (bytes).</p>
            </div>
          </div>

          {/* Key Facts */}
          <div className="rounded-2xl bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-gray-700 px-6 py-5 mb-10">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Key Facts About Digital Storage</h2>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <li><strong className="text-gray-800 dark:text-gray-200">Human genome size:</strong> The complete human genome contains approximately 3.2 billion base pairs, which can be stored in roughly 725 MB of compressed data — about the size of a CD.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Netflix daily traffic:</strong> Netflix streams an estimated 15 petabytes (15,000 terabytes) of data per day globally. The entire printed collection of the Library of Congress is estimated at approximately 10 terabytes of text.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">The 5% gap:</strong> A megabyte is 1,048,576 bytes (binary) but often marketed as 1,000,000 bytes (decimal) — a 4.86% difference. At terabyte scale, this gap grows: 1 TB (decimal) = 0.909 TiB (binary), explaining the &quot;missing&quot; storage on new drives.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Research speeds:</strong> Laboratory fiber optic transmission speeds have exceeded 1 petabit per second (1,000 terabits/s) — enough to transmit the entire internet&apos;s traffic in a fraction of a second.</li>
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
