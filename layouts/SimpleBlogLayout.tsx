import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import { allAuthors, type Authors } from 'contentlayer/generated'
import { coreContent } from 'pliny/utils/contentlayer'

interface SimpleBlogLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  subtitle?: string
  locale?: 'zh' | 'en'
}

export default function SimpleBlogLayout({
  posts,
  title,
  subtitle,
  locale = 'zh',
}: SimpleBlogLayoutProps) {
  const blogBase = locale === 'en' ? '/en/blog' : '/blog'
  const dateLocale = locale === 'en' ? 'en-US' : 'zh-CN'
  return (
    <>
      <div className="pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="max-w-4xl">
          <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-7xl dark:text-gray-100">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-8 text-xl text-gray-600 md:text-2xl dark:text-gray-400">{subtitle}</p>
          )}
        </div>
      </div>

      <section className="border-t border-gray-200 py-16 md:py-24 dark:border-gray-800">
        <div className="max-w-4xl">
          <ul className="space-y-0">
            {posts.map((post) => {
              const { path, slug, date, title, summary, authors } = post
              const authorList = authors || ['default']
              const authorNames = authorList
                .map((author) => {
                  const a = allAuthors.find((p) => p.slug === author)
                  return a ? coreContent(a as Authors).name : ''
                })
                .filter(Boolean)
                .join(', ')

              const formattedDate = new Date(date).toLocaleDateString(dateLocale, {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })

              return (
                <li
                  key={path}
                  className="border-b border-gray-200 pb-12 last:border-b-0 dark:border-gray-800"
                >
                  <article className="pt-12">
                    <time
                      dateTime={date}
                      className="mb-4 block text-sm text-gray-500 dark:text-gray-400"
                    >
                      {formattedDate}
                    </time>
                    <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                      <Link
                        href={`${blogBase}/${slug}`}
                        className="hover:text-primary-500 dark:hover:text-primary-400"
                      >
                        {title}
                      </Link>
                    </h3>
                    {summary && (
                      <p className="mb-3 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                        {summary}
                      </p>
                    )}
                    {authorNames && (
                      <p className="text-base text-gray-500 dark:text-gray-400">{authorNames}</p>
                    )}
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}
