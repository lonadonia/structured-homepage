import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  /**
   * primary    — blue, filled. The interactive accent; one per section.
   * ghost      — hairline outline on light ground.
   * ghost-dark — hairline outline on ink ground.
   */
  variant?: "primary" | "ghost" | "ghost-dark";
  size?: "lg" | "md";
  /** Trailing arrow that translates 4px on hover (tokens: motion.hover-button). */
  arrow?: boolean;
  className?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-lg font-semibold " +
  "transition-[background-color,border-color,color,box-shadow,transform] duration-200 select-none " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500";

const variants = {
  primary:
    "border border-blue-500/70 bg-blue-600 text-white shadow-[inset_0_1px_0_rgb(255_255_255_/_0.18),0_14px_30px_-18px_rgb(37_99_235_/_0.75)] hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[inset_0_1px_0_rgb(255_255_255_/_0.16),0_18px_36px_-20px_rgb(37_99_235_/_0.9)]",
  ghost:
    "border border-gray-300 bg-white/40 text-ink-900 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.78)] hover:-translate-y-0.5 hover:border-gray-500 hover:bg-white hover:text-ink-950",
  "ghost-dark":
    "border border-white/16 bg-white/[0.03] text-paper shadow-[inset_0_1px_0_rgb(255_255_255_/_0.08)] hover:-translate-y-0.5 hover:border-indigo-400/70 hover:bg-white/[0.06]",
};

const sizes = {
  lg: "h-13 px-7 text-[16px]",
  md: "h-11 px-5.5 text-[15px]",
};

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1 ${className}`}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 8h11m0 0L9 3.5M13.5 8 9 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Button({
  href,
  children,
  variant = "primary",
  size = "lg",
  arrow = false,
  className = "",
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {arrow && <ArrowIcon />}
    </a>
  );
}

/** Inline text link with trailing arrow — the "Learn more →" pattern. */
export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-1.5 text-[15px] font-medium text-blue-600 transition-colors duration-200 hover:text-blue-700 hover:underline underline-offset-4 ${className}`}
    >
      {children}
      <ArrowIcon />
    </a>
  );
}
