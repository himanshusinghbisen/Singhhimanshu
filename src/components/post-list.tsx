import Link from "next/link";

import { formatPostDate, type BlogPost } from "@/lib/posts";

export function PostList({
  posts,
  heading = "h2",
}: {
  posts: BlogPost[];
  heading?: "h2" | "h3";
}) {
  if (posts.length === 0) {
    return (
      <p className="mt-8 text-[16px] leading-relaxed text-ink/65">
        No articles in this section yet.
      </p>
    );
  }

  return (
    <ol className="mt-8 divide-y divide-rule">
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
            {heading === "h3" ? (
              <h3 className="font-journal mt-2 text-2xl font-semibold text-ink">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-navy-link"
                >
                  {post.title}
                </Link>
              </h3>
            ) : (
              <h2 className="font-journal mt-2 text-2xl font-semibold text-ink">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-navy-link"
                >
                  {post.title}
                </Link>
              </h2>
            )}
            <p className="mt-3 text-[16px] leading-relaxed text-ink/65">
              {post.summary}
            </p>
          </article>
        </li>
      ))}
    </ol>
  );
}
