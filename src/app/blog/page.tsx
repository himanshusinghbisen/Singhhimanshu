import type { Metadata } from "next";
import Link from "next/link";

import { ThemeCompare } from "@/components/theme-compare";
import { profile } from "@/lib/data";
import { formatPostDate, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: `Writing · ${profile.name}`,
  description: `Architecture notes and engineering essays by ${profile.name}.`,
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-parchment text-ink">
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-20">
        <Link
          href="/#writing"
          className="text-sm font-medium text-ink/70 hover:text-navy-link"
        >
          ← Back to journal
        </Link>

        <header className="mt-10 border-b border-rule pb-8">
          <p className="text-xs font-semibold tracking-[0.28em] text-amber-mark uppercase">
            Engineering Journal
          </p>
          <h1 className="font-journal mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Writing
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink/65">
            Long-form notes on healthcare systems, payment integrity, and
            shipping architecture that survives production. This is a preview of
            the blog layout.
          </p>
        </header>

        <ol className="mt-10 divide-y divide-rule">
          {posts.map((post) => (
            <li key={post.slug} className="py-8">
              <article>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <time
                    dateTime={post.date}
                    className="font-mono text-[11px] font-semibold tracking-wide text-ink/65 uppercase"
                  >
                    {formatPostDate(post.date)}
                  </time>
                  <span className="text-[11px] text-amber-mark">
                    {post.readingMinutes} min read
                  </span>
                </div>
                <h2 className="font-journal mt-2 text-2xl font-semibold text-ink">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-navy-link"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-[16px] leading-relaxed text-ink/65">
                  {post.summary}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <li key={tag}>
                      <span className="inline-flex items-center rounded-sm border border-rule bg-parchment-deep/70 px-2.5 py-1 text-xs font-medium text-ink/70">
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
      <ThemeCompare current="journal" />
    </div>
  );
}
