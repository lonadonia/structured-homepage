import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";

const principles = [
  {
    index: "01",
    title: "Transparent methodology",
    body: "Every score traces back to observable structural properties. Nothing in the framework is a black box.",
  },
  {
    index: "02",
    title: "Reproducible results",
    body: "The same information yields the same evaluation - across teams, tools, and time.",
  },
  {
    index: "03",
    title: "Standards over opinions",
    body: "The framework encodes documented structural standards, not aesthetic preference or vendor doctrine.",
  },
  {
    index: "04",
    title: "Evidence before advice",
    body: "A recommendation exists only where measurement shows impact. Nothing is suggested that cannot be defended.",
  },
];

const stats = [
  { value: 128, suffix: "", label: "Enterprises" },
  { value: 24, suffix: "+", label: "Industries" },
  { value: 50, suffix: "+", label: "Countries" },
];

export default function TrustSection() {
  return (
    <section
      id="method"
      className="relative overflow-hidden border-t border-mist bg-white py-20 lg:py-36"
    >
      <div className="container-content relative">
        <SectionHeading
          index="05"
          label="Method"
          title="Measurement you can defend."
          intro="Structured is built like a standard, not a pitch. Four commitments govern every evaluation the framework produces."
        />

        <div className="mt-12 border-y border-mist lg:mt-20">
          {principles.map((p, i) => (
            <Reveal key={p.index} delay={i * 60}>
              <div className="grid gap-4 border-b border-mist py-7 last:border-b-0 lg:grid-cols-12 lg:gap-8 lg:py-9">
                <span className="text-overline text-indigo-600 lg:col-span-1">
                  {p.index}
                </span>
                <h3 className="text-h4 text-ink-900 lg:col-span-4">
                  {p.title}
                </h3>
                <p className="text-body max-w-[62ch] text-gray-600 lg:col-span-7">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <dl className="mt-10 grid overflow-hidden rounded-lg border border-ink-800 bg-ink-950 text-paper lg:mt-14 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex min-h-36 flex-col justify-between border-white/10 p-6 ${
                  i > 0 ? "border-t lg:border-t-0 lg:border-l" : ""
                }`}
              >
                <dt className="text-overline-s text-gray-500">{s.label}</dt>
                <dd className="text-data-xl text-paper">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
            <div className="flex min-h-36 flex-col justify-between border-t border-white/10 p-6 lg:border-t-0 lg:border-l">
              <dt className="text-overline-s text-gray-500">Possibilities</dt>
              <dd className="text-data-xl text-indigo-400">{"\u221E"}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
