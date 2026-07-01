'use client'

import dynamic from 'next/dynamic'
import type { Category } from '@/lib/conversions'

const UnitConverter = dynamic(() => import('./UnitConverter'), { ssr: false })

interface Props {
  category: Category
  initialFrom?: string
  initialTo?: string
}

export default function UnitConverterWrapper(props: Props) {
  return <UnitConverter {...props} />
}
