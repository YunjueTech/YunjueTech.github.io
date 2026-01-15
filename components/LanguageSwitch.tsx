'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { switchLocaleInPath, getLocaleFromPath, defaultLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'

const LanguageSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => setMounted(true), [])

  const currentLocale = getLocaleFromPath(pathname) || defaultLocale
  // 目标语言：中文页面显示 English，英文页面显示中文
  const targetLocale: Locale = currentLocale === 'zh' ? 'en' : 'zh'
  const displayText = currentLocale === 'zh' ? 'English' : '中文'

  const handleLanguageChange = () => {
    const newPath = switchLocaleInPath(pathname, targetLocale)
    router.push(newPath)
  }

  if (!mounted) {
    return <div className="h-6 w-20" />
  }

  return (
    <button
      onClick={handleLanguageChange}
      aria-label="Language switcher"
      className="hover:text-primary-500 dark:hover:text-primary-400 text-sm font-medium"
    >
      {displayText}
    </button>
  )
}

export default LanguageSwitch

