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

  // 使用类型断言来访问 kbarConfig，避免 TypeScript 类型检查错误
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const searchConfig = siteMetadata.search as any
  const searchDocumentsPath = searchConfig?.kbarConfig?.searchDocumentsPath || 'search.json'

  return (
    <>
      <KBarEscButton />
      <KBarSearchProvider
        kbarConfig={{
          searchDocumentsPath: searchDocumentsPath,
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
