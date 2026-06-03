/* eslint-disable jsx-a11y/anchor-has-content */
'use client'

import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'

const CustomLink = ({ href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isAnchorLink = href && typeof href === 'string' && href.startsWith('#')
  // mailto:/tel: 唤起本地客户端，绝不能带 target="_blank"（否则会先弹一个空白标签页）
  const isProtocolLink =
    href && typeof href === 'string' && (href.startsWith('mailto:') || href.startsWith('tel:'))
  const isExternalLink = href && typeof href === 'string' && href.startsWith('http')

  if (isAnchorLink || isProtocolLink) {
    return <a className="break-words" href={href as string} {...rest} />
  }

  if (isExternalLink) {
    return (
      <a
        className="break-words"
        target="_blank"
        rel="noopener noreferrer"
        href={href as string}
        {...rest}
      />
    )
  }

  return <Link className="break-words" href={href} {...rest} />
}

export default CustomLink
