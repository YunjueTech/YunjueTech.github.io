'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { getLocaleFromPath, defaultLocale } from '@/lib/i18n'

export default function KBarEscButton() {
  const pathname = usePathname()
  const locale = getLocaleFromPath(pathname) || defaultLocale

  useEffect(() => {
    if (locale !== 'zh') return

    const updateEscButton = () => {
      // 方法1: 在整个文档中查找包含 ESC 的元素（更激进的方法）
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null)

      let node
      while ((node = walker.nextNode())) {
        if (
          node.textContent &&
          node.textContent.includes('ESC') &&
          !node.textContent.includes('退出')
        ) {
          node.textContent = node.textContent.replace(/ESC/g, '退出')
        }
      }

      // 方法2: 查找所有可能的按钮和元素
      const allElements = document.querySelectorAll('*')
      allElements.forEach((element) => {
        if (element instanceof HTMLElement) {
          // 检查 textContent
          if (
            element.textContent &&
            element.textContent.includes('ESC') &&
            !element.textContent.includes('退出')
          ) {
            element.textContent = element.textContent.replace(/ESC/g, '退出')
          }

          // 检查 innerHTML（处理包含 HTML 的情况）
          if (
            element.innerHTML &&
            element.innerHTML.includes('ESC') &&
            !element.innerHTML.includes('退出')
          ) {
            // 只替换文本节点，保留 HTML 结构
            const walker2 = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null)
            let textNode
            while ((textNode = walker2.nextNode())) {
              if (textNode.textContent && textNode.textContent.includes('ESC')) {
                textNode.textContent = textNode.textContent.replace(/ESC/g, '退出')
              }
            }
          }
        }
      })
    }

    // 延迟执行，确保 KBar 已经渲染
    const timeout = setTimeout(() => {
      updateEscButton()
    }, 100)

    // 使用定时器定期检查
    const interval = setInterval(updateEscButton, 200)

    // 监听 DOM 变化，特别关注 KBar 相关的变化
    const observer = new MutationObserver((mutations) => {
      let shouldUpdate = false
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' || mutation.type === 'characterData') {
          const target = mutation.target as HTMLElement
          if (
            target.querySelector?.('[data-kbar-modal]') ||
            target.closest?.('[data-kbar-modal]') ||
            target.getAttribute?.('data-kbar-modal') ||
            target.id?.includes('kbar') ||
            target.className?.includes('kbar')
          ) {
            shouldUpdate = true
          }
        }
      })
      if (shouldUpdate) {
        setTimeout(updateEscButton, 50)
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    })

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
      observer.disconnect()
    }
  }, [locale])

  return null
}
