import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'
import Image from '@/components/Image'
import { Hero, Section } from '@/components/PageBlocks'

export const metadata = genPageMetadata({
  title: 'Founders',
  description:
    "Yunjue's two co-founders: a 20-year seasoned operator-CEO (Peng Chao) and a next-gen AI architecture researcher-CTO (Qi Weizhen).",
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

export default function TeamEnPage() {
  return (
    <>
      <Hero
        eyebrow="Founders"
        title={<>The two co-founders of Yunjue</>}
        subtitle={
          <>
            One serial operator with 20 years of management experience, one next-gen AI architecture
            researcher — together they set the "hardware × software × algorithms as one" product
            path Yunjue is on.
          </>
        }
      />

      <Section bordered={false}>
        <div className="space-y-8">
          {/* Peng Chao - CEO */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-950">
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <FounderAvatar
                src="/static/images/team/peng-chao.jpg"
                alt="Peng Chao"
                objectPosition="62% 38%"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Peng Chao · Co-founder & CEO
                </h3>
                <p className="text-primary-500 dark:text-primary-400 mt-1 text-sm font-medium tracking-wide">
                  20 years of operating experience · hardware + software · domestic + overseas ·
                  full omnichannel
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  A career-long operator. Previously VP at Alibaba Group / CEO of Smart Connected
                  (former GM of the Tmall Genie business unit); Head of E-commerce & User Operations
                  at Honor; Country President of Huawei Consumer Business Group, India. Has led
                  organizations of 1,000+ people and run full-stack P&Ls spanning hardware,
                  software, e-commerce, and user operations.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Alibaba · CEO of Smart Connected (Tmall Genie)</strong> — led Alibaba's
                    consumer AIoT business: scaled AliGenie to mass adoption, built commercial
                    revenue from zero to scale, and improved the P&L from significant losses to near
                    break-even.
                  </li>
                  <li>
                    <strong>Honor · Head of E-commerce & User Operations</strong> — drove Honor's
                    online business to #1 share in the industry.
                  </li>
                  <li>
                    <strong>Huawei · Country President, India Consumer BG</strong> — full ownership
                    of Huawei's consumer business in India: regulatory affairs, subsidiary
                    management, India-localized R&D and supply chain, sales and marketing.
                  </li>
                  <li>
                    <strong>14 years at Huawei</strong> — from branch sales to country president.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Qi Weizhen - CTO */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-950">
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <FounderAvatar
                src="/static/images/team/qi-weizhen.jpg"
                alt="Qi Weizhen"
                objectPosition="50% 25%"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Qi Weizhen · Co-founder & CTO
                </h3>
                <p className="text-primary-500 dark:text-primary-400 mt-1 text-sm font-medium tracking-wide">
                  Next-gen AI architecture researcher · 3,000+ citations · h-index 17
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  A researcher focused on pretraining, agents, and inference acceleration. Three
                  first-author works defined cornerstones today's mainstream LLMs depend on: the
                  pretraining paradigm (MTP), inference acceleration (KV Cache optimization), and
                  the agent paradigm (LLM orchestrating multimodal tools).
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>ProphetNet (original MTP)</strong> — first author; the original
                    multi-token-prediction pretraining paradigm, adopted as a core pretraining
                    method by mainstream LLMs including the Deepseek series (V3, V4, etc.) and Qwen
                    series (V3-Omni, V3.5, etc.).
                  </li>
                  <li>
                    <strong>EL-Attention (KV Cache optimization)</strong> — among the very first KV
                    Cache optimization works in the field; the core idea aligns with later
                    efficient-inference algorithms such as DeepSeek's MLA. Integrated into
                    Huggingface Transformers; Microsoft Engineering applied the same technique to
                    OpenAI's GPT-3 deployment, delivering a 5–10× output-speed boost.
                  </li>
                  <li>
                    <strong>Visual ChatGPT (core author)</strong> — 30K GitHub stars within a week
                    of release; introduced the paradigm of an LLM orchestrating multimodal tools to
                    complete complex tasks.
                  </li>
                  <li>
                    <strong>Engineering</strong> — solo-led full-pipeline pretraining of
                    ProphetNet-X on 500 A100s and 5 TB of corpus; BANG (the field's first
                    non-autoregressive pretrained model) powers Bing's &lt;50 ms real-time response.
                  </li>
                  <li>
                    <strong>Academic roles</strong> — Area Chair, ACL / EMNLP ARR 2025; visiting
                    research mentor, Zhongguancun Academy.
                  </li>
                  <li>
                    <strong>Education</strong> — BSc, University of Science and Technology of China;
                    joint PhD program, Microsoft Research Asia.
                  </li>
                </ul>
                <p className="mt-4 text-sm">
                  <a
                    href="https://scholar.google.com/citations?user=rme-IWIAAAAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 dark:text-primary-400 underline"
                  >
                    Google Scholar →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/en/tech"
            className="inline-block rounded-md bg-gray-900 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            See the tech
          </Link>
          <Link
            href="/en/joinus"
            className="inline-block rounded-md border border-gray-300 px-8 py-4 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-900"
          >
            See open roles
          </Link>
        </div>
      </Section>
    </>
  )
}
