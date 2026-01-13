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
      <div className="pt-12 pb-8">
        <h1 className="mb-2 text-4xl font-bold text-gray-900 dark:text-gray-100">{title}</h1>
        {subtitle && <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>}
      </div>
      <ul className="space-y-0">
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
            <li key={path} className="py-1">
              <article className="flex items-start gap-4">
                <time
                  dateTime={date}
                  className="text-sm whitespace-nowrap text-gray-500 dark:text-gray-400"
                >
                  {formattedDate}
                </time>
                <div className="min-w-0 flex-1">
                  <Link
                    href={`/${path}`}
                    className="hover:text-primary-500 dark:hover:text-primary-400 inline text-gray-900 dark:text-gray-100"
                  >
                    {title}
                  </Link>
                  {authorNames && (
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
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
