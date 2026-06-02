# 云玦科技 · Yunjue Technology

云玦科技官网源码（中文 + 英文双语）。

线上地址：<https://yunjuetech.com>

## 站点结构

- `app/` — Next.js App Router 页面
  - 中文：`/` `/tech` `/roadmap` `/products` `/blog` `/joinus`
  - 英文：`/en` `/en/tech` `/en/roadmap` `/en/products` `/en/blog` `/en/joinus`
- `data/`
  - `siteMetadata.js` — 站点元信息（标题、域名、备案号等）
  - `headerNavLinks.ts` — 导航
  - `projectsData.ts` — 产品页卡片数据
  - `blog/` — 博客 MDX 内容（`*.zh.mdx` + `*.en.mdx` 双语对应）
  - `authors/` — 作者信息
- `components/` — 公共组件
- `layouts/` — 文章布局模板
- `public/static/` — 静态资源

## 本地开发

```bash
yarn
yarn dev
```

打开 <http://localhost:3000>。

## 部署

通过 GitHub Pages 工作流自动部署，配置见 `.github/workflows/pages.yml`。

## 内容更新

- **页面文案**：直接编辑 `app/<route>/page.tsx`
- **博客文章**：在 `data/blog/` 下新建 `<slug>.zh.mdx` + `<slug>.en.mdx`
- **导航**：编辑 `data/headerNavLinks.ts`
- **元信息 / 备案号**：编辑 `data/siteMetadata.js`

## 关于模板

本站基于 [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog)（MIT）改造，已针对云玦官网做大量定制（双语、产品/路线/招聘页、自定义 PageBlocks 组件等）。
