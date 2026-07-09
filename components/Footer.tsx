import Logo from "@/components/Logo";

const columns = [
  {
    heading: "Product",
    links: ["Framework", "Evaluations", "Insights"],
  },
  {
    heading: "Company",
    links: ["Method", "About", "Contact"],
  },
  {
    heading: "Resources",
    links: ["Documentation", "G-SEO Guide", "Glossary"],
  },
];

/**
 * The deepest surface on the page (ink-950) — the dark shell’s final edge.
 * Structured like everything above it: hairlines, mono overlines, restraint.
 */
export default function Footer() {
  return (
    <footer className="border-t border-ink-700 bg-ink-950 text-paper">
      <div className="container-content">
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-6 lg:py-20">
          <div className="lg:col-span-5">
            <Logo tone="dark" />
            <p className="text-body-s mt-6 max-w-[36ch] text-gray-500">
              The framework for understanding, evaluating, and applying
              structure within generative search and digital information.
            </p>
          </div>
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-6 lg:col-start-7"
          >
            {columns.map((col) => (
              <div key={col.heading}>
                <p className="text-overline-s text-gray-500">{col.heading}</p>
                <ul className="mt-5 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#top"
                        className="text-body-s text-gray-400 underline-offset-4 transition-colors duration-200 hover:text-paper hover:underline"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-ink-700 py-8 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="text-caption text-gray-500">
            © 2026 Structured™. All rights reserved.
          </p>
          <p className="text-overline-s text-gray-600">
            Clarity in structure. Confidence in understanding.
          </p>
        </div>
      </div>
    </footer>
  );
}
