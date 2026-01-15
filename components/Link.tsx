/* eslint-disable jsx-a11y/anchor-has-content */
'use client'

import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'
import { usePathname } from 'next/navigation'
import { getLocaleFromPath, defaultLocale, addLocaleToPath } from '@/lib/i18n'

const CustomLink = ({ href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const pathname = usePathname()
  const currentLocale = getLocaleFromPath(pathname) || defaultLocale
  
  const isInternalLink = href && typeof href === 'string' && href.startsWith('/')
  const isAnchorLink = href && typeof href === 'string' && href.startsWith('#')
  const isExternalLink = href && typeof href === 'string' && (href.startsWith('http') || href.startsWith('mailto:'))

  if (isInternalLink && typeof href === 'string') {
    // Check if href already has locale prefix
    const hasLocale = href.split('/').filter(Boolean)[0] === 'en' || href.split('/').filter(Boolean)[0] === 'zh'
    const finalHref = hasLocale ? href : addLocaleToPath(href, currentLocale)
    return <Link className="break-words" href={finalHref} {...rest} />
  }

  if (isAnchorLink) {
    return <a className="break-words" href={href} {...rest} />
  }

  if (isExternalLink) {
    return (
      <a className="break-words" target="_blank" rel="noopener noreferrer" href={href} {...rest} />
    )
  }

  return <Link className="break-words" href={href} {...rest} />
}

export default CustomLink
