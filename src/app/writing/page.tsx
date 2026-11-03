import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/page-shell";
import { PostList } from "@/components/post-list";
import { postsInSection, writingSections } from "@/lib/writing";

const description =
  "Writing by Himanshu Singh, organized into healthcare systems architecture and data science and engineering.";

export const metadata: Metadata = {
  title: "Writing",
  description,
  alternates: { canonical: "/writing" },
  openGraph: {
    url: "/writing",
    title: "Writing",
    description,
  },
};

export default function WritingPage() {
  return (
    <PageShell
      kicker="Writing"
      title="Writing"
      lede="Healthcare systems architecture and data science are separate sections. Article addresses stay where they are."
    >
      {writingSections.map((section) => (
        <section key={section.id} className="mt-12" aria-labelledby={section.id}>
          <h2
            id={section.id}
            className="font-journal text-3xl font-semibold text-ink"
          >
            <Link href={section.path} className="hover:text-navy-link">
              {section.title}
            </Link>
          </h2>
          <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-ink/70">
            {section.description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {section.topics.map((topic) => (
              <li key={topic}>
                <span className="inline-flex items-center rounded-sm border border-rule bg-parchment-deep/70 px-2.5 py-1 text-xs font-medium text-ink/70">
                  {topic}
                </span>
              </li>
            ))}
          </ul>
          <PostList posts={postsInSection(section.id).slice(0, 3)} heading="h3" />
          <Link
            href={section.path}
            className="font-semibold text-navy-link underline decoration-amber-mark/40 underline-offset-4 hover:decoration-amber-mark"
          >
            All {section.title} notes
          </Link>
        </section>
      ))}

      <p className="mt-14 border-t border-rule pt-8 text-sm text-ink/65">
        Prefer a single date order?{" "}
        <Link href="/blog" className="font-medium text-navy-link">
          Browse the chronological archive
        </Link>
        .
      </p>
    </PageShell>
  );
}
