import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'
import Image from '@/components/Image'
import { Hero, Section } from '@/components/PageBlocks'

export const metadata = genPageMetadata({
  title: '创始人',
  description:
    '云玦科技的两位联合创始人：连续创业型经营管理者彭超（CEO）+ 下一代 AI 架构研究者齐炜祯（CTO）。',
})

function FounderAvatar({
  src,
  alt,
  objectPosition = '50% 30%',
}: {
  src: string
  alt: string
  objectPosition?: string
}) {
  return (
    <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full ring-1 ring-gray-200 dark:ring-gray-800">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="112px"
        className="object-cover"
        style={{ objectPosition }}
      />
    </div>
  )
}

export default function TeamZhPage() {
  return (
    <>
      <Hero
        eyebrow="创始人"
        title={<>云玦的两位联合创始人</>}
        subtitle={
          <>
            一位 20 年经营管理经验的连续创业者，一位下一代 AI 架构的研究者 ——
            两人共同决定了云玦"硬件 × 软件 × 算法一体"的产品路径。
          </>
        }
      />

      <Section bordered={false}>
        <div className="space-y-8">
          {/* 彭超 - CEO */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-950">
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <FounderAvatar
                src="/static/images/team/peng-chao.jpg"
                alt="彭超"
                objectPosition="62% 38%"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  彭超 · 联合创始人 & CEO
                </h3>
                <p className="text-primary-500 dark:text-primary-400 mt-1 text-sm font-medium tracking-wide">
                  20 年经营管理经验 · 硬件 + 软件 · 国内 + 海外 · 线上 + 线下全渠道
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  连续创业型经营管理者。历任阿里巴巴集团副总裁 / 智能互联
                  CEO（原天猫精灵事业部总经理）、 荣耀终端电商业务 &
                  用户经营部部长、华为终端印度地区部总裁；带过千人以上团队，操盘过硬件、软件、电商、用户经营的全口径业务。
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>阿里巴巴 · 智能互联 CEO（原天猫精灵事业部）</strong> —— 领导阿里消费者
                    AIoT 业务生态：推动 AliGenie
                    规模化增长，完成商业化从零到规模的跨越，经营从亏损推进到接近盈亏平衡。
                  </li>
                  <li>
                    <strong>华为终端 · 印度地区部总裁</strong> ——
                    全面负责华为消费者业务在印度的整体运作：营商环境 / 子公司 / 研发供应链 /
                    市场销售。
                  </li>
                  <li>
                    <strong>荣耀终端 · 电商业务 & 用户经营部部长</strong> ——
                    操盘荣耀线上做到全行业份额第一。
                  </li>
                  <li>
                    <strong>华为体系 14 年</strong> —— 从分公司销售一路到地区部总裁。
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 齐炜祯 - CTO */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-950">
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <FounderAvatar
                src="/static/images/team/qi-weizhen.jpg"
                alt="齐炜祯"
                objectPosition="50% 25%"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  齐炜祯 · 联合创始人 & CTO
                </h3>
                <p className="text-primary-500 dark:text-primary-400 mt-1 text-sm font-medium tracking-wide">
                  下一代 AI 架构研究者 · 论文引用 3000+ · h-index 17
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  下一代 AI 架构研究者，专注于预训练、智能体与模型推理加速。
                  三件第一作者代表作奠定了今天主流 LLM 所依赖的核心基石：
                  预训练范式（MTP）、推理加速（KV Cache 优化）、智能体范式（LLM 调度多模态工具）。
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>ProphetNet（MTP 原创）</strong> ——
                    第一作者，多词元预测预训练范式的原创工作，被 Deepseek 系列（V3、V4 等）、Qwen
                    系列（V3-Omni、V3.5 等）等主流 LLM 采纳为核心预训练方法。
                  </li>
                  <li>
                    <strong>EL-Attention（KV Cache 优化）</strong> —— 业界首批 KV Cache
                    优化研究，集成入 Huggingface
                    Transformers；微软工程院以此为 OpenAI GPT-3 带来 5–10× 输出速度提升。
                  </li>
                  <li>
                    <strong>Visual ChatGPT（核心作者）</strong> —— 开源一周获 3 万 Star，开创了以
                    LLM 为中心、调用多模态工具完成复杂任务的智能体范式。
                  </li>
                  <li>
                    <strong>工程落地</strong> —— 独立操盘 500 卡 A100、5 TB 语料的 ProphetNet-X
                    全流程预训练；BANG（业界首个非自回归预训练大模型）支撑必应 &lt;50 ms 实时响应。
                  </li>
                  <li>
                    <strong>学术身份</strong> —— ACL / EMNLP ARR 2025 Area Chair ·
                    中关村学院兼职科研共建导师
                  </li>
                  <li>
                    <strong>教育</strong> —— 中国科大本科 · 微软亚洲研究院联合培养博士。
                  </li>
                </ul>
                <p className="mt-4 text-sm">
                  <a
                    href="https://scholar.google.com/citations?user=rme-IWIAAAAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 dark:text-primary-400 underline"
                  >
                    Google Scholar 主页 →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/tech"
            className="inline-block rounded-md bg-gray-900 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            看技术路线
          </Link>
          <Link
            href="/joinus"
            className="inline-block rounded-md border border-gray-300 px-8 py-4 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-900"
          >
            查看开放岗位
          </Link>
        </div>
      </Section>
    </>
  )
}
