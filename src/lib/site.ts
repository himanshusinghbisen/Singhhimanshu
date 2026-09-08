/** Canonical site URL for SEO, sitemap, and structured data. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://singhhimanshu.com";

export const siteName = "Himanshu Singh";

export const seo = {
  title:
    "Himanshu Singh | Software Engineer, Architect & Consultant in Dallas",
  shortTitle: "Himanshu Singh · Healthcare Systems Architect",
  description:
    "Himanshu Singh is a software engineer, systems architect, and technology consultant based in Dallas–Fort Worth, USA. He designs and builds healthcare claims and payment integrity platforms.",
  keywords: [
    "Himanshu Singh",
    "Himanshu Singh USA",
    "Himanshu Singh US",
    "Himanshu Singh United States",
    "Himanshu Singh Dallas",
    "Himanshu Singh Texas",
    "Himanshu Singh software engineer",
    "Himanshu Singh architect",
    "Himanshu Singh consultant",
    "software engineer Dallas",
    "software architect Dallas",
    "technology consultant Dallas",
    "healthcare systems architect",
    "payment integrity architect",
    "claims systems engineer",
    "Himanshu Singh software architect",
    "Himanshu Singh technology consultant",
    "architect consultant Dallas",
    "singhhimanshu.com",
  ],
  roles: [
    "Software Engineer",
    "Software Architect",
    "Systems Architect",
    "Technology Consultant",
    "Healthcare Systems Architect",
    "Senior Developer",
  ],
} as const;
