import Logo from "@/components/Logo";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Framework", href: "#framework" },
      { label: "Evaluations", href: "#evaluation" },
      { label: "Insights", href: "#map" },
      { label: "Integrations", href: "#framework" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Method", href: "#method" },
      { label: "About", href: "#why" },
      { label: "Careers", href: "#cta" },
      {
        label: "Contact",
        href: "mailto:hello@structured.com?subject=Structured%20inquiry",
      },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "#framework" },
      { label: "G-SEO Guide", href: "#why" },
      { label: "Glossary", href: "#evaluation" },
      { label: "Changelog", href: "#method" },
    ],
  },
];

const legal = ["Privacy Policy", "Terms of Service", "Security"];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 text-paper">
      <div className="container-content">
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Logo tone="dark" />
            <p className="text-body-s mt-6 max-w-[38ch] text-gray-500">
              The framework for understanding, evaluating, and applying
              structure within generative search and digital information.
            </p>
          </div>

          {/* Single column below sm to avoid orphaning the third heading
              in an odd-count 2-col grid; jumps straight to 3-up. */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8 lg:col-span-6 lg:col-start-7"
          >
            {columns.map((col) => (
              <div key={col.heading}>
                <p className="text-overline-s text-gray-500">{col.heading}</p>
                <ul className="mt-6 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-body-s text-gray-400 underline-offset-4 transition-colors duration-200 hover:text-paper hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/10 py-8 lg:flex-row lg:items-baseline lg:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:gap-8">
            <p className="text-caption text-gray-500">
              {"©"} 2026 Structured{"™"}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legal.map((item) => (
                <li key={item}>
                  <a
                    href="#top"
                    className="text-caption text-gray-500 underline-offset-4 transition-colors duration-200 hover:text-paper hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-overline-s text-gray-600">
            Clarity in structure. Confidence in understanding.
          </p>
        </div>
      </div>
    </footer>
  );
}
