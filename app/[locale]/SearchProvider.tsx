'use client'

import { KBarSearchProvider } from 'pliny/search/KBar'
import { useRouter, usePathname } from 'next/navigation'
import { CoreContent } from 'pliny/utils/contentlayer'
import { Blog } from 'contentlayer/generated'
import { getLocaleFromPath, defaultLocale } from '@/lib/i18n'
import { getTranslation } from '@/data/translations'
import siteMetadata from '@/data/siteMetadata'
import KBarEscButton from '@/components/KBarEscButton'

export const CustomSearchProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const pathname = usePathname()
  const locale = getLocaleFromPath(pathname) || defaultLocale
  const t = (key: string) => getTranslation(key, locale)

  return (
    <>
      <KBarEscButton />
      <KBarSearchProvider
        kbarConfig={{
          searchDocumentsPath: siteMetadata.search?.kbarConfig?.searchDocumentsPath || 'search.json',
          placeholder: '',
          defaultActions: [],
          onSearchDocumentsLoad(json) {
            return json.map((post: CoreContent<Blog>) => ({
              id: post.path,
              name: post.title,
              keywords: post?.summary || '',
              subtitle: post.tags.join(', '),
              perform: () => router.push(`/${locale}/${post.path}`),
            }))
          },
        }}
      >
        {children}
      </KBarSearchProvider>
    </>
  )
}

