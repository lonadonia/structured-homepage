import Reveal from "@/components/ui/Reveal";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
  className?: string;
};

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
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-3">
          <p className="text-overline flex items-baseline gap-3">
            <span className={indexColor}>{index}</span>
            <span aria-hidden="true" className={labelColor}>
              /
            </span>
            <span className={labelColor}>{label}</span>
          </p>
        </div>
        <div className="lg:col-span-8 lg:col-start-5">
          <h2 className={`text-h2 max-w-[19ch] ${titleColor}`}>{title}</h2>
          {intro && (
            <p className={`text-body-l mt-6 max-w-[58ch] ${introColor}`}>
              {intro}
            </p>
          )}
        </div>
      </div>
    </Reveal>
  );
}
