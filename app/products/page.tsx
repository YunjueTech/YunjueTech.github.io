import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'
import { Hero, Section, PillarCard } from '@/components/PageBlocks'

export const metadata = genPageMetadata({
  title: '产品形态',
  description:
    '云玦个人智能体：随身硬件 + iPhone + 云端 AI。当前深度内测中；下一阶段交付普通版 + 极客版双轨。',
})

export default function ProductsPage() {
  return (
    <>
      <Hero
        eyebrow="产品形态"
        title={<>与你共同成长的智能体</>}
        subtitle={
          <>
            云玦不是一个 App，也不是一块手表 —— 它是一个跨随身硬件 / 移动端 / 云端的个人智能体。
            随身硬件是<strong>外置感官系统</strong>，替你持续采集你感知不到的多模态信号； 云端 AI 是
            <strong>外置前额叶</strong>，把信号转化为理解、反思与个性化决策支持，
            并由自进化沙箱每晚自动成长，长出每个人专属的随身智能体。
          </>
        }
      />

      <Section eyebrow="Demo视频">
        <div className="overflow-hidden rounded-2xl">
          <iframe
            title="云玦产品演示视频"
            src="https://player.bilibili.com/player.html?bvid=BV1vHVz6BEFE&page=1&high_quality=1&danmaku=0"
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            style={{ width: '100%', aspectRatio: '16 / 9', display: 'block' }}
          />
        </div>
      </Section>

      <Section eyebrow="形态" title="三层产品 · 四端协同">
        <div className="grid gap-6 md:grid-cols-3">
          <PillarCard
            index="01 / 随身硬件"
            title="外置感官系统"
            caption="24h 多模态采集 · Apple Watch 是当前的第一种验证形态；云玦自研多模态硬件 v1 进行中"
          >
            双麦阵列 + 心率 / HRV / IMU / 皮肤温度 / SpO2，持续采集多模态原始信号——
            替你感知你自己感知不到的东西。自研版加：隐私指示灯、隐私硬开关、本地缓存、BLE 上行。
            未来形态围绕"持续在身边、低打扰、多模态、隐私可控"探索，不预先绑定到任何单一形态。
          </PillarCard>
          <PillarCard
            index="02 / 移动端"
            title="云玦 iOS App"
            caption="个性化 Feed · HTML 卡片渲染"
          >
            首日 Feed 是空的。持续运行几天后开始造 Skill；两周左右，每个用户的卡片库就完全不重叠。
            每张卡片是一个独立 HTML —— 工具、复盘、陪伴对话、专属游戏都能容纳。
          </PillarCard>
          <PillarCard
            index="03 / 云端"
            title="外置前额叶 · 自进化 Runtime"
            caption="多模态时间线 + 个人知识图谱 + 自进化沙箱"
          >
            感官系统采集的信号，在云端被转化为理解与反思——这是外置前额叶的职责。
            每晚启动一次自进化沙箱：审计当日事件 → 深挖证据 → 增量更新用户画像 → 识别 Skill 缺口 →
            现场写工具与设计说明。长期积累的数据飞轮，最终将训练真正以人为中心的世界模型。
          </PillarCard>
        </div>
      </Section>

      <Section eyebrow="加入早期内测" title="像米罗一样试用我们的产品">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          目前在跑的内测用户全部是自己来找我们的同行。内测有一定门槛 —— 你需要愿意连续戴足够长的时间
          + 愿意做几次产品反馈对谈。所有数据处理都有透明告知与协议授权流程，
          我们会和合适的人单独沟通后续安排。
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:contact@yunjuetech.com?subject=申请加入云玦早期内测"
            className="inline-block rounded-md bg-gray-900 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            写信申请内测
          </a>
          <Link
            href="/tech"
            className="inline-block rounded-md border border-gray-300 px-8 py-4 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-900"
          >
            先看技术细节
          </Link>
        </div>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          或直接邮件至{' '}
          <a
            href="mailto:contact@yunjuetech.com?subject=申请加入云玦早期内测"
            className="text-primary-500 dark:text-primary-400 underline"
          >
            contact@yunjuetech.com
          </a>
        </p>
      </Section>
    </>
  )
}
