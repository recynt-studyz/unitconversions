import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About — unitconversions.app',
  description: 'About unitconversions.app — free online unit converter for length, weight, temperature, volume and more.',
  alternates: { canonical: 'https://unitconversions.app/about' },
}

export default function About() {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[200px]"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-900/65" />
        <div className="relative z-10 pb-8">
          <ToolHeader />
          <div className="text-center text-white px-4 py-8">
            <h1 className="text-3xl font-bold">About unitconversions.app</h1>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white dark:from-[#0f172a] to-transparent pointer-events-none" />
      </section>

      <section className="bg-white dark:bg-[#0f172a] pt-8 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What is unitconversions.app?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              unitconversions.app is a free online unit conversion tool that lets you instantly convert
              between hundreds of units across 14 categories: length, weight/mass, temperature, volume,
              area, speed, time, digital storage, pressure, energy, frequency, angle, fuel economy, and cooking.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How it works</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              All conversions run entirely in your browser using pure JavaScript math with hardcoded,
              internationally accepted conversion factors. No data is ever sent to a server. You can
              verify this by opening your browser&apos;s Network tab — you will see zero outbound requests
              when you perform a unit conversion.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Accuracy</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              We use officially defined conversion factors wherever possible. For example, 1 inch is
              defined as exactly 2.54 centimeters by international agreement since 1959. Results are
              displayed to up to 6 significant figures, which is more than sufficient for everyday use.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Privacy</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              We take your privacy seriously. Since all conversions happen client-side, your values
              never leave your device. We use Google AdSense for advertising, which may use cookies.
              See our <a href="/privacy" className="text-[#2563EB] hover:underline">Privacy Policy</a> for details.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
