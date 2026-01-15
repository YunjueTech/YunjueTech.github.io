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
      {/* Hero Section */}
      <div className="pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="max-w-4xl">
          <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl dark:text-gray-100">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-8 text-2xl text-gray-600 md:text-3xl dark:text-gray-400">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Posts Section */}
      <section className="border-t border-gray-200 py-16 md:py-24 dark:border-gray-800">
        <div className="max-w-4xl">
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
                <li key={path} className="border-b border-gray-200 pb-8 last:border-b-0 dark:border-gray-800">
                  <article>
                    <time
                      dateTime={date}
                      className="text-base text-gray-500 dark:text-gray-400"
                    >
                      {formattedDate}
                    </time>
                    <h3 className="mb-2 mt-2 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                      <Link
                        href={`/${path}`}
                        className="hover:text-primary-500 dark:hover:text-primary-400"
                      >
                        {title}
                      </Link>
                    </h3>
                    {authorNames && (
                      <p className="text-lg text-gray-500 dark:text-gray-400">{authorNames}</p>
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
