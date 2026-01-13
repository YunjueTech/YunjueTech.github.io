import { notFound } from 'next/navigation'
import productsData from '@/data/projectsData'
import { genPageMetadata } from 'app/seo'
import Image from '@/components/Image'
import Link from '@/components/Link'

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<ReturnType<typeof genPageMetadata>> {
  const params = await props.params
  const product = productsData.find((p) => p.slug === params.slug)
  if (!product) {
    return genPageMetadata({ title: 'Product Not Found' })
  }
  return genPageMetadata({ title: product.title })
}

export default async function ProductPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const product = productsData.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  // Simple markdown to HTML conversion for basic formatting
  const formatContent = (text: string) => {
    const lines = text.split('\n')
    const result: string[] = []
    let inList = false

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const trimmed = line.trim()

      // Headers
      if (trimmed.startsWith('# ')) {
        if (inList) {
          result.push('</ul>')
          inList = false
        }
        result.push(
          `<h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">${trimmed.slice(2)}</h1>`
        )
        continue
      }
      if (trimmed.startsWith('## ')) {
        if (inList) {
          result.push('</ul>')
          inList = false
        }
        result.push(
          `<h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">${trimmed.slice(3)}</h2>`
        )
        continue
      }
      if (trimmed.startsWith('### ')) {
        if (inList) {
          result.push('</ul>')
          inList = false
        }
        result.push(
          `<h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-4 mb-2">${trimmed.slice(4)}</h3>`
        )
        continue
      }

      // Lists
      if (trimmed.startsWith('- ')) {
        if (!inList) {
          result.push('<ul class="list-disc list-inside space-y-2 mb-4">')
          inList = true
        }
        const formatted = trimmed.slice(2).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        result.push(`<li class="text-gray-700 dark:text-gray-300">${formatted}</li>`)
        continue
      }

      // End list if we hit a non-list line
      if (inList && trimmed !== '') {
        result.push('</ul>')
        inList = false
      }

      // Empty lines
      if (trimmed === '') {
        if (!inList) {
          result.push('<br />')
        }
        continue
      }

      // Regular paragraphs
      const formatted = trimmed.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      if (formatted) {
        result.push(`<p class="mb-4 text-gray-700 dark:text-gray-300">${formatted}</p>`)
      }
    }

    // Close any open list
    if (inList) {
      result.push('</ul>')
    }

    return result.join('')
  }

  const htmlContent = formatContent(product.description)

  return (
    <>
      {/* Hero Section */}
      <div className="pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-4xl">
          <Link
            href="/products"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mb-8 inline-block text-sm font-medium"
          >
            ← 返回产品列表
          </Link>
          <h1 className="mb-4 text-5xl leading-tight font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl dark:text-gray-100">
            {product.title}
          </h1>
          {product.titleEn && (
            <p className="mt-4 text-2xl text-gray-600 md:text-3xl dark:text-gray-400">
              {product.titleEn}
            </p>
          )}
        </div>
      </div>

      {/* Product Image */}
      {product.imgSrc && (
        <div className="mb-12 md:mb-16">
          <div className="max-w-4xl">
            <Image
              src={product.imgSrc}
              alt={product.title}
              width={1200}
              height={675}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Product Content */}
      <article className="max-w-4xl">
        <div
          className="prose prose-lg dark:prose-invert max-w-none leading-relaxed text-gray-700 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <div className="mt-12 border-t border-gray-200 pt-12 dark:border-gray-800">
            <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-100">
              核心特性
            </h2>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start text-lg text-gray-700 dark:text-gray-300"
                >
                  <span className="text-primary-500 mr-3">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </>
  )
}
