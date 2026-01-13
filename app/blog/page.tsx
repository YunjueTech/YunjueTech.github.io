import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import SimpleBlogLayout from '@/layouts/SimpleBlogLayout'

export const metadata = genPageMetadata({ title: 'Blog' })

export default async function BlogPage() {
  // Filter out drafts in production
  const isProduction = process.env.NODE_ENV === 'production'
  const filteredBlogs = isProduction
    ? allBlogs.filter((post) => post.draft !== true)
    : allBlogs
  const posts = allCoreContent(sortPosts(filteredBlogs))

  return (
    <SimpleBlogLayout
      posts={posts}
      title="Blog"
      subtitle="Shared science and news from the team"
    />
  )
}
