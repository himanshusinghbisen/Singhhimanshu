import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ThemeCompare } from "@/components/theme-compare";
import { profile } from "@/lib/data";
import { formatPostDate, getAllPosts, getPost } from "@/lib/posts";

type MercuryBlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: MercuryBlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: `Writing · ${profile.name} · Mercury` };
  return {
    title: `${post.title} · ${profile.name} · Mercury`,
    description: post.summary,
  };
}

export default async function MercuryBlogPostPage({
  params,
}: MercuryBlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#0A0E17] text-[#94A3B8]">
      <article className="mx-auto max-w-2xl px-6 py-12 md:py-20">
        <Link
          href="/v2/blog"
          className="text-sm font-medium text-[#94A3B8] hover:text-[#00D2D3]"
        >
          ← All writing
        </Link>

        <header className="mt-10 border-b border-[#23334D] pb-8">
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
          <h1 className="mt-4 text-4xl leading-tight font-bold tracking-tight text-[#F1F5F9] sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[#94A3B8] italic">
            {post.summary}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <li key={tag}>
                <span className="inline-flex items-center rounded-full border border-[#23334D] bg-[#161F30] px-2.5 py-1 font-mono text-[11px] font-medium text-[#00D2D3]">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        </header>

        <div className="mt-10 space-y-6">
          {post.body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="text-[17px] leading-[1.75] text-[#94A3B8]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <footer className="mt-14 border-t border-[#23334D] pt-8">
          <p className="text-xl font-semibold text-[#F1F5F9]">{profile.name}</p>
          <p className="mt-1 text-sm text-[#94A3B8]">{profile.title}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link href="/v2/blog" className="font-medium text-[#00D2D3]">
              More writing
            </Link>
            <Link
              href="/v2#writing"
              className="font-medium text-[#94A3B8] hover:text-[#00D2D3]"
            >
              Back to home
            </Link>
            <Link
              href={`/blog/${post.slug}`}
              className="font-medium text-[#94A3B8] hover:text-[#00D2D3]"
            >
              View in Journal theme
            </Link>
          </div>
        </footer>
      </article>
      <ThemeCompare current="mercury" />
    </div>
  );
}
