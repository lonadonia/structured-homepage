import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import StructuredVisual from "@/components/StructuredVisual";

const readouts = [
  { label: "Framework score", value: "86", unit: "/100", delta: "+6" },
  { label: "Integrity index", value: "92", unit: "/100", delta: "+7" },
  { label: "Entities analyzed", value: "532", unit: "", delta: "+18%" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-ink-950 text-paper"
    >
      <div
        aria-hidden="true"
        className="bg-coordinate-dark absolute inset-0 opacity-45 [mask-image:linear-gradient(to_bottom,black,transparent_82%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_72%_8%,rgb(79_70_229_/_0.24),transparent_32rem)]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(180deg,transparent,#0b0f17)]"
      />

      <div className="container-content relative pt-32 lg:pt-40">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="min-w-0 lg:col-span-7">
            <Reveal>
              <p className="text-overline flex flex-wrap items-center gap-x-3 gap-y-2 text-gray-400">
                <span
                  className="h-px w-8 shrink-0 bg-indigo-400"
                  aria-hidden="true"
                />
                <span>Generative search</span>
                <span aria-hidden="true" className="text-gray-600">
                  {"\u00B7"}
                </span>
                <span>Information structure</span>
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="text-display-xl mt-7 max-w-[12.5ch] text-paper lg:max-w-none">
                <span className="block lg:whitespace-nowrap">
                  Clarity in structure.
                </span>
                <span className="block">Confidence in</span>
                <span className="block">understanding.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-8 grid min-w-0 gap-8 border-l border-white/14 pl-6 lg:grid-cols-[minmax(0,52ch)_auto] lg:items-end lg:gap-10">
                <p className="text-body-l min-w-0 max-w-[52ch] break-words text-gray-300">
                  Structured provides the framework for understanding,
                  evaluating, and applying structure within generative search
                  and digital information.
                </p>
                <div className="hidden min-w-36 border-t border-white/14 pt-4 lg:block">
                  <p className="text-overline-s text-gray-500">Signal state</p>
                  <p className="mt-2 text-[15px] font-medium text-paper">
                    Resolved, measured, applied.
                  </p>
                </div>
              </div>
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
          </div>

          <div className="min-w-0 lg:col-span-5">
            <Reveal delay={180}>
              <div className="relative overflow-hidden rounded-lg border border-white/12 bg-white/[0.035] shadow-[0_32px_90px_-56px_rgb(79_70_229_/_0.9),inset_0_1px_0_rgb(255_255_255_/_0.08)]">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <p className="text-overline-s min-w-0 text-gray-400">
                    Structural field
                  </p>
                  <p className="text-overline-s min-w-0 text-right text-indigo-300">
                    Live resolution
                  </p>
                </div>
                <div className="relative h-[360px] sm:h-[430px] lg:h-[520px]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-dot-grid opacity-50 [mask-image:radial-gradient(circle_at_58%_46%,black,transparent_72%)]"
                  />
                  <StructuredVisual
                    id="structured-lattice"
                    className="field-scan absolute inset-0 h-full w-full"
                    preserveAspectRatio="xMidYMid slice"
                  />
                  <div className="absolute left-4 top-4 hidden border-l border-white/14 pl-3 sm:block">
                    <p className="text-overline-s text-gray-500">
                      Semantic order
                    </p>
                    <p className="mt-2 text-[28px] font-light tabular-nums text-paper">
                      92<span className="text-[14px] text-gray-500">/100</span>
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 border-t border-white/10 bg-ink-950/72 backdrop-blur-md">
                    <div className="border-r border-white/10 p-4">
                      <p className="text-overline-s text-gray-500">Input</p>
                      <p className="mt-2 break-words text-[13px] font-medium leading-snug text-gray-200 sm:text-[14px]">
                        Entity noise
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="text-overline-s text-gray-500">Output</p>
                      <p className="mt-2 break-words text-[13px] font-medium leading-snug text-gray-200 sm:text-[14px]">
                        Interpretable lattice
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={320}>
          <dl className="mt-14 grid border-y border-white/10 lg:mt-16 lg:grid-cols-4">
            {readouts.map((r) => (
              <div
                key={r.label}
                className="flex flex-col gap-1.5 border-b border-white/10 py-5 last:border-b-0 lg:border-r lg:border-b-0 lg:border-white/10 lg:px-6 lg:first:pl-0"
              >
                <dt className="text-overline-s text-gray-500">{r.label}</dt>
                <dd className="flex items-baseline gap-2">
                  <span className="text-[26px] font-light tabular-nums text-paper">
                    {r.value}
                    {r.unit && (
                      <span className="text-[15px] text-gray-500">
                        {r.unit}
                      </span>
                    )}
                  </span>
                  <span className="text-caption tabular-nums text-delta-up-dark">
                    {r.delta}
                  </span>
                </dd>
              </div>
            ))}
            <div className="py-5 lg:px-6">
              <dt className="text-overline-s text-gray-500">Framework mode</dt>
              <dd className="mt-2 text-[15px] leading-relaxed text-gray-300">
                Structure treated as evidence, not decoration.
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
