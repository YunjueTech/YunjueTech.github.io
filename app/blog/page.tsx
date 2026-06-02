import { genPageMetadata } from 'app/seo'
import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import SimpleBlogLayout from '@/layouts/SimpleBlogLayout'

export const metadata = genPageMetadata({
  title: '博客',
  description: '云玦科技的工程 / 产品 / 研究博客。',
})

export default function BlogPage() {
  const posts = allCoreContent(sortPosts(allBlogs.filter((p) => p.locale === 'zh')))
  return <SimpleBlogLayout posts={posts} title="博客" subtitle="工程 · 产品 · 研究" locale="zh" />
}
