import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import EvaluationMap from "@/components/EvaluationMap";

/**
 * 04 — The visual identity moment. Kept on the light ground deliberately:
 * ink appears exactly twice on this page (hero, closing bracket) — a third
 * dark zone here would break the "dark shell, light core" narrative the
 * whole page is built on.
 */
export default function IdentitySection() {
  return (
    <section
      id="map"
      className="relative overflow-hidden border-t border-mist bg-paper py-16 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="bg-coordinate-light absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_78%,transparent)]"
      />

      <div className="container-content relative">
        <SectionHeading
          index="04"
          label="The evaluation map"
          title="Structure, made visible."
          intro="Every evaluation positions information on the same two axes: how clearly it is structured, and how consistently it is understood. Over time, the map becomes your organization's picture of its own information integrity."
        />

        <Reveal delay={120} className="mt-12 lg:mt-16">
          <figure>
            <div className="border-y border-mist bg-white py-6 md:hidden">
              <div className="mb-4 flex items-baseline justify-between gap-4">
                <p className="text-overline-s text-gray-500">Resolved field</p>
                <p className="text-overline-s tabular-nums text-indigo-600">
                  Entity 128 / 92
                </p>
              </div>
              <EvaluationMap
                id="evaluation-map-mobile"
                className="w-full"
                compact
              />
            </div>

            <div className="hidden rounded-lg border border-mist bg-white px-4 py-4 shadow-artifact md:block lg:px-8 lg:py-8">
              <EvaluationMap id="evaluation-map" className="w-full" />
            </div>
            <figcaption className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
              <span className="text-overline-s text-gray-500">
                Fig. 04 / Entities positioned by structural clarity and
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
