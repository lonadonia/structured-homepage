import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Hairline card. No shadow, no lift — on hover the border shifts toward the
 * intelligence accent (tokens: motion.hover-card). Use sparingly; most
 * editorial blocks sit on hairline rules, not cards.
 */
export default function Card({
  children,
  tone = "light",
  className = "",
}: CardProps) {
  const tones = {
    light: "border-mist bg-white hover:border-indigo-400",
    dark: "border-ink-700 bg-ink-800 hover:border-indigo-500",
  };
  return (
    <div
      className={`rounded-xl border p-6 transition-colors duration-200 lg:p-8 ${tones[tone]} ${className}`}
    >
      {children}
    </div>
  );
}
