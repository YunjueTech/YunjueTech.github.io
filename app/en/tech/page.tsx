import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'
import { Hero, Section, CodeBlock, PillarCard, Stat } from '@/components/PageBlocks'

export const metadata = genPageMetadata({
  title: 'Tech',
  description:
    "Early Fusion multimodal, Self-Evolving Agent, Zero-Skill personalization — Yunjue's three-layer technical moat. Path to Human-Centric World Model.",
})

export default function TechEnPage() {
  return (
    <>
      <Hero
        eyebrow="Tech"
        title={<>Three layers, signal to application</>}
        subtitle={
          <>
            Yunjue's tech stack runs bottom-up across three layers: Early Fusion multimodal at the
            bottom; a Self-Evolving Agent in the middle that runs a sandbox every night — auditing
            events, refreshing the user model, and authoring its own tools / Skills; and Zero-Skill
            personalization on top. Each layer depends on the one below. The long-term arc leads to
            a self-trained Human-Centric World Model.
          </>
        }
      />

      <Section
        eyebrow="01 / Signal"
        title="Early Fusion multimodal: understanding you, not just what you said"
      >
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Mainstream multimodal AI uses Late Fusion: each modality is compressed to text first, then
          concatenated. Temporal relations, intensity contrasts, "heart rate rose 3 seconds{' '}
          <em>after</em> they said that" — all lost. Conclusions are coarse, safe, identical for
          everyone.
        </p>
        <CodeBlock>
          {`Late Fusion (mainstream)
  audio  ──→  ASR        ──→ "boss called me over"     ─┐
  HR     ──→  numeric    ──→ "HR rose from 75 to 110"  ─┼──→  LLM concat:
  vision ──→  caption    ──→ "person in a suit"        ─┘  "you seem to have
                                                            something at work"

Early Fusion (Yunjue)
  audio  ┐
  HR     ┤
  IMU    ┼──→  aligned at raw signal layer → multimodal LLM
  vision ┤      "you got nervous the moment your boss called you over"
  chat   ┘`}
        </CodeBlock>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          The model builds a causal chain at the raw-signal layer — "HR rose 3 seconds before that
          sentence was spoken." Conclusions become precise to the event, the moment, the individual.
        </p>
      </Section>

      <Section eyebrow="Why mainstream models can't" title="Not unwilling — there's no data">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Mainstream models cover: video → text (VL), audio → text (ASR / gpt-audio), image → text
          (most have it natively).
        </p>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          But the combination of{' '}
          <strong>
            HR (dense numeric) + IMU (dense numeric) + HRV (sparse) + audio (continuous waveform) +
            image (sparse frames) + personal profile (text) + knowledge graph
          </strong>{' '}
          — there is no public-internet training data at scale, because only people wearing
          always-on multimodal capture devices 24/7 generate it.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          This is Yunjue's flank: a new training arena that bypasses the frontal battle with
          mainstream models. Today we use the alignment capabilities of mainstream multimodal models
          to collect dense "unusual modalities → human behavior outcome" labels; long-term, we train
          our own <strong>Human-Centric World Model</strong>.
        </p>
      </Section>

      <Section
        eyebrow="Early Fusion boundary"
        title="The things Late Fusion can never catch, Early Fusion can"
      >
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          All three capabilities below require heart rate, vision, voiceprint, and dialogue to be
          precisely aligned at the <strong>raw-signal layer</strong>. Compress each modality to text
          first, and this information is gone.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
            <div className="text-primary-500 dark:text-primary-400 mb-3 text-xs font-semibold tracking-widest">
              CAPABILITY 01
            </div>
            <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-gray-100">
              Self-report vs. body
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              How you describe your state in words and what your heart rate, HRV, and gait actually
              reveal often diverge. Yunjue aligns both streams across the same window and surfaces
              the gap pure language never catches.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
            <div className="text-primary-500 dark:text-primary-400 mb-3 text-xs font-semibold tracking-widest">
              CAPABILITY 02
            </div>
            <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-gray-100">
              Same activity, across days
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              The same sit-and-type, the same meeting, the same commute can produce very different
              physiological curves. The multimodal timeline turns "today vs. baseline" into a
              measurable quantity.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
            <div className="text-primary-500 dark:text-primary-400 mb-3 text-xs font-semibold tracking-widest">
              CAPABILITY 03
            </div>
            <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-gray-100">
              Multimodal causal chains
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              "Heart rate rose 3 seconds before that sentence was spoken" — heart rate, vision,
              voiceprint shifts, and dialogue aligned at the raw-signal layer construct causal chains
              language alone never produces.
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          These are Early Fusion's current capabilities — and the entry point for accumulating
          "human behavior outcome" labels that will form the training ground truth of the future
          Human-Centric World Model.
        </p>
      </Section>

      <Section eyebrow="02 / System" title="Self-Evolving Agent: smarter the longer you use it">
        <div className="border-primary-500/40 bg-primary-500/5 dark:bg-primary-500/10 rounded-2xl border-2 p-8">
          <div className="text-primary-500 dark:text-primary-400 mb-2 text-sm font-semibold tracking-wider uppercase">
            Benchmarks · arXiv 2601.18226
          </div>
          <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
            5 benchmarks · 3 SOTA · 2 runner-up
          </h3>
          <p className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Across HLE, DeepSearchQA, FinSearchComp, xBench-ScienceQA, and xBench-DeepSearch —
            measured against GPT-5.2 Pro, GPT-5 Pro, Gemini 3 Pro, Claude 4.5 Opus and other
            frontier baselines — Yunjue Agent takes state-of-the-art on three and second place on
            the other two (trailing only the closed-source frontier):
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            <Stat label="HLE" value="48.0" hint="#2 · only behind GPT-5.2 Pro" />
            <Stat label="DSQA" value="73.5" hint="SOTA · +16.9 vs Gemini 3 Pro" />
            <Stat label="FSC" value="65.0" hint="SOTA · +15.1 vs Gemini 3 Pro" />
            <Stat label="xSciQA" value="76.5" hint="SOTA" />
            <Stat label="xDS" value="59.7" hint="#2 · only behind GPT-5 Pro" />
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a
              href="https://arxiv.org/abs/2601.18226"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-primary-500 inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-900 transition-colors hover:text-white dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
            >
              arXiv paper
            </a>
            <a
              href="https://github.com/YunjueTech/Yunjue-Agent"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-primary-500 inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-900 transition-colors hover:text-white dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
            >
              GitHub repo
            </a>
            <a
              href="https://huggingface.co/datasets/YunjueTech/Yunjue-Agent-Traces"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-primary-500 inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-900 transition-colors hover:text-white dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
            >
              Full evolution traces
            </a>
          </div>
        </div>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <li>
            <strong>In-Situ Self-Evolving paradigm</strong>: traditional agents draw a hard line
            between offline training and online deployment. We propose "inference IS evolution":
            every inference mutates the system's configuration and immediately feeds the next one.
          </li>
          <li>
            <strong>Tabula Rasa experiment</strong>: the agent starts with an empty toolkit and
            builds tools entirely through inference-time generate / verify / induce.
          </li>
          <li>
            <strong>Tool-library convergence</strong>: the tools the agent authors converge to a
            reusable set — only 97 tools synthesized across 2,500 HLE queries — evidence that
            "general problem-solving" is a learnable, finite, distillable pattern.
          </li>
          <li>
            <strong>Warm-start transfer</strong>: an HLE-evolved toolset bootstraps the other
            benchmarks; new-tool growth drops to zero on xSciQA / xDS, showing the skills transfer
            cross-domain.
          </li>
        </ul>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Code, benchmark scripts, and the versioned tool-generation / modification / merge traces
          are all CC BY 4.0 open source — auditable and reproducible. Full work in the{' '}
          <Link
            href="/en/blog/YunjueAgent"
            className="text-primary-500 dark:text-primary-400 hover:underline"
          >
            Yunjue Agent post
          </Link>
          .
        </p>
      </Section>

      <Section eyebrow="Self-evolution in product" title="A self-evolution sandbox, once a night">
        <CodeBlock>
          {`Every night · end-of-day data assembled
   │
   ▼
For each user, run one self-evolution sandbox
   │
   ├─ Audit today        Analyze the event narrative and product-side signals,
   │                     re-examine suspect events (mislabel / composite / boundary)
   │
   ├─ Incremental model  profile / glossary / personal KG / relationship graph /
   │                     tracked items — appended as mode statements, never overwritten
   │
   ├─ Find the gaps      Identify capabilities the user's current Skill library
   │                     does not yet cover
   │
   └─ Author tools       Emit Python tool skeletons and design briefs, validate,
                         and promote verified ones into the shared library
   │
   ▼
Every decision is audited and replayable, node by node`}
        </CodeBlock>
        <div className="grid gap-6 md:grid-cols-2">
          <PillarCard index="Tool" title="Smallest unit of action">
            A standalone executable code unit that defines "what to do." Map queries, KOL
            aggregation, HR analysis. Every night the sandbox writes them, runs them, validates
            them; verified tools are promoted into the shared tool library.
          </PillarCard>
          <PillarCard index="Skill" title="User-facing card unit">
            An execution + render contract bundled with dedicated tools. The agent first emits a
            long report, then renders it into HTML cards in the app.
          </PillarCard>
        </div>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Self-evolution comes in two stages:{' '}
          <strong className="text-gray-900 dark:text-gray-100">private evolution</strong> (fully
          automatic, inside a sandbox) +{' '}
          <strong className="text-gray-900 dark:text-gray-100">shared extraction</strong>{' '}
          (high-value generic tools are de-identified and promoted into the shared library). Skills
          and tools are private by default; sharing only happens during the "non-personal generic
          tool" extraction step.
        </p>
      </Section>

      <Section eyebrow="03 / Application" title="Zero-Skill: every user's app is different">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Mainstream "AI assistant" products preload features and ask the user to pick. Result:{' '}
          <strong>every user sees the same product</strong>, varying only in usage.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Yunjue starts with <strong>Zero Skills</strong>:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <li>Day-one feed is empty — the system knows nothing about you, so shows nothing</li>
          <li>The system observes throughout the day and slices activity into event narratives</li>
          <li>After a few days, it identifies "what you do at which times" and writes Skills</li>
          <li>By around two weeks, no two users share the same card library</li>
        </ul>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Slow cold start is a disadvantage — <strong>but it's the price of the moat.</strong> Each
          card is a standalone HTML mini-program, which means the same feed shell can host tools,
          retrospectives, companion dialogue, even bespoke games. The more user-specific Skills
          accumulate, the higher the switching cost.
        </p>
      </Section>

      <Section
        eyebrow="Internal-trial observations"
        title="Same system, completely different Skill libraries"
      >
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Yunjue's self-evolution sandbox runs once a night — reading event narratives, voiceprint
          profiles, and behavioral patterns to identify capability gaps and author new Skills. There
          is no fixed feature list; what each user ends up with diverges over time. Typical
          directions:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
              Creators
            </h3>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              Creative-energy curves, inspiration-flash replays, decision-style retrospectives,
              long-form writing reviews — capabilities organized around "why did I do it this way"
              get identified and authored automatically.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
              Professional workers
            </h3>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              Effective-work-hour tallies, collaboration-dialogue summaries, information-utilization
              rates, expert-interview digests — capabilities organized around "where does my output
              actually come from" get identified and authored automatically.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
              Daily life &amp; companionship
            </h3>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              Parenting journals, long-horizon growth archives, scene-by-scene field notes,
              relationship graphs — capabilities organized around "how do everyday details
              accumulate into a long-term story" get identified and authored automatically.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
              On-location creators
            </h3>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              In-the-moment shoot / performance notes, live state curves, inspiration ledgers —
              capabilities organized around "what was I actually thinking at the moment of creation"
              get identified and authored automatically.
            </p>
          </div>
        </div>
        <p className="text-base text-gray-600 dark:text-gray-400">
          All of these directions emerge from a Zero-Skill start — they are not preloaded features
          and not user-picked from a list.
        </p>
      </Section>

      <Section eyebrow="Comparison" title="Mainstream LLM / domain-bounded Agent / Yunjue">
        <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800">
          <table className="w-full text-left">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="p-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Dimension
                </th>
                <th className="p-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Mainstream LLM assistant
                </th>
                <th className="p-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Domain-bounded Agent
                </th>
                <th className="p-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Yunjue
                </th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700 dark:text-gray-300">
              <tr className="border-t border-gray-200 dark:border-gray-800">
                <td className="p-4 font-medium">Openness</td>
                <td className="p-4">✅ Any input</td>
                <td className="p-4">❌ Fixed intent</td>
                <td className="p-4">✅</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-800">
                <td className="p-4 font-medium">Safety / controllability</td>
                <td className="p-4">❌ Probabilistic</td>
                <td className="p-4">✅ FSM</td>
                <td className="p-4">✅ Sandbox + tool verification</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-800">
                <td className="p-4 font-medium">Cost</td>
                <td className="p-4">❌ Full inference</td>
                <td className="p-4">✅ Fixed path</td>
                <td className="p-4">✅ Cached path + deep-reason on demand</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-800">
                <td className="p-4 font-medium">Personalization</td>
                <td className="p-4">❌ One-size-fits-all</td>
                <td className="p-4">❌ No personalization</td>
                <td className="p-4">✅ Individual-scale</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-800">
                <td className="p-4 font-medium">Multimodal depth</td>
                <td className="p-4">❌ Late Fusion</td>
                <td className="p-4">❌ Single-modal</td>
                <td className="p-4">✅ Early Fusion</td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-800">
                <td className="p-4 font-medium">Self-evolution</td>
                <td className="p-4">❌ Frozen after training</td>
                <td className="p-4">❌ Hand-edited by engineers</td>
                <td className="p-4">✅ Automatic, nightly</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-base text-gray-600 dark:text-gray-400">
          The commercial impossible-triangle of openness / controllability / economics — traditional
          approaches can only hit two corners. We believe a self-evolving agent is the viable path
          across all three. Full argument in{' '}
          <Link
            href="/en/blog/vision"
            className="text-primary-500 dark:text-primary-400 hover:underline"
          >
            Why dynamic self-evolution is the right path for consumer services
          </Link>
          .
        </p>
      </Section>

      <Section
        eyebrow="Privacy architecture"
        title="Whether raw data leaves your device is your choice"
      >
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Listening, watching, and measuring heart rate 24/7 looks, from the outside, like always-on
          capture hardware. This is Yunjue's biggest product burden — and a question engineering has
          to answer head-on.
        </p>
        <CodeBlock>
          {`Consumer edition (Yunjue's in-house multimodal hardware + iPhone, mass-market user)
  ├─ Option 1: edge-side small model compresses to text summary before upload
  └─ Option 2: edge-side fusion adapter — raw frames / raw data never leave;
              what's uploaded is a fusion vector

Geek edition (developers / power users)
  ├─ Private-server bundle: raw data uploaded, but to YOUR own server, token billing
  └─ Lightweight backend open-sourced: deploy your own IP, hardware-only billing`}
        </CodeBlock>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <li>
            <strong>Today (deep internal trial)</strong>: raw data is processed in the cloud under
            per-device encryption, strict isolation, and no cross-user mixing — the stage where we
            and our early peers chose to harden the main loop first.
          </li>
          <li>
            <strong>
              Mid-term roadmap (after in-house multimodal hardware + edge adapter ship)
            </strong>
            : the consumer edition defaults to an end / edge path — raw data never leaves the end /
            edge, the cloud only receives a fusion vector. "Whether raw data leaves your device"
            becomes an explicit user choice, no longer the default.
          </li>
          <li>
            <strong>Geek-edition options (shipped in parallel)</strong>: private deployment or
            lightweight backend open source — raw data fully under your control.
          </li>
          <li>
            <strong>Tools / Skills are private by default</strong>: publishing to the community is
            an explicit user action. Pre-publish de-identification removes user-specific terms,
            names, and locations.
          </li>
        </ul>
      </Section>

      <Section eyebrow="Zooming out" title="Three mutually-prerequisite long-horizon tracks">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          The three layers above all serve three long-horizon tracks Yunjue invests in. Remove any
          one and the remaining two no longer hold.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <PillarCard index="01" title="Human-Centric World Model">
            Every mainstream large model is trained on the public internet — they learn general
            world knowledge, but none has been systematically pretrained on the human itself. No
            model truly understands that for the same person, the heart-rate curve while typing
            differs from a meeting; that the body reacts before a word is spoken.
            <br />
            <br />
            Yunjue's long-horizon goal is to close that gap: aligning heart rate, IMU, audio,
            vision, dialogue, profile, and relationship graphs at the raw-signal layer to train a
            truly <strong>human-centric multimodal foundation model</strong> whose training target
            is not "general world knowledge" but "the state, intent, and needs of a specific person
            at a specific moment."
            <br />
            <br />
            Once this model exists, embodied agents, humanoid robots, and consumer personal AI will
            have a foundation that genuinely understands people — not just a language model that can
            hold a conversation.
          </PillarCard>
          <PillarCard index="02" title="Self-Evolving Agent">
            Today's assistants are hand-built scenario by scenario, an approach that cannot serve
            the long tail of individual users. The Yunjue Agent paper demonstrates that an agent can
            extend itself through inference-as-evolution — authoring its own tools, writing its own
            Skills, and identifying its own capability gaps inside a sandbox. We believe this is the
            viable path through the openness / controllability / economics impossible-triangle of
            consumer AI.
          </PillarCard>
          <PillarCard index="03" title="Always-on multimodal capture · External sensory system">
            Understanding a person requires being with them continuously, ambiently, with low
            intrusion and verifiable privacy controls — a workload for always-on multimodal
            hardware, not a phone app or smart speaker.
            <br />
            <br />
            Yunjue positions this hardware as an{' '}
            <strong>external sensory system</strong>: a dual-mic array that always listens, a
            camera that captures key frames on trigger, and heart rate / HRV / IMU / skin
            temperature running continuously — perceiving signals you can't perceive yourself, and
            handing them to the cloud-side external prefrontal cortex for analysis and reflection.
            <br />
            <br />
            Yunjue today validates the main loop on Apple Watch; in-house multimodal hardware v1 is
            in progress, organized around "dual-mic + HR / IMU + privacy indicator + hardware
            kill-switch." Future form factors stay open.
          </PillarCard>
        </div>
      </Section>

      <Section
        eyebrow="Continue reading"
        title="See the product cadence or join us — or read the three-track narrative in full"
      >
        <p className="text-base text-gray-600 dark:text-gray-400">
          Early Fusion → Self-Evolving Agent → Human-Centric World Model: all three tracks have
          corresponding delivery milestones on the product page.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/en/products"
            className="inline-block rounded-md bg-gray-900 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            Product
          </Link>
          <Link
            href="/en/joinus"
            className="inline-block rounded-md border border-gray-300 px-8 py-4 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-900"
          >
            Join us
          </Link>
        </div>
      </Section>
    </>
  )
}
