import Reveal from "@/components/ui/Reveal";

/**
 * 01 — Why structure. Editorial, calm: statement on columns 1–5, argument on
 * columns 7–12. One idea per viewport; the whitespace does the persuading.
 */
export default function PositioningSection() {
  return (
    <section id="why" className="border-t border-mist bg-paper py-16 lg:py-32">
      <div className="container-content">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-overline flex items-baseline gap-3">
                <span className="text-indigo-600">01</span>
                <span aria-hidden="true" className="text-gray-500">
                  —
                </span>
                <span className="text-gray-500">Why structure</span>
              </p>
              <h2 className="text-h2 mt-5 max-w-[18ch] text-ink-900">
                Generative search doesn’t read your information. It resolves
                it.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={120}>
              <p className="text-body max-w-[68ch] text-gray-600">
                When an answer engine composes a response, it doesn’t browse
                pages the way a reader does. It resolves entities,
                relationships, and hierarchies — then decides what your
                information means. That decision is only as good as the
                structure it finds.
              </p>
              <p className="text-body mt-6 max-w-[68ch] text-gray-600">
                Structured treats structure as a measurable property of
                information. Not styling, not metadata hygiene — the
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
