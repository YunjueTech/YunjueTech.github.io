import Link from '@/components/Link'

export default function Home({ posts }) {
  return (
    <>
      {/* Hero Section */}
      <div className="pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="max-w-4xl">
          <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl dark:text-gray-100">
            Intelligence that Evolves with You.
          </h1>
          <p className="mt-8 text-2xl text-gray-600 md:text-3xl dark:text-gray-400">
            智能，因你而进化。
          </p>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl">
          <h2 className="mb-8 text-3xl font-semibold text-gray-900 dark:text-gray-100">
            Who We Are{' '}
            <span className="text-2xl font-normal text-gray-500 dark:text-gray-400">我们是谁</span>
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              云玦科技 (Yunjue Technology) 是一家致力于构建自进化通用智能体 (Self-Evolving AGI)
              的前沿科技公司。
            </p>
            <p>
              我们是一群不知疲倦的探索者，成员来自顶尖的 AI
              实验室与工程团队。我们不满足于"静态"的大模型——那些被冻结在训练完成那一刻的参数矩阵。我们相信，真正的智能不在于存储了多少过去的知识，而在于面对未知未来时，适应、学习并创造工具的能力。
            </p>
            <p className="text-base text-gray-600 italic dark:text-gray-400">
              "云"象征着计算的无限边界，"玦"代表着决策的果敢与智慧。云玦，即是在无限的计算中，寻找确定的智能解。
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="border-t border-gray-200 py-16 md:py-24 dark:border-gray-800">
        <div className="max-w-4xl">
          <h2 className="mb-8 text-3xl font-semibold text-gray-900 dark:text-gray-100">
            Our Vision{' '}
            <span className="text-2xl font-normal text-gray-500 dark:text-gray-400">愿景</span>
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p className="text-xl font-medium text-gray-900 dark:text-gray-100">
              To build the substrate for continuous evolution in synthetic intelligence.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">构建合成智能持续进化的基石。</p>
            <p>
              我们致力于让每一个智能体都拥有"生命力"。它不再是一个机械的问答机器，而是一个能够随着用户需求变化、随着世界信息更新，自主生长、自主纠错、自主优化的数字生命。
            </p>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="border-t border-gray-200 py-16 md:py-24 dark:border-gray-800">
        <div className="max-w-4xl">
          <h2 className="mb-12 text-3xl font-semibold text-gray-900 dark:text-gray-100">
            Our Philosophy{' '}
            <span className="text-2xl font-normal text-gray-500 dark:text-gray-400">技术哲学</span>
          </h2>

          <div className="space-y-16">
            {/* Philosophy 1 */}
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                From Static to Dynamic
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                只有在推理时（Test-Time）的学习，才是真正的智能。
              </p>
            </div>

            {/* Philosophy 2 */}
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                From Manual to Autonomous
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                我们拒绝堆砌人工规则。如果智能体不能自己写代码解决新问题，它就不配被称为智能体。
              </p>
            </div>

            {/* Philosophy 3 */}
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Open & Convergent
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                进化必须是开放的，但知识必须是收敛的。我们将这一进程开源，与全人类共享 AGI 的红利。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="border-t border-gray-200 py-16 md:py-24 dark:border-gray-800">
        <div className="max-w-4xl">
          <h2 className="mb-8 text-3xl font-semibold text-gray-900 dark:text-gray-100">Join Us</h2>
          <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            我们正在构建能够突破技术边界、同时为尽可能多的人创造真正价值的 AI
            系统。我们的团队结合严谨的工程实践与创造性探索，我们正在寻找志同道合的伙伴来共同实现这一愿景。
          </p>
          <Link
            href="/joinus"
            className="inline-block rounded-md bg-gray-900 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            查看职位 &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
