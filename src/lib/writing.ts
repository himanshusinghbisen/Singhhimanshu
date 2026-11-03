import { getAllPosts, type BlogPost } from "@/lib/posts";

export type WritingSectionId = "healthcare" | "data-science";

const healthcareSlugs = new Set([
  "healthcare-payer-business-architecture",
  "beyond-pay-and-chase-payment-integrity-engine",
  "payment-integrity-architecture-notes",
  "ssis-to-glue-claims-pipelines",
  "togaf-in-payer-engineering",
]);

export const writingSections = [
  {
    id: "healthcare" as const,
    path: "/writing/healthcare-architecture",
    title: "Healthcare Systems Architecture",
    description:
      "Payer business architecture, claims platforms, payment integrity, and the integrations behind healthcare operations.",
    topics: [
      "Payer business architecture",
      "Payer data models",
      "Claims processing",
      "Payment integrity",
      "Healthcare integrations",
    ],
  },
  {
    id: "data-science" as const,
    path: "/writing/data-science",
    title: "Data Science & Engineering",
    description:
      "The data science lifecycle, data collection, machine learning, and the engineering that makes a dataset usable.",
    topics: [
      "Data science lifecycle",
      "Data collection",
      "Machine learning",
      "Data engineering",
    ],
  },
];

export function sectionForPost(post: Pick<BlogPost, "slug">) {
  const id: WritingSectionId = healthcareSlugs.has(post.slug)
    ? "healthcare"
    : "data-science";
  const section = writingSections.find((item) => item.id === id);
  if (!section) throw new Error(`Missing writing section ${id}`);
  return section;
}

export function postsInSection(id: WritingSectionId) {
  return getAllPosts().filter((post) => sectionForPost(post).id === id);
}
