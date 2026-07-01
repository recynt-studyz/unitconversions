import type { Metadata } from 'next'
import ToolHeader from '@/components/ToolHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — unitconversions.app',
  description: 'Privacy policy for unitconversions.app — free online unit converter.',
  alternates: { canonical: 'https://unitconversions.app/privacy' },
}

export default function Privacy() {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[200px]"
        style={{ backgroundImage: "url('/herobguc.webp')" }}
      >
        <div className="absolute inset-0 bg-blue-900/65" />
        <div className="relative z-10 pb-8">
          <ToolHeader />
          <div className="text-center text-white px-4 py-8">
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white dark:from-[#0f172a] to-transparent pointer-events-none" />
      </section>

      <section className="bg-white dark:bg-[#0f172a] pt-8 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-sm text-gray-600 dark:text-gray-400 leading-relaxed space-y-6">
          <p className="text-gray-500 dark:text-gray-500">Last updated: January 2025</p>

          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Data we collect</h2>
            <p>
              unitconversions.app does not collect any personal data. All unit conversions are performed
              entirely in your browser using client-side JavaScript. No values you enter are transmitted
              to any server.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Advertising</h2>
            <p>
              We use Google AdSense to display advertisements. Google AdSense may use cookies and
              similar technologies to serve ads based on your prior visits to our website or other
              websites on the internet. You can opt out of personalized advertising by visiting{' '}
              <a href="https://www.google.com/settings/ads" className="text-[#2563EB] hover:underline" target="_blank" rel="noopener noreferrer">
                Google Ads Settings
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Analytics</h2>
            <p>
              We may use anonymized analytics to understand how users interact with the site. This data
              does not include any personally identifiable information.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Local storage</h2>
            <p>
              We store your dark mode preference in your browser&apos;s local storage so the site
              remembers your preference between visits. No personal data is stored.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Contact</h2>
            <p>
              If you have any questions about this privacy policy, please contact us via the link in the footer.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
