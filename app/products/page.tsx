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
        <div className="max-w-5xl">
          <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl dark:text-gray-100">
            Products
          </h1>
          <p className="mt-8 text-2xl text-gray-600 md:text-3xl dark:text-gray-400">我们的产品</p>
        </div>
      </div>

      {/* Products List */}
      <section className="py-20 md:py-32">
        <div className="max-w-5xl space-y-20">
          {productsData.map((product) => (
            <article
              key={product.slug}
              className="border-b border-gray-200 pb-16 last:border-b-0 dark:border-gray-800"
            >
              <div className="flex flex-col gap-8 md:flex-row">
                {product.imgSrc && (
                  <div className="flex-shrink-0 md:w-1/3">
                    <Link href={`/products/${product.slug}`}>
                      <Image
                        src={product.imgSrc}
                        alt={product.title}
                        width={400}
                        height={300}
                        className="h-48 w-full rounded-lg object-cover md:h-64"
                      />
                    </Link>
                  </div>
                )}
                <div className="flex-1">
                  <h2 className="mb-3 text-4xl font-semibold text-gray-900 dark:text-gray-100">
                    <Link
                      href={`/products/${product.slug}`}
                      className="hover:text-primary-500 dark:hover:text-primary-400"
                    >
                      {product.title}
                    </Link>
                  </h2>
                  {product.titleEn && (
                    <p className="mb-4 text-lg text-gray-500 dark:text-gray-400">
                      {product.titleEn}
                    </p>
                  )}
                  <p className="mb-6 text-xl leading-loose text-gray-700 dark:text-gray-300">
                    {product.shortDescription}
                  </p>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-lg font-medium transition-colors duration-200"
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
