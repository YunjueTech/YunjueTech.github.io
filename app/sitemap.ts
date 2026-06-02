import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .map((post) => {
      const base = post.locale === 'en' ? `${siteUrl}/en/blog` : `${siteUrl}/blog`
      return {
        url: `${base}/${post.slug}`,
        lastModified: post.lastmod || post.date,
      }
    })

  const routes = ['', 'tech', 'products', 'joinus', 'blog'].map((route) => ({
    url: route ? `${siteUrl}/${route}` : siteUrl,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  const enRoutes = ['', 'tech', 'products', 'joinus', 'blog'].map((route) => ({
    url: route ? `${siteUrl}/en/${route}` : `${siteUrl}/en`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...enRoutes, ...blogRoutes]
}
