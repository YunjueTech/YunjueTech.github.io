import productsData from '@/data/projectsData'
import Link from '@/components/Link'
import Image from '@/components/Image'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Products' })

export default function Products() {
  return (
    <>
      {/* Hero Section */}
      <div className="pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl leading-tight font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl dark:text-gray-100 mb-6">
            Products
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mt-8">
            我们的产品
          </p>
        </div>
      </div>

      {/* Products List */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl space-y-16">
          {productsData.map((product) => (
            <article
              key={product.slug}
              className="border-b border-gray-200 dark:border-gray-800 pb-16 last:border-b-0"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {product.imgSrc && (
                  <div className="flex-shrink-0 md:w-1/3">
                    <Link href={`/products/${product.slug}`}>
                      <Image
                        src={product.imgSrc}
                        alt={product.title}
                        width={400}
                        height={300}
                        className="rounded-lg object-cover w-full h-48 md:h-64"
                      />
                    </Link>
                  </div>
                )}
                <div className="flex-1">
                  <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    <Link
                      href={`/products/${product.slug}`}
                      className="hover:text-primary-500 dark:hover:text-primary-400"
                    >
                      {product.title}
                    </Link>
                  </h2>
                  {product.titleEn && (
                    <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">
                      {product.titleEn}
                    </p>
                  )}
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                    {product.shortDescription}
                  </p>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base font-medium"
                  >
                    了解更多 &rarr;
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
