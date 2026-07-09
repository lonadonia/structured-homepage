import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { colors } from "@/lib/design-tokens";

/**
 * 02 — The framework. The canonical pillar triad on three hairline-ruled
 * columns — no cards, no shadows; the visible grid is the brand. Each pillar
 * carries a captionable micro-diagram: a map, a measurement, layered planes.
 */

function DiagramUnderstand() {
  const ind = colors.brand.indigo;
  const g = colors.gray[400];
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <g stroke={g} strokeWidth="1.25">
        <path d="M11 33 24 12m0 0 13 18M24 12v0M11 33l14 5m12-8-12 8" />
      </g>
      <circle cx="24" cy="12" r="3" fill={ind} />
      <circle cx="11" cy="33" r="2.5" fill="#fff" stroke={g} strokeWidth="1.25" />
      <circle cx="37" cy="30" r="2.5" fill="#fff" stroke={g} strokeWidth="1.25" />
      <circle cx="25" cy="38" r="2.5" fill="#fff" stroke={g} strokeWidth="1.25" />
    </svg>
  );
}

function DiagramEvaluate() {
  const ind = colors.brand.indigo;
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="12" width="24" height="3" rx="1.5" fill={colors.gray[200]} />
      <rect x="6" y="22" width="32" height="3" rx="1.5" fill={ind} />
      <rect x="6" y="32" width="17" height="3" rx="1.5" fill={colors.gray[200]} />
      <line
        x1="40"
        y1="8"
        x2="40"
        y2="40"
        stroke={colors.gray[600]}
        strokeWidth="1.25"
        strokeDasharray="2.5 3"
      />
      <circle cx="40" cy="23.5" r="2.5" fill="#fff" stroke={ind} strokeWidth="1.5" />
    </svg>
  );
}

function DiagramApply() {
  const ind = colors.brand.indigo;
  const g = colors.gray[400];
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="m24 22 14 7-14 7-14-7 14-7Z" stroke={colors.gray[300]} strokeWidth="1.25" strokeLinejoin="round" />
      <path d="m24 14 14 7-14 7-14-7 14-7Z" stroke={g} strokeWidth="1.25" strokeLinejoin="round" fill="#fff" />
      <path d="m24 6 14 7-14 7-14-7 14-7Z" stroke={ind} strokeWidth="1.5" strokeLinejoin="round" fill="#fff" />
    </svg>
  );
}

const pillars = [
  {
    index: "01",
    title: "Understand Structure",
    diagram: <DiagramUnderstand />,
    body: "Map how your information is organized — entities, relationships, hierarchies — and how generative systems actually interpret that order.",
  },
  {
    index: "02",
    title: "Evaluate Impact",
    diagram: <DiagramEvaluate />,
    body: "Measure structural clarity and semantic consistency against the framework, producing scores that are defensible, comparable, and repeatable.",
  },
  {
    index: "03",
    title: "Apply with Confidence",
    diagram: <DiagramApply />,
    body: "Turn evaluation into practice: prioritized structural changes, verified against the framework and tracked as the scores move.",
  },
];

export default function FrameworkSection() {
  return (
    <section id="framework" className="border-t border-mist bg-white py-16 lg:py-32">
      <div className="container-content">
        <SectionHeading
          index="02"
          label="The framework"
          title="One framework. Three disciplines."
          intro="Structured moves from comprehension to measurement to practice — a single method for treating structure as a property of information."
        />

        <div className="mt-12 grid border-t border-mist lg:mt-16 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal
              key={p.index}
              delay={i * 80}
              className={`py-8 lg:px-8 lg:py-10 ${
                i > 0 ? "border-t border-mist lg:border-t-0 lg:border-l" : ""
              } ${i === 0 ? "lg:pl-0" : ""} ${i === pillars.length - 1 ? "lg:pr-0" : ""}`}
            >
              <div className="flex items-start justify-between">
                <span className="text-overline text-indigo-600">{p.index}</span>
                {p.diagram}
              </div>
              <h3 className="text-h3 mt-6 text-ink-900">{p.title}</h3>
              <p className="text-body mt-4 max-w-[44ch] text-gray-600">{p.body}</p>
              <TextLink href="#evaluation" className="mt-6">
                Learn more
              </TextLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
