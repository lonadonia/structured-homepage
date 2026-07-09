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
  title: "Structured\u2122 - Clarity in structure. Confidence in understanding.",
  description:
    "Structured provides the framework for understanding, evaluating, and applying structure within generative search and digital information.",
  icons: {
    icon: "/brand/icon.png",
    apple: "/brand/icon.png",
  },
  openGraph: {
    title: "Structured\u2122",
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
      <body className="bg-ink-950 font-sans text-ink-900 antialiased">
        {children}
      </body>
    </html>
  );
}
