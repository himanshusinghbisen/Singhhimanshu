/** Canonical site URL for SEO, sitemap, and structured data. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://singhhimanshu.com";

export const siteName = "Himanshu Singh";

export const seo = {
  title:
    "Himanshu Singh | Software Engineer, Architect & Consultant in Dallas (from Gorakhpur)",
  shortTitle: "Himanshu Singh · Healthcare Systems Architect",
  description:
    "Himanshu Singh is a software engineer, systems architect, and technology consultant based in Dallas–Fort Worth, originally from Gorakhpur, India. He designs and builds healthcare claims and payment integrity platforms.",
  keywords: [
    "Himanshu Singh",
    "Himanshu Singh Gorakhpur",
    "Himanshu Singh Dallas",
    "Himanshu Singh software engineer",
    "Himanshu Singh architect",
    "Himanshu Singh consultant",
    "software engineer Dallas",
    "software architect Dallas",
    "technology consultant Dallas",
    "healthcare systems architect",
    "payment integrity architect",
    "claims systems engineer",
    "Gorakhpur software engineer",
    "Himanshu Singh software architect",
    "Himanshu Singh technology consultant",
    "software engineer Gorakhpur Dallas",
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
