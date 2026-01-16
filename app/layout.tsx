import { Space_Grotesk } from 'next/font/google'
import HtmlLangSetter from '@/components/HtmlLangSetter'
import siteMetadata from '@/data/siteMetadata'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.BASE_PATH || ''

  return (
    <html
      lang="en-US"
      className={`${space_grotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`${basePath}/static/favicons/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${basePath}/static/favicons/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${basePath}/static/favicons/favicon-16x16.png`}
      />
      <link rel="manifest" href={`${basePath}/static/favicons/site.webmanifest`} />
      <link
        rel="mask-icon"
        href={`${basePath}/static/favicons/safari-pinned-tab.svg`}
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />
      <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white">
        {/* 在 React 加载前执行语言重定向（仅用于根路径） */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // 只在根路径执行
                if (window.location.pathname === '/' || window.location.pathname === '${basePath}/') {
                  var locale = 'en';
                  
                  // 1. 检查 localStorage
                  try {
                    var stored = localStorage.getItem('locale');
                    if (stored === 'zh' || stored === 'en') {
                      locale = stored;
                    }
                  } catch(e) {}
                  
                  // 2. 检查 cookie
                  if (locale === 'en') {
                    var cookies = document.cookie.split(';');
                    for (var i = 0; i < cookies.length; i++) {
                      var cookie = cookies[i].trim();
                      if (cookie.startsWith('locale=')) {
                        var value = cookie.split('=')[1];
                        if (value === 'zh' || value === 'en') {
                          locale = value;
                          break;
                        }
                      }
                    }
                  }
                  
                  // 3. 检查浏览器语言
                  if (locale === 'en') {
                    var lang = navigator.language || navigator.userLanguage;
                    if (lang && lang.toLowerCase().includes('zh')) {
                      locale = 'zh';
                    }
                  }
                  
                  // 执行重定向
                  window.location.replace('/' + locale);
                }
              })();
            `,
          }}
        />
        <HtmlLangSetter />
        {children}
      </body>
    </html>
  )
}
