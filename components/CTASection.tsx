import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { LogoGlyph } from "@/components/Logo";
import StructuredVisual from "@/components/StructuredVisual";

/**
 * The dark bracket closes. Centered is reserved for exactly this moment —
 * every other section runs an asymmetric grid. The instrument card sits
 * below as a smaller, centered coda, not a competing half-page column.
 */
export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-ink-950 py-20 text-paper lg:py-32"
    >
      <div
        aria-hidden="true"
        className="bg-coordinate-dark absolute inset-0 opacity-45 [mask-image:radial-gradient(closest-side_at_50%_38%,black,transparent)]"
      />
      <div className="container-content relative flex flex-col items-center text-center">
        <Reveal>
          <LogoGlyph size={30} className="mx-auto" />
        </Reveal>
        <Reveal delay={80}>
          <p className="text-overline mt-8 text-gray-500">Begin evaluation</p>
          <h2 className="text-display-l mx-auto mt-6 max-w-[20ch] text-paper">
            Understand how your information is understood.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-body-l mx-auto mt-6 max-w-[42ch] text-gray-400">
            Begin with a structural evaluation of your most important
            information.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-10">
            <Button
              href="mailto:hello@structured.com?subject=Structural%20evaluation%20request"
              arrow
            >
              Request an evaluation
            </Button>
          </div>
        </Reveal>

        <Reveal delay={320} className="mt-12 w-full max-w-xl lg:mt-16">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-6 text-left shadow-[inset_0_1px_0_rgb(255_255_255_/_0.08)]">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <p className="text-overline-s text-gray-500">Evaluation scope</p>
              <p className="text-overline-s text-indigo-300">Ready</p>
            </div>
            <div className="relative mt-4 h-48">
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
