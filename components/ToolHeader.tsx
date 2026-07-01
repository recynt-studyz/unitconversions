'use client'

import { useState, useEffect } from 'react'
import CategoryNav from './CategoryNav'

export default function ToolHeader() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const sync = () => setDarkMode(document.documentElement.classList.contains('dark'))
    sync()
    const obs = new MutationObserver(sync)
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => obs.disconnect()
  }, [])

  const toggleDark = () => {
    const next = !darkMode
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('unitconversions-theme', next ? 'dark' : 'light')
    } catch {
      // ignore
    }
  }

  return (
    <header className="px-4 sm:px-6 pt-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <a
          href="/"
          className="font-mono font-bold text-xl text-white tracking-tight hover:text-blue-200 transition-colors"
        >
          unitconversions.app
        </a>
        <button
          onClick={toggleDark}
          className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>
      <CategoryNav />
    </header>
  )
}
