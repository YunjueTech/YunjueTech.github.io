'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { getLocaleFromPath, defaultLocale } from '@/lib/i18n'

export default function HtmlLangSetter() {
  const pathname = usePathname()
  const locale = getLocaleFromPath(pathname) || defaultLocale

  useEffect(() => {
    const lang = locale === 'zh' ? 'zh-CN' : 'en-US'
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
    }
  }, [locale])

  return null
}

