'use client'

import { convert, formatValue, CONVERSION_DATA } from '@/lib/conversions'
import type { Category } from '@/lib/conversions'

interface Props {
  category: Category
  value: number
  fromUnit: string
}

export default function ConversionTable({ category, value, fromUnit }: Props) {
  const { units } = CONVERSION_DATA[category]
  const isValid = isFinite(value) && !isNaN(value)

  return (
    <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 dark:bg-[#1e293b]">
            <th className="px-4 py-2.5 text-left font-semibold text-gray-600 dark:text-gray-300 w-1/2">Unit</th>
            <th className="px-4 py-2.5 text-right font-semibold text-gray-600 dark:text-gray-300 w-1/2">Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(units).map(([key, info], i) => {
            const result = isValid ? convert(value, fromUnit, key, category) : null
            const isFrom = key === fromUnit
            return (
              <tr
                key={key}
                className={`border-t border-gray-50 dark:border-gray-800 ${
                  isFrom
                    ? 'bg-blue-50 dark:bg-blue-950/40'
                    : i % 2 === 0
                    ? 'bg-white dark:bg-[#0f172a]'
                    : 'bg-gray-50/50 dark:bg-[#1e293b]/50'
                }`}
              >
                <td
                  className={`px-4 py-2.5 ${
                    isFrom
                      ? 'font-semibold text-[#2563EB] dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {info.label}
                </td>
                <td
                  className={`px-4 py-2.5 text-right font-mono ${
                    isFrom
                      ? 'font-semibold text-[#2563EB] dark:text-blue-400'
                      : 'text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {result !== null ? formatValue(result) : '—'}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
