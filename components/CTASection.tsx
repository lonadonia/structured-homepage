import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { LogoGlyph } from "@/components/Logo";
import { colors } from "@/lib/design-tokens";

/**
 * The dark bracket closes. One line, one action — the tagline’s answer.
 * Centered layout is reserved for exactly this moment.
 */
export default function CTASection() {
  return (
    <section id="cta" className="relative overflow-hidden bg-ink-900 py-24 lg:py-40">
      {/* Faint dot grid + the single permitted glow, centered */}
      <div aria-hidden="true" className="bg-dot-grid absolute inset-0 [mask-image:radial-gradient(closest-side_at_50%_50%,black,transparent)]" />
      <div
        aria-hidden="true"
        className="bg-glow-indigo absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2"
      />

      <div className="container-content relative flex flex-col items-center text-center">
        <Reveal>
          <LogoGlyph size={28} stroke={colors.indigo[500]} className="mx-auto" />
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-display-l mx-auto mt-8 max-w-[22ch] text-paper">
            Understand how your information is understood.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-body-l mx-auto mt-6 max-w-[44ch] text-gray-400">
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
    </section>
  );
}
