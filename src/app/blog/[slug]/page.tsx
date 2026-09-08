import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlogBlocks } from "@/components/blog-blocks";
import { ThemeCompare } from "@/components/theme-compare";
import { profile } from "@/lib/data";
import { formatPostDate, getAllPosts, getPost } from "@/lib/posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: `Writing · ${profile.name}` };

  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.summary,
      siteName: profile.name,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-parchment text-ink">
      <article className="mx-auto max-w-2xl px-6 py-12 md:py-20">
        <Link
          href="/blog"
          className="text-sm font-medium text-ink/70 hover:text-navy-link"
        >
          ← All writing
        </Link>

        <header className="mt-10 border-b border-rule pb-8">
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
          <h1 className="font-journal mt-4 text-4xl leading-tight font-semibold tracking-tight text-ink sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink/70 italic">
            {post.summary}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <li key={tag}>
                <span className="inline-flex items-center rounded-sm border border-rule bg-parchment-deep/70 px-2.5 py-1 text-xs font-medium text-ink/70">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        </header>

        <BlogBlocks blocks={post.body} theme="journal" />

        <footer className="mt-14 border-t border-rule pt-8">
          <p className="font-journal text-xl font-semibold text-ink">
            {profile.name}
          </p>
          <p className="mt-1 text-sm text-ink/70">{profile.title}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link href="/blog" className="font-medium text-navy-link">
              More writing
            </Link>
            <Link href="/#writing" className="font-medium text-ink/70 hover:text-navy-link">
              Back to home
            </Link>
            <Link
              href={`/v2/blog/${post.slug}`}
              className="font-medium text-ink/70 hover:text-navy-link"
            >
              View in Mercury theme
            </Link>
          </div>
        </footer>
      </article>
      <ThemeCompare current="journal" />
    </div>
  );
}
