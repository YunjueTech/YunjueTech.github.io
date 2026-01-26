import 'css/prism.css'
import 'katex/dist/katex.css'

import PageTitle from '@/components/PageTitle'
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { sortPosts, coreContent, allCoreContent, CoreContent } from 'pliny/utils/contentlayer'
import { allBlogs, allAuthors } from 'contentlayer/generated'
import type { Authors, Blog } from 'contentlayer/generated'
import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/layouts/PostLayout'
import PostBanner from '@/layouts/PostBanner'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'
import type { Locale } from '@/lib/i18n'

interface AuthorWithNameEn extends Authors {
  nameEn?: string
}

const defaultLayout = 'PostLayout'
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string[]; locale: string }>
}): Promise<Metadata | undefined> {
  const params = await props.params
  const locale = params.locale as Locale
  const slug = decodeURI(params.slug.join('/'))

  // Find post matching both slug and locale
  const post = allBlogs.find((p) => {
    const postLocale = (p as Blog & { locale: string }).locale || 'en'
    return p.slug === slug && postLocale === locale
  })

  if (!post) {
    return
  }
  const authorList = post?.authors || ['default']
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    return coreContent(authorResults as Authors)
  })

  // Use the post's title directly
  const displayTitle = post.title

  // 根据语言选择作者名
  const authors = authorDetails.map((author) => {
    if (locale === 'zh') {
      return author.name
    }
    const authorWithNameEn = author as AuthorWithNameEn
    return authorWithNameEn.nameEn || author.name
  })

  const publishedAt = new Date(post.date).toISOString()
  const modifiedAt = new Date(post.lastmod || post.date).toISOString()
  let imageList = [siteMetadata.socialBanner]
  if (post.images) {
    imageList = typeof post.images === 'string' ? [post.images] : post.images
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img && img.includes('http') ? img : siteMetadata.siteUrl + img,
    }
  })

  return {
    title: displayTitle,
    description: post.summary,
    openGraph: {
      title: displayTitle,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: displayTitle,
      description: post.summary,
      images: imageList,
    },
  }
}

export const generateStaticParams = async () => {
  // Only generate params for posts that match their locale
  const enPosts = allBlogs.filter((p) => ((p as Blog & { locale: string }).locale || 'en') === 'en')
  const zhPosts = allBlogs.filter((p) => ((p as Blog & { locale: string }).locale || 'en') === 'zh')

  return enPosts
    .map((p) => ({
      slug: p.slug.split('/').map((name) => decodeURI(name)),
      locale: 'en',
    }))
    .concat(
      zhPosts.map((p) => ({
        slug: p.slug.split('/').map((name) => decodeURI(name)),
        locale: 'zh',
      }))
    )
}

export default async function Page(props: { params: Promise<{ slug: string[]; locale: string }> }) {
  const params = await props.params
  const locale = params.locale as Locale
  const slug = decodeURI(params.slug.join('/'))

  // Find post matching both slug and locale
  const post = allBlogs.find((p) => {
    const postLocale = (p as Blog & { locale: string }).locale || 'en'
    return p.slug === slug && postLocale === locale
  })

  if (!post) {
    return notFound()
  }

  // Filter posts by locale for prev/next navigation
  const filteredBlogs = allBlogs.filter((p) => {
    const postLocale = (p as Blog & { locale: string }).locale || 'en'
    return postLocale === locale
  })

  const sortedCoreContents = allCoreContent(sortPosts(filteredBlogs))
  const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug)

  const prev =
    postIndex >= 0 && postIndex < sortedCoreContents.length - 1
      ? sortedCoreContents[postIndex + 1]
      : undefined
  const next = postIndex > 0 ? sortedCoreContents[postIndex - 1] : undefined

  const authorList = post?.authors || ['default']
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    return coreContent(authorResults as Authors)
  })
  const mainContent = coreContent(post)
  const jsonLd = post.structuredData
  jsonLd['author'] = authorDetails.map((author) => {
    return {
      '@type': 'Person',
      name: author.name,
    }
  })

  const Layout = layouts[post.layout || defaultLayout]

  // Use the post's title directly (no need for titleZh anymore)
  const displayTitle = post.title

  // 根据语言选择作者名
  const displayAuthorDetails = authorDetails.map((author) => {
    const authorWithNameEn = author as AuthorWithNameEn
    return {
      ...author,
      displayName: locale === 'zh' ? author.name : authorWithNameEn.nameEn || author.name,
    }
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Layout
        content={{ ...mainContent, title: displayTitle } as CoreContent<Blog>}
        authorDetails={displayAuthorDetails}
        next={next}
        prev={prev}
        locale={locale}
      >
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </Layout>
    </>
  )
}
