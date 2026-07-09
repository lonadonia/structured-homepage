import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { LogoGlyph } from "@/components/Logo";
import StructuredVisual from "@/components/StructuredVisual";
import { colors } from "@/lib/design-tokens";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-ink-950 py-24 text-paper lg:py-36"
    >
      <div
        aria-hidden="true"
        className="bg-coordinate-dark absolute inset-0 opacity-45 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-[520px] w-[520px] bg-[radial-gradient(circle,rgb(37_99_235_/_0.16),transparent_66%)]"
      />

      <div className="container-content relative grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-6">
          <Reveal>
            <LogoGlyph size={30} stroke={colors.indigo[500]} />
          </Reveal>
          <Reveal delay={80}>
            <p className="text-overline mt-8 text-gray-500">Begin evaluation</p>
            <h2 className="text-display-l mt-5 max-w-[18ch] text-paper">
              Understand how your information is understood.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-body-l mt-7 max-w-[42ch] text-gray-400">
              Begin with a structural evaluation of your most important
              information.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10">
              <Button href="#top" arrow>
                Request an evaluation
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={180} className="lg:col-span-5 lg:col-start-8">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-5 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.08)]">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <p className="text-overline-s text-gray-500">Evaluation scope</p>
              <p className="text-overline-s text-indigo-300">Ready</p>
            </div>
            <div className="relative mt-4 h-64">
              <StructuredVisual
                id="cta-lattice"
                className="absolute inset-0 h-full w-full opacity-80"
                preserveAspectRatio="xMidYMid slice"
                still
              />
            </div>
            <div className="grid grid-cols-3 border-t border-white/10 pt-4">
              {["Map", "Measure", "Apply"].map((item, i) => (
                <div
                  key={item}
                  className={`px-3 first:pl-0 last:pr-0 ${
                    i > 0 ? "border-l border-white/10" : ""
                  }`}
                >
                  <p className="text-overline-s text-gray-500">0{i + 1}</p>
                  <p className="mt-2 text-[14px] font-medium text-gray-200">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
