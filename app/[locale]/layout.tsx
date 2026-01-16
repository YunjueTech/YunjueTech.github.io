import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'

import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from '../theme-providers'
import { LanguageProvider } from './providers'
import { CustomSearchProvider } from './SearchProvider'
import type { Locale } from '@/lib/i18n'
import { Metadata } from 'next'

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const params = await props.params
  const locale = params.locale as Locale
  
  return {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: {
      default: siteMetadata.title,
      template: `%s | ${siteMetadata.title}`,
    },
    description: siteMetadata.description,
    openGraph: {
      title: siteMetadata.title,
      description: siteMetadata.description,
      url: './',
      siteName: siteMetadata.title,
      images: [siteMetadata.socialBanner],
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    twitter: {
      title: siteMetadata.title,
      card: 'summary_large_image',
      images: [siteMetadata.socialBanner],
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params
  const locale = (resolvedParams.locale || 'en') as Locale

  return (
    <ThemeProviders>
      <LanguageProvider initialLocale={locale}>
        <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
        <SectionContainer>
          <CustomSearchProvider>
            <Header />
            <main className="mb-auto">{children}</main>
          </CustomSearchProvider>
          <Footer />
        </SectionContainer>
      </LanguageProvider>
    </ThemeProviders>
  )
}

