import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";

import { profile } from "@/lib/data";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.title}`,
  description: profile.tagline,
  authors: [{ name: profile.name, url: profile.linkedin }],
  openGraph: {
    title: `${profile.name} · ${profile.title}`,
    description: profile.tagline,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · ${profile.title}`,
    description: profile.tagline,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${sourceSans.variable} ${sourceSans.className} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-parchment font-sans text-ink selection:bg-amber-mark/25 selection:text-ink">
        {children}
      </body>
    </html>
  );
}
