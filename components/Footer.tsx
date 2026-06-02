import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        {/* TODO: 备案号下来后替换占位文本（ICP 与公安备案各一行）。 */}
        {siteMetadata.icp && (
          <div className="mb-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-gray-500 dark:text-gray-400">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 dark:hover:text-gray-300"
            >
              {siteMetadata.icp}
            </a>
            {siteMetadata.policeRecord && (
              <>
                <span>•</span>
                <a
                  href="https://beian.mps.gov.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700 dark:hover:text-gray-300"
                >
                  {siteMetadata.policeRecord}
                </a>
              </>
            )}
          </div>
        )}
      </div>
    </footer>
  )
}
