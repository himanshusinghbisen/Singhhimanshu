import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";

import { JsonLd } from "@/components/json-ld";
import { profile } from "@/lib/data";
import { seo, siteUrl } from "@/lib/site";
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
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: `%s · ${profile.name}`,
  },
  description: seo.description,
  applicationName: `${profile.name} · Engineering Journal`,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  keywords: [...seo.keywords],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: `${profile.name} · Engineering Journal`,
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${sourceSans.variable} ${sourceSans.className} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-parchment font-sans text-ink selection:bg-amber-mark/25 selection:text-ink">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
