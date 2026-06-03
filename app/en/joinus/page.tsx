import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'
import { Hero, Section } from '@/components/PageBlocks'

export const metadata = genPageMetadata({
  title: 'Join us',
  description:
    'Yunjue is hiring: Backend/Full-stack Engineer, AI Product Manager, iOS Engineer, Agent Algorithm Engineer, HCWM Pretraining.',
})

const openRoles = [
  {
    tag: 'Engineering',
    title: 'Senior Backend / Full-stack Engineer',
    desc: 'Own backend main-loop iteration and architecture evolution — Skill execution, multimodal timeline pipeline, and self-evolution sandbox engineering delivery.',
    stack: 'Python · FastAPI · PostgreSQL · Redis · async task orchestration',
  },
  {
    tag: 'Product',
    title: 'AI Product Manager',
    desc: 'Define Skill trigger conditions, interaction scope, and card output. Iterate prompts and trigger rules directly with AI tools; drive per-individual personalization in production.',
    stack: 'LLM · Agent · Prompt Engineering · Consumer product experience',
  },
  {
    tag: 'Engineering',
    title: 'Senior iOS Engineer',
    desc: 'Own the iOS client experience, WKWebView card rendering framework, and on-device inference / privacy-split capability groundwork.',
    stack: 'SwiftUI · SwiftData · WKWebView · Core ML',
  },
  {
    tag: 'Algorithm',
    title: 'Agent Algorithm Engineer',
    desc: 'Maintain the prompt system for production Skills, improve LLM Trigger Gate and self-evolution pipeline algorithms, and explore Agent orchestration architecture.',
    stack: 'LangChain · LangGraph · ReAct Agent · Prompt Engineering',
  },
  {
    tag: 'Foundation',
    title: 'Human-Centric World Model Pretraining',
    desc: 'Build the foundation model centered on people — full-pipeline training from multimodal signal alignment to pretraining.',
    stack: 'Pretraining · Multimodal · Data',
  },
]

const futureTracks = [
  { tag: 'Algorithm', title: 'Multimodal LLM Engineer' },
  { tag: 'Algorithm', title: 'Timeline / Event Pipeline Engineer' },
  { tag: 'Hardware', title: 'Hardware Lead (always-on multimodal capture)' },
  { tag: 'Hardware', title: 'Embedded / Firmware Engineer' },
  { tag: 'Algorithm', title: 'On-device Multimodal Fusion Algorithm Engineer' },
  { tag: 'Engineering', title: 'On-device Inference Engineer (iOS)' },
  { tag: 'Algorithm', title: 'Realtime Multimodal Algorithm Engineer' },
  { tag: 'Algorithm', title: 'Pretraining Engineer (Human-Centric World Model)' },
]

export default function JoinUsEnPage() {
  return (
    <>
      <Hero
        eyebrow="Join us"
        title={<>Join us</>}
        subtitle={
          <>
            Yunjue is working on three mutually-dependent things: a Human-Centric World Model, a
            self-evolving agent, and an always-on multimodal hardware platform. We're looking for
            people who share the passion to build this new world with us.
            <br />
            <span className="text-base text-gray-500 dark:text-gray-400">
              Send your CV to: hr@yunjuetech.com
            </span>
          </>
        }
        cta={[{ href: 'mailto:hr@yunjuetech.com?subject=Apply%20to%20Yunjue', label: 'Send a CV' }]}
      />

      <Section eyebrow="Urgent" title="Urgent">
        <div className="space-y-4">
          {openRoles.map((role) => (
            <div
              key={role.title}
              className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 md:flex-row md:items-start dark:border-gray-800 dark:bg-gray-950"
            >
              <div className="w-24 shrink-0">
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

      <Section eyebrow="Hiring" title="Hiring">
        <div className="grid gap-3 md:grid-cols-2">
          {futureTracks.map((t) => (
            <div
              key={t.title}
              className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 dark:border-gray-800"
            >
              <span className="w-20 shrink-0 text-xs font-semibold text-gray-400 dark:text-gray-500">
                {t.tag}
              </span>
              <span className="text-sm text-gray-700 dark:text-gray-300">{t.title}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
          Milestones include hardware v1 tape-out, end/edge privacy split, the Realtime multimodal
          path, and the Human-Centric World Model pretraining kickoff.
        </p>
      </Section>

      <Section eyebrow="What we value" title="Who will thrive here">
        <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800">
          <table className="w-full text-left">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="p-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Dimension
                </th>
                <th className="p-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
                  What we look for
                </th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700 dark:text-gray-300">
              <tr className="border-t border-gray-200 dark:border-gray-800">
                <td className="p-4 font-medium">Interest</td>
                <td className="p-4">
                  People who actually use quantified-self / wearables / personal AI — users of the
                  product, not just builders
                </td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-800">
                <td className="p-4 font-medium">Toolchain</td>
                <td className="p-4">
                  Comfortable using Claude Code / Codex / Cursor for real engineering delivery
                </td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-800">
                <td className="p-4 font-medium">Working style</td>
                <td className="p-4">Async + doc-driven; no dense-meeting habit</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-800">
                <td className="p-4 font-medium">Background</td>
                <td className="p-4">
                  CS / EE / design related; no brand-name school requirement — depth of work
                  portfolio matters more
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section eyebrow="Contact" title="Apply or refer">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Send your CV to{' '}
          <a
            href="mailto:hr@yunjuetech.com"
            className="text-primary-500 hover:text-primary-600 dark:text-primary-400 underline"
          >
            hr@yunjuetech.com
          </a>
          , with the role you're applying for and one piece of work that best represents you.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:hr@yunjuetech.com?subject=Apply%20to%20Yunjue"
            className="inline-block rounded-md bg-gray-900 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Send a CV
          </a>
          <Link
            href="/en/tech"
            className="inline-block rounded-md border border-gray-300 px-8 py-4 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-900"
          >
            Read the tech
          </Link>
        </div>
      </Section>
    </>
  )
}
