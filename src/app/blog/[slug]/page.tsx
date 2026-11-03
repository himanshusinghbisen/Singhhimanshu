import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleJsonLd } from "@/components/article-json-ld";
import { BlogBlocks } from "@/components/blog-blocks";
import { PayerArticleEnhancements } from "@/components/payer-article-enhancements";
import { ThemeCompare } from "@/components/theme-compare";
import { profile } from "@/lib/data";
import { formatPostDate, getAllPosts, getPost, postImage } from "@/lib/posts";
import { sectionForPost } from "@/lib/writing";

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
  if (!post) return { title: "Writing" };

  const url = `/blog/${post.slug}`;
  const title = post.seoTitle ?? post.title;
  const description = post.seoDescription ?? post.summary;
  return {
    title,
    description,
    authors: [{ name: profile.name, url: "/" }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: profile.name,
      publishedTime: post.date,
      modifiedTime: post.dateModified ?? post.date,
      images: [postImage(post)],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [postImage(post)],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const section = sectionForPost(post);

  return (
    <div className="min-h-screen bg-parchment text-ink">
      <ArticleJsonLd post={post} />
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

        {post.slug === "healthcare-payer-business-architecture" ? (
          <PayerArticleEnhancements
            headings={post.body.flatMap((block) =>
              typeof block !== "string" && block.type === "heading" ? [block.text] : [],
            )}
          />
        ) : null}

        <BlogBlocks blocks={post.body} theme="journal" />

        <footer className="mt-14 border-t border-rule pt-8">
          <p className="font-journal text-xl font-semibold text-ink">
            <Link href="/" className="hover:text-navy-link">
              {profile.name}
            </Link>
          </p>
          <p className="mt-1 text-sm text-ink/70">{profile.title}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-ink/70">
            Healthcare architecture and payer technology insights covering claims platforms,
            payment integrity, data integration, and enterprise modernization.
          </p>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex text-sm font-medium text-navy-link underline decoration-amber-mark/40 underline-offset-4 hover:decoration-amber-mark"
          >
            Connect on LinkedIn
          </Link>
          <p className="mt-3 text-sm text-ink/70">
            Filed under{" "}
            <Link href={section.path} className="font-medium text-navy-link">
              {section.title}
            </Link>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link href={section.path} className="font-medium text-navy-link">
              More in this section
            </Link>
            <Link href="/writing" className="font-medium text-ink/70 hover:text-navy-link">
              All writing
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
