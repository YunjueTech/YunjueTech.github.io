'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { defaultLocale, locales, type Locale, getLocaleFromPath } from '@/lib/i18n'

/**
 * 客户端语言重定向组件
 * 用于静态导出模式下处理根路径的语言重定向
 */
export default function LocaleRedirect() {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    // 如果路径已经包含语言前缀，不需要重定向
    if (getLocaleFromPath(pathname)) {
      return
    }

    // 检测应该使用的语言
    let locale: Locale = defaultLocale

    // 1. 检查 localStorage（客户端存储的语言偏好）
    if (typeof window !== 'undefined') {
      const storedLocale = localStorage.getItem('locale')
      if (storedLocale && locales.includes(storedLocale as Locale)) {
        locale = storedLocale as Locale
      } else {
        // 2. 检查 cookie
        const cookies = document.cookie.split(';')
        const localeCookie = cookies.find((cookie) => cookie.trim().startsWith('locale='))
        if (localeCookie) {
          const cookieValue = localeCookie.split('=')[1]?.trim()
          if (cookieValue && locales.includes(cookieValue as Locale)) {
            locale = cookieValue as Locale
          }
        } else {
          // 3. 检查浏览器语言
          const navigatorWithUserLanguage = navigator as Navigator & { userLanguage?: string }
          const browserLang = navigator.language || navigatorWithUserLanguage.userLanguage
          if (browserLang && browserLang.toLowerCase().includes('zh')) {
            locale = 'zh'
          }
        }
      }
    }

    // 构建重定向路径
    // 注意：在静态导出模式下，pathname 已经是相对于根路径的
    const newPath = `/${locale}${pathname === '/' ? '' : pathname}`

    // 执行重定向
    router.replace(newPath)
  }, [pathname, router])

  return null
}
