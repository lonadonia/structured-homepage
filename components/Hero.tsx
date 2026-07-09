import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import StructuredVisual from "@/components/StructuredVisual";

const readouts = [
  { label: "Framework score", value: "86", unit: "/100", delta: "+6" },
  { label: "Integrity index", value: "92", unit: "/100", delta: "+7" },
  { label: "Entities analyzed", value: "532", unit: "", delta: "+18%" },
];

/**
 * The dark shell opens here: the canonical tagline at full display scale,
 * the positioning sentence and dual CTA on columns 1–5, and the
 * chaos→lattice signature visual resolving across columns 6–12 on a faint
 * 24px dot grid. An instrument readout bar closes the viewport — numbers as
 * claims, not adjectives.
 */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink-900 text-paper">
      {/* Faint dot grid behind the visual, fading toward the text */}
      <div
        aria-hidden="true"
        className="bg-dot-grid absolute inset-y-0 right-0 w-full lg:w-3/5 [mask-image:linear-gradient(to_right,transparent,black_45%)]"
      />

      <div className="container-content relative pt-36 lg:pt-44">
        <Reveal>
          <p className="text-overline text-gray-400">
            Generative search · Information structure
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="text-display-xl mt-6 text-paper">
            Clarity in structure.
            <br />
            Confidence in understanding.
          </h1>
          <span
            aria-hidden="true"
            className="mt-8 block h-0.5 w-9 bg-indigo-500"
          />
        </Reveal>

        <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-6">
            <Reveal delay={160}>
              <p className="text-body-l max-w-[52ch] text-gray-400">
                Structured provides the framework for understanding,
                evaluating, and applying structure within generative search
                and digital information.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="#cta" arrow>
                  Request an evaluation
                </Button>
                <Button href="#framework" variant="ghost-dark">
                  Explore the framework
                </Button>
              </div>
            </Reveal>
          </div>

          {/* The signature visual: scattered points resolving into a lattice */}
          <div className="relative h-64 sm:h-80 lg:col-span-6 lg:h-auto lg:min-h-[360px]">
            <Reveal delay={200} className="absolute inset-0">
              <StructuredVisual
                id="structured-lattice"
                className="h-full w-full"
                preserveAspectRatio="xMidYMid slice"
              />
            </Reveal>
          </div>
        </div>

        {/* Instrument readout bar */}
        <Reveal delay={320}>
          <dl className="mt-14 flex flex-wrap gap-x-12 gap-y-6 border-t border-ink-700 pt-6 pb-14 lg:mt-16 lg:pb-20">
            {readouts.map((r) => (
              <div key={r.label} className="flex flex-col gap-1.5">
                <dt className="text-overline-s text-gray-500">{r.label}</dt>
                <dd className="flex items-baseline gap-2">
                  <span className="text-[22px] font-medium tabular-nums text-paper">
                    {r.value}
                    {r.unit && (
                      <span className="text-[15px] text-gray-500">{r.unit}</span>
                    )}
                  </span>
                  <span className="text-caption tabular-nums text-delta-up-dark">
                    {r.delta}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
