'use client'

import { useEffect } from 'react'

export default function KBarEscButton() {
  useEffect(() => {
    const updateEscButton = () => {
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
    }

    const timeout = setTimeout(updateEscButton, 100)
    const interval = setInterval(updateEscButton, 200)
    const observer = new MutationObserver(() => updateEscButton())
    observer.observe(document.body, { childList: true, subtree: true, characterData: true })

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
      observer.disconnect()
    }
  }, [])

  return null
}
