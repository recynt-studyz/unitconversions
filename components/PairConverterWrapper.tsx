'use client'

import dynamic from 'next/dynamic'
import type { Category } from '@/lib/conversions'

const PairConverter = dynamic(() => import('./PairConverter'), { ssr: false })

interface Props {
  category: Category
  fromUnit: string
  toUnit: string
}

export default function PairConverterWrapper(props: Props) {
  return <PairConverter {...props} />
}
