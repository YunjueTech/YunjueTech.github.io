import { genPageMetadata } from 'app/seo'
import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import SimpleBlogLayout from '@/layouts/SimpleBlogLayout'

export const metadata = genPageMetadata({
  title: 'Blog',
  description: 'Yunjue Technology engineering / product / research blog.',
})

export default function BlogEnPage() {
  const posts = allCoreContent(sortPosts(allBlogs.filter((p) => p.locale === 'en')))
  return (
    <SimpleBlogLayout
      posts={posts}
      title="Blog"
      subtitle="Engineering · product · research"
      locale="en"
    />
  )
}
