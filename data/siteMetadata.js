/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: '云玦科技 · 把每一个普通人，都装进自己的智能体',
  author: '云玦科技',
  headerTitle: '云玦科技',
  description:
    '云玦科技 (Yunjue Technology) 在做一个跨随身硬件 + 移动端 + 云端的个人智能体。随身的多模态采集入口每 5 分钟收一次信号，云端用 Early Fusion 在原始信号层做理解，再由自进化智能体每晚自检 / 自己写工具 / 自己造卡片。',
  language: 'zh-CN',
  theme: 'system', // system, dark or light
  siteUrl: 'https://yunjuetech.com',
  siteRepo: 'https://github.com/YunjueTech/YunjueTech.github.io',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  //mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'contact@yunjuetech.com',
  github: 'https://github.com/YunjueTech',
  // 国内合规备案号（拿到后填入；为空时 footer 不显示）。
  // ICP 备案：到 https://beian.miit.gov.cn 查询；公安联网备案：到 https://beian.mps.gov.cn 查询。
  icp: '',
  policeRecord: '',
  // x: 'https://twitter.com/x',
  // twitter: 'https://twitter.com/Twitter',
  //  facebook: 'https://facebook.com',
  //youtube: 'https://youtube.com',
  //linkedin: 'https://www.linkedin.com',
  //threads: 'https://www.threads.net',
  //instagram: 'https://www.instagram.com',
  //medium: 'https://medium.com',
  //bluesky: 'https://bsky.app/',
  locale: 'zh-CN',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
      // You may also need to overwrite the script if you're storing data in the US - ex:
      // src: 'https://us.umami.is/script.js'
      // Remember to add 'us.umami.is' in `next.config.js` as a permitted domain for the CSP
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // If you are hosting your own Plausible.
    //   src: '', // e.g. https://plausible.my-domain.com/js/script.js
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  newsletter: {
    // Disabled by default; configure if needed.
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    provider: '',
  },
  comments: {
    // Disabled by default; configure if needed.
    // supported providers: giscus, utterances, disqus
    provider: '',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
