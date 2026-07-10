import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/inter-latin-variable.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-inter",
  display: "swap",
});

const plexMono = localFont({
  src: [
    {
      path: "./fonts/ibm-plex-mono-latin-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ibm-plex-mono-latin-500.woff2",
      weight: "500",
      style: "normal",
    },
  ],
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
    <html lang="en" className={`${inter.variable} ${plexMono.variable}`}>
      <body className="bg-ink-950 font-sans text-ink-900 antialiased">
        {children}
      </body>
    </html>
  );
}
