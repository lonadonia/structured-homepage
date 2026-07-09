import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import EvaluationMap from "@/components/EvaluationMap";

export default function IdentitySection() {
  return (
    <section
      id="map"
      className="relative overflow-hidden border-t border-white/10 bg-ink-950 py-20 text-paper lg:py-36"
    >
      <div
        aria-hidden="true"
        className="bg-coordinate-dark absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_78%,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-[520px] w-[520px] bg-[radial-gradient(circle,rgb(79_70_229_/_0.18),transparent_68%)]"
      />

      <div className="container-content relative">
        <SectionHeading
          index="04"
          label="The evaluation map"
          title="Structure, made visible."
          intro="Every evaluation positions information on the same two axes: how clearly it is structured, and how consistently it is understood. Over time, the map becomes your organization's picture of its own information integrity."
          tone="dark"
        />

        <Reveal delay={120} className="mt-12 lg:mt-20">
          <figure>
            <div className="-mx-5 overflow-x-auto px-5 md:mx-0 md:overflow-visible md:px-0">
              <div className="min-w-[560px] rounded-lg border border-white/10 bg-ink-900/72 px-2 py-4 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.08)] sm:px-4 md:min-w-0 lg:px-8 lg:py-8">
                <EvaluationMap
                  id="evaluation-map"
                  className="w-full"
                  tone="dark"
                />
              </div>
            </div>
            <figcaption className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
              <span className="text-overline-s text-gray-500">
                Fig. 04 / Entities positioned by structural clarity and
                semantic consistency
              </span>
              <span className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                <span className="text-overline-s inline-flex items-center gap-2 text-gray-500">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-indigo-500"
                  />
                  Evaluated
                </span>
                <span className="text-overline-s inline-flex items-center gap-2 text-gray-500">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-ink-600"
                  />
                  Awaiting evaluation
                </span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
