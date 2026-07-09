import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Structured™ — Clarity in structure. Confidence in understanding.",
  description:
    "Structured provides the framework for understanding, evaluating, and applying structure within generative search and digital information.",
  openGraph: {
    title: "Structured™",
    description:
      "The framework for understanding, evaluating, and applying structure within generative search and digital information.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-white font-sans text-ink-900 antialiased">
        {/* Marks JS availability before paint so scroll-reveals never hide
            content for no-JS visitors. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        {children}
      </body>
    </html>
  );
}
