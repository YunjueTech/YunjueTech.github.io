import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import type { Locale } from '@/lib/i18n'
import { locales } from '@/lib/i18n'

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }))
}

export default async function Page(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params
  const locale = (params.locale || 'en') as Locale
  
  // Filter posts by locale
  const filteredBlogs = allBlogs.filter((post) => {
    const postLocale = (post as any).locale || 'en'
    return postLocale === locale
  })
  
  const sortedPosts = sortPosts(filteredBlogs)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} locale={locale} />
}
