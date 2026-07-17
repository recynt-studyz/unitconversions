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
        style={{ backgroundImage: "url('/herobguc.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
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
              There are no accounts, no sign-ups, and no conversion limits. Every tool on the site works
              immediately, in your browser, with no installation required.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why we built it</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              The world uses two major measurement systems — the metric system (SI), used by nearly every
              country on Earth, and the US customary system, used primarily in the United States. These
              systems differ in their units for almost every physical quantity: kilometers versus miles,
              kilograms versus pounds, liters versus gallons, Celsius versus Fahrenheit. People cross these
              boundaries constantly: cooking from a foreign recipe, reading international news, buying
              imported goods, traveling abroad, working with colleagues in other countries, or studying
              science and engineering. Unit conversion is a universal need that touches daily life in ways
              most people don&apos;t consciously notice. We built unitconversions.app to make that need trivially
              easy to satisfy — fast, accurate, and free.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Who uses unit converters</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Unit converters serve an enormous range of users. Students encounter metric units in
              science classes while living in a country that uses customary units, requiring constant
              translation. Home cooks and bakers adapt international recipes that use grams, milliliters,
              and Celsius when their kitchen tools measure in cups, ounces, and Fahrenheit. Travelers
              crossing borders encounter speed limit signs, temperature forecasts, and fuel prices in
              unfamiliar units. Engineers, architects, and scientists routinely work across measurement
              systems when collaborating internationally or reading technical literature. Online shoppers
              buying from foreign retailers must interpret clothing sizes, product weights, and screen
              dimensions in metric terms. Healthcare professionals and patients convert medical measurements —
              body weight for drug dosing, blood pressure in mmHg versus kPa, temperature in Celsius
              versus Fahrenheit. In short, almost anyone who encounters the wider world beyond their home
              country needs unit conversion tools regularly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How it works</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              All conversions run entirely in your browser using pure JavaScript math with hardcoded,
              internationally accepted conversion factors. No data is ever sent to a server. You can
              verify this by opening your browser&apos;s Network tab — you will see zero outbound requests
              when you perform a unit conversion. Conversion factors come from official international
              standards bodies wherever possible: the International Bureau of Weights and Measures (BIPM),
              the US National Institute of Standards and Technology (NIST), and the 1959 international
              yard and pound agreement. For special cases like temperature (which requires a shift, not
              just a scale) and fuel economy (where MPG and L/100km are inversely related), the converter
              applies the correct formula automatically.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Accuracy</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              We use officially defined conversion factors wherever possible. For example, 1 inch is
              defined as exactly 2.54 centimeters by international agreement since 1959. 1 pound is
              exactly 453.59237 grams. 1 US gallon is exactly 3.785411784 liters. Results are
              displayed to up to 6 significant figures, which is more than sufficient for everyday use.
              In the rare cases where an exact definition does not exist and a rounded factor is used,
              we document the precision on the relevant page.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What&apos;s covered</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              The site includes 14 full category converters that let you switch between any pair of units
              within a category. It also includes 16 dedicated pair-converter pages for the most common
              conversions — inches to cm, kg to lbs, miles to km, Fahrenheit to Celsius, and more —
              each with detailed explanation of the formula, worked real-world examples, and a quick
              reference table. All pages are optimized for mobile use so you can convert on the go from
              any device without needing an app.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Privacy</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              We take your privacy seriously. Since all conversions happen client-side, your values
              never leave your device. We use Google AdSense for advertising, which may use cookies,
              and Google Analytics to understand aggregate site usage — neither service receives your
              conversion values. No account is required, and we store nothing about your usage beyond
              your dark mode preference in browser local storage.
              See our <a href="/privacy" className="text-[#2563EB] hover:underline">Privacy Policy</a> for details.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
