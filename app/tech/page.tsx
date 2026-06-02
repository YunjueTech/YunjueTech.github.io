import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'
import { Hero, Section, PillarCard, CodeBlock, Stat } from '@/components/PageBlocks'

export const metadata = genPageMetadata({
  title: '技术',
  description:
    'Early Fusion 多模态、Self-Evolving Agent、Zero-Skill 千人千面 —— 云玦的三层技术壁垒。',
})

export default function TechPage() {
  return (
    <>
      <Hero
        eyebrow="技术"
        title={<>三层壁垒：从信号到应用</>}
        subtitle={
          <>
            云玦的技术叙事从下到上是三层：最底层是 Early Fusion 多模态信号融合；中间层是
            自进化智能体（Self-Evolving Agent），每晚跑一次沙箱完成自动审计 + 自造工具 / Skill；
            最上层是 Zero-Skill 千人千面的应用层。每一层都依赖上一层先做对。
          </>
        }
      />

      <Section eyebrow="01 / 信号层" title="Early Fusion 多模态：理解你，不只是理解你说的话">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          主流多模态 AI 走的是 Late Fusion（晚融合）：每条模态先各自变成文字，再拼到一起。
          多模态之间的时序关系、强度对比、"心率上升发生在话音之后 3 秒"这类细节，全部丢失。
          结论只能粗糙、安全、千人一面。
        </p>
        <CodeBlock>
          {`Late Fusion（主流）
  音频  ──→  ASR        ──→ "喂老板叫你过去一下"  ─┐
  心率  ──→  数值描述    ──→ "心率从 75 升到 110"  ─┼──→  LLM 拼起来：
  图像  ──→  描述模型    ──→ "穿西服的人"          ─┘   "你工作上好像有点事"

Early Fusion（云玦）
  音频     ┐
  心率     ┤
  IMU     ┼──→  对齐到原始信号层 → 多模态 LLM
  图像     ┤        "你被老板叫过去那一刻有点紧张"
  知识图谱  ┘`}
        </CodeBlock>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          模型在原始信号层就建立"心率上升 3 秒后听到那句话"的因果链，
          结论可以精确到事件、精确到瞬间、精确到这个人。
        </p>
      </Section>

      <Section eyebrow="为什么主流大模型做不到" title="不是不想做，是没数据">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          主流模型已经覆盖：视频→文字（VL 模型）、音频→文字（ASR /
          gpt-audio）、图像→文字（基本都原生支持）。
        </p>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          但
          <strong>
            "心率（稠密数值）+ IMU（稠密数值）+ HRV（稀疏数值）+ 音频（稠密连续波形）+
            图像（稀疏帧）+   知识图谱（图结构）"
          </strong>
          多种模态的混合输入，在公开互联网上不存在足量训练数据 ——
          因为只有持续戴着多模态采集设备、 24 小时收集的人才有。
        </p>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          这是云玦绕开主流模型正面战场的"新训练场"。
          我们目前借用主流多模态模型的对齐能力，收集"长尾模态 → 人类行为结果"的稠密标注数据，
          长期训自有的 <strong>Human-Centric World Model</strong>。
        </p>
      </Section>

      <Section eyebrow="Early Fusion 当下边界" title="Late Fusion 永远抓不到的，Early Fusion 能">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          以下三种能力都依赖心率、视觉、声纹、对话在<strong>原始信号层</strong>精确对齐，
          用 Late Fusion 先把每条模态压成文字再拼接，这些信息全部丢失。
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
            <div className="text-primary-500 dark:text-primary-400 mb-3 text-xs font-semibold tracking-widest">
              能力 01
            </div>
            <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-gray-100">
              自陈与体征的对齐
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              文字层面的状态描述，和心率、HRV、步态揭示的真实身体反应往往并不一致。
              云玦把同一时段的两条信号对齐，把语义层面看不见的差异显示出来。
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
            <div className="text-primary-500 dark:text-primary-400 mb-3 text-xs font-semibold tracking-widest">
              能力 02
            </div>
            <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-gray-100">
              跨日同活动的横向对比
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              同样是静坐打字、同样是会议、同样是通勤，
              不同时段、不同状态下的体征曲线差异显著。多模态时间线让"今天 vs 基线"成为可计算的量。
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
            <div className="text-primary-500 dark:text-primary-400 mb-3 text-xs font-semibold tracking-widest">
              能力 03
            </div>
            <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-gray-100">
              多模态因果链
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              "心率上升 3 秒后听到那句话"——
              心率、视觉、声纹切换、对话内容在原始信号层对齐，构建出文字层面拿不到的因果链。
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          这是 Early Fusion 的当下边界，也是积累"人类行为结果"标注数据的入口——
          它们共同构成未来 Human-Centric World Model 的训练真值来源。
        </p>
      </Section>

      <Section eyebrow="02 / 系统层" title="Self-Evolving Agent：用得越久越聪明">
        <div className="border-primary-500/40 bg-primary-500/5 dark:bg-primary-500/10 rounded-2xl border-2 p-8">
          <div className="text-primary-500 dark:text-primary-400 mb-2 text-sm font-semibold tracking-wider uppercase">
            学术成绩 · arXiv 2601.18226
          </div>
          <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
            5 个 benchmark · 3 项 SOTA · 2 项第二
          </h3>
          <p className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            论文在 HLE / DeepSearchQA / FinSearchComp / xBench-ScienceQA / xBench-DeepSearch 五个
            benchmark 上，对比 GPT-5.2 Pro / GPT-5 Pro / Gemini 3 Pro / Claude 4.5 Opus
            等闭源前沿基线， Yunjue Agent 拿到三项 SOTA、两项第二（仅次于闭源最前沿模型）：
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            <Stat label="HLE" value="48.0" hint="#2 · 仅次于 GPT-5.2 Pro" />
            <Stat label="DSQA" value="73.5" hint="SOTA · +16.9 vs Gemini 3 Pro" />
            <Stat label="FSC" value="65.0" hint="SOTA · +15.1 vs Gemini 3 Pro" />
            <Stat label="xSciQA" value="76.5" hint="SOTA" />
            <Stat label="xDS" value="59.7" hint="#2 · 仅次于 GPT-5 Pro" />
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a
              href="https://arxiv.org/abs/2601.18226"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-primary-500 inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-900 transition-colors hover:text-white dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
            >
              arXiv 论文
            </a>
            <a
              href="https://github.com/YunjueTech/Yunjue-Agent"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-primary-500 inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-900 transition-colors hover:text-white dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
            >
              GitHub 仓库
            </a>
            <a
              href="https://huggingface.co/datasets/YunjueTech/Yunjue-Agent-Traces"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-primary-500 inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-900 transition-colors hover:text-white dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
            >
              完整演化痕迹
            </a>
          </div>
        </div>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <li>
            <strong>In-Situ Self-Evolving 范式</strong>：传统智能体靠"离线训练 +
            在线部署"的静态边界；我们提出"推理即演化"，每一次推理都会修改系统配置，
            并立即用于下一次推理。
          </li>
          <li>
            <strong>Tabula Rasa（白板）实验</strong>：初始空工具库，让智能体完全靠推理期间的 "生成 →
            验证 → 归纳"自己造工具。
          </li>
          <li>
            <strong>工具库收敛</strong>：智能体自己造的工具数量在反复推理中收敛、可复用 ——
            证明"通用解题能力"是可学习、可蒸馏的有限模式（HLE 上 2,500 次推理仅生成 97 个工具）。
          </li>
          <li>
            <strong>暖启动迁移</strong>：用 HLE 演化出的工具集启动其他 benchmark，新工具增量在
            xSciQA / xDS 上可降到 0，证明能力跨域可复用。
          </li>
        </ul>
        <p className="text-base text-gray-600 dark:text-gray-400">
          代码、benchmark 运行脚本、每一步工具生成 / 修改 / 合并的演化痕迹全部 CC BY 4.0 开源 ——
          可审计、可复现。完整工作见{' '}
          <Link
            href="/blog/YunjueAgent"
            className="text-primary-500 dark:text-primary-400 hover:underline"
          >
            Yunjue Agent 博客
          </Link>
          。
        </p>
      </Section>

      <Section eyebrow="产品里的自进化" title="每晚一次的自进化沙箱">
        <CodeBlock>
          {`每晚 · 当日数据归集完成
   │
   ▼
为每个用户启动一次自进化沙箱
   │
   ├─ 审计当日   分析事件叙事与用户对产品的反馈信号，
   │            复核可疑事件（误判 / 复合段 / 边界错）
   │
   ├─ 增量画像   profile / glossary / 个人知识图谱 / 关系图谱 / 待办
   │            以"模式陈述"形式追加，不覆盖既有内容
   │
   ├─ 找缺口     识别用户当前 Skill 库覆盖不到的能力空白
   │
   └─ 造工具     现场生成 Python 工具骨架与设计 brief，
                通过验证后沉淀进共享工具库
   │
   ▼
全程审计落库 · 可逐节点回放每条决策的"为什么"`}
        </CodeBlock>
        <div className="grid gap-6 md:grid-cols-2">
          <PillarCard index="Tool" title="做什么的最小单元">
            一个独立可执行的代码单元，定义"做什么"。例如地图查询、KOL 意见聚合、心率分析。
            自进化沙箱每晚现场写、现场跑、现场验证，通过验证后沉淀进共享工具库。
          </PillarCard>
          <PillarCard index="Skill" title="用户面向的卡片单元">
            一组执行 + 渲染契约 + 一组专属工具。智能体先输出长报告，再渲染成 HTML 卡片在 App
            里呈现。
          </PillarCard>
        </div>
        <p className="text-base text-gray-600 dark:text-gray-400">
          自进化分两步：
          <strong className="text-gray-900 dark:text-gray-100">私有进化</strong>
          （自动，全程在沙箱里发生）+{' '}
          <strong className="text-gray-900 dark:text-gray-100">共享提取</strong>
          （脱敏后将高价值通用工具沉淀进共享库）。 Skill
          默认私有、工具默认私有；共享只发生在"非用户隐私的通用工具"提取阶段。
        </p>
      </Section>

      <Section eyebrow="03 / 应用层" title="Zero-Skill 千人千面：每个人的 App 不一样">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          主流"AI 助手"产品的做法：预置一堆功能，让用户自己挑。结果是
          <strong>每个用户看到的是一样的产品</strong>，差异只在于用了哪些。
        </p>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          云玦的设计是 <strong>Zero-Skill 起步</strong>：
        </p>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <li>首次进 App，Feed 是空的 —— 系统对你一无所知，就什么都不显示</li>
          <li>系统持续观察，把每天的活动切成事件叙事</li>
          <li>持续运行几天后，开始识别"你在哪些时段做哪些事"，自己造 Skill</li>
          <li>两周左右，每个用户的卡片库完全不一样</li>
        </ul>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          冷启动慢是劣势，<strong>但它是壁垒的代价</strong>。每张卡片是一个独立的 HTML 小程序，
          意味着同一套 Feed 框架可以承载工具、复盘、陪伴对话，甚至专属游戏。用户专属的 Skill
          越多，切换平台的成本（Switching Cost）就越高。
        </p>
      </Section>

      <Section eyebrow="内测观察" title="同一个系统，不同的人长出完全不同的 Skill 库">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          云玦的自进化沙箱每晚运行一次，根据用户的事件叙事、声纹画像与行为模式
          自动识别能力缺口、自动生成 Skill —— 没有"功能列表"，每个人最终拥有的卡片库都不一样。
          典型方向包括：
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
              创作者方向
            </h3>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              创作能量曲线、灵感闪现回放、决策风格回顾、长文写作复盘 ——
              围绕"想清楚自己为什么这样做"的能力被自动识别并生成。
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
              专业工作方向
            </h3>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              有效工作时长统计、协作对谈摘要、信息利用率、专家访谈整理 ——
              围绕"我的产出到底从哪里来"的能力被自动识别并生成。
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
              生活与陪伴方向
            </h3>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              亲子日常记录、长期成长档案、场景手记、关系图谱 ——
              围绕"日常细节如何沉淀成长期叙事"的能力被自动识别并生成。
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
              现场创作方向
            </h3>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              拍摄/演出当下笔记、现场状态曲线、灵感簿 ——
              围绕"创作那一刻我到底在想什么"的能力被自动识别并生成。
            </p>
          </div>
        </div>
        <p className="text-base text-gray-600 dark:text-gray-400">
          以上方向均来自 Zero-Skill 起步，由自进化沙箱在每晚的运行中自动识别并生成 ——
          不是人工预置功能，也不是用户从列表里挑选。
        </p>
      </Section>

      <Section eyebrow="横向对比" title="主流 LLM / 限定领域 Agent / 云玦">
        <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800">
          <table className="w-full text-left">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="p-4 text-sm font-semibold text-gray-900 dark:text-gray-100">维度</th>
                <th className="p-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
                  主流 LLM 助手
                </th>
                <th className="p-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
                  限定领域 Agent
                </th>
                <th className="p-4 text-sm font-semibold text-gray-900 dark:text-gray-100">云玦</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700 dark:text-gray-300">
              <tr className="border-t border-gray-200 dark:border-gray-800">
                <td className="p-4 font-medium">开放性</td>
                <td className="p-4">✅ 任何输入</td>
                <td className="p-4">❌ 固定意图</td>
                <td className="p-4">✅</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-800">
                <td className="p-4 font-medium">安全 / 可控</td>
                <td className="p-4">❌ 概率模型</td>
                <td className="p-4">✅ FSM</td>
                <td className="p-4">✅ 沙箱 + 工具验证</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-800">
                <td className="p-4 font-medium">成本</td>
                <td className="p-4">❌ 全推理</td>
                <td className="p-4">✅ 路径固定</td>
                <td className="p-4">✅ 路径缓存 + 必要时深推</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-800">
                <td className="p-4 font-medium">个性化</td>
                <td className="p-4">❌ 千人一面</td>
                <td className="p-4">❌ 无个性</td>
                <td className="p-4">✅ 千人千面</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-800">
                <td className="p-4 font-medium">多模态深度</td>
                <td className="p-4">❌ Late Fusion</td>
                <td className="p-4">❌ 单模态</td>
                <td className="p-4">✅ Early Fusion</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-800">
                <td className="p-4 font-medium">自进化</td>
                <td className="p-4">❌ 训练后冻结</td>
                <td className="p-4">❌ 工程师手改</td>
                <td className="p-4">✅ 每晚自动</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-base text-gray-600 dark:text-gray-400">
          商业落地的"开放性 / 可控性 / 经济性"不可能三角，传统方案只能同时满足其中两点；
          我们相信自进化智能体是同时跨越三角的可行路径。完整论证见{' '}
          <Link
            href="/blog/vision"
            className="text-primary-500 dark:text-primary-400 hover:underline"
          >
            动态自进化是 To C 服务的正途
          </Link>
          。
        </p>
      </Section>

      <Section eyebrow="隐私架构" title="原始数据出不出端，是用户的主动选择">
        <CodeBlock>
          {`普通版（云玦自研多模态硬件 + iPhone 普通用户）
  ├─ 方案 1：边侧小模型先压成文本摘要再上云
  └─ 方案 2：边侧融合适配器，原图原数据不出端，
            上云的是 fusion 向量

极客版（开发者 / 高需求用户）
  ├─ 私有服务器打包：原始数据上云，但是用户自己的服务器，token 收费
  └─ 轻量后端开源：用户自己部署到自有服务器，仅硬件收费`}
        </CodeBlock>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <li>
            <strong>当前（深度内测期）</strong>：原始数据在云端按设备级加密、严格隔离、
            无跨用户混流处理 —— 这是我们与早期内测用户共同选择的"先把链路跑稳"的阶段。
          </li>
          <li>
            <strong>中期路线（云玦自研多模态硬件 + 边侧适配器上线后）</strong>：普通版默认走端侧 /
            边侧路径，原始数据不出端 / 边，云端只接收 fusion 向量 ——
            "原始数据是否离开你的设备"成为用户的主动选择，不再是默认行为。
          </li>
          <li>
            <strong>极客版选项（与普通版并行发售）</strong>：私有部署或轻量后端开源，
            原始数据完全自主。
          </li>
          <li>
            <strong>工具 / Skill 默认私有</strong>：发布到社区是用户主动动作，
            发布前会做脱敏（移除用户专有名词、人名、地点）。
          </li>
        </ul>
      </Section>

      <Section eyebrow="更长视角" title="三条互为前提的长期赛道">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          上面这三层壁垒，都服务于云玦在做的三条长期赛道。任何一条缺位，其余两条都不成立。
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <PillarCard index="01" title="Human-Centric World Model">
            当前所有主流大模型的训练数据都来自公开互联网——它们学会了关于世界的通用知识，
            但从未系统性地针对"人本身"做过基础模型训练。
            没有一个模型真正理解：同一个人，打字时的心率曲线和开会时有什么不同；
            一段对话里说出某句话之前，身体已经先有了反应。
            <br />
            <br />
            云玦的长期目标是填补这个空白——把心率、IMU、声音、视觉、对话内容、
            个人画像、关系图谱在原始信号层对齐，训练真正<strong>以人为中心的多模态基础模型</strong>。
            它的训练目标不是"通用世界知识"，而是"一个具体的人在特定时刻的状态、意图与需求"。
            <br />
            <br />
            这个模型一旦成立，具身智能、人形机器人、消费级个人 AI 都将拥有一个真正理解人的底座——
            而不只是能对话的语言模型。
          </PillarCard>
          <PillarCard index="02" title="自进化智能体">
            主流"AI 助手"由工程师按场景手工实现，无法支撑千人千面的个体差异。Yunjue Agent
            论文证明，智能体可以基于"推理即演化"在沙箱中自造工具、自造 Skill、自识别能力缺口 ——
            我们相信这是 To C 个人服务跨越"开放、可控、经济"不可能三角的可行路径，
            也是云玦为每位用户长出独属应用的工程底座。
          </PillarCard>
          <PillarCard index="03" title="随身多模态入口 · 外置感官系统">
            要理解一个人，AI 需要持续在身边、无感、低打扰、隐私可控——
            这一能力需要由随身多模态硬件承担，不是手机应用，不是智能音箱。
            <br />
            <br />
            云玦把这类设备定位为<strong>外置感官系统</strong>：双麦阵列持续听、摄像头关键帧触发拍、
            心率 / HRV / IMU / 皮肤温度持续量——替你感知你自己感知不到的信号，
            把这些信号交给云端外置前额叶做分析与反思。
            <br />
            <br />
            云玦当前以 Apple Watch 验证主链路；自研多模态硬件 v1 进行中，
            围绕"双麦 + 心率 / IMU + 隐私指示灯与硬件开关一体"展开，
            使"原始数据是否出端"成为用户的主动选择。
          </PillarCard>
        </div>
      </Section>

      <Section eyebrow="继续阅读" title="看产品形态或加入我们，也可以先看三条赛道的完整叙事">
        <p className="text-base text-gray-600 dark:text-gray-400">
          Early Fusion → 自进化智能体 → Human-Centric World Model，三条赛道都在产品页有对应节奏说明。
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/products"
            className="inline-block rounded-md bg-gray-900 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            产品形态
          </Link>
          <Link
            href="/joinus"
            className="inline-block rounded-md border border-gray-300 px-8 py-4 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-900"
          >
            加入我们
          </Link>
        </div>
      </Section>
    </>
  )
}
