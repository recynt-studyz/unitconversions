'use client'

import { useState, useMemo } from 'react'
import { convert, formatValue, CONVERSION_DATA } from '@/lib/conversions'
import type { Category } from '@/lib/conversions'

interface Props {
  category: Category
  fromUnit: string
  toUnit: string
}

export default function PairConverter({ category, fromUnit, toUnit }: Props) {
  const data = CONVERSION_DATA[category]
  const [inputValue, setInputValue] = useState('1')

  const numericValue = useMemo(() => parseFloat(inputValue), [inputValue])

  const result = useMemo(() => {
    if (isNaN(numericValue)) return ''
    const r = convert(numericValue, fromUnit, toUnit, category)
    return formatValue(r)
  }, [numericValue, fromUnit, toUnit, category])

  const fromLabel = data.units[fromUnit]?.label ?? fromUnit
  const toLabel = data.units[toUnit]?.label ?? toUnit

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="flex-1">
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1.5">
            {fromLabel}
          </label>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#1e293b] px-4 py-3 text-xl font-mono text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
            placeholder="Enter value"
          />
        </div>
        <div className="flex items-end justify-center sm:pb-0 pb-1">
          <span className="text-2xl text-gray-400 font-bold px-2 pb-3">→</span>
        </div>
        <div className="flex-1">
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1.5">
            {toLabel}
          </label>
          <input
            readOnly
            value={result}
            className="w-full rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0f172a] px-4 py-3 text-xl font-mono text-gray-900 dark:text-white cursor-default select-all"
            placeholder="Result"
          />
        </div>
      </div>
    </div>
  )
}
