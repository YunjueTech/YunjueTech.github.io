import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'

export const metadata = genPageMetadata({ title: 'Join Us' })

export default function Page() {
  const positions = [
    {
      title: '嵌入式工程师',
      titleEn: 'Embedded Systems Engineer',
      description:
        '负责智能体硬件平台的开发与优化，包括边缘计算设备、传感器集成和实时系统设计。',
    },
    {
      title: '软件产品经理',
      titleEn: 'Software Product Manager',
      description:
        '定义产品路线图，协调跨团队协作，将自进化智能体的技术能力转化为用户价值。',
    },
    {
      title: '算法科学家',
      titleEn: 'Algorithm Scientist',
      description:
        '研究并实现 Test-Time Learning、工具生成和自进化机制等前沿算法，推动 AGI 能力的边界。',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl leading-tight font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl dark:text-gray-100 mb-6">
            Join Us
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mt-8">
            我们正在构建能够突破技术边界、同时为尽可能多的人创造真正价值的 AI 系统。我们的团队结合严谨的工程实践与创造性探索，我们正在寻找志同道合的伙伴来共同实现这一愿景。
          </p>
        </div>
      </div>

      {/* Open Positions Section */}
      <section className="py-16 md:py-24 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-12">
            Open Positions <span className="text-gray-500 dark:text-gray-400 font-normal text-2xl">开放职位</span>
          </h2>
          <div className="space-y-8">
            {positions.map((position, index) => (
              <div
                key={index}
                className="pb-8 border-b border-gray-200 dark:border-gray-800 last:border-b-0"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {position.title}
                </h3>
                <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">{position.titleEn}</p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  {position.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8">
            How to Apply <span className="text-gray-500 dark:text-gray-400 font-normal text-2xl">如何申请</span>
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              请将您的简历发送至：
            </p>
            <p>
              <Link
                href="mailto:HR@yunjuetech.com"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
              >
                HR@yunjuetech.com
              </Link>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              我们期待与您一起，构建自进化的未来。
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
