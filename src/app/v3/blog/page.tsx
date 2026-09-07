import type { Metadata } from "next";
import Link from "next/link";

import { StudioNavbar } from "@/components/studio/navbar";
import { profile } from "@/lib/data";
import { formatPostDate, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: `Writing by ${profile.name} on payment integrity, claims systems, and architecture.`,
};

export default function StudioBlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <StudioNavbar active="Blog" />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs font-semibold tracking-[0.24em] text-[#F28C38] uppercase">
          Writing
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">
          Blog
        </h1>
        <p className="mt-4 max-w-2xl text-white/75">
          Notes on healthcare payment integrity, claims platforms, and shipping
          architecture that holds up in production.
        </p>

        <ul className="mt-12 space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/v3/blog/${post.slug}`}
                className="block rounded-2xl border border-white/15 bg-white/8 p-6 transition hover:border-[#F28C38]/50 hover:bg-white/12"
              >
                <p className="text-xs tracking-wide text-white/55 uppercase">
                  {formatPostDate(post.date)} · {post.readingMinutes} min read
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  {post.title}
                </h2>
                <p className="mt-3 text-white/70">{post.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
