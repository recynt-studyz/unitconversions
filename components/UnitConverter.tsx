'use client'

import { useState, useMemo } from 'react'
import { convert, formatValue, CONVERSION_DATA } from '@/lib/conversions'
import type { Category } from '@/lib/conversions'
import ConversionTable from './ConversionTable'
import AdBanner from './AdBanner'

interface Props {
  category: Category
  initialFrom?: string
  initialTo?: string
}

export default function UnitConverter({ category, initialFrom, initialTo }: Props) {
  const data = CONVERSION_DATA[category]
  const unitKeys = Object.keys(data.units)

  const [fromUnit, setFromUnit] = useState(initialFrom ?? data.defaultFrom)
  const [toUnit, setToUnit] = useState(initialTo ?? data.defaultTo)
  const [inputValue, setInputValue] = useState('1')

  const numericValue = useMemo(() => parseFloat(inputValue), [inputValue])

  const result = useMemo(() => {
    if (isNaN(numericValue)) return ''
    const r = convert(numericValue, fromUnit, toUnit, category)
    return formatValue(r)
  }, [numericValue, fromUnit, toUnit, category])

  const swap = () => {
    setFromUnit(toUnit)
    setToUnit(fromUnit)
  }

  return (
    <div>
      {/* Converter inputs */}
      <div className="p-6">
        {/* From row */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#1e293b] px-4 py-3 text-xl font-mono text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
            placeholder="Enter value"
          />
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="sm:w-52 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#1e293b] px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          >
            {unitKeys.map((k) => (
              <option key={k} value={k}>
                {data.units[k].label}
              </option>
            ))}
          </select>
        </div>

        {/* Swap button */}
        <div className="flex justify-center mb-4">
          <button
            onClick={swap}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2563EB] text-white text-2xl font-bold hover:bg-blue-700 active:scale-95 transition shadow-md"
            aria-label="Swap units"
          >
            ⇄
          </button>
        </div>

        {/* To row */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            readOnly
            value={result}
            className="flex-1 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0f172a] px-4 py-3 text-xl font-mono text-gray-900 dark:text-white cursor-default select-all"
            placeholder="Result"
          />
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="sm:w-52 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#1e293b] px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          >
            {unitKeys.map((k) => (
              <option key={k} value={k}>
                {data.units[k].label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Ad between inputs and table */}
      <div className="px-4">
        <AdBanner slot="2222222222" />
      </div>

      {/* Conversion table */}
      <div className="p-4 pt-2">
        <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3 px-1">
          All {category.charAt(0).toUpperCase() + category.slice(1)} Units
        </h2>
        <ConversionTable category={category} value={numericValue} fromUnit={fromUnit} />
      </div>
    </div>
  )
}
