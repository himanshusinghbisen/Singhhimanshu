import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/posts";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/resume",
    "/blog",
    "/v2",
    "/v2/resume",
    "/v2/blog",
    "/v3",
    "/v3/experience",
    "/v3/about",
    "/v3/blog",
    "/v3/resume",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" || path === "/v3" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/v3") ? 0.65 : 0.7,
  }));

  const journalPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const mercuryPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/v2/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const studioPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/v3/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.55,
  }));

  return [...staticRoutes, ...journalPosts, ...mercuryPosts, ...studioPosts];
}
