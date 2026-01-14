import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { allAuthors } from 'contentlayer/generated'
import { coreContent } from 'pliny/utils/contentlayer'
import type { Authors } from 'contentlayer/generated'

interface SimpleBlogLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  subtitle?: string
}

export default function SimpleBlogLayout({ posts, title, subtitle }: SimpleBlogLayoutProps) {
  return (
    <>
      <div className="pt-16 pb-12 md:pt-24 md:pb-16">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl dark:text-gray-100">{title}</h1>
        {subtitle && <p className="mt-6 text-2xl leading-relaxed text-gray-600 md:text-3xl dark:text-gray-400">{subtitle}</p>}
      </div>
      <ul className="space-y-1 border-t border-gray-200 pt-8 dark:border-gray-800">
        {posts.map((post) => {
          const { path, date, title, authors } = post
          const authorList = authors || ['default']
          const authorDetails = authorList.map((author) => {
            const authorResults = allAuthors.find((p) => p.slug === author)
            return coreContent(authorResults as Authors)
          })
          const authorNames = authorDetails
            .map((author) => author?.name || '')
            .filter(Boolean)
            .join(', ')

          // Format date as "Mon DD, YYYY" similar to thinkingmachines.ai
          const postDate = new Date(date)
          const formattedDate = postDate.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })

          return (
            <li key={path} className="py-4 border-b border-gray-200 last:border-b-0 dark:border-gray-800">
              <article className="flex items-start gap-6">
                <time
                  dateTime={date}
                  className="text-base whitespace-nowrap text-gray-500 dark:text-gray-400 min-w-[120px]"
                >
                  {formattedDate}
                </time>
                <div className="min-w-0 flex-1">
                  <Link
                    href={`/${path}`}
                    className="hover:text-primary-500 dark:hover:text-primary-400 inline-block text-xl font-medium text-gray-900 dark:text-gray-100"
                  >
                    {title}
                  </Link>
                  {authorNames && (
                    <span className="ml-3 text-base text-gray-500 dark:text-gray-400">
                      {authorNames}
                    </span>
                  )}
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </>
  )
}
