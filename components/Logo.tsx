import { colors } from "@/lib/design-tokens";

/**
 * The existing Structured™ lockup, recreated from the official moodboard —
 * an outlined isometric cube glyph followed by the letterspaced uppercase
 * wordmark. This is brand canon: do not restyle or replace.
 */

export function LogoGlyph({
  size = 24,
  stroke = colors.indigo[500],
  className = "",
}: {
  size?: number;
  stroke?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 2.2 20.8 7.1v9.8L12 21.8 3.2 16.9V7.1L12 2.2Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 21.8V12m0 0 8.8-4.9M12 12 3.2 7.1"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Logo({
  tone = "dark",
  className = "",
}: {
  /** dark = wordmark in paper (on ink ground); light = wordmark in ink. */
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <a
      href="#top"
      aria-label="Structured — home"
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <LogoGlyph
        stroke={tone === "dark" ? colors.indigo[500] : colors.indigo[600]}
      />
      <span
        className={`text-[15px] font-semibold uppercase tracking-[0.3em] ${
          tone === "dark" ? "text-paper" : "text-ink-900"
        }`}
      >
        Structured
        <span className="ml-1 align-super text-[9px] font-medium tracking-normal">
          ™
        </span>
      </span>
    </a>
  );
}
