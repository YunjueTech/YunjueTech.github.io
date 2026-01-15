'use client'

import { Fragment, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'
import { switchLocaleInPath } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'

const Globe = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-6 w-6"
  >
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6.5-6.326a6.52 6.52 0 00-1.5.674v1.5a4.5 4.5 0 11-9 0v-1.5a6.52 6.52 0 00-1.5-.674C2.232 4.756 1 7.096 1 9.75V11a1 1 0 001 1h16a1 1 0 001-1v-1.25c0-2.654-1.232-4.994-3-6.076zM4.75 6.5a.75.75 0 00-.75.75v1.5a.75.75 0 001.5 0v-1.5a.75.75 0 00-.75-.75zm10.5 0a.75.75 0 00-.75.75v1.5a.75.75 0 001.5 0v-1.5a.75.75 0 00-.75-.75z"
      clipRule="evenodd"
    />
  </svg>
)

const LanguageSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => setMounted(true), [])

  const handleLanguageChange = (newLocale: Locale) => {
    const newPath = switchLocaleInPath(pathname, newLocale)
    router.push(newPath)
  }

  // 从路径中提取当前语言
  const getCurrentLocale = (): Locale => {
    const segments = pathname.split('/').filter(Boolean)
    if (segments.length > 0 && (segments[0] === 'en' || segments[0] === 'zh')) {
      return segments[0] as Locale
    }
    return 'en' // 默认
  }

  const currentLocale = getCurrentLocale()

  return (
    <div className="flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div className="hover:text-primary-500 dark:hover:text-primary-400 flex items-center justify-center">
          <MenuButton aria-label="Language switcher">
            {mounted ? (
              <div className="flex items-center space-x-1">
                <Globe />
                <span className="text-sm font-medium">
                  {currentLocale === 'en' ? 'EN' : '中文'}
                </span>
              </div>
            ) : (
              <div className="h-6 w-6" />
            )}
          </MenuButton>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="ring-opacity-5 absolute right-0 z-50 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black focus:outline-hidden dark:bg-gray-800">
            <div className="p-1">
              <MenuItem>
                {({ focus }) => (
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`${
                      focus ? 'bg-primary-600 text-white' : ''
                    } ${
                      currentLocale === 'en' ? 'bg-primary-100 dark:bg-primary-900' : ''
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <div className="mr-2">
                      <Globe />
                    </div>
                    English
                  </button>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <button
                    onClick={() => handleLanguageChange('zh')}
                    className={`${
                      focus ? 'bg-primary-600 text-white' : ''
                    } ${
                      currentLocale === 'zh' ? 'bg-primary-100 dark:bg-primary-900' : ''
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <div className="mr-2">
                      <Globe />
                    </div>
                    中文
                  </button>
                )}
              </MenuItem>
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  )
}

export default LanguageSwitch

