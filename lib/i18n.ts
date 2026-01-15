export type Locale = 'en' | 'zh'

export const defaultLocale: Locale = 'en'
export const locales: Locale[] = ['en', 'zh']

/**
 * 从路径中提取语言代码
 * @param pathname - 路径名，如 '/en/products' 或 '/zh/blog'
 * @returns 语言代码或 null
 */
export function getLocaleFromPath(pathname: string): Locale | null {
  const segments = pathname.split('/').filter(Boolean)
  if (segments.length === 0) return null
  
  const firstSegment = segments[0]
  if (locales.includes(firstSegment as Locale)) {
    return firstSegment as Locale
  }
  
  return null
}

/**
 * 从路径中移除语言前缀
 * @param pathname - 路径名，如 '/en/products' 或 '/zh/blog'
 * @returns 移除语言前缀后的路径，如 '/products' 或 '/blog'
 */
export function removeLocaleFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean)
  if (segments.length === 0) return '/'
  
  if (locales.includes(segments[0] as Locale)) {
    return '/' + segments.slice(1).join('/')
  }
  
  return pathname
}

/**
 * 为路径添加语言前缀
 * @param pathname - 路径名，如 '/products' 或 '/blog'
 * @param locale - 语言代码
 * @returns 带语言前缀的路径，如 '/en/products' 或 '/zh/blog'
 */
export function addLocaleToPath(pathname: string, locale: Locale): string {
  // 如果路径已经是根路径，直接返回语言路径
  if (pathname === '/') {
    return `/${locale}`
  }
  
  // 移除前导斜杠
  const cleanPath = pathname.startsWith('/') ? pathname.slice(1) : pathname
  
  // 如果路径已经包含语言前缀，先移除
  const segments = cleanPath.split('/').filter(Boolean)
  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    segments.shift()
  }
  
  // 添加新的语言前缀
  return `/${locale}${segments.length > 0 ? '/' + segments.join('/') : ''}`
}

/**
 * 切换路径中的语言
 * @param pathname - 当前路径名，如 '/en/products'
 * @param newLocale - 新语言代码
 * @returns 切换语言后的路径，如 '/zh/products'
 */
export function switchLocaleInPath(pathname: string, newLocale: Locale): string {
  const pathWithoutLocale = removeLocaleFromPath(pathname)
  return addLocaleToPath(pathWithoutLocale, newLocale)
}

/**
 * 从 localStorage 获取用户语言偏好
 * @returns 语言代码或 null
 */
export function getLocaleFromStorage(): Locale | null {
  if (typeof window === 'undefined') return null
  const stored = localStorage.getItem('locale')
  if (stored && locales.includes(stored as Locale)) {
    return stored as Locale
  }
  return null
}

/**
 * 保存用户语言偏好到 localStorage
 * @param locale - 语言代码
 */
export function saveLocaleToStorage(locale: Locale): void {
  if (typeof window === 'undefined') return
  localStorage.setItem('locale', locale)
}

