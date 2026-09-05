import Link from "next/link";

import { ArrowUpRightIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { formatPostDate, getAllPosts } from "@/lib/posts";

export function WritingPreview() {
  const latest = getAllPosts().slice(0, 3);

  return (
    <section
      id="writing"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
      aria-label="Writing"
    >
      <SectionHeading index="04">Writing</SectionHeading>
      <p className="mb-8 max-w-prose text-[15px] leading-relaxed text-ink/60">
        Notes on claims platforms, payment integrity, and the systems work
        behind recovery. Preview of how a journal blog would sit on this site.
      </p>
      <ul className="space-y-6">
        {latest.map((post) => (
          <li key={post.slug}>
            <article className="group border-b border-rule pb-6 last:border-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <time
                  dateTime={post.date}
                  className="font-mono text-[11px] font-semibold tracking-wide text-ink/45 uppercase"
                >
                  {formatPostDate(post.date)}
                </time>
                <span className="text-[11px] text-amber-mark">
                  {post.readingMinutes} min read
                </span>
              </div>
              <h3 className="font-journal mt-2 text-xl font-semibold text-ink">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-navy-link"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/65">
                {post.summary}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Topics">
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
      </ul>
      <div className="mt-8">
        <Link
          href="/blog"
          className="group inline-flex items-center font-semibold text-ink hover:text-navy-link"
        >
          View all writing
          <ArrowUpRightIcon className="ml-1 h-4 w-4 text-amber-mark transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
