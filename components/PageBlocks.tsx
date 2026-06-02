import type { ReactNode } from 'react'
import Link from '@/components/Link'

type Tone = 'primary' | 'dark' | 'subtle'

interface HeroProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  cta?: { href: string; label: string; tone?: Tone }[]
}

export function Hero({ eyebrow, title, subtitle, cta }: HeroProps) {
  return (
    <section className="pt-16 pb-16 md:pt-24 md:pb-24">
      <div className="max-w-4xl">
        {eyebrow && (
          <p className="text-primary-500 dark:text-primary-400 mb-6 text-sm font-semibold tracking-wider uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="mb-6 text-4xl leading-tight font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-gray-100">
          {title}
        </h1>
        {subtitle && (
          <div className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl dark:text-gray-400">
            {subtitle}
          </div>
        )}
        {cta && cta.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-4">
            {cta.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.tone === 'subtle'
                    ? 'inline-flex items-center rounded-md border border-gray-300 px-6 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-900'
                    : 'inline-flex items-center rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200'
                }
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

interface SectionProps {
  id?: string
  eyebrow?: string
  title?: ReactNode
  subtitle?: ReactNode
  children: ReactNode
  bordered?: boolean
}

export function Section({ id, eyebrow, title, subtitle, children, bordered = true }: SectionProps) {
  return (
    <section
      id={id}
      className={
        bordered ? 'border-t border-gray-200 py-16 md:py-24 dark:border-gray-800' : 'py-16 md:py-24'
      }
    >
      <div className="max-w-5xl">
        {eyebrow && (
          <p className="text-primary-500 dark:text-primary-400 mb-3 text-sm font-semibold tracking-wider uppercase">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="mb-6 text-3xl font-semibold text-gray-900 md:text-4xl dark:text-gray-100">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="mb-10 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            {subtitle}
          </p>
        )}
        <div className="space-y-6">{children}</div>
      </div>
    </section>
  )
}

interface PillarCardProps {
  index: string
  title: string
  caption?: string
  children: ReactNode
}

export function PillarCard({ index, title, caption, children }: PillarCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-950">
      <div className="text-primary-500 dark:text-primary-400 mb-3 text-sm font-semibold tracking-widest">
        {index}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      {caption && <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">{caption}</p>}
      <div className="text-base leading-relaxed text-gray-700 dark:text-gray-300">{children}</div>
    </div>
  )
}

interface StatProps {
  label: string
  value: string
  hint?: string
}

export function Stat({ label, value, hint }: StatProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
      <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">{value}</div>
      <div className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">{label}</div>
      {hint && <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{hint}</div>}
    </div>
  )
}

interface CodeBlockProps {
  children: ReactNode
}

export function CodeBlock({ children }: CodeBlockProps) {
  return (
    <pre className="overflow-x-auto rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm leading-relaxed text-gray-800 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <code>{children}</code>
    </pre>
  )
}
