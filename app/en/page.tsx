import Link from '@/components/Link'
import { Hero, Section, PillarCard, Stat } from '@/components/PageBlocks'

export default function HomeEn() {
  return (
    <>
      <Hero
        eyebrow="Yunjue Technology · 云玦科技"
        title={<>Your Life, Rendered as Context</>}
        subtitle={
          <>
            Yunjue is building a personal agent that grows with you — always-on hardware on your
            body, living in your phone, evolving in the cloud. Not another AI assistant, but a new
            kind of personal AI infrastructure: a long-term companion that, given enough time,
            actually understands who you are.
          </>
        }
        cta={[
          { href: '/en/tech', label: 'See the tech' },
          { href: '/en/products', label: 'See the product', tone: 'subtle' },
        ]}
      />

      <Section
        eyebrow="What we build"
        title="An agent that grows with you, not a mirror you stare at"
      >
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Mainstream wearables are mirrors: they reflect heart rate, steps, and sleep numbers — but
          never tell you <em>why</em>, and never grow with you. Yunjue works in two layers: the
          always-on hardware is an <strong>external sensory system</strong> — continuously watching,
          listening, and measuring without interrupting your conscious flow; the cloud AI is an{' '}
          <strong>external prefrontal cortex</strong> — turning raw signals into reflection, review,
          and personalized decision support, so the agent actually understands you and grows with
          you.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Stat label="Multimodal depth" value="Early" hint="Raw-signal fusion, not Late Fusion" />
          <Stat
            label="Personalization"
            value="Zero"
            hint="Zero-Skill start, fully personal in 14 days"
          />
          <Stat
            label="Self-evolution"
            value="Nightly"
            hint="Nightly self-evolution sandbox · audit events · update profile · author tools and skills"
          />
        </div>
      </Section>

      <Section eyebrow="Three-layer moat" title="From signal to application, layer by layer">
        <div className="grid gap-6 md:grid-cols-3">
          <PillarCard
            index="01 / Signal"
            title="Early Fusion multimodal"
            caption="Not text-then-concat"
          >
            Mainstream Late Fusion compresses audio, heart rate, vision into text first, then
            concats — losing all temporal and causal links. Yunjue aligns 7 modalities at the
            raw-signal layer, so conclusions can be event-, moment-, and person-precise.
          </PillarCard>
          <PillarCard
            index="02 / System"
            title="Self-Evolving Agent"
            caption="In-Situ Self-Evolving · 5 benchmarks, 3 SOTA / 2 runner-up"
          >
            Our research work, Yunjue Agent (In-Situ Self-Evolving), proposes "inference IS
            evolution" — measured against GPT-5.2 Pro, Gemini 3 Pro, and other frontier baselines
            across HLE / DSQA / FSC / xSciQA / xDS; paper, code, and full evolution traces are open
            source. In production, a dedicated self-evolution sandbox runs every night for each
            user: audits today's events, incrementally refreshes the user model, identifies
            capability gaps, and authors tools and Skills on the spot.
          </PillarCard>
          <PillarCard
            index="03 / Application"
            title="Zero-Skill personalization"
            caption="Each card is a standalone HTML"
          >
            Day-one feed is empty. Days 3–7 the system starts building Skills. By day 14, no two
            users share the same card library. Tool users see review cards; companion-style users
            see emotional mirroring; creators see story prompts.
          </PillarCard>
        </div>
        <p className="mt-8 text-base text-gray-600 dark:text-gray-400">
          Each layer depends on the one below. Without Early Fusion the agent sees no dense signal;
          without self-evolution the application stays one-size-fits-all. Full reasoning on the{' '}
          <Link href="/en/tech" className="text-primary-500 dark:text-primary-400 hover:underline">
            tech page
          </Link>
          .
        </p>
      </Section>

      <Section
        eyebrow="From Early Fusion to Human-Centric World Model"
        title="What we can do today, where we're headed"
      >
        <div className="space-y-10">
          <div>
            <p className="text-primary-500 dark:text-primary-400 mb-4 text-sm font-semibold tracking-wider uppercase">
              Today · Early Fusion
            </p>
            <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Mainstream multimodal AI uses Late Fusion: audio, heart rate, vision are each
              compressed to text first, then concatenated — losing all temporal and intensity
              details. Yunjue aligns 7 modalities at the raw-signal layer, making conclusions
              precise to event, moment, and individual.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
                <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-gray-100">
                  Self-report vs. body
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  You say "felt fine," but the heart-rate curve says stressed. What you report in
                  words and what your body actually shows are aligned in the same window — the gap
                  language never catches is surfaced.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
                <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-gray-100">
                  Same activity, across days
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  The same sit-and-type session, today vs. the 14-day baseline, can look very
                  different physiologically. "Today vs. normal" becomes a measurable quantity.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
                <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-gray-100">
                  Multimodal causal chains
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  "Heart rate rose 3 seconds before that sentence was spoken" — heart rate,
                  voiceprint, and vision aligned at the raw layer construct causal chains language
                  alone never produces.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-primary-500 dark:text-primary-400 mb-4 text-sm font-semibold tracking-wider uppercase">
              Long-term goal · Human-Centric World Model
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Today we borrow the alignment capabilities of mainstream multimodal models to run
              Early Fusion while accumulating dense "unusual modalities → human behavior outcome"
              labeled data. When the data flywheel matures, Yunjue's long-term goal is to train a
              truly <strong>human-centric multimodal foundation model</strong> — aligning heart
              rate, IMU, audio, vision, dialogue, profile, and relationship graphs at the raw-signal
              layer to build a world model that genuinely understands the person, not a compressed
              version of general internet knowledge.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Roadmap" title="Three tracks running in parallel">
        <div className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            <strong className="text-gray-900 dark:text-gray-100">Now</strong> — Always-on hardware
            → iOS → cloud main loop is production-stable; the full self-evolution loop is live;
            deep internal trial is underway.
          </p>
          <p>
            <strong className="text-gray-900 dark:text-gray-100">Near term</strong> — Scale the
            self-evolution sandbox from small-batch precision tuning to industrial operation at the
            thousand-user public-beta scale, with quality gates moving into automation.
          </p>
          <p>
            <strong className="text-gray-900 dark:text-gray-100">Mid term</strong> — In-house
            multimodal hardware v1 ships; the always-on device becomes a true{' '}
            <strong>external sensory system</strong>. End / edge privacy split goes live, making
            raw-data residency a user choice.
          </p>
          <p>
            <strong className="text-gray-900 dark:text-gray-100">Long term</strong> — Three tracks
            converge: the Self-Evolving Agent delivers per-individual personalization at scale; the
            always-on hardware becomes a true external sensory system; the data flywheel matures
            into a self-trained <strong>Human-Centric World Model</strong> that understands people,
            not just the internet.
          </p>
        </div>
        <div className="mt-8">
          <Link
            href="/en/products"
            className="text-primary-500 hover:text-primary-600 dark:text-primary-400 inline-block text-base font-medium"
          >
            See the full product cadence &rarr;
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Join us"
        title="We're building a team that can lead long-horizon tracks end-to-end"
      >
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Hardware, on-device multimodal, Realtime, Self-Evolving Agent, self-trained
          Human-Centric World Model — for every track, we're hiring people who can take full
          ownership end-to-end. Especially welcome: peers who already live with quantified-self,
          smart wearables, or personal AI.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/en/joinus"
            className="inline-block rounded-md bg-gray-900 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            See the hiring plan
          </Link>
          <Link
            href="/en/blog"
            className="inline-block rounded-md border border-gray-300 px-8 py-4 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-900"
          >
            Read the blog
          </Link>
        </div>
      </Section>
    </>
  )
}
