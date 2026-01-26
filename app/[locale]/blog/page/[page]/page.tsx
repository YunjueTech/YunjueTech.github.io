import SimpleBlogLayout from '@/layouts/SimpleBlogLayout'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { getTranslation } from '@/data/translations'
import type { Locale } from '@/lib/i18n'
import type { Blog } from 'contentlayer/generated'

interface BlogWithLocale extends Blog {
  locale?: string
}

const POSTS_PER_PAGE = 5

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(allBlogs.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
    locale: 'en',
  })).concat(
    Array.from({ length: totalPages }, (_, i) => ({
      page: (i + 1).toString(),
      locale: 'zh',
    }))
  )

  return paths
}

export default async function Page(props: { params: Promise<{ page: string; locale: string }> }) {
  const params = await props.params
  const locale = (params.locale || 'en') as Locale
  const t = (key: string) => getTranslation(key, locale)

  // Filter by locale - only show posts matching the current language
  const filteredBlogs = allBlogs.filter((post) => {
    const postLocale = (post as BlogWithLocale).locale || 'en'
    return postLocale === locale
  })
  const posts = allCoreContent(sortPosts(filteredBlogs))
  const pageNumber = parseInt(params.page as string)
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  // Return 404 for invalid page numbers or empty pages
  if (pageNumber <= 0 || pageNumber > totalPages || isNaN(pageNumber)) {
    return notFound()
  }
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <SimpleBlogLayout
      posts={initialDisplayPosts}
      title={t('blog.title')}
      subtitle={t('blog.subtitle')}
      locale={locale}
    />
  )
}
