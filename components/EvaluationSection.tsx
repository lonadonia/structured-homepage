import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import DashboardArtifact from "@/components/DashboardArtifact";

const metrics = [
  {
    label: "Metric 01",
    title: "Framework Score",
    body: "One comparable measure of how clearly information is structured — trackable over time and defensible in review.",
  },
  {
    label: "Metric 02",
    title: "Integrity Index",
    body: "How consistently generative systems interpret your information the way you intend it to be understood.",
  },
  {
    label: "Metric 03",
    title: "Entities Analyzed",
    body: "Coverage you can audit: every evaluated entity is enumerated, scored, and dated. Nothing is estimated.",
  },
];

/**
 * 03 — Evaluation. The canonical product claim, then the dashboard presented
 * as a precision instrument on the light ground. On mobile the artifact
 * becomes a full-bleed, pannable detail — never a shrunken screenshot.
 */
export default function EvaluationSection() {
  return (
    <section id="evaluation" className="border-t border-mist bg-paper py-16 lg:py-32">
      <div className="container-content">
        <SectionHeading
          index="03"
          label="Evaluation"
          title="Information integrity is built on structure."
          intro="A system for understanding how information is organized, interpreted, and applied."
        />
      </div>

      <div className="container-artifact mt-12 lg:mt-16">
        <Reveal delay={120}>
          <div className="-mx-5 overflow-x-auto px-5 pb-2 md:mx-0 md:overflow-visible md:px-0 md:pb-0">
            <DashboardArtifact className="min-w-[640px] md:min-w-0" />
          </div>
        </Reveal>
      </div>

      <div className="container-content mt-12 lg:mt-16">
        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {metrics.map((m, i) => (
            <Reveal key={m.title} delay={i * 80}>
              <div className="border-t border-gray-300 pt-6">
                <p className="text-overline-s text-gray-500">{m.label}</p>
                <h3 className="text-h4 mt-3 text-ink-900">{m.title}</h3>
                <p className="text-body-s mt-3 max-w-[44ch] text-gray-600">
                  {m.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
