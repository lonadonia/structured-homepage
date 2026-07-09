import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { colors } from "@/lib/design-tokens";

function DiagramUnderstand() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <g stroke={colors.gray[300]} strokeWidth="1">
        <path d="M13 50 35 17 58 45M13 50l24 8m21-13-21 13" />
        <path d="M35 17v41" strokeDasharray="3 5" />
      </g>
      <circle cx="35" cy="17" r="4" fill={colors.brand.indigo} />
      <circle cx="13" cy="50" r="3.5" fill="#fff" stroke={colors.gray[400]} />
      <circle cx="58" cy="45" r="3.5" fill="#fff" stroke={colors.gray[400]} />
      <circle cx="37" cy="58" r="3.5" fill="#fff" stroke={colors.gray[400]} />
    </svg>
  );
}

function DiagramEvaluate() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <g stroke={colors.gray[200]} strokeWidth="1">
        <line x1="12" y1="18" x2="58" y2="18" />
        <line x1="12" y1="34" x2="58" y2="34" />
        <line x1="12" y1="50" x2="58" y2="50" />
      </g>
      <rect x="12" y="15" width="26" height="6" rx="3" fill={colors.gray[200]} />
      <rect x="12" y="31" width="42" height="6" rx="3" fill={colors.brand.indigo} />
      <rect x="12" y="47" width="22" height="6" rx="3" fill={colors.gray[200]} />
      <line
        x1="58"
        y1="10"
        x2="58"
        y2="62"
        stroke={colors.gray[600]}
        strokeWidth="1"
        strokeDasharray="3 5"
      />
      <circle cx="58" cy="34" r="4" fill="#fff" stroke={colors.brand.indigo} strokeWidth="1.5" />
    </svg>
  );
}

function DiagramApply() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <path d="m36 35 23 11-23 11-23-11 23-11Z" stroke={colors.gray[200]} />
      <path d="m36 24 23 11-23 11-23-11 23-11Z" stroke={colors.gray[400]} fill="#fff" />
      <path d="m36 13 23 11-23 11-23-11 23-11Z" stroke={colors.brand.indigo} strokeWidth="1.5" fill="#fff" />
      <path d="M13 46v6l23 11 23-11v-6" stroke={colors.gray[300]} />
    </svg>
  );
}

const pillars = [
  {
    index: "01",
    title: "Understand Structure",
    diagram: <DiagramUnderstand />,
    body: "Map how your information is organized - entities, relationships, hierarchies - and how generative systems actually interpret that order.",
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
    <section
      id="framework"
      className="relative overflow-hidden border-t border-mist bg-white py-20 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgb(248_250_252),transparent)]"
      />
      <div className="container-content relative">
        <SectionHeading
          index="02"
          label="The framework"
          title="One framework. Three disciplines."
          intro="Structured moves from comprehension to measurement to practice - a single method for treating structure as a property of information."
        />

        <div className="mt-14 border-y border-mist lg:mt-20">
          <div className="grid lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal
                key={p.index}
                delay={i * 80}
                className={`relative min-h-[360px] py-8 lg:py-10 ${
                  i > 0 ? "border-t border-mist lg:border-t-0 lg:border-l" : ""
                }`}
              >
                <div
                  className={`flex h-full flex-col px-0 lg:px-8 ${
                    i === 0 ? "lg:pl-0" : ""
                  } ${i === pillars.length - 1 ? "lg:pr-0" : ""}`}
                >
                  <div className="flex items-start justify-between gap-8">
                    <div>
                      <span className="text-overline text-indigo-600">
                        {p.index}
                      </span>
                      <h3 className="text-h3 mt-7 max-w-[12ch] text-ink-900">
                        {p.title}
                      </h3>
                    </div>
                    <div className="shrink-0">{p.diagram}</div>
                  </div>
                  <p className="text-body mt-8 max-w-[44ch] text-gray-600">
                    {p.body}
                  </p>
                  <div className="mt-auto pt-8">
                    <TextLink href="#evaluation">Learn more</TextLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
