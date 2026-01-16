import productsData from '@/data/projectsData'
import Link from '@/components/Link'
import Image from '@/components/Image'
import { genPageMetadata } from 'app/seo'
import { getTranslation } from '@/data/translations'
import type { Locale } from '@/lib/i18n'

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}): Promise<ReturnType<typeof genPageMetadata>> {
  const params = await props.params
  const locale = params.locale as Locale
  const title = getTranslation('products.title', locale)
  return genPageMetadata({ title })
}

export default async function Products(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params
  const locale = (params.locale || 'en') as Locale
  const t = (key: string) => getTranslation(key, locale)

  return (
    <>
      {/* Hero Section */}
      <div className="pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="max-w-4xl">
          <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl dark:text-gray-100">
            {t('products.title')}
          </h1>
          <p className="mt-8 text-2xl text-gray-600 md:text-3xl dark:text-gray-400">
            {t('products.subtitle')}
          </p>
        </div>
      </div>

      {/* Products List */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl space-y-16">
          {productsData.map((product) => (
            <article
              key={product.slug}
              className="border-b border-gray-200 pb-16 last:border-b-0 dark:border-gray-800"
            >
              <div className="flex flex-col gap-8 md:flex-row">
                {product.imgSrc && (
                  <div className="flex-shrink-0 md:w-1/3">
                    <Link href={`/${locale}/products/${product.slug}`}>
                      <Image
                        src={product.imgSrc}
                        alt={locale === 'zh' ? product.title : product.titleEn || product.title}
                        width={400}
                        height={300}
                        className="h-48 w-full rounded-lg object-cover md:h-64"
                      />
                    </Link>
                  </div>
                )}
                <div className="flex-1">
                  <h2 className="mb-4 text-3xl font-semibold text-gray-900 dark:text-gray-100">
                    <Link
                      href={`/${locale}/products/${product.slug}`}
                      className="hover:text-primary-500 dark:hover:text-primary-400"
                    >
                      {locale === 'zh' ? product.title : product.titleEn || product.title}
                    </Link>
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    {locale === 'zh'
                      ? product.shortDescription
                      : product.shortDescriptionEn || product.shortDescription}
                  </p>
                  <Link
                    href={`/${locale}/products/${product.slug}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base font-medium"
                  >
                    {t('products.learnMore')}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
