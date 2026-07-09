import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import DashboardArtifact from "@/components/DashboardArtifact";

const metrics = [
  {
    label: "Metric 01",
    title: "Framework Score",
    body: "One comparable measure of how clearly information is structured - trackable over time and defensible in review.",
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

export default function EvaluationSection() {
  return (
    <section
      id="evaluation"
      className="relative overflow-hidden border-t border-mist bg-paper py-20 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="bg-coordinate-light absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_70%,transparent)]"
      />
      <div className="container-content relative">
        <SectionHeading
          index="03"
          label="Evaluation"
          title="Information integrity is built on structure."
          intro="A system for understanding how information is organized, interpreted, and applied."
        />
      </div>

      <div className="container-artifact relative mt-12 lg:mt-20">
        <Reveal delay={120}>
          <div className="border-y border-gray-300 py-5 lg:py-8">
            <div className="-mx-5 overflow-x-auto px-5 pb-2 md:mx-0 md:overflow-visible md:px-0 md:pb-0">
              <DashboardArtifact className="min-w-[640px] md:min-w-0" />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container-content relative mt-12 lg:mt-16">
        <div className="grid border-y border-gray-300 md:grid-cols-3">
          {metrics.map((m, i) => (
            <Reveal
              key={m.title}
              delay={i * 80}
              className={`py-7 md:px-7 ${
                i > 0 ? "border-t border-gray-300 md:border-t-0 md:border-l" : ""
              } ${i === 0 ? "md:pl-0" : ""} ${i === metrics.length - 1 ? "md:pr-0" : ""}`}
            >
              <p className="text-overline-s text-gray-500">{m.label}</p>
              <h3 className="text-h4 mt-4 text-ink-900">{m.title}</h3>
              <p className="text-body-s mt-4 max-w-[44ch] text-gray-600">
                {m.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
