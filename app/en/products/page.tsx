import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'
import { Hero, Section, PillarCard } from '@/components/PageBlocks'

export const metadata = genPageMetadata({
  title: 'Product',
  description:
    'Yunjue personal agent: always-on hardware + iPhone + cloud AI. External sensory system + external prefrontal cortex. Deep internal trial running today.',
})

export default function ProductsEnPage() {
  return (
    <>
      <Hero
        eyebrow="Product"
        title={<>An agent that grows with you</>}
        subtitle={
          <>
            Yunjue isn't an app, and it isn't a watch — it's a personal agent spanning always-on
            hardware, mobile, and cloud. The always-on hardware is an{' '}
            <strong>external sensory system</strong> — continuously capturing multimodal signals you
            can't perceive on your own. The cloud AI is an{' '}
            <strong>external prefrontal cortex</strong> — turning those signals into understanding,
            reflection, and personalized decision support, growing nightly into an agent unique to
            each user.
          </>
        }
      />

      <Section eyebrow="Demo video">
        <div className="overflow-hidden rounded-2xl">
          <iframe
            title="Yunjue product demo video"
            src="https://player.bilibili.com/player.html?bvid=BV1vHVz6BEFE&page=1&high_quality=1&danmaku=0"
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            style={{ width: '100%', aspectRatio: '16 / 9', display: 'block' }}
          />
        </div>
      </Section>

      <Section eyebrow="Form factor" title="Three layers, four ends">
        <div className="grid gap-6 md:grid-cols-3">
          <PillarCard
            index="01 / Always-on hardware"
            title="External sensory system"
            caption="24h multimodal capture · Apple Watch for main-loop validation now; in-house multimodal hardware v1 in progress"
          >
            Dual-mic array + heart rate / HRV / IMU / skin temp / SpO2, continuously streaming raw
            multimodal signals — perceiving what you can't perceive yourself. The in-house version
            adds a privacy indicator LED, a hardware kill-switch, on-device cache, and BLE uplink.
            Future form factors explored around "always-with-you, low-intrusion, multimodal,
            privacy-controllable" — no single form committed upfront.
          </PillarCard>
          <PillarCard
            index="02 / Mobile"
            title="Yunjue iOS App"
            caption="Personalized feed · HTML card rendering"
          >
            Day-one feed is empty. After a few days the system starts authoring Skills; by around
            two weeks no two users' card libraries overlap. Every card is a standalone HTML — tools,
            retrospectives, companion dialogue, even bespoke games all fit in.
          </PillarCard>
          <PillarCard
            index="03 / Cloud"
            title="External prefrontal cortex · Self-evolving Runtime"
            caption="Multimodal timeline + personal knowledge graph + self-evolving sandbox"
          >
            Signals captured by the sensory system are turned into understanding and reflection in
            the cloud — that's the job of the external prefrontal cortex. Every night the sandbox
            kicks in: audit today's events → deep-dive for evidence → refresh the user model →
            identify Skill gaps → author tools and design briefs on the spot. The accumulating data
            flywheel ultimately trains a truly human-centric world model.
          </PillarCard>
        </div>
      </Section>

      <Section eyebrow="Join the early trial" title="Want to use Yunjue yourself?">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          The trial users we're running with all reached out to us themselves. The bar isn't
          trivial: you need to wear it for long enough stretches and be willing to do a few
          product-feedback conversations. All data handling runs under transparent disclosure +
          signed authorization. We follow up individually with the right fits.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:contact@yunjuetech.com?subject=Apply%20to%20Yunjue%20early%20trial"
            className="inline-block rounded-md bg-gray-900 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Email to apply
          </a>
          <Link
            href="/en/tech"
            className="inline-block rounded-md border border-gray-300 px-8 py-4 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-900"
          >
            Read the tech first
          </Link>
        </div>
      </Section>
    </>
  )
}
