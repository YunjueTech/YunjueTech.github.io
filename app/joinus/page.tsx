import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'
import { Hero, Section } from '@/components/PageBlocks'

export const metadata = genPageMetadata({
  title: '加入我们',
  description:
    '云玦科技招聘：后端/全栈工程师、AI 产品经理、iOS 工程师、智能体算法工程师、硬件产品经理。',
})

const openRoles = [
  {
    tag: '工程',
    title: '后端 / 全栈工程师（资深）',
    desc: '接手后端主链路迭代与架构演进，覆盖 Skill 执行、多模态时间线管线、自进化沙箱的工程化交付。',
    stack: 'Python · FastAPI · PostgreSQL · Redis · 异步任务编排',
  },
  {
    tag: '产品',
    title: 'AI 产品经理',
    desc: '定义 Skill 的触发条件、交互边界与卡片产出，直接用 AI 工具迭代 prompt 与触发规则，推动千人千面个性化的产品落地。',
    stack: 'LLM · Agent · Prompt Engineering · To C 产品经验',
  },
  {
    tag: '工程',
    title: 'iOS 客户端工程师（资深）',
    desc: '负责 iOS 客户端体验打磨、WKWebView 卡片渲染框架优化，以及端侧推理与隐私分流能力的前置布局。',
    stack: 'SwiftUI · SwiftData · WKWebView · Core ML',
  },
  {
    tag: '算法',
    title: '智能体算法工程师',
    desc: '维护生产 Skill 的 prompt 体系，优化 LLM Trigger Gate 与自进化链路的算法侧，探索 Agent 编排架构演进。',
    stack: 'LangChain · LangGraph · ReAct Agent · Prompt Engineering',
  },
  {
    tag: '基模',
    title: 'Human-centric World Model预训练',
    desc: '以人为中心的世界模型，全链路训练',
    stack: '预训练 · 多模态 · 数据',
  },
]

const futureTracks = [
  { tag: '算法', title: '多模态 LLM 工程师' },
  { tag: '算法', title: '时间线 / 事件管线工程师' },
  { tag: '硬件', title: '硬件 Lead（随身多模态采集设备）' },
  { tag: '硬件', title: '嵌入式 / 固件工程师' },
  { tag: '算法', title: '端侧多模态融合算法工程师' },
  { tag: '工程', title: '端侧推理工程师（iOS）' },
  { tag: '算法', title: '实时多模态算法工程师' },
  { tag: '算法', title: '预训练工程师（Human-Centric World Model）' },
]

export default function JoinUsPage() {
  return (
    <>
      <Hero
        eyebrow="加入我们"
        title={<>加入我们</>}
        subtitle={
          <>
            云玦在做三件互为前提的事：以人为中心的世界模型、自进化智能体、随身多模态硬件。
            我们在找能有激情一起构造新世界的同路人。
          </>
        }
        cta={[{ href: 'mailto:hr@yunjuetech.com?subject=应聘云玦', label: '发送简历' }]}
      />

      <Section eyebrow="急招" title="急招">
        <div className="space-y-4">
          {openRoles.map((role) => (
            <div
              key={role.title}
              className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 md:flex-row md:items-start dark:border-gray-800 dark:bg-gray-950"
            >
              <div className="w-16 shrink-0">
                <span className="inline-block rounded-md bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                  {role.tag}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-gray-100">
                  {role.title}
                </h3>
                <p className="mb-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {role.desc}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">{role.stack}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="招聘中" title="招聘中">
        <div className="grid gap-3 md:grid-cols-2">
          {futureTracks.map((t) => (
            <div
              key={t.title}
              className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 dark:border-gray-800"
            >
              <span className="w-12 shrink-0 text-xs font-semibold text-gray-400 dark:text-gray-500">
                {t.tag}
              </span>
              <span className="text-sm text-gray-700 dark:text-gray-300">{t.title}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
          方向包括硬件 v1 流片、端侧隐私分流、Realtime 多模态路径、Human-Centric World Model
          自训等各阶段里程碑。
        </p>
      </Section>

      <Section eyebrow="我们的偏好" title="什么样的人会在这里好好干">
        <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800">
          <table className="w-full text-left">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="p-4 text-sm font-semibold text-gray-900 dark:text-gray-100">维度</th>
                <th className="p-4 text-sm font-semibold text-gray-900 dark:text-gray-100">偏好</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700 dark:text-gray-300">
              <tr className="border-t border-gray-200 dark:border-gray-800">
                <td className="p-4 font-medium">兴趣</td>
                <td className="p-4">
                  自己用智能穿戴 / 量化生活 / 个人 AI 的人；用产品，不只是做产品
                </td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-800">
                <td className="p-4 font-medium">工具链</td>
                <td className="p-4">熟练使用 Claude Code / Codex / Cursor 做工程交付</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-800">
                <td className="p-4 font-medium">协作方式</td>
                <td className="p-4">习惯异步 + 文档化协作，不依赖密集会议</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-800">
                <td className="p-4 font-medium">背景</td>
                <td className="p-4">计算机 / 电子 / 设计相关；名校不是必须，深度作品是</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section eyebrow="联系我们" title="发简历或推荐">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          请发送简历至{' '}
          <a
            href="mailto:hr@yunjuetech.com"
            className="text-primary-500 hover:text-primary-600 dark:text-primary-400 underline"
          >
            hr@yunjuetech.com
          </a>
          ，注明应聘岗位，并附上一份你认为最能代表自己的作品。
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:hr@yunjuetech.com?subject=应聘云玦"
            className="inline-block rounded-md bg-gray-900 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            发送简历
          </a>
          <Link
            href="/tech"
            className="inline-block rounded-md border border-gray-300 px-8 py-4 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-900"
          >
            了解技术方向
          </Link>
        </div>
      </Section>
    </>
  )
}
