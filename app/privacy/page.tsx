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
        <div className="absolute inset-0 bg-black/50" />
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
              entirely in your browser using client-side JavaScript. No values you enter into any
              converter are transmitted to any server, logged, or stored anywhere. You can verify this
              by opening your browser&apos;s Developer Tools, navigating to the Network tab, and performing
              a conversion — you will observe zero outbound data requests related to the conversion.
              There is no user account system on this site. No email address, name, location, or any
              other identifying information is collected or required to use any feature of the site.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Advertising</h2>
            <p>
              We use Google AdSense to display advertisements. Google AdSense may use cookies and
              similar technologies to serve ads based on your prior visits to our website or other
              websites on the internet. These advertising cookies are set by Google, not by
              unitconversions.app, and are governed by Google&apos;s privacy policy. Google AdSense never
              receives any conversion values you enter — it only sees that you visited this page.
              You can opt out of personalized advertising by visiting{' '}
              <a href="https://www.google.com/settings/ads" className="text-[#2563EB] hover:underline" target="_blank" rel="noopener noreferrer">
                Google Ads Settings
              </a>
              . You can also manage cookie preferences through your browser settings or by using a
              browser extension that blocks advertising cookies.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Analytics</h2>
            <p>
              We use Google Analytics 4 (GA4) to understand how users interact with the site in
              aggregate. Google Analytics collects anonymized data including pages visited, time on
              page, device type (desktop/mobile/tablet), browser type, country-level location (not
              city or street level), and how users arrived at the site (direct, search, referral).
              This data is used solely to improve the site — for example, to understand which
              converters are most used, which pages take too long to load, or whether mobile users
              are having a good experience. Google Analytics does not receive any values you enter
              into the converters. It does not identify you personally. You can opt out of Google
              Analytics tracking across all websites using the{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" className="text-[#2563EB] hover:underline" target="_blank" rel="noopener noreferrer">
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Local storage</h2>
            <p>
              We store your dark mode preference in your browser&apos;s local storage so the site
              remembers your preference between visits. This is a single key-value pair
              (unitconversions-theme: &quot;dark&quot; or &quot;light&quot;) stored only in your browser.
              It is never read by our servers or transmitted anywhere. No other data is written
              to local storage or cookies by unitconversions.app itself.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">No conversion history stored</h2>
            <p>
              We do not store any record of conversions you perform. There is no database of
              &quot;user X converted 100 kg to pounds on date Y.&quot; Each conversion you perform exists
              only in your browser while you have the page open. Closing the tab or navigating
              away discards it permanently. We have no way to retrieve past conversions, and we
              do not want one. This is a deliberate design decision to protect your privacy.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Third-party services</h2>
            <p>
              This site uses Google AdSense (advertising) and Google Analytics (aggregate usage
              statistics). Both are operated by Google LLC and governed by Google&apos;s privacy policy.
              If you are in the European Union or California, Google&apos;s data processing is subject
              to GDPR and CCPA requirements respectively, and Google provides mechanisms for
              compliance with both regulations. No other third-party services have access to
              data from this site.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Children&apos;s privacy</h2>
            <p>
              This site does not knowingly collect any data from children under the age of 13.
              The site contains no registration or user-generated content features. Unit converters
              are general-purpose educational tools appropriate for all ages.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Contact</h2>
            <p>
              If you have any questions about this privacy policy or how this site handles data,
              please contact us via the link in the footer. We will respond to privacy inquiries
              as promptly as possible.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
