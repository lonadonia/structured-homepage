import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import StructuredVisual from "@/components/StructuredVisual";

const readouts = [
  { label: "Framework score", value: "86", unit: "/100", delta: "+6" },
  { label: "Integrity index", value: "92", unit: "/100", delta: "+7" },
  { label: "Entities analyzed", value: "532", unit: "", delta: "+18%" },
];

/**
 * The dark shell opens with one dominant claim. The signature field stays
 * full-bleed at every breakpoint, while the compact measurement strip makes
 * the first screen feel like a working framework rather than a campaign page.
 */
export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink-950 text-paper">
      <div
        aria-hidden="true"
        className="bg-coordinate-dark absolute inset-0 opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-26%] bottom-0 h-[35%] opacity-90 sm:inset-x-[12%] sm:h-[39%] lg:inset-0 lg:h-auto lg:opacity-100"
      >
        <StructuredVisual
          id="structured-lattice"
          className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,black_24%)] lg:[mask-image:radial-gradient(78%_88%_at_78%_54%,black_40%,transparent_82%)]"
          preserveAspectRatio="xMidYMid slice"
          annotated
          preload
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-[linear-gradient(100deg,#070a10_38%,rgba(7,10,16,0.62)_56%,transparent_76%)] lg:block"
      />

      <div className="container-content relative pt-24 pb-12 sm:pt-32 lg:pt-32 lg:pb-16">
        <Reveal>
          <p className="text-overline flex items-center gap-3 text-gray-400">
            <span className="h-px w-8 shrink-0 bg-indigo-400" aria-hidden="true" />
            Generative search {"\u00B7"} Information structure
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="text-display-xl mt-6 max-w-[20ch] text-paper">
            Clarity in structure.
            <br />
            Confidence in understanding.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="text-body-l mt-6 max-w-[52ch] text-gray-300">
            Structured provides the framework for understanding, evaluating,
            and applying structure within generative search and digital
            information.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href="#cta" arrow>
              Request an evaluation
            </Button>
            <Button href="#framework" variant="ghost-dark">
              Explore the framework
            </Button>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <dl className="relative mt-10 grid grid-cols-3 border-y border-white/10 bg-ink-950/65 sm:mt-12 lg:mt-16 lg:max-w-[920px]">
            {readouts.map((readout, index) => (
              <div
                key={readout.label}
                className={`min-w-0 px-3 py-4 sm:px-5 lg:px-6 ${
                  index > 0 ? "border-l border-white/10" : ""
                }`}
              >
                <dt className="text-overline-s text-gray-500">
                  {readout.label}
                </dt>
                <dd className="mt-3 flex flex-wrap items-baseline gap-x-1.5 gap-y-1">
                  <span className="text-[20px] font-light tabular-nums text-paper sm:text-[22px]">
                    {readout.value}
                    {readout.unit && (
                      <span className="text-[11px] text-gray-500 sm:text-[13px]">
                        {readout.unit}
                      </span>
                    )}
                  </span>
                  <span className="text-[11px] tabular-nums text-delta-up-dark sm:text-caption">
                    {readout.delta}
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
