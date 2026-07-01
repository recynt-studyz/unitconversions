'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CATEGORIES } from '@/lib/conversions'

export default function CategoryNav() {
  const pathname = usePathname()

  return (
    <nav aria-label="Unit category navigation" className="px-4 sm:px-6 overflow-x-auto">
      <div className="flex gap-1.5 py-3 min-w-max max-w-5xl mx-auto">
        {CATEGORIES.map(({ id, label, href }) => {
          const isActive = pathname === href || (pathname === '/' && id === 'length')
          return (
            <Link
              key={id}
              href={href}
              aria-current={isActive ? 'page' : undefined}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                isActive
                  ? 'bg-white text-[#2563EB] shadow-sm'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
