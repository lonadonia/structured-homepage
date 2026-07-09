"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import Button from "@/components/ui/Button";

const NAV = [
  { href: "#why", label: "Why structure" },
  { href: "#framework", label: "Framework" },
  { href: "#evaluation", label: "Evaluation" },
  { href: "#method", label: "Method" },
];

/**
 * Ink navigation bar: transparent over the hero, solid with a hairline once
 * the page scrolls. The dark bar persists over the light core — the shell
 * remains visible while reading.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile panel is open; close on Escape.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        solid
          ? "border-b border-ink-700 bg-ink-900 shadow-nav"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <div className="container-content flex h-16 items-center justify-between lg:h-18">
        <Logo tone="dark" />

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-gray-400 underline-offset-4 transition-colors duration-200 hover:text-paper hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#cta" size="md" arrow>
            Request evaluation
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-paper lg:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M4 4l12 12M16 4 4 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M2.5 5.5h15m-15 4.5h15m-15 4.5h15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col justify-between overflow-y-auto bg-ink-900 lg:hidden"
        >
          <ul className="container-content flex flex-col pt-6">
            {NAV.map((item, i) => (
              <li key={item.href} className={i > 0 ? "border-t border-ink-700" : ""}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-5 text-h4 text-paper"
                >
                  {item.label}
                  <span className="text-overline-s text-gray-500">
                    0{i + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="container-content border-t border-ink-700 py-6">
            <Button href="#cta" className="w-full" arrow>
              Request an evaluation
            </Button>
            <p className="text-overline-s mt-6 text-center text-gray-500">
              Clarity in structure. Confidence in understanding.
            </p>
          </div>
        </nav>
      )}
    </header>
  );
}
