import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import StructuredVisual from "@/components/StructuredVisual";

const readouts = [
  { label: "Framework score", value: "86", unit: "/100", delta: "+6" },
  { label: "Integrity index", value: "92", unit: "/100", delta: "+7" },
  { label: "Entities analyzed", value: "532", unit: "", delta: "+18%" },
];

/**
 * The dark shell opens here. One dominant gesture — the canonical tagline at
 * full display scale — carries the viewport; the chaos→lattice signature
 * visual lives as full-bleed atmosphere behind it, brightest where the page
 * is open (lower-right) and faded out under the text for contrast. A single
 * clean readout strip closes the section — numbers as claims, not a second
 * instrument panel competing with the headline.
 */
export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink-950 text-paper">
      {/* Faint coordinate grid */}
      <div
        aria-hidden="true"
        className="bg-coordinate-dark absolute inset-0 opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"
      />

      {/* The signature visual, full-bleed atmosphere: masked to stay out of
          the text's way on the left, resolving into view on the open right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        <StructuredVisual
          id="structured-lattice"
          className="lattice-drift h-full w-full opacity-90 [mask-image:radial-gradient(78%_88%_at_78%_54%,black_40%,transparent_82%)]"
          preserveAspectRatio="xMidYMid slice"
          annotated
        />
      </div>

      {/* Scrim: guarantees text contrast regardless of the visual beneath it */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-[linear-gradient(100deg,#070a10_40%,rgba(7,10,16,0.5)_58%,transparent_76%)] lg:block"
      />

      {/* Soft top-right glow + bottom fade into the light core */}
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-[560px] w-[560px] bg-[radial-gradient(circle,rgb(79_70_229_/_0.14),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,#070a10)]"
      />

      <div className="container-content relative pt-32 pb-16 lg:pt-44 lg:pb-24">
        <Reveal>
          <p className="text-overline flex items-center gap-3 text-gray-400">
            <span className="h-px w-8 shrink-0 bg-indigo-400" aria-hidden="true" />
            Generative search · Information structure
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="text-display-xl mt-7 max-w-[20ch] text-paper">
            Clarity in structure.
            <br />
            Confidence in understanding.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="text-body-l mt-7 max-w-[52ch] text-gray-300">
            Structured provides the framework for understanding, evaluating,
            and applying structure within generative search and digital
            information.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href="#cta" arrow>
              Request an evaluation
            </Button>
            <Button href="#framework" variant="ghost-dark">
              Explore the framework
            </Button>
          </div>
        </Reveal>

        {/* Mobile / tablet: the visual as its own full-bleed band, since it
            can't live as background atmosphere behind stacked text */}
        <Reveal delay={200} className="relative -mx-5 mt-14 h-64 sm:h-80 md:-mx-10 lg:hidden">
          <StructuredVisual
            id="structured-lattice-mobile"
            className="lattice-drift h-full w-full"
            preserveAspectRatio="xMidYMid slice"
          />
        </Reveal>

        <Reveal delay={320}>
          <dl className="relative mt-14 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-white/10 pt-6 sm:grid-cols-3 lg:mt-20">
            {readouts.map((r) => (
              <div
                key={r.label}
                className="flex items-baseline justify-between gap-4 sm:flex-col sm:items-start sm:gap-1.5"
              >
                <dt className="text-overline-s text-gray-500">{r.label}</dt>
                <dd className="flex items-baseline gap-2">
                  <span className="text-[22px] font-light tabular-nums text-paper">
                    {r.value}
                    {r.unit && (
                      <span className="text-[14px] text-gray-500">{r.unit}</span>
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
