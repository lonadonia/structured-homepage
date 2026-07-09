"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms (kept on the 80ms rhythm at call sites). */
  delay?: number;
  className?: string;
};

/**
 * Scroll reveal: opacity 0→1 + translateY 12px→0, 600ms, once per element
 * (tokens: motion.patterns.scroll-reveal). The hidden state lives in CSS
 * under `html.js`, so content is fully visible when JS is unavailable.
 * `prefers-reduced-motion` collapses it to an opacity fade via CSS.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Anything already in the viewport at hydration reveals immediately —
    // above-the-fold content must never wait on an observer tick.
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
