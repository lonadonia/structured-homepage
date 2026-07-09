import Reveal from "@/components/ui/Reveal";

type SectionHeadingProps = {
  /** Mono section index — the page reads as a numbered argument. */
  index: string;
  label: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Indexed section header: `01 — WHY STRUCTURE` overline, headline, optional
 * intro. The mono index is set in the intelligence accent; the page's
 * wayfinding system without navigation chrome.
 */
export default function SectionHeading({
  index,
  label,
  title,
  intro,
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const titleColor = tone === "light" ? "text-ink-900" : "text-paper";
  const introColor = tone === "light" ? "text-gray-600" : "text-gray-400";
  const indexColor = tone === "light" ? "text-indigo-600" : "text-indigo-400";
  const labelColor = tone === "light" ? "text-gray-500" : "text-gray-400";

  return (
    <Reveal className={className}>
      <p className="text-overline flex items-baseline gap-3">
        <span className={indexColor}>{index}</span>
        <span aria-hidden="true" className={labelColor}>
          —
        </span>
        <span className={labelColor}>{label}</span>
      </p>
      <h2 className={`text-h2 mt-5 max-w-[20ch] ${titleColor}`}>{title}</h2>
      {intro && (
        <p className={`text-body-l mt-5 max-w-[56ch] ${introColor}`}>{intro}</p>
      )}
    </Reveal>
  );
}
