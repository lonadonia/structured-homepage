import Reveal from "@/components/ui/Reveal";

function ResolutionDiagram() {
  const rows = [
    ["Entities", "Named things"],
    ["Relationships", "How they connect"],
    ["Hierarchy", "What carries weight"],
  ];

  return (
    <div className="relative overflow-hidden rounded-lg border border-mist bg-white/70 p-5 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.9)]">
      <div
        aria-hidden="true"
        className="bg-coordinate-light absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_86%)]"
      />
      <div className="relative flex items-center justify-between border-b border-gray-200 pb-4">
        <p className="text-overline-s text-gray-500">Resolution model</p>
        <p className="text-overline-s text-indigo-600">Structure detected</p>
      </div>
      <div className="relative mt-6 grid gap-3">
        {rows.map(([label, caption], i) => (
          <div
            key={label}
            className="grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-gray-200/80 pb-3 last:border-b-0 last:pb-0"
          >
            <span className="text-overline-s text-indigo-600">0{i + 1}</span>
            <div>
              <p className="text-[15px] font-semibold text-ink-900">{label}</p>
              <p className="mt-1 text-caption text-gray-500">{caption}</p>
            </div>
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full border border-indigo-500 bg-white shadow-[0_0_0_4px_rgb(79_70_229_/_0.08)]"
            />
          </div>
        ))}
      </div>
      <div className="relative mt-6 border-l border-indigo-500 pl-4">
        <p className="text-[15px] leading-relaxed text-ink-900">
          Machines do not reward volume. They reward information that can be
          resolved into a stable structure.
        </p>
      </div>
    </div>
  );
}

export default function PositioningSection() {
  return (
    <section
      id="why"
      className="relative overflow-hidden border-t border-mist bg-section-sheen py-20 lg:py-36"
    >
      <div className="container-content relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="min-w-0 lg:col-span-5">
            <Reveal>
              <p className="text-overline flex items-baseline gap-3">
                <span className="text-indigo-600">01</span>
                <span aria-hidden="true" className="text-gray-500">
                  /
                </span>
                <span className="text-gray-500">Why structure</span>
              </p>
              <h2 className="text-h2 mt-6 max-w-[18ch] break-words text-ink-900">
                Generative search does not read your information. It resolves
                it.
              </h2>
            </Reveal>

            <Reveal delay={120} className="mt-10 lg:mt-14">
              <ResolutionDiagram />
            </Reveal>
          </div>

          <div className="min-w-0 lg:col-span-6 lg:col-start-7">
            <Reveal delay={120}>
              <p className="text-body max-w-[68ch] break-words text-gray-600">
                When an answer engine composes a response, it does not browse
                pages the way a reader does. It resolves entities,
                relationships, and hierarchies - then decides what your
                information means. That decision is only as good as the
                structure it finds.
              </p>
              <p className="text-body mt-6 max-w-[68ch] break-words text-gray-600">
                Structured treats structure as a measurable property of
                information. Not styling, not metadata hygiene - the
                underlying order that determines whether machines interpret
                your content accurately, cite it correctly, and apply it with
                confidence.
              </p>
              <p className="text-h4 mt-10 max-w-[40ch] border-l-2 border-indigo-600 pl-6 text-ink-900">
                Structure is the difference between being understood and being
                misread.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
