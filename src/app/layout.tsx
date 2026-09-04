import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { profile } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
      className={`${inter.variable} ${inter.className} dark h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-slate-900 font-sans text-slate-400 selection:bg-teal-300 selection:text-teal-900">
        {children}
      </body>
    </html>
  );
}
