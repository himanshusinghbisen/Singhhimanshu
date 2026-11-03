/** Canonical site URL for SEO, sitemap, and structured data. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://singhhimanshu.com";

export const siteName = "Himanshu Singh";

export const seo = {
  title: "Himanshu Singh | Healthcare Systems Architect",
  shortTitle: "Himanshu Singh | Healthcare Systems Architect",
  description:
    "Himanshu Singh is a Healthcare Systems Architect specializing in healthcare payer platforms, claims processing, payment integrity, claims recovery, and enterprise technology modernization.",
  openGraphDescription:
    "Healthcare payer architecture, claims platforms, payment integrity, and enterprise technology.",
  twitterDescription:
    "Healthcare payer architecture, claims platforms, and payment integrity.",
  keywords: [
    "Himanshu Singh",
    "Himanshu Singh Healthcare Systems Architect",
    "Healthcare Systems Architect",
    "healthcare payer architecture",
    "payer platforms",
    "claims processing",
    "payment integrity",
    "enterprise architecture",
    "healthcare technology",
    "Himanshu Singh Dallas",
    "singhhimanshu.com",
  ],
  roles: [
    "Healthcare Systems Architect",
    "Technology Consultant",
    "Software Architect",
    "Software Engineer",
  ],
} as const;
