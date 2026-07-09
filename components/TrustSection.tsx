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
    body: "The same information yields the same evaluation — across teams, tools, and time.",
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

/**
 * 05 — Method. Authority without noise: four governing commitments as
 * numbered editorial rows, then the proof set in tabular numerals — the one
 * moment on the page where numbers are allowed to move.
 */
export default function TrustSection() {
  return (
    <section id="method" className="border-t border-mist bg-paper py-16 lg:py-32">
      <div className="container-content">
        <SectionHeading
          index="05"
          label="Method"
          title="Measurement you can defend."
          intro="Structured is built like a standard, not a pitch. Four commitments govern every evaluation the framework produces."
        />

        <div className="mt-12 lg:mt-16">
          {principles.map((p, i) => (
            <Reveal key={p.index} delay={i * 60}>
              <div className="grid gap-2 border-t border-mist py-6 lg:grid-cols-12 lg:gap-6 lg:py-8">
                <span className="text-overline text-indigo-600 lg:col-span-1">
                  {p.index}
                </span>
                <h3 className="text-h4 text-ink-900 lg:col-span-4">{p.title}</h3>
                <p className="text-body max-w-[62ch] text-gray-600 lg:col-span-7">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Proof — numbers as claims */}
        <Reveal delay={120}>
          <dl className="mt-8 grid grid-cols-2 gap-y-10 border-t border-gray-300 pt-10 lg:mt-12 lg:grid-cols-4 lg:pt-12">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-3">
                <dd className="text-data-xl order-2 text-ink-900">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
                <dt className="text-overline-s order-1 text-gray-500">
                  {s.label}
                </dt>
              </div>
            ))}
            <div className="flex flex-col gap-3">
              <dd className="text-data-xl order-2 text-indigo-600">∞</dd>
              <dt className="text-overline-s order-1 text-gray-500">
                Possibilities
              </dt>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
