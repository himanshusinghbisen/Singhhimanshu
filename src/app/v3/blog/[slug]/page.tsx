import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { StudioNavbar } from "@/components/studio/navbar";
import { profile } from "@/lib/data";
import { formatPostDate, getAllPosts, getPost } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function StudioBlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <StudioNavbar active="Blog" />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Link
          href="/v3/blog"
          className="text-sm font-medium text-white/65 hover:text-[#F28C38]"
        >
          ← Back to blog
        </Link>
        <p className="mt-8 text-xs tracking-wide text-white/55 uppercase">
          {formatPostDate(post.date)} · {post.readingMinutes} min read
        </p>
        <h1 className="mt-3 text-4xl leading-tight font-bold tracking-tight text-white">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-white/70 italic">{post.summary}</p>
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
        <article className="mt-10 space-y-5">
          {post.body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="text-[17px] leading-[1.75] text-white/80"
            >
              {paragraph}
            </p>
          ))}
        </article>
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xl font-semibold text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-white/65">{profile.title}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <Link href="/v3/blog" className="text-[#F28C38] hover:text-[#ff9a4a]">
              More writing
            </Link>
            <Link
              href="/v3/experience"
              className="text-white/70 hover:text-white"
            >
              Experience
            </Link>
            <Link href="/v3" className="text-white/70 hover:text-white">
              Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
