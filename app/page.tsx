import LocaleRedirect from '@/components/LocaleRedirect'

/**
 * 根页面 - 仅用于重定向到语言路径
 * 在静态导出模式下，中间件不会运行，所以需要客户端重定向
 */
export default function Page() {
  return <LocaleRedirect />
}
