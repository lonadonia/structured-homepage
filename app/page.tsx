import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PositioningSection from "@/components/PositioningSection";
import FrameworkSection from "@/components/FrameworkSection";
import EvaluationSection from "@/components/EvaluationSection";
import IdentitySection from "@/components/IdentitySection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

/**
 * Structured™ homepage — Concept C, "Light Core, Dark Shell".
 * The scroll is a numbered argument: the page opens inside the dark
 * intelligence layer, resolves into a light structured core (01–05),
 * and closes back in the dark. Ink appears exactly twice.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <PositioningSection />
        <FrameworkSection />
        <EvaluationSection />
        <IdentitySection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
