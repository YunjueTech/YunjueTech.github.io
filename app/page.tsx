import Link from '@/components/Link'
import { Hero, Section, PillarCard, Stat } from '@/components/PageBlocks'

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="云玦科技 · Yunjue Technology"
        title={<>Your Life, Rendered as Context</>}
        subtitle={
          <>
            云玦正在打造一个能与你共同成长的随身智能体：穿戴在身上、活在你的手机里、由云端长期演化。
            它不是又一个 AI 助手，而是一种新的"个人 AI
            基础设施"，长期目标是让每个普通人都有一个真正懂自己的智能体。
          </>
        }
        cta={[
          { href: '/tech', label: '看技术细节' },
          { href: '/products', label: '看产品形态', tone: 'subtle' },
        ]}
      />

      <Section eyebrow="我们做什么" title="一个能与你共同成长的智能体，而不是一面镜子">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          市面上的智能穿戴像一面镜子：把心率、步数、睡眠的数字读给你听，但不告诉你"为什么"，更不会陪你成长。
          云玦在做的事分两层：随身硬件是<strong>外置感官系统</strong>——替你持续看、持续听、持续量，
          不打扰主意识流；云端 AI 是<strong>外置前额叶</strong>
          ——把感官采集的信号转化为反思、回顾与决策支持， 让智能体真正理解你这个人，并据此自动成长。
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Stat label="多模态深度" value="Early" hint="原始信号层融合，非 Late Fusion" />
          <Stat label="千人千面" value="Zero" hint="Zero-Skill 起步，14 天后完全个性化" />
          <Stat
            label="自进化"
            value="Nightly"
            hint="每晚自进化沙箱 · 审计事件 · 增量画像 · 自造工具与 Skill"
          />
        </div>
      </Section>

      <Section eyebrow="技术叙事" title="三层壁垒，从信号到应用层层叠加">
        <div className="grid gap-6 md:grid-cols-3">
          <PillarCard
            index="01 / 信号层"
            title="Early Fusion 多模态"
            caption="不是先各自变文字再拼起来"
          >
            主流 Late Fusion 把音频、心率、视觉先各自压成文字再拼接，时序与因果链全部丢失。
            云玦在原始信号层对齐 7 模态信号，结论可以精确到事件、瞬间、个人。
          </PillarCard>
          <PillarCard
            index="02 / 系统层"
            title="Self-Evolving Agent"
            caption="In-Situ 自演化范式 · 5 benchmark 3 项 SOTA / 2 项第二"
          >
            学术工作 Yunjue Agent（In-Situ Self-Evolving Agent）提出"推理即演化"范式， 在 HLE / DSQA
            / FSC / xSciQA / xDS 对标 GPT-5.2 Pro / Gemini 3 Pro 等闭源前沿， 论文 / 代码 /
            完整演化痕迹全部开源。产品上由独立的自进化沙箱每晚运行一次：审计当日事件、增量修画像、识别能力缺口、自造工具与
            Skill。
          </PillarCard>
          <PillarCard
            index="03 / 应用层"
            title="Zero-Skill 千人千面"
            caption="每张卡片是一个独立 HTML"
          >
            首日 Feed 是空的。持续运行三到七天后开始造 Skill，两周左右每个用户的卡片库完全不重叠。
            工具型用户看到复盘卡，陪伴型用户看到情感镜像，创作者看到选题灵感。
          </PillarCard>
        </div>
        <p className="mt-8 text-base text-gray-600 dark:text-gray-400">
          每一层都依赖上一层先做对：没有 Early
          Fusion，自进化拿不到稠密信号；没有自进化，应用层只能做千人一面。 完整解释见{' '}
          <Link href="/tech" className="text-primary-500 dark:text-primary-400 hover:underline">
            技术页
          </Link>
          。
        </p>
      </Section>

      <Section
        eyebrow="从 Early Fusion 到 Human-Centric World Model"
        title="现在能做到什么，长期要去哪里"
      >
        <div className="space-y-10">
          <div>
            <p className="text-primary-500 dark:text-primary-400 mb-4 text-sm font-semibold tracking-wider uppercase">
              当下已实现 · Early Fusion
            </p>
            <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              主流多模态 AI 走 Late Fusion：音频、心率、视觉先各自变成文字再拼起来，
              时序关系与强度细节全部丢失。云玦在原始信号层对齐 7
              种模态，结论精确到事件、瞬间、个人。
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
                <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-gray-100">
                  自陈与体征对齐
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  你说"挺顺"，心率曲线说紧张。文字层面的自述和多模态体征在同一时段对齐，语义层面看不见的差异显示出来。
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
                <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-gray-100">
                  跨日同活动对比
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  同样是静坐打字，今天 vs 14 天基线的体征曲线差异显著。"今天 vs
                  平时"变成可计算的量。
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
                <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-gray-100">
                  多模态因果链
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  "心率上升 3
                  秒后听到那句话"——心率、声纹、视觉在原始信号层精确对齐，文字层面永远抓不到的因果链被构建出来。
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-primary-500 dark:text-primary-400 mb-4 text-sm font-semibold tracking-wider uppercase">
              长期目标 · Human-Centric World Model
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              现在我们借用主流多模态模型的对齐能力做 Early Fusion，同时持续积累"奇怪模态 →
              人类行为结果"的稠密标注数据。当数据飞轮成熟，云玦的长期目标是训练真正
              <strong>以人为中心的多模态基础模型</strong>
              ——把心率、IMU、声音、视觉、对话、画像、关系图谱
              在原始信号层对齐，建立一个真正理解"人"的世界模型， 而不是通用互联网知识的压缩版。
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="路线" title="三条赛道并行推进">
        <div className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            <strong className="text-gray-900 dark:text-gray-100">当下</strong> —— 随身硬件 → iOS →
            云端的主链路生产稳定，自进化全链路已上线，深度内测中。
          </p>
          <p>
            <strong className="text-gray-900 dark:text-gray-100">近期</strong> ——
            把自进化链路从小批量精打磨推进到千人级公测的工业化运转，质量门进入自动化。
          </p>
          <p>
            <strong className="text-gray-900 dark:text-gray-100">中期</strong> —— 自研多模态硬件 v1
            上线，随身设备成为真正的外置感官系统；端侧 /
            边侧分流方案就绪，原始数据"出不出端"由用户主动选择。
          </p>
          <p>
            <strong className="text-gray-900 dark:text-gray-100">长期</strong> —— 三条赛道并行收束：
            自进化智能体实现千人千面的个性化应用层；随身多模态硬件成为外置感官系统；
            数据飞轮成熟后自训 Human-Centric World Model，让 AI 真正以人为中心理解世界。
          </p>
        </div>
        <div className="mt-8">
          <Link
            href="/products"
            className="text-primary-500 hover:text-primary-600 dark:text-primary-400 inline-block text-base font-medium"
          >
            看完整产品节奏 &rarr;
          </Link>
        </div>
      </Section>

      <Section eyebrow="加入我们" title="我们在搭一支想要亲手打造未来的团队">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          硬件、端侧多模态、Realtime、自进化智能体、自训 Human-Centric World Model ——
          每一条线我们都在找能独立扛起整条方向的人。 欢迎 产品、 工程、 算法 的岗位投递。
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/joinus"
            className="inline-block rounded-md bg-gray-900 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            看招聘计划
          </Link>
          <Link
            href="/blog"
            className="inline-block rounded-md border border-gray-300 px-8 py-4 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-900"
          >
            读我们的博客
          </Link>
        </div>
      </Section>
    </>
  )
}
