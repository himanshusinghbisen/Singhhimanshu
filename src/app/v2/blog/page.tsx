import type { Metadata } from "next";
import Link from "next/link";

import { ThemeCompare } from "@/components/theme-compare";
import { profile } from "@/lib/data";
import { formatPostDate, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: `Writing · ${profile.name} · Mercury`,
  description: `Architecture notes and engineering essays by ${profile.name}.`,
};

export default function MercuryBlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[#0A0E17] text-[#94A3B8]">
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-20">
        <Link
          href="/v2#writing"
          className="text-sm font-medium text-[#94A3B8] hover:text-[#00D2D3]"
        >
          ← Back to mercury
        </Link>

        <header className="mt-10 border-b border-[#23334D] pb-8">
          <p className="font-mono text-[11px] font-semibold tracking-[0.28em] text-[#00D2D3] uppercase">
            Engineering Journal
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#F1F5F9] sm:text-5xl">
            Writing
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#94A3B8]">
            Same posts as the Journal theme — styled for Mercury. Edit content
            once in <code className="text-[#00D2D3]">src/lib/posts.ts</code>.
          </p>
        </header>

        <ol className="mt-10 divide-y divide-[#23334D]">
          {posts.map((post) => (
            <li key={post.slug} className="py-8">
              <article>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <time
                    dateTime={post.date}
                    className="font-mono text-[11px] font-semibold tracking-wide text-[#94A3B8] uppercase"
                  >
                    {formatPostDate(post.date)}
                  </time>
                  <span className="text-[11px] text-[#00D2D3]">
                    {post.readingMinutes} min read
                  </span>
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-[#F1F5F9]">
                  <Link
                    href={`/v2/blog/${post.slug}`}
                    className="hover:text-[#00D2D3]"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-[16px] leading-relaxed text-[#94A3B8]">
                  {post.summary}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <li key={tag}>
                      <span className="inline-flex items-center rounded-full border border-[#23334D] bg-[#161F30] px-2.5 py-1 font-mono text-[11px] font-medium text-[#00D2D3]">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
      <ThemeCompare current="mercury" />
    </div>
  );
}
