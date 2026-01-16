import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import SimpleBlogLayout from '@/layouts/SimpleBlogLayout'
import { getTranslation } from '@/data/translations'
import type { Locale } from '@/lib/i18n'
import { locales } from '@/lib/i18n'

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }))
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}): Promise<ReturnType<typeof genPageMetadata>> {
  const params = await props.params
  const locale = params.locale as Locale
  const title = getTranslation('blog.title', locale)
  return genPageMetadata({ title })
}

export default async function BlogPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params
  const locale = (params.locale || 'en') as Locale
  const t = (key: string) => getTranslation(key, locale)

  // Filter out drafts in production
  const isProduction = process.env.NODE_ENV === 'production'
  const filteredBlogs = isProduction ? allBlogs.filter((post) => post.draft !== true) : allBlogs
  const posts = allCoreContent(sortPosts(filteredBlogs))

  return (
    <SimpleBlogLayout
      posts={posts}
      title={t('blog.title')}
      subtitle={t('blog.subtitle')}
      locale={locale}
    />
  )
}
