import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'
import { getTranslation } from '@/data/translations'
import type { Locale } from '@/lib/i18n'

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}): Promise<ReturnType<typeof genPageMetadata>> {
  const params = await props.params
  const locale = params.locale as Locale
  const title = getTranslation('joinUs.title', locale)
  return genPageMetadata({ title })
}

export default async function Page(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params
  const locale = (params.locale || 'en') as Locale
  const t = (key: string) => getTranslation(key, locale)

  const positions = [
    {
      title: t('joinUs.positions.embedded.title'),
      description: t('joinUs.positions.embedded.description'),
    },
    {
      title: t('joinUs.positions.productManager.title'),
      description: t('joinUs.positions.productManager.description'),
    },
    {
      title: t('joinUs.positions.algorithm.title'),
      description: t('joinUs.positions.algorithm.description'),
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="max-w-4xl">
          <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl dark:text-gray-100">
            {t('joinUs.title')}
          </h1>
          <p className="mt-8 text-2xl text-gray-600 md:text-3xl dark:text-gray-400">
            {t('joinUs.subtitle')}
          </p>
        </div>
      </div>

      {/* Open Positions Section */}
      <section className="border-t border-gray-200 py-16 md:py-24 dark:border-gray-800">
        <div className="max-w-4xl">
          <h2 className="mb-12 text-3xl font-semibold text-gray-900 dark:text-gray-100">
            {t('joinUs.openPositions')}
          </h2>
          <div className="space-y-8">
            {positions.map((position, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-8 last:border-b-0 dark:border-gray-800"
              >
                <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {position.title}
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  {position.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t border-gray-200 py-16 md:py-24 dark:border-gray-800">
        <div className="max-w-4xl">
          <h2 className="mb-8 text-3xl font-semibold text-gray-900 dark:text-gray-100">
            {t('joinUs.howToApply')}
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>{t('joinUs.applyContent1')}</p>
            <p>
              <Link
                href="mailto:HR@yunjuetech.com"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
              >
                HR@yunjuetech.com
              </Link>
            </p>
            <p className="text-gray-600 dark:text-gray-400">{t('joinUs.applyContent2')}</p>
          </div>
        </div>
      </section>
    </>
  )
}
