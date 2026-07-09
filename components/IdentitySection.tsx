import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import EvaluationMap from "@/components/EvaluationMap";

/**
 * 04 — The visual identity moment. The evaluation map: Structured™’s own
 * diagrammatic language at full width, drawn like an instrument readout.
 * A figure with a caption, not a decoration.
 */
export default function IdentitySection() {
  return (
    <section id="map" className="border-t border-mist bg-white py-16 lg:py-32">
      <div className="container-content">
        <SectionHeading
          index="04"
          label="The evaluation map"
          title="Structure, made visible."
          intro="Every evaluation positions information on the same two axes: how clearly it is structured, and how consistently it is understood. Over time, the map becomes your organization’s picture of its own information integrity."
        />

        <Reveal delay={120} className="mt-12 lg:mt-16">
          <figure>
            {/* On small screens the map becomes a pannable detail at natural
                scale — the same treatment as the dashboard artifact. */}
            <div className="-mx-5 overflow-x-auto px-5 md:mx-0 md:overflow-visible md:px-0">
              <div className="min-w-[560px] rounded-xl border border-mist bg-white px-2 py-4 sm:px-4 md:min-w-0 lg:px-8 lg:py-8">
                <EvaluationMap id="evaluation-map" className="w-full" />
              </div>
            </div>
            <figcaption className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
              <span className="text-overline-s text-gray-500">
                Fig. 04 — Entities positioned by structural clarity and
                semantic consistency
              </span>
              <span className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                <span className="text-overline-s inline-flex items-center gap-2 text-gray-500">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-indigo-600"
                  />
                  Evaluated
                </span>
                <span className="text-overline-s inline-flex items-center gap-2 text-gray-500">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-gray-300"
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
