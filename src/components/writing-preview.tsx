import Link from "next/link";

import { ArrowUpRightIcon } from "@/components/icons";
import { MercuryHeading } from "@/components/mercury/heading";
import { SectionHeading } from "@/components/section-heading";
import { formatPostDate, getAllPosts } from "@/lib/posts";
import { cn } from "@/lib/utils";

type WritingPreviewProps = {
  theme?: "journal" | "mercury";
  basePath?: "/blog" | "/v2/blog";
};

export function WritingPreview({
  theme = "journal",
  basePath = "/blog",
}: WritingPreviewProps) {
  const latest = getAllPosts().slice(0, 3);
  const isMercury = theme === "mercury";

  return (
    <section
      id="writing"
      className={cn(
        "mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24",
        isMercury ? "lg:mb-36" : "lg:mb-32",
      )}
      aria-label="Writing"
    >
      {isMercury ? (
        <MercuryHeading>Writing</MercuryHeading>
      ) : (
        <SectionHeading index="04">Writing</SectionHeading>
      )}

      <p
        className={cn(
          "mb-8 max-w-prose text-[15px] leading-relaxed",
          isMercury ? "text-[#94A3B8]" : "text-ink/60",
        )}
      >
        Notes on claims platforms, payment integrity, and the systems work
        behind recovery. One post source powers both themes.
      </p>

      <ul className={cn(isMercury ? "space-y-5" : "space-y-6")}>
        {latest.map((post) => (
          <li key={post.slug}>
            <article
              className={cn(
                isMercury
                  ? "rounded-xl border border-[#23334D] bg-[#161F30] p-5 transition hover:border-[#00D2D3]/40 sm:p-6"
                  : "border-b border-rule pb-6 last:border-0",
              )}
            >
              {isMercury ? (
                <div className="mb-3 h-px w-10 bg-[#00D2D3]" />
              ) : null}
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <time
                  dateTime={post.date}
                  className={cn(
                    "font-mono text-[11px] font-semibold tracking-wide uppercase",
                    isMercury ? "text-[#94A3B8]" : "text-ink/45",
                  )}
                >
                  {formatPostDate(post.date)}
                </time>
                <span
                  className={cn(
                    "text-[11px]",
                    isMercury ? "text-[#00D2D3]" : "text-amber-mark",
                  )}
                >
                  {post.readingMinutes} min read
                </span>
              </div>
              <h3
                className={cn(
                  "mt-2 font-semibold",
                  isMercury
                    ? "text-[15px] leading-tight text-[#F1F5F9]"
                    : "font-journal text-xl text-ink",
                )}
              >
                <Link
                  href={`${basePath}/${post.slug}`}
                  className={
                    isMercury ? "hover:text-[#00D2D3]" : "hover:text-navy-link"
                  }
                >
                  {post.title}
                </Link>
              </h3>
              <p
                className={cn(
                  "mt-2 text-[15px] leading-relaxed",
                  isMercury ? "text-[#94A3B8]" : "text-ink/65",
                )}
              >
                {post.summary}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Topics">
                {post.tags.map((tag) => (
                  <li key={tag}>
                    <span
                      className={cn(
                        "inline-flex items-center px-2.5 py-1 text-xs font-medium",
                        isMercury
                          ? "rounded-full border border-[#23334D] bg-[#0A0E17] font-mono text-[11px] text-[#00D2D3]"
                          : "rounded-sm border border-rule bg-parchment-deep/70 text-ink/70",
                      )}
                    >
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
          href={basePath}
          className={cn(
            "group inline-flex items-center font-semibold",
            isMercury
              ? "text-[#F1F5F9] hover:text-[#00D2D3]"
              : "text-ink hover:text-navy-link",
          )}
        >
          View all writing
          <ArrowUpRightIcon
            className={cn(
              "ml-1 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
              isMercury ? "text-[#00D2D3]" : "text-amber-mark",
            )}
          />
        </Link>
      </div>
    </section>
  );
}
