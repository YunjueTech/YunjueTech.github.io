import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { defaultLocale, locales, type Locale } from './lib/i18n'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 检查路径是否以语言代码开头
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // 如果路径已经包含语言前缀，直接通过
  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // 排除静态文件和 API 路由
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.') // 文件扩展名
  ) {
    return NextResponse.next()
  }

  // 尝试从 cookie 或 Accept-Language header 获取语言偏好
  let locale: Locale = defaultLocale

  // 首先检查 cookie
  const cookieLocale = request.cookies.get('locale')?.value
  if (cookieLocale && locales.includes(cookieLocale as Locale)) {
    locale = cookieLocale as Locale
  } else {
    // 检查 Accept-Language header
    const acceptLanguage = request.headers.get('accept-language')
    if (acceptLanguage) {
      // 简单检测：如果包含 'zh' 则使用中文，否则使用英文
      if (acceptLanguage.toLowerCase().includes('zh')) {
        locale = 'zh'
      }
    }
  }

  // 重定向到带语言前缀的路径
  const newUrl = request.nextUrl.clone()
  newUrl.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
  
  // 设置 cookie 以记住用户偏好
  const response = NextResponse.redirect(newUrl)
  response.cookies.set('locale', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
  })
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - static files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
}

