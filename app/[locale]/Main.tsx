import Link from '@/components/Link'
import { getTranslation } from '@/data/translations'
import type { Locale } from '@/lib/i18n'

interface MainProps {
  posts: any[]
  locale: Locale
}

export default function Main({ posts, locale }: MainProps) {
  const t = (key: string) => getTranslation(key, locale)

  return (
    <>
      {/* Hero Section */}
      <div className="pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="max-w-4xl">
          <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl dark:text-gray-100">
            {t('home.hero.title')}
          </h1>
          <p className="mt-6 text-2xl text-gray-600 md:text-3xl dark:text-gray-400">
            {t('home.hero.subtitle')}
          </p>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl">
          <h2 className="mb-8 text-3xl font-semibold text-gray-900 dark:text-gray-100">
            {t('home.whoWeAre.title')}
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>{t('home.whoWeAre.content1')}</p>
            <p>{t('home.whoWeAre.content2')}</p>
            <p className="text-base text-gray-600 italic dark:text-gray-400">
              {t('home.whoWeAre.quote')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="border-t border-gray-200 py-16 md:py-24 dark:border-gray-800">
        <div className="max-w-4xl">
          <h2 className="mb-8 text-3xl font-semibold text-gray-900 dark:text-gray-100">
            {t('home.vision.title')}
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p className="text-xl font-medium text-gray-900 dark:text-gray-100">
              {t('home.vision.subtitle')}
            </p>
            <p>{t('home.vision.content')}</p>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="border-t border-gray-200 py-16 md:py-24 dark:border-gray-800">
        <div className="max-w-4xl">
          <h2 className="mb-12 text-3xl font-semibold text-gray-900 dark:text-gray-100">
            {t('home.philosophy.title')}
          </h2>

          <div className="space-y-16">
            {/* Philosophy 1 */}
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {t('home.philosophy.fromStatic.title')}
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {t('home.philosophy.fromStatic.content')}
              </p>
            </div>

            {/* Philosophy 2 */}
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {t('home.philosophy.fromManual.title')}
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {t('home.philosophy.fromManual.content')}
              </p>
            </div>

            {/* Philosophy 3 */}
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {t('home.philosophy.openConvergent.title')}
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {t('home.philosophy.openConvergent.content')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="border-t border-gray-200 py-16 md:py-24 dark:border-gray-800">
        <div className="max-w-4xl">
          <h2 className="mb-8 text-3xl font-semibold text-gray-900 dark:text-gray-100">
            {t('home.joinUs.title')}
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {t('home.joinUs.content')}
          </p>
          <Link
            href={`/${locale}/joinus`}
            className="inline-block rounded-md bg-gray-900 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            {t('home.joinUs.button')}
          </Link>
        </div>
      </section>
    </>
  )
}

