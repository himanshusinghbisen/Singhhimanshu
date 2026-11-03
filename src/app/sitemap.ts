import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/posts";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "", changeFrequency: "monthly" as const, priority: 1 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/writing", changeFrequency: "weekly" as const, priority: 0.9 },
    {
      path: "/writing/healthcare-architecture",
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      path: "/writing/data-science",
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    { path: "/blog", changeFrequency: "weekly" as const, priority: 0.6 },
    { path: "/resume", changeFrequency: "monthly" as const, priority: 0.5 },
  ].map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const journalPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified ?? post.date),
    changeFrequency: "monthly",
    priority: post.slug === "healthcare-payer-business-architecture" ? 0.8 : 0.6,
  }));

  return [...staticRoutes, ...journalPosts];
}
